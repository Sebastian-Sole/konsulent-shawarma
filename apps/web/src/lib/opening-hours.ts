/**
 * Opening hours parser supporting two formats:
 * - OSM: "Mo-Sa 15:00-23:00; Su 14:00-22:00"
 * - Google: "Monday: 3:00 – 9:30 PM; Tuesday: Closed; ..."
 */

type TimeRange = { open: number; close: number }; // minutes since midnight
type DaySchedule = TimeRange[] | "closed";
type WeekSchedule = Map<number, DaySchedule>; // 0=Sunday .. 6=Saturday

const cache = new Map<string, WeekSchedule | null>();

const OSM_DAY_MAP: Record<string, number> = {
	Mo: 1,
	Tu: 2,
	We: 3,
	Th: 4,
	Fr: 5,
	Sa: 6,
	Su: 0,
};

const GOOGLE_DAY_MAP: Record<string, number> = {
	Monday: 1,
	Tuesday: 2,
	Wednesday: 3,
	Thursday: 4,
	Friday: 5,
	Saturday: 6,
	Sunday: 0,
};

function parseHHMM(s: string): number {
	const [h, m] = s.split(":").map(Number);
	return h * 60 + (m || 0);
}

/** Parse Google 12h time like "3:00 PM" or "12:00 AM" */
function parseGoogle12h(time: string, ampm: string): number {
	const [h, m] = time.split(":").map(Number);
	const isPM = ampm.toUpperCase() === "PM";
	let hours = h;
	if (hours === 12) hours = isPM ? 12 : 0;
	else if (isPM) hours += 12;
	return hours * 60 + (m || 0);
}

function expandDayRange(rangeStr: string): number[] {
	const keys = Object.keys(OSM_DAY_MAP);
	if (rangeStr.includes("-")) {
		const [startStr, endStr] = rangeStr.split("-");
		const startIdx = keys.indexOf(startStr);
		const endIdx = keys.indexOf(endStr);
		if (startIdx === -1 || endIdx === -1) return [];
		const days: number[] = [];
		if (startIdx <= endIdx) {
			for (let i = startIdx; i <= endIdx; i++)
				days.push(OSM_DAY_MAP[keys[i]]);
		} else {
			// wrap around: e.g. Fr-Mo
			for (let i = startIdx; i < keys.length; i++)
				days.push(OSM_DAY_MAP[keys[i]]);
			for (let i = 0; i <= endIdx; i++) days.push(OSM_DAY_MAP[keys[i]]);
		}
		return days;
	}
	// Comma-separated: "Mo,We,Fr"
	return rangeStr.split(",").map((d) => OSM_DAY_MAP[d]).filter((d) => d !== undefined);
}

function parseOSM(raw: string): WeekSchedule | null {
	const schedule: WeekSchedule = new Map();
	const rules = raw.split(";").map((s) => s.trim());

	for (const rule of rules) {
		if (!rule) continue;

		// Handle "off" rules like "Su off"
		const offMatch = rule.match(/^([A-Za-z,\-]+)\s+off$/i);
		if (offMatch) {
			const days = expandDayRange(offMatch[1]);
			for (const d of days) schedule.set(d, "closed");
			continue;
		}

		// Match patterns like "Mo-Sa 15:00-23:00" or "Mo 11:00-14:00,17:00-23:00"
		const match = rule.match(/^([A-Za-z,\-]+)\s+(.+)$/);
		if (!match) {
			// Could be just a time range applying to all days: "11:00-23:00"
			const timeMatch = rule.match(/^(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/);
			if (timeMatch) {
				const range: TimeRange = {
					open: parseHHMM(timeMatch[1]),
					close: parseHHMM(timeMatch[2]),
				};
				for (let d = 0; d < 7; d++) {
					schedule.set(d, [range]);
				}
				continue;
			}
			return null;
		}

		const days = expandDayRange(match[1]);
		if (days.length === 0) return null;

		const timesPart = match[2];
		const timeRanges: TimeRange[] = [];

		for (const tp of timesPart.split(",")) {
			const tm = tp.trim().match(/^(\d{1,2}:\d{2})-(\d{1,2}:\d{2})$/);
			if (!tm) return null;
			timeRanges.push({
				open: parseHHMM(tm[1]),
				close: parseHHMM(tm[2]),
			});
		}

		for (const d of days) {
			const existing = schedule.get(d);
			if (Array.isArray(existing)) {
				schedule.set(d, [...existing, ...timeRanges]);
			} else {
				schedule.set(d, timeRanges);
			}
		}
	}

	return schedule.size > 0 ? schedule : null;
}

function parseGoogle(raw: string): WeekSchedule | null {
	const schedule: WeekSchedule = new Map();
	const entries = raw.split(";").map((s) => s.trim());

	for (const entry of entries) {
		if (!entry) continue;

		const colonIdx = entry.indexOf(":");
		if (colonIdx === -1) return null;

		const dayName = entry.substring(0, colonIdx).trim();
		const dayNum = GOOGLE_DAY_MAP[dayName];
		if (dayNum === undefined) return null;

		const rest = entry.substring(colonIdx + 1).trim();

		if (rest.toLowerCase() === "closed") {
			schedule.set(dayNum, "closed");
			continue;
		}

		// Handle "Open 24 hours"
		if (rest.toLowerCase().includes("open 24 hours")) {
			schedule.set(dayNum, [{ open: 0, close: 24 * 60 }]);
			continue;
		}

		// Parse time ranges like "3:00 – 9:30 PM" or "11:00 AM – 2:00 PM, 5:00 – 9:30 PM"
		const ranges: TimeRange[] = [];
		const rangeParts = rest.split(",").map((s) => s.trim());

		for (const part of rangeParts) {
			// Match: "3:00 – 9:30 PM" or "11:00 AM – 2:00 PM" or "3:00\u2009–\u20099:30 PM"
			const m = part.match(
				/(\d{1,2}:\d{2})\s*(?:AM|PM)?\s*[–\-]\s*(\d{1,2}:\d{2})\s*(AM|PM)/i,
			);
			if (!m) return null;

			const closeMinutes = parseGoogle12h(m[2], m[3]);

			// Determine AM/PM for open time
			// If there's an explicit AM/PM after the open time, use it
			const openAmPm = part.match(
				/(\d{1,2}:\d{2})\s*(AM|PM)/i,
			);
			let openMinutes: number;
			if (openAmPm && openAmPm[2] && part.indexOf(openAmPm[0]) < part.indexOf("–") && part.indexOf(openAmPm[0]) < part.indexOf("-")) {
				openMinutes = parseGoogle12h(m[1], openAmPm[2]);
			} else {
				// No explicit AM/PM on open time - infer from close time's AM/PM
				// If close is PM, open is likely PM too (unless open hour > close hour)
				openMinutes = parseGoogle12h(m[1], m[3]);
				// But if that makes open > close, try the other period
				if (openMinutes > closeMinutes) {
					const otherPeriod = m[3].toUpperCase() === "PM" ? "AM" : "PM";
					openMinutes = parseGoogle12h(m[1], otherPeriod);
				}
			}

			ranges.push({ open: openMinutes, close: closeMinutes });
		}

		schedule.set(dayNum, ranges.length > 0 ? ranges : "closed");
	}

	return schedule.size > 0 ? schedule : null;
}

function detectAndParse(raw: string): WeekSchedule | null {
	if (cache.has(raw)) return cache.get(raw)!;

	let result: WeekSchedule | null = null;

	// Google format always starts with a day name followed by colon
	if (/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday):/.test(raw)) {
		result = parseGoogle(raw);
	} else {
		result = parseOSM(raw);
	}

	cache.set(raw, result);
	return result;
}

/**
 * Returns true if the place is currently open, false if closed, null if unparseable.
 */
export function isOpenNow(raw: string, now?: Date): boolean | null {
	const schedule = detectAndParse(raw);
	if (!schedule) return null;

	const d = now ?? new Date();
	const dayOfWeek = d.getDay(); // 0=Sunday
	const currentMinutes = d.getHours() * 60 + d.getMinutes();

	const todaySchedule = schedule.get(dayOfWeek);
	if (!todaySchedule) return null;
	if (todaySchedule === "closed") return false;

	for (const range of todaySchedule) {
		if (range.close <= range.open) {
			// After-midnight closing: open from open..midnight or midnight..close
			if (currentMinutes >= range.open || currentMinutes < range.close) {
				return true;
			}
		} else {
			if (currentMinutes >= range.open && currentMinutes < range.close) {
				return true;
			}
		}
	}

	// Also check yesterday's schedule for after-midnight ranges
	const yesterday = (dayOfWeek + 6) % 7;
	const yesterdaySchedule = schedule.get(yesterday);
	if (yesterdaySchedule && yesterdaySchedule !== "closed") {
		for (const range of yesterdaySchedule) {
			if (range.close <= range.open) {
				// This range wraps past midnight into today
				if (currentMinutes < range.close) {
					return true;
				}
			}
		}
	}

	return false;
}

function formatMinutes(m: number): string {
	const h = Math.floor(m / 60) % 24;
	const min = m % 60;
	return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}

/**
 * Returns today's hours as a human-readable string, e.g. "15:00–23:00" or "Stengt".
 * Returns null if unparseable.
 */
export function getTodayHours(raw: string, now?: Date): string | null {
	const schedule = detectAndParse(raw);
	if (!schedule) return null;

	const d = now ?? new Date();
	const dayOfWeek = d.getDay();

	const todaySchedule = schedule.get(dayOfWeek);
	if (!todaySchedule) return null;
	if (todaySchedule === "closed") return "Stengt";

	return todaySchedule
		.map((r) => `${formatMinutes(r.open)}\u2013${formatMinutes(r.close)}`)
		.join(", ");
}
