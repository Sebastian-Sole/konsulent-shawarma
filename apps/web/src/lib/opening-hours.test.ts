import { describe, it, expect } from "vitest";
import { isOpenNow, getTodayHours } from "./opening-hours";

// Helper: create a Date for a specific day/time
// day: 0=Sunday .. 6=Saturday
function makeDate(day: number, hours: number, minutes: number): Date {
	// Jan 2024: Mon=1, Tue=2 ... Sun=7 Jan
	// Jan 1 2024 = Monday (day 1)
	// So Sunday=7, Monday=1, Tuesday=2 ...
	const dayOffsets: Record<number, number> = {
		0: 7, // Sunday = Jan 7
		1: 1, // Monday = Jan 1
		2: 2,
		3: 3,
		4: 4,
		5: 5,
		6: 6,
	};
	const d = new Date(2024, 0, dayOffsets[day], hours, minutes, 0, 0);
	return d;
}

describe("OSM format", () => {
	it("parses simple day range", () => {
		const raw = "Mo-Sa 15:00-23:00; Su 14:00-22:00";

		// Monday 16:00 -> open
		expect(isOpenNow(raw, makeDate(1, 16, 0))).toBe(true);
		// Monday 14:00 -> closed (opens at 15)
		expect(isOpenNow(raw, makeDate(1, 14, 0))).toBe(false);
		// Sunday 14:30 -> open
		expect(isOpenNow(raw, makeDate(0, 14, 30))).toBe(true);
		// Sunday 22:30 -> closed
		expect(isOpenNow(raw, makeDate(0, 22, 30))).toBe(false);
	});

	it("parses after-midnight closing", () => {
		const raw = "Mo-Su 18:00-02:00";

		// Monday 23:00 -> open
		expect(isOpenNow(raw, makeDate(1, 23, 0))).toBe(true);
		// Tuesday 01:00 -> open (still open from Monday)
		expect(isOpenNow(raw, makeDate(2, 1, 0))).toBe(true);
		// Tuesday 03:00 -> closed
		expect(isOpenNow(raw, makeDate(2, 3, 0))).toBe(false);
	});

	it("parses split hours with comma", () => {
		const raw = "Mo-Fr 11:00-14:00,17:00-23:00";

		// Monday 12:00 -> open
		expect(isOpenNow(raw, makeDate(1, 12, 0))).toBe(true);
		// Monday 15:00 -> closed
		expect(isOpenNow(raw, makeDate(1, 15, 0))).toBe(false);
		// Monday 20:00 -> open
		expect(isOpenNow(raw, makeDate(1, 20, 0))).toBe(true);
	});

	it("handles off days", () => {
		const raw = "Mo-Sa 11:00-22:00; Su off";
		expect(isOpenNow(raw, makeDate(0, 12, 0))).toBe(false);
		expect(getTodayHours(raw, makeDate(0, 12, 0))).toBe("Stengt");
	});

	it("returns today hours formatted", () => {
		const raw = "Mo-Sa 15:00-23:00; Su 14:00-22:00";
		expect(getTodayHours(raw, makeDate(1, 12, 0))).toBe("15:00\u201323:00");
		expect(getTodayHours(raw, makeDate(0, 12, 0))).toBe("14:00\u201322:00");
	});

	it("returns today hours for split schedule", () => {
		const raw = "Mo-Fr 11:00-14:00,17:00-23:00";
		expect(getTodayHours(raw, makeDate(1, 12, 0))).toBe(
			"11:00\u201314:00, 17:00\u201323:00",
		);
	});
});

describe("Google format", () => {
	it("parses Google format with PM times", () => {
		const raw =
			"Monday: Closed; Tuesday: 3:00 – 9:30 PM; Wednesday: 3:00 – 9:30 PM; Thursday: 3:00 – 9:30 PM; Friday: 3:00 – 9:30 PM; Saturday: 1:00 – 9:30 PM; Sunday: 1:00 – 9:00 PM";

		// Monday -> closed
		expect(isOpenNow(raw, makeDate(1, 16, 0))).toBe(false);
		expect(getTodayHours(raw, makeDate(1, 12, 0))).toBe("Stengt");

		// Tuesday 4 PM -> open
		expect(isOpenNow(raw, makeDate(2, 16, 0))).toBe(true);
		// Tuesday 2 PM -> closed (opens at 3 PM)
		expect(isOpenNow(raw, makeDate(2, 14, 0))).toBe(false);

		// Saturday 1:30 PM -> open
		expect(isOpenNow(raw, makeDate(6, 13, 30))).toBe(true);
	});

	it("parses Google format with AM/PM on both times", () => {
		const raw =
			"Monday: 11:00 AM – 2:00 PM; Tuesday: 11:00 AM – 2:00 PM; Wednesday: 11:00 AM – 2:00 PM; Thursday: 11:00 AM – 2:00 PM; Friday: 11:00 AM – 2:00 PM; Saturday: Closed; Sunday: Closed";

		// Monday 12:00 -> open
		expect(isOpenNow(raw, makeDate(1, 12, 0))).toBe(true);
		// Monday 15:00 -> closed
		expect(isOpenNow(raw, makeDate(1, 15, 0))).toBe(false);
		// Saturday -> closed
		expect(isOpenNow(raw, makeDate(6, 12, 0))).toBe(false);
	});

	it("parses Open 24 hours", () => {
		const raw =
			"Monday: Open 24 hours; Tuesday: Open 24 hours; Wednesday: Open 24 hours; Thursday: Open 24 hours; Friday: Open 24 hours; Saturday: Open 24 hours; Sunday: Open 24 hours";

		expect(isOpenNow(raw, makeDate(3, 3, 0))).toBe(true);
		expect(getTodayHours(raw, makeDate(3, 3, 0))).toBe("00:00\u201300:00");
	});

	it("returns today hours in 24h format", () => {
		const raw =
			"Monday: 3:00 – 9:30 PM; Tuesday: 3:00 – 9:30 PM; Wednesday: 3:00 – 9:30 PM; Thursday: 3:00 – 9:30 PM; Friday: 3:00 – 9:30 PM; Saturday: 1:00 – 9:30 PM; Sunday: 1:00 – 9:00 PM";

		expect(getTodayHours(raw, makeDate(2, 12, 0))).toBe("15:00\u201321:30");
		expect(getTodayHours(raw, makeDate(6, 12, 0))).toBe("13:00\u201321:30");
	});
});

describe("edge cases", () => {
	it("returns null for empty string", () => {
		expect(isOpenNow("")).toBe(null);
		expect(getTodayHours("")).toBe(null);
	});

	it("returns null for unparseable string", () => {
		expect(isOpenNow("not valid")).toBe(null);
		expect(getTodayHours("not valid")).toBe(null);
	});

	it("returns null for day not in schedule", () => {
		// Only Mo-Fr defined, asking about Saturday
		const raw = "Mo-Fr 11:00-22:00";
		expect(isOpenNow(raw, makeDate(6, 12, 0))).toBe(null);
		expect(getTodayHours(raw, makeDate(6, 12, 0))).toBe(null);
	});
});
