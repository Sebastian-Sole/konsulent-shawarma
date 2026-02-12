export type CuisineCategory = {
  label: string;
  cuisines: string[];
  /** Soft bg tint (-100) — passes 4.5:1 with text */
  color: string;
  /** Dark text (-800) — passes 4.5:1 on color */
  text: string;
  /** Border (-600) — passes 3:1 vs white (WCAG 1.4.11) */
  border: string;
};

export const CUISINE_CATEGORIES: Record<string, CuisineCategory> = {
  kebab_midtosten: {
    label: "Kebab & Midtøsten",
    cuisines: [
      "kebab",
      "shawarma",
      "middle_eastern",
      "arab",
      "gyro",
      "doner",
      "falafel",
      "turkish",
      "lebanese",
      "syrian",
      "palestinian",
      "persian",
    ],
    color: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-600",
  },
  pizza_pasta: {
    label: "Pizza & Pasta",
    cuisines: ["pizza", "italian", "italian_pizza", "pasta"],
    color: "bg-red-100",
    text: "text-red-800",
    border: "border-red-600",
  },
  asian: {
    label: "Asiatisk",
    cuisines: [
      "asian",
      "asian_fusion",
      "chinese",
      "japanese",
      "korean",
      "thai",
      "vietnamese",
      "indonesian",
      "filipino",
      "indian",
      "nepalese",
      "pakistani",
      "ramen",
      "noodle",
      "sushi",
      "udon",
    ],
    color: "bg-emerald-100",
    text: "text-emerald-800",
    border: "border-emerald-600",
  },
  burger_grill: {
    label: "Burger & Grill",
    cuisines: [
      "burger",
      "hamburger",
      "american",
      "fast_food",
      "fried_chicken",
      "chicken",
      "grill",
      "barbecue",
      "steak",
      "steak_house",
      "meat",
      "sausage",
    ],
    color: "bg-amber-100",
    text: "text-amber-800",
    border: "border-amber-600",
  },
  seafood: {
    label: "Sjømat",
    cuisines: ["seafood", "fish", "fish_and_chips"],
    color: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-600",
  },
  mexican: {
    label: "Mexikansk",
    cuisines: [
      "mexican",
      "tex-mex",
      "tacos",
      "peruvian",
      "colombian",
      "caribbean",
    ],
    color: "bg-lime-100",
    text: "text-lime-800",
    border: "border-lime-600",
  },
  nordic_european: {
    label: "Europeisk",
    cuisines: [
      "nordic",
      "norwegian",
      "scandinavian",
      "european",
      "french",
      "spanish",
      "basque",
      "polish",
      "balkan",
      "regional",
      "local",
      "mediterranean",
      "bistro",
      "gastronomical",
      "gastropub",
    ],
    color: "bg-indigo-100",
    text: "text-indigo-800",
    border: "border-indigo-600",
  },
  cafe_drinks: {
    label: "Cafe & Drikke",
    cuisines: [
      "coffee",
      "coffee_shop",
      "kaffe",
      "tea",
      "bubble_tea",
      "juice",
      "wine",
    ],
    color: "bg-stone-100",
    text: "text-stone-800",
    border: "border-stone-600",
  },
  bakery_dessert: {
    label: "Bakeri & Dessert",
    cuisines: ["cake", "confectionery", "dessert", "bagel"],
    color: "bg-pink-100",
    text: "text-pink-800",
    border: "border-pink-600",
  },
  salad_light: {
    label: "Salat & Sandwich",
    cuisines: ["sandwich", "salad", "soup", "toast"],
    color: "bg-teal-100",
    text: "text-teal-800",
    border: "border-teal-600",
  },
  other: {
    label: "Annet",
    cuisines: ["buffet", "hawaiian", "international", "african", "ethiopian"],
    color: "bg-slate-100",
    text: "text-slate-700",
    border: "border-slate-600",
  },
};

export const CATEGORY_KEYS = Object.keys(CUISINE_CATEGORIES);

export const DEFAULT_CATEGORIES = new Set(["kebab_midtosten"]);

// Reverse lookup: cuisine string -> category key
const cuisineToCategoryMap = new Map<string, string>();
for (const [key, cat] of Object.entries(CUISINE_CATEGORIES)) {
  for (const cuisine of cat.cuisines) {
    if (!cuisineToCategoryMap.has(cuisine)) {
      cuisineToCategoryMap.set(cuisine, key);
    }
  }
}

/** Returns the category key for a place based on its cuisines. */
export function getCategoryForPlace(cuisines: string[]): string {
  for (const c of cuisines) {
    const cat = cuisineToCategoryMap.get(c);
    if (cat) return cat;
  }
  return "other";
}

/** Returns the full category for a place based on its cuisines. */
export function getPlaceCategory(cuisines: string[]): CuisineCategory {
  const key = getCategoryForPlace(cuisines);
  return CUISINE_CATEGORIES[key] ?? CUISINE_CATEGORIES.other;
}

/** Expands a set of category keys into the full set of cuisine strings. */
export function categoriesToCuisines(categories: Set<string>): Set<string> {
  const cuisines = new Set<string>();
  for (const key of categories) {
    const cat = CUISINE_CATEGORIES[key];
    if (cat) {
      for (const c of cat.cuisines) {
        cuisines.add(c);
      }
    }
  }
  return cuisines;
}
