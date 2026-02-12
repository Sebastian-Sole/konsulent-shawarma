export type ShawarmaPlace = {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
	cuisines: string[];
	openingHours?: string;
	googleRating?: number;
	googleRatingCount?: number;
};

export const DEFAULT_CUISINES = ["kebab", "shawarma", "middle_eastern", "arab", "gyro"];

export const allCuisines: string[] = ["african","american","arab","asian","asian_fusion","bagel","balkan","barbecue","basque","bistro","bubble_tea","buffet","burger","cake","caribbean","chicken","chinese","coffee","coffee_shop","colombian","confectionery","dessert","doner","ethiopian","european","falafel","fast_food","filipino","fish","fish_and_chips","french","fried_chicken","grill","gyro","hamburger","hawaiian","indian","indonesian","international","italian","italian_pizza","japanese","juice","kaffe","kebab","korean","lebanese","local","meat","mediterranean","mexican","middle_eastern","nepalese","noodle","nordic","norwegian","pakistani","palestinian","pasta","persian","peruvian","pizza","polish","ramen","regional","salad","sandwich","sausage","scandinavian","seafood","shawarma","soup","spanish","steak","steak_house","sushi","syrian","tacos","tapas","tea","tex-mex","thai","toast","turkish","udon","vietnamese","wine"];

export const shawarmaPlaces: ShawarmaPlace[] = [
	{
		"id": "osm-1694618857",
		"name": "175°C K-fried",
		"address": "Oslo",
		"latitude": 59.9225728,
		"longitude": 10.7519233,
		"cuisines": [
			"fried_chicken"
		],
		"googleRating": 4.8,
		"googleRatingCount": 518,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 9:30 PM; Wednesday: 3:00 – 9:30 PM; Thursday: 3:00 – 9:30 PM; Friday: 3:00 – 9:30 PM; Saturday: 1:00 – 9:30 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-973863775",
		"name": "1947 Gandhi",
		"address": "Oslo",
		"latitude": 59.9283103,
		"longitude": 10.7153657,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 15:00-23:00; Su 14:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 508
	},
	{
		"id": "osm-9154065119",
		"name": "8 Fish Sushi",
		"address": "Oslo",
		"latitude": 59.92743,
		"longitude": 10.794023,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.6,
		"googleRatingCount": 110,
		"openingHours": "Monday: 1:00 – 8:00 PM; Tuesday: 1:00 – 8:00 PM; Wednesday: 1:00 – 8:00 PM; Thursday: 1:00 – 8:00 PM; Friday: 1:00 – 8:00 PM; Saturday: 1:00 – 8:00 PM; Sunday: 3:00 – 8:00 PM"
	},
	{
		"id": "osm-26380802",
		"name": "Abelone Kjøkken & Bar",
		"address": "Oslo",
		"latitude": 59.91384,
		"longitude": 10.756428,
		"cuisines": [
			"turkish"
		],
		"openingHours": "Mo-Sa 10:00-01:00, Su 12:00-24:00",
		"googleRating": 4.2,
		"googleRatingCount": 159
	},
	{
		"id": "osm-12645595683",
		"name": "Adriatic Café",
		"address": "Oslo",
		"latitude": 59.9236969,
		"longitude": 10.7648826,
		"cuisines": [
			"balkan"
		],
		"googleRating": 4.6,
		"googleRatingCount": 880,
		"openingHours": "Monday: 10:00 AM – 9:00 PM; Tuesday: 10:00 AM – 9:00 PM; Wednesday: 10:00 AM – 9:00 PM; Thursday: 10:00 AM – 9:00 PM; Friday: 10:00 AM – 9:00 PM; Saturday: 10:00 AM – 9:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-5094785552",
		"name": "Aften Pizza",
		"address": "Oslo",
		"latitude": 59.9150841,
		"longitude": 10.7545769,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.2,
		"googleRatingCount": 399,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-11802372432",
		"name": "Akka",
		"address": "Oslo",
		"latitude": 59.923778,
		"longitude": 10.7253586,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.6,
		"googleRatingCount": 191
	},
	{
		"id": "osm-2181335078",
		"name": "Albertine Indisk Tandoori",
		"address": "Oslo",
		"latitude": 59.922396,
		"longitude": 10.739063,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo,Tu 14:00-23:00; We-Sa 12:00-23:00",
		"googleRating": 4.5,
		"googleRatingCount": 325
	},
	{
		"id": "osm-12912071801",
		"name": "Albertino Sandwich",
		"address": "Oslo",
		"latitude": 59.9451498,
		"longitude": 10.7719988,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Sa 10:00-19:00",
		"googleRating": 5,
		"googleRatingCount": 73
	},
	{
		"id": "osm-1137765624",
		"name": "Alex Sushi",
		"address": "Oslo",
		"latitude": 59.914676,
		"longitude": 10.720785,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 16:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 1202
	},
	{
		"id": "osm-5091617745",
		"name": "Alibaba grill & steak",
		"address": "Oslo",
		"latitude": 59.9191668,
		"longitude": 10.76335,
		"cuisines": [
			"turkish"
		],
		"googleRating": 4.3,
		"googleRatingCount": 705,
		"openingHours": "Monday: 2:00 – 11:00 PM; Tuesday: 2:00 – 11:00 PM; Wednesday: 2:00 – 11:00 PM; Thursday: 2:00 – 11:00 PM; Friday: 2:00 PM – 12:00 AM; Saturday: 2:00 PM – 12:00 AM; Sunday: 2:00 – 11:00 PM"
	},
	{
		"id": "osm-120083044",
		"name": "American Burgers",
		"address": "Oslo",
		"latitude": 59.9220325,
		"longitude": 10.7265735,
		"cuisines": [
			"american",
			"burger"
		],
		"googleRating": 4.4,
		"googleRatingCount": 136,
		"openingHours": "Monday: Closed; Tuesday: 4:00 PM – 2:00 AM; Wednesday: 4:00 PM – 2:00 AM; Thursday: 4:00 PM – 2:00 AM; Friday: 4:00 PM – 4:00 AM; Saturday: 4:00 PM – 4:00 AM; Sunday: 2:00 PM – 12:00 AM"
	},
	{
		"id": "osm-4558463884",
		"name": "Anatolia",
		"address": "Oslo",
		"latitude": 59.9146338,
		"longitude": 10.775912,
		"cuisines": [
			"turkish"
		],
		"openingHours": "Mo-Sa 14:00-22:00; Su 12:30-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 597
	},
	{
		"id": "osm-6757226532",
		"name": "Apsorn Thai Restaurant",
		"address": "Oslo",
		"latitude": 59.9361824,
		"longitude": 10.7652789,
		"cuisines": [
			"thai"
		],
		"openingHours": "Tu-We 15:00-22:00; Th-Sa 15:00-23:00; Su 14:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 282
	},
	{
		"id": "osm-6781010584",
		"name": "Aquarie",
		"address": "Oslo",
		"latitude": 59.9109312,
		"longitude": 10.73642,
		"cuisines": [
			"seafood"
		],
		"googleRating": 4.9,
		"googleRatingCount": 135
	},
	{
		"id": "osm-2463407381",
		"name": "Arakataka",
		"address": "Oslo",
		"latitude": 59.9163671,
		"longitude": 10.7505761,
		"cuisines": [
			"regional"
		],
		"openingHours": "Mo-Th 16:00-22:00; Fr-Sa 16:00-23:00; Su 16:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 940
	},
	{
		"id": "osm-10178169833",
		"name": "Arepa",
		"address": "Oslo",
		"latitude": 59.9221538,
		"longitude": 10.7518328,
		"cuisines": [
			"colombian"
		],
		"openingHours": "Mo off; Tu-Fr 13:00-20:00; Sa 13:00-21:00; Su 12:00-19:00",
		"googleRating": 4.9,
		"googleRatingCount": 71
	},
	{
		"id": "osm-2091257756",
		"name": "Argent",
		"address": "Oslo",
		"latitude": 59.907858,
		"longitude": 10.752882,
		"cuisines": [
			"international"
		],
		"openingHours": "Mo-Sa 16:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 16
	},
	{
		"id": "osm-1520474051",
		"name": "Arte Pazza",
		"address": "Oslo",
		"latitude": 59.9266052,
		"longitude": 10.7383122,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Sa 14:00-00:00",
		"googleRating": 4.3,
		"googleRatingCount": 372
	},
	{
		"id": "osm-3441434853",
		"name": "Asia Aker Brygge",
		"address": "Oslo",
		"latitude": 59.910398,
		"longitude": 10.728475,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Tu 11:00-22:00; We 11:00-23:00; Th 12:00-00:00; Fr 11:00-00:00; Sa 12:30-00:00; Su 13:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 2296
	},
	{
		"id": "osm-3664306365",
		"name": "Asia kebab grill & pizzahus",
		"address": "Oslo",
		"latitude": 59.9123743,
		"longitude": 10.7651236,
		"cuisines": [
			"kebab"
		],
		"googleRating": 3.9,
		"googleRatingCount": 310,
		"openingHours": "Monday: 11:00 AM – 1:00 AM; Tuesday: 11:00 AM – 1:00 AM; Wednesday: 11:00 AM – 1:00 AM; Thursday: 11:00 AM – 1:00 AM; Friday: 11:00 AM – 3:30 AM; Saturday: 11:00 AM – 3:30 AM; Sunday: 11:00 AM – 12:00 AM"
	},
	{
		"id": "osm-11898560391",
		"name": "Asian Box",
		"address": "Oslo",
		"latitude": 59.925133,
		"longitude": 10.7251752,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.4,
		"googleRatingCount": 456
	},
	{
		"id": "osm-11917595505",
		"name": "Asian home cooking",
		"address": "Oslo",
		"latitude": 59.9137906,
		"longitude": 10.7341795,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 303
	},
	{
		"id": "osm-1268465480",
		"name": "Asylet",
		"address": "Oslo",
		"latitude": 59.912872,
		"longitude": 10.762362,
		"cuisines": [
			"regional"
		],
		"openingHours": "Mo-Fr 11:00-00:30; Sa 12:00-00:30; Su 12:00-23:00",
		"googleRating": 4.2,
		"googleRatingCount": 1594
	},
	{
		"id": "osm-10816258755",
		"name": "Atelier Asian Tapas",
		"address": "Oslo",
		"latitude": 59.9223571,
		"longitude": 10.7523348,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 113,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 9:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: 11:00 AM – 8:00 PM; Sunday: 11:00 AM – 6:00 PM"
	},
	{
		"id": "osm-12749770523",
		"name": "Aura by Jewel of India",
		"address": "Oslo",
		"latitude": 59.915967,
		"longitude": 10.717019,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.9,
		"googleRatingCount": 40,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 4:00 – 11:00 PM; Sunday: 3:00 – 9:30 PM"
	},
	{
		"id": "osm-2628797720",
		"name": "Awari Pizza & Gatekjøkken",
		"address": "Oslo",
		"latitude": 59.9223175,
		"longitude": 10.7705946,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-24:00",
		"googleRating": 3.7,
		"googleRatingCount": 293
	},
	{
		"id": "osm-12041482104",
		"name": "Azadi",
		"address": "Oslo",
		"latitude": 59.9123072,
		"longitude": 10.7639223,
		"cuisines": [
			"middle_eastern"
		],
		"openingHours": "Mo-Su 10:00-22:00",
		"googleRating": 3.8,
		"googleRatingCount": 560
	},
	{
		"id": "osm-2192390537",
		"name": "Balkan Pizza & Kebab House",
		"address": "Oslo",
		"latitude": 59.921512,
		"longitude": 10.732212,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4.1,
		"googleRatingCount": 1095,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 11:30 PM; Saturday: 11:00 AM – 11:30 PM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-315230164",
		"name": "Baltazar",
		"address": "Oslo",
		"latitude": 59.912017,
		"longitude": 10.747452,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Sa 11:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 1531
	},
	{
		"id": "osm-3466073005",
		"name": "Bamboo",
		"address": "Oslo",
		"latitude": 59.936884,
		"longitude": 10.752288,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa,Su 13:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 376
	},
	{
		"id": "osm-11978785929",
		"name": "Bambus Lambertseter",
		"address": "Oslo",
		"latitude": 59.8737411,
		"longitude": 10.8109174,
		"cuisines": [
			"asian",
			"sushi",
			"thai"
		],
		"openingHours": "Mo-Fr 10:00-21:00; Sa 09:00-20:00; Su 13:00-20:00",
		"googleRating": 4.4,
		"googleRatingCount": 72
	},
	{
		"id": "osm-1988692367",
		"name": "Bambus Sushi",
		"address": "Oslo",
		"latitude": 59.9164457,
		"longitude": 10.7149721,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.7,
		"googleRatingCount": 93,
		"openingHours": "Monday: 3:00 – 9:00 PM; Tuesday: 3:00 – 9:00 PM; Wednesday: 3:00 – 9:00 PM; Thursday: 3:00 – 9:00 PM; Friday: 3:00 – 9:00 PM; Saturday: 3:00 – 9:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-3729794525",
		"name": "Bambus Sushi",
		"address": "Oslo",
		"latitude": 59.9085545,
		"longitude": 10.7582085,
		"cuisines": [
			"asian",
			"sushi"
		],
		"googleRating": 4.2,
		"googleRatingCount": 450,
		"openingHours": "Monday: 10:00 AM – 9:00 PM; Tuesday: 10:00 AM – 9:00 PM; Wednesday: 10:00 AM – 9:00 PM; Thursday: 10:00 AM – 9:00 PM; Friday: 10:00 AM – 9:00 PM; Saturday: 10:00 AM – 8:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-10604787204",
		"name": "Banh Mi Xo",
		"address": "Oslo",
		"latitude": 59.9136231,
		"longitude": 10.7333008,
		"cuisines": [
			"vietnamese"
		],
		"googleRating": 4.5,
		"googleRatingCount": 343,
		"openingHours": "Monday: 10:00 AM – 6:45 PM; Tuesday: 10:00 AM – 6:45 PM; Wednesday: 10:00 AM – 6:45 PM; Thursday: 10:00 AM – 6:45 PM; Friday: 10:00 AM – 6:45 PM; Saturday: 11:00 AM – 6:45 PM; Sunday: 11:00 AM – 6:45 PM"
	},
	{
		"id": "osm-11860401922",
		"name": "Barish",
		"address": "Oslo",
		"latitude": 59.9110481,
		"longitude": 10.7470683,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.7,
		"googleRatingCount": 125,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:30 PM; Saturday: 4:00 – 11:30 PM; Sunday: Closed"
	},
	{
		"id": "osm-12587782141",
		"name": "Basso Social",
		"address": "Oslo",
		"latitude": 59.9131859,
		"longitude": 10.7493581,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.5,
		"googleRatingCount": 704,
		"openingHours": "Monday: 4:00 – 8:30 PM; Tuesday: 4:00 – 8:30 PM; Wednesday: 4:00 – 8:30 PM; Thursday: 4:00 – 8:30 PM; Friday: 4:00 – 9:00 PM; Saturday: 3:00 – 9:00 PM; Sunday: 3:00 – 8:30 PM"
	},
	{
		"id": "osm-4169360524",
		"name": "Bastard Burgers",
		"address": "Oslo",
		"latitude": 59.9160526,
		"longitude": 10.7513493,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-We 11:00-22:00; Th-Sa 11:00-01:00; Su 12:00-23:00",
		"googleRating": 4.1,
		"googleRatingCount": 656
	},
	{
		"id": "osm-10717774782",
		"name": "Bastard Burgers",
		"address": "Oslo",
		"latitude": 59.915228,
		"longitude": 10.717541,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-We 11:00-22:00; Th 11:00-23:00; Fr-Sa 11:00-01:00; Su 12:00-22:00",
		"googleRating": 4,
		"googleRatingCount": 529
	},
	{
		"id": "osm-12912071901",
		"name": "Beijing Palace",
		"address": "Oslo",
		"latitude": 59.9175946,
		"longitude": 10.7383605,
		"cuisines": [
			"chinese"
		],
		"openingHours": "We-Fr 16:00-22:00; Sa-Su 16:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 349
	},
	{
		"id": "osm-3397094877",
		"name": "Beirut Kebab",
		"address": "Oslo",
		"latitude": 59.9125472,
		"longitude": 10.7610756,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Th 10:00-01:00, Fr,Sa 10:00-04:00, Su 10:00-01:00",
		"googleRating": 3.9,
		"googleRatingCount": 582
	},
	{
		"id": "osm-506513936",
		"name": "Bella Bambina",
		"address": "Oslo",
		"latitude": 59.9107452,
		"longitude": 10.7509441,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Fr 06:00-09:30,11:00-22:00; Sa 07:00-11:00,12:00-22:00; Su 07:00-12:00,13:00-22:00",
		"googleRating": 3.5,
		"googleRatingCount": 541
	},
	{
		"id": "osm-5870422311",
		"name": "Benares",
		"address": "Oslo",
		"latitude": 59.9122669,
		"longitude": 10.7358313,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Su 14:00-23:30",
		"googleRating": 4.4,
		"googleRatingCount": 966
	},
	{
		"id": "osm-3623067025",
		"name": "Beno",
		"address": "Oslo",
		"latitude": 59.9007987,
		"longitude": 10.834028,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.4,
		"googleRatingCount": 312,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 10:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-9010627923",
		"name": "Big Bite Arkaden",
		"address": "Oslo",
		"latitude": 59.91167,
		"longitude": 10.748316,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Mo-Fr 10:00-20:00; Sa 10:00-18:00",
		"googleRating": 2.9,
		"googleRatingCount": 36
	},
	{
		"id": "osm-9010627953",
		"name": "Big Bite Oslo City",
		"address": "Oslo",
		"latitude": 59.912631,
		"longitude": 10.752499,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Mo-Fr 10:00-22:00; Sa 10:00-20:00",
		"googleRating": 2.9,
		"googleRatingCount": 109
	},
	{
		"id": "osm-358485746",
		"name": "Big Horn Steak House",
		"address": "Oslo",
		"latitude": 59.908998,
		"longitude": 10.725268,
		"cuisines": [
			"american"
		],
		"googleRating": 3.8,
		"googleRatingCount": 1775,
		"openingHours": "Monday: 3:00 – 9:00 PM; Tuesday: 3:00 – 9:00 PM; Wednesday: 3:00 – 10:00 PM; Thursday: 3:00 – 10:00 PM; Friday: 3:00 – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-4736654439",
		"name": "Big Horn Steak House",
		"address": "Oslo",
		"latitude": 59.914188,
		"longitude": 10.7472425,
		"cuisines": [
			"steak_house"
		],
		"openingHours": "Su,Mo 16:00-22:00; Tu-Th 15:00-22:00; Fr,Sa 15:00-22:00",
		"googleRating": 3.8,
		"googleRatingCount": 720
	},
	{
		"id": "osm-383996262",
		"name": "Bislett Kebab House",
		"address": "Oslo",
		"latitude": 59.920424,
		"longitude": 10.733452,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4,
		"googleRatingCount": 1896,
		"openingHours": "Monday: 10:00 AM – 4:00 AM; Tuesday: 10:00 AM – 4:00 AM; Wednesday: 10:00 AM – 4:00 AM; Thursday: 10:00 AM – 4:00 AM; Friday: 10:00 AM – 4:00 AM; Saturday: 10:00 AM – 4:00 AM; Sunday: 10:00 AM – 4:00 AM"
	},
	{
		"id": "osm-2194074505",
		"name": "Bislett Kebab House",
		"address": "Oslo",
		"latitude": 59.919711,
		"longitude": 10.759215,
		"cuisines": [
			"kebab",
			"pizza",
			"burger"
		],
		"openingHours": "Mo-Su 10:00-04:00",
		"googleRating": 4,
		"googleRatingCount": 1896
	},
	{
		"id": "osm-8075696968",
		"name": "Bislett Kebab House",
		"address": "Oslo",
		"latitude": 59.922649,
		"longitude": 10.73188,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-We 10:00-01:00; Tu-Sa 10:00-04:00; Su 10:00-01:00",
		"googleRating": 4,
		"googleRatingCount": 1896
	},
	{
		"id": "osm-7569798252",
		"name": "Bislett Kebab House Carl Berner",
		"address": "Oslo",
		"latitude": 59.929482,
		"longitude": 10.778343,
		"cuisines": [
			"kebab",
			"burger",
			"pizza"
		],
		"googleRating": 3.8,
		"googleRatingCount": 676,
		"openingHours": "Monday: 10:00 AM – 1:00 AM; Tuesday: 10:00 AM – 1:00 AM; Wednesday: 10:00 AM – 1:00 AM; Thursday: 10:00 AM – 1:00 AM; Friday: 10:00 AM – 4:00 AM; Saturday: 10:00 AM – 4:00 AM; Sunday: 10:00 AM – 1:00 AM"
	},
	{
		"id": "osm-7567389609",
		"name": "Bislett Kebab House Kalbakken",
		"address": "Oslo",
		"latitude": 59.952086,
		"longitude": 10.867836,
		"cuisines": [
			"kebab",
			"pizza",
			"burger"
		],
		"googleRating": 3.8,
		"googleRatingCount": 1564,
		"openingHours": "Monday: 10:00 AM – 1:00 AM; Tuesday: 10:00 AM – 1:00 AM; Wednesday: 10:00 AM – 1:00 AM; Thursday: 10:00 AM – 1:00 AM; Friday: 10:00 AM – 1:00 AM; Saturday: 10:00 AM – 1:00 AM; Sunday: 10:00 AM – 1:00 AM"
	},
	{
		"id": "osm-638842136",
		"name": "Bislett Kebab House Linderud",
		"address": "Oslo",
		"latitude": 59.944043,
		"longitude": 10.832866,
		"cuisines": [
			"fast_food",
			"kebab"
		],
		"googleRating": 4,
		"googleRatingCount": 1093,
		"openingHours": "Monday: 10:00 AM – 1:00 AM; Tuesday: 10:00 AM – 1:00 AM; Wednesday: 10:00 AM – 1:00 AM; Thursday: 10:00 AM – 1:00 AM; Friday: 10:00 AM – 4:00 AM; Saturday: 10:00 AM – 4:00 AM; Sunday: 10:00 AM – 1:00 AM"
	},
	{
		"id": "osm-6009676380",
		"name": "Bislett Kebab House Sandaker",
		"address": "Oslo",
		"latitude": 59.942339,
		"longitude": 10.770051,
		"cuisines": [
			"fast_food",
			"kebab"
		],
		"openingHours": "Su,Mo 10:00-01:00, Fr,Sa 10:00-04:00",
		"googleRating": 3.5,
		"googleRatingCount": 657
	},
	{
		"id": "osm-10951534701",
		"name": "Bistro Fourrage",
		"address": "Oslo",
		"latitude": 59.9175775,
		"longitude": 10.755475,
		"cuisines": [
			"french"
		],
		"googleRating": 4.3,
		"googleRatingCount": 98,
		"openingHours": "Monday: 4:00 – 11:00 PM; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 2:00 – 11:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-12006254677",
		"name": "Bistro Tolvte",
		"address": "Oslo",
		"latitude": 59.9054292,
		"longitude": 10.7549718,
		"cuisines": [
			"french"
		],
		"googleRating": 4,
		"googleRatingCount": 137,
		"openingHours": "Monday: 5:00 – 9:00 PM; Tuesday: 12:00 – 3:30 PM, 5:00 – 9:00 PM; Wednesday: 12:00 – 3:30 PM, 5:00 – 9:00 PM; Thursday: 12:00 – 3:30 PM, 5:00 – 10:00 PM; Friday: 12:00 – 3:30 PM, 5:00 – 10:00 PM; Saturday: 12:00 – 3:30 PM, 5:00 – 10:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1820941903",
		"name": "Bjølsen Sushi",
		"address": "Oslo",
		"latitude": 59.942319,
		"longitude": 10.759753,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.6,
		"googleRatingCount": 160,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-9141519424",
		"name": "Black napkins",
		"address": "Oslo",
		"latitude": 59.9466255,
		"longitude": 10.6434849,
		"cuisines": [
			"japanese"
		],
		"googleRating": 4.9,
		"googleRatingCount": 18
	},
	{
		"id": "osm-12462564528",
		"name": "Bob The Bagel",
		"address": "Oslo",
		"latitude": 59.9257165,
		"longitude": 10.7761287,
		"cuisines": [
			"bagel"
		],
		"openingHours": "Tu-Fr 08:00-16:00; Sa-Su 11:00-16:00",
		"googleRating": 4.4,
		"googleRatingCount": 187
	},
	{
		"id": "osm-866727181",
		"name": "Bobos Pizza",
		"address": "Oslo",
		"latitude": 59.883,
		"longitude": 10.844595,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 16:00-22:00; Fr-Sa 15:00-22:00; Su 14:00-21:00",
		"googleRating": 4.4,
		"googleRatingCount": 301
	},
	{
		"id": "osm-12726284735",
		"name": "Bono",
		"address": "Oslo",
		"latitude": 59.9161377,
		"longitude": 10.7142091,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 164,
		"openingHours": "Monday: Closed; Tuesday: 6:30 – 10:30 PM; Wednesday: 6:30 – 10:30 PM; Thursday: 6:30 – 10:30 PM; Friday: 6:30 – 10:30 PM; Saturday: 2:00 – 5:00 PM, 6:30 – 10:30 PM; Sunday: Closed"
	},
	{
		"id": "osm-12761812004",
		"name": "Boom Sushi",
		"address": "Oslo",
		"latitude": 59.9197492,
		"longitude": 10.7662152,
		"cuisines": [
			"sushi"
		],
		"googleRating": 5,
		"googleRatingCount": 107,
		"openingHours": "Monday: Closed; Tuesday: 1:00 – 9:00 PM; Wednesday: 1:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 1:00 – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-992764239",
		"name": "Borggården",
		"address": "Oslo",
		"latitude": 59.913213,
		"longitude": 10.734405,
		"cuisines": [
			"steak_house"
		],
		"openingHours": "Mo-Sa 15:00-23:00; Su 15:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 598
	},
	{
		"id": "osm-2392587369",
		"name": "Bosu",
		"address": "Oslo",
		"latitude": 59.9103934,
		"longitude": 10.7612457,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 12:00-20:00; Sa-Su 13:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 124
	},
	{
		"id": "osm-12462564530",
		"name": "Bosu",
		"address": "Oslo",
		"latitude": 59.9255799,
		"longitude": 10.7761023,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.3,
		"googleRatingCount": 124,
		"openingHours": "Monday: 2:00 – 8:00 PM; Tuesday: 2:00 – 8:00 PM; Wednesday: 2:00 – 8:00 PM; Thursday: 2:00 – 8:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-13307891992",
		"name": "Bosu",
		"address": "Oslo",
		"latitude": 59.9281972,
		"longitude": 10.7572136,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.3,
		"googleRatingCount": 124,
		"openingHours": "Monday: 2:00 – 8:00 PM; Tuesday: 2:00 – 8:00 PM; Wednesday: 2:00 – 8:00 PM; Thursday: 2:00 – 8:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-10253369145",
		"name": "Brasserie Coucou",
		"address": "Oslo",
		"latitude": 59.9149711,
		"longitude": 10.7203811,
		"cuisines": [
			"french"
		],
		"googleRating": 4.4,
		"googleRatingCount": 219,
		"openingHours": "Monday: 5:00 PM – 12:00 AM; Tuesday: 5:00 PM – 12:00 AM; Wednesday: 5:00 PM – 12:00 AM; Thursday: 5:00 PM – 12:00 AM; Friday: 5:00 PM – 12:00 AM; Saturday: 5:00 PM – 12:00 AM; Sunday: Closed"
	},
	{
		"id": "osm-4984254144",
		"name": "Brasserie France",
		"address": "Oslo",
		"latitude": 59.913102,
		"longitude": 10.742568,
		"cuisines": [
			"french"
		],
		"openingHours": "Mo-Fr 11:30-22:00; Sa 12:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 1411
	},
	{
		"id": "osm-2291530274",
		"name": "Brasserie Mares",
		"address": "Oslo",
		"latitude": 59.915674,
		"longitude": 10.715838,
		"cuisines": [
			"seafood"
		],
		"openingHours": "Mo-Fr 11:00-15:00,17:00-00:30; Sa 11:00-16:00,17:00-00:30",
		"googleRating": 4.6,
		"googleRatingCount": 34
	},
	{
		"id": "osm-1977030242",
		"name": "Brasserie Ouest",
		"address": "Oslo",
		"latitude": 59.918655,
		"longitude": 10.706076,
		"cuisines": [
			"french"
		],
		"googleRating": 4.4,
		"googleRatingCount": 295,
		"openingHours": "Monday: Closed; Tuesday: 5:00 – 11:00 PM; Wednesday: 5:00 – 11:00 PM; Thursday: 5:00 – 11:00 PM; Friday: 5:00 – 11:00 PM; Saturday: 2:00 – 11:00 PM; Sunday: 4:00 – 9:30 PM"
	},
	{
		"id": "osm-5652443563",
		"name": "Brasserie Rivoli",
		"address": "Oslo",
		"latitude": 59.906525,
		"longitude": 10.755677,
		"cuisines": [
			"french"
		],
		"openingHours": "Tu-Fr 11:30-23:00; Mo 16:30-23:00; Sa-Su 14:30-23:00",
		"googleRating": 4.5,
		"googleRatingCount": 469
	},
	{
		"id": "osm-9521494313",
		"name": "Brauđ toastbar",
		"address": "Oslo",
		"latitude": 59.924175,
		"longitude": 10.759026,
		"cuisines": [
			"toast",
			"coffee_shop",
			"sandwich",
			"kaffe",
			"juice",
			"coffee"
		],
		"openingHours": "Su-We 11:00-18:00, Th 11:00-00:00, Fr-Sa 11:00-01:00",
		"googleRating": 4.4,
		"googleRatingCount": 249
	},
	{
		"id": "osm-10137860304",
		"name": "Breddos Tacos",
		"address": "Oslo",
		"latitude": 59.922403,
		"longitude": 10.7523423,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-Sa 11:30-22:00; Su 11:00-20:00",
		"googleRating": 4,
		"googleRatingCount": 208
	},
	{
		"id": "osm-11816193712",
		"name": "Briskeby Bánh mì",
		"address": "Oslo",
		"latitude": 59.9197149,
		"longitude": 10.718265,
		"cuisines": [
			"thai",
			"sandwich"
		],
		"googleRating": 4.8,
		"googleRatingCount": 188
	},
	{
		"id": "osm-9841510417",
		"name": "Brobekk grill & pizza",
		"address": "Oslo",
		"latitude": 59.928222,
		"longitude": 10.831043,
		"cuisines": [
			"burger",
			"grill",
			"kebab",
			"pizza"
		],
		"openingHours": "Mo-Su 13:00-23:00",
		"googleRating": 3.5,
		"googleRatingCount": 621
	},
	{
		"id": "osm-4511885847",
		"name": "Brutus",
		"address": "Oslo",
		"latitude": 59.911459,
		"longitude": 10.771302,
		"cuisines": [
			"wine"
		],
		"openingHours": "17:00-00:30",
		"googleRating": 4.7,
		"googleRatingCount": 76
	},
	{
		"id": "osm-335988066",
		"name": "Bryggen Sushi",
		"address": "Oslo",
		"latitude": 59.910075,
		"longitude": 10.724626,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.6,
		"googleRatingCount": 2669,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:30 PM; Wednesday: 11:00 AM – 10:30 PM; Thursday: 11:00 AM – 10:30 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-4198743089",
		"name": "Bun's Burger Bar",
		"address": "Oslo",
		"latitude": 59.903092,
		"longitude": 10.753854,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 14:00-22:00; Su 12:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 1254
	},
	{
		"id": "osm-3441434870",
		"name": "Burger Joint",
		"address": "Oslo",
		"latitude": 59.9106321,
		"longitude": 10.7264344,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Su 12:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 1154
	},
	{
		"id": "osm-279373274",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.8610473,
		"longitude": 10.7999006,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 10:00-21:00; Sa,Su 11:00-21:00",
		"googleRating": 3.9,
		"googleRatingCount": 710
	},
	{
		"id": "osm-383991805",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.9136222,
		"longitude": 10.7322505,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 10:00-24:00, Fr,Sa 10:00-04:00, Su 11:00-24:00",
		"googleRating": 4.1,
		"googleRatingCount": 4293
	},
	{
		"id": "osm-443655222",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.9290402,
		"longitude": 10.7172955,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 10:00-24:00; Su 11:00-24:00",
		"googleRating": 3.9,
		"googleRatingCount": 1357
	},
	{
		"id": "osm-3132099333",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.911234,
		"longitude": 10.7529618,
		"cuisines": [
			"burger"
		],
		"googleRating": 4,
		"googleRatingCount": 1612,
		"openingHours": "Monday: 7:00 AM – 12:30 AM; Tuesday: 7:00 AM – 12:30 AM; Wednesday: 7:00 AM – 12:30 AM; Thursday: 7:00 AM – 12:30 AM; Friday: 7:00 AM – 1:00 AM; Saturday: 7:00 AM – 1:00 AM; Sunday: 7:00 AM – 12:30 AM"
	},
	{
		"id": "osm-3278150374",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.9488113,
		"longitude": 10.7327914,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 09:00-22:00; Sa 11:00-21:00; Su 09:00-22:00",
		"googleRating": 3.7,
		"googleRatingCount": 554
	},
	{
		"id": "osm-4736684797",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.9165583,
		"longitude": 10.7522701,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 10:00-23:00, Fr 10:00-03:30, Su 12:00-23:00, Sa 12:00-03:30",
		"googleRating": 4,
		"googleRatingCount": 1612
	},
	{
		"id": "osm-4880461779",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.9134268,
		"longitude": 10.7506131,
		"cuisines": [
			"burger"
		],
		"googleRating": 4,
		"googleRatingCount": 1612,
		"openingHours": "Monday: 7:00 AM – 12:30 AM; Tuesday: 7:00 AM – 12:30 AM; Wednesday: 7:00 AM – 12:30 AM; Thursday: 7:00 AM – 12:30 AM; Friday: 7:00 AM – 1:00 AM; Saturday: 7:00 AM – 1:00 AM; Sunday: 7:00 AM – 12:30 AM"
	},
	{
		"id": "osm-5490794228",
		"name": "Burger King",
		"address": "Oslo",
		"latitude": 59.8969322,
		"longitude": 10.8138862,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 10:00-21:00; Su 12:00-21:00",
		"googleRating": 3.9,
		"googleRatingCount": 913
	},
	{
		"id": "osm-816420466",
		"name": "Burger Shack",
		"address": "Oslo",
		"latitude": 59.9275902,
		"longitude": 10.7488071,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.7,
		"googleRatingCount": 643,
		"openingHours": "Monday: 2:00 – 10:45 PM; Tuesday: 2:00 – 10:45 PM; Wednesday: 2:00 – 10:45 PM; Thursday: 2:00 – 11:00 PM; Friday: 2:00 PM – 2:00 AM; Saturday: 2:00 PM – 2:00 AM; Sunday: 2:00 – 9:45 PM"
	},
	{
		"id": "osm-11185679028",
		"name": "Burger Shack",
		"address": "Oslo",
		"latitude": 59.9486929,
		"longitude": 10.7667273,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Su 14:00-22:45",
		"googleRating": 4.7,
		"googleRatingCount": 643
	},
	{
		"id": "osm-10984591311",
		"name": "Bønder i byen",
		"address": "Oslo",
		"latitude": 59.9254115,
		"longitude": 10.7590032,
		"cuisines": [
			"regional"
		],
		"openingHours": "Mo-Sa 11:00-22:00; Su 13:00-20:00",
		"googleRating": 4.7,
		"googleRatingCount": 382
	},
	{
		"id": "osm-315230163",
		"name": "Cafe Cathedral",
		"address": "Oslo",
		"latitude": 59.911827,
		"longitude": 10.747301,
		"cuisines": [
			"pizza",
			"noodle",
			"burger"
		],
		"openingHours": "Mo-Su 09:00+",
		"googleRating": 4.1,
		"googleRatingCount": 2397
	},
	{
		"id": "osm-1329411510",
		"name": "Café di Roma",
		"address": "Oslo",
		"latitude": 59.922424,
		"longitude": 10.756791,
		"cuisines": [
			"pizza",
			"burger",
			"italian"
		],
		"openingHours": "Mo-Sa 12:00-01:00; Su 13:00-01:00",
		"googleRating": 4.5,
		"googleRatingCount": 473
	},
	{
		"id": "osm-1498206424",
		"name": "Café Sara",
		"address": "Oslo",
		"latitude": 59.9175983,
		"longitude": 10.7541711,
		"cuisines": [
			"mexican",
			"pizza"
		],
		"openingHours": "Mo-Sa 11:00-02:30; Su 13:00-23:30",
		"googleRating": 4.3,
		"googleRatingCount": 3839
	},
	{
		"id": "osm-11387449122",
		"name": "Camên",
		"address": "Oslo",
		"latitude": 59.909536,
		"longitude": 10.7419657,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Th 08:00-16:00; Fr 09:00-15:00",
		"googleRating": 4.7,
		"googleRatingCount": 30
	},
	{
		"id": "osm-10314516909",
		"name": "Campino Sinsen",
		"address": "Oslo",
		"latitude": 59.938574,
		"longitude": 10.780636,
		"cuisines": [
			"kebab",
			"pizza"
		],
		"openingHours": "Mo-Sa 11:00-23:00; Su 13:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 125
	},
	{
		"id": "osm-11898658696",
		"name": "Campo de' Fiori",
		"address": "Oslo",
		"latitude": 59.9230395,
		"longitude": 10.7258976,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.4,
		"googleRatingCount": 769,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 1:30 – 10:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1358123297",
		"name": "Candy Bar",
		"address": "Oslo",
		"latitude": 59.947683,
		"longitude": 10.7722434,
		"cuisines": [
			"confectionery"
		],
		"googleRating": 4.3,
		"googleRatingCount": 191,
		"openingHours": "Monday: 10:00 AM – 8:00 PM; Tuesday: 10:00 AM – 8:00 PM; Wednesday: 10:00 AM – 8:00 PM; Thursday: 10:00 AM – 8:00 PM; Friday: 10:00 AM – 8:00 PM; Saturday: 10:00 AM – 7:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-9731781890",
		"name": "Carl Berner Grill",
		"address": "Oslo",
		"latitude": 59.9263529,
		"longitude": 10.7752068,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Th 10:00-01:00, Fr 10:00-05:00, Sa 11:00-05:00, Su 11:00-01:00",
		"googleRating": 4.3,
		"googleRatingCount": 488
	},
	{
		"id": "osm-12647263601",
		"name": "Carls",
		"address": "Oslo",
		"latitude": 59.9263482,
		"longitude": 10.7771311,
		"cuisines": [
			"coffee_shop",
			"pizza"
		],
		"googleRating": 4.1,
		"googleRatingCount": 263,
		"openingHours": "Monday: 9:00 AM – 10:00 PM; Tuesday: 9:00 AM – 11:00 PM; Wednesday: 9:00 AM – 11:00 PM; Thursday: 9:00 AM – 11:00 PM; Friday: 9:00 AM – 1:00 AM; Saturday: 12:00 PM – 1:00 AM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-6684083404",
		"name": "Carmel Grill",
		"address": "Oslo",
		"latitude": 59.912363,
		"longitude": 10.747907,
		"cuisines": [
			"kebab",
			"falafel"
		],
		"openingHours": "Mo-Su 09:00-03:30",
		"googleRating": 4,
		"googleRatingCount": 1167
	},
	{
		"id": "osm-12968904470",
		"name": "CASBAR",
		"address": "Oslo",
		"latitude": 59.913892,
		"longitude": 10.7329557,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.5,
		"googleRatingCount": 371,
		"openingHours": "Monday: 3:00 – 11:30 PM; Tuesday: 3:00 – 11:30 PM; Wednesday: 3:00 – 11:30 PM; Thursday: 3:00 PM – 12:30 AM; Friday: 3:00 PM – 12:30 AM; Saturday: 2:00 PM – 3:00 AM; Sunday: 2:00 – 10:30 PM"
	},
	{
		"id": "osm-6606529283",
		"name": "Cateringo",
		"address": "Oslo",
		"latitude": 59.9109766,
		"longitude": 10.7641213,
		"cuisines": [
			"regional",
			"international"
		],
		"openingHours": "24/7",
		"googleRating": 4.8,
		"googleRatingCount": 69
	},
	{
		"id": "osm-1930503853",
		"name": "Charlies Kebab",
		"address": "Oslo",
		"latitude": 59.933443,
		"longitude": 10.763307,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4.2,
		"googleRatingCount": 254,
		"openingHours": "Monday: 11:00 AM – 12:00 AM; Tuesday: 11:00 AM – 12:00 AM; Wednesday: 11:00 AM – 12:00 AM; Thursday: 11:00 AM – 12:00 AM; Friday: 11:00 AM – 1:00 AM; Saturday: 11:00 AM – 1:00 AM; Sunday: 11:00 AM – 12:00 AM"
	},
	{
		"id": "osm-11533572438",
		"name": "Charlies Kebab House",
		"address": "Oslo",
		"latitude": 59.9184028,
		"longitude": 10.6368624,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4.2,
		"googleRatingCount": 292,
		"openingHours": "Monday: 10:00 AM – 10:00 PM; Tuesday: 10:00 AM – 10:00 PM; Wednesday: 10:00 AM – 10:00 PM; Thursday: 10:00 AM – 10:00 PM; Friday: 10:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 11:00 AM – 11:00 PM"
	},
	{
		"id": "osm-13246591281",
		"name": "Chaskka",
		"address": "Oslo",
		"latitude": 59.9154227,
		"longitude": 10.7173271,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.5,
		"googleRatingCount": 75,
		"openingHours": "Monday: 1:00 – 9:00 PM; Tuesday: Closed; Wednesday: 1:00 – 9:00 PM; Thursday: 1:00 – 9:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 11:30 AM – 9:00 PM"
	},
	{
		"id": "osm-1349742668",
		"name": "Chennai Tandoori",
		"address": "Oslo",
		"latitude": 59.9509256,
		"longitude": 10.8674204,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.4,
		"googleRatingCount": 44,
		"openingHours": "Monday: 11:00 AM – 8:00 PM; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 11:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: 11:00 AM – 8:00 PM; Sunday: 11:00 AM – 8:00 PM"
	},
	{
		"id": "osm-7908572553",
		"name": "Chez Colin",
		"address": "Oslo",
		"latitude": 59.9204946,
		"longitude": 10.7492891,
		"cuisines": [
			"french"
		],
		"googleRating": 4.7,
		"googleRatingCount": 674,
		"openingHours": "Monday: Closed; Tuesday: 5:00 – 10:00 PM; Wednesday: 5:00 – 10:00 PM; Thursday: 5:00 – 10:00 PM; Friday: 5:00 – 11:00 PM; Saturday: 5:00 – 11:00 PM; Sunday: 5:00 – 10:00 PM"
	},
	{
		"id": "osm-12463157090",
		"name": "Chilango",
		"address": "Oslo",
		"latitude": 59.9306218,
		"longitude": 10.7935762,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1190,
		"openingHours": "Monday: 4:00 – 9:00 PM; Tuesday: 4:00 – 9:00 PM; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 9:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-2777194991",
		"name": "China Star Restaurant",
		"address": "Oslo",
		"latitude": 59.941031,
		"longitude": 10.759496,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Tu-Th 14:00-23:00; Fr-Sa 13:00-23:00; Su 12:00-23:00",
		"googleRating": 3.7,
		"googleRatingCount": 60
	},
	{
		"id": "osm-10717774783",
		"name": "Ching-Ching",
		"address": "Oslo",
		"latitude": 59.919816,
		"longitude": 10.7581637,
		"cuisines": [
			"asian"
		],
		"openingHours": "Tu-Th 16-22; Fr 16-23; Sa 11-23",
		"googleRating": 4.3,
		"googleRatingCount": 283
	},
	{
		"id": "osm-4558463886",
		"name": "Chowk",
		"address": "Oslo",
		"latitude": 59.9147288,
		"longitude": 10.7757182,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Su 15:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 301
	},
	{
		"id": "osm-12703051401",
		"name": "CiCi Osteria",
		"address": "Oslo",
		"latitude": 59.9107084,
		"longitude": 10.7606402,
		"cuisines": [
			"italian_pizza",
			"pizza"
		],
		"googleRating": 4.5,
		"googleRatingCount": 190,
		"openingHours": "Monday: Closed; Tuesday: 12:00 – 9:00 PM; Wednesday: 12:00 – 9:00 PM; Thursday: 12:00 – 9:00 PM; Friday: 1:00 – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-9994728017",
		"name": "Cin Cin Café",
		"address": "Oslo",
		"latitude": 59.914686,
		"longitude": 10.742121,
		"cuisines": [
			"pizza",
			"italian",
			"coffee_shop"
		],
		"openingHours": "Mo-Sa 16:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 354
	},
	{
		"id": "osm-816424311",
		"name": "Colonel Mustard",
		"address": "Oslo",
		"latitude": 59.927827,
		"longitude": 10.751397,
		"cuisines": [
			"international"
		],
		"openingHours": "Mo-Th, Su 11:00-01:00; Fr, Sa 11:00-03:00",
		"googleRating": 4.1,
		"googleRatingCount": 731
	},
	{
		"id": "osm-12656859501",
		"name": "Corrals Solli",
		"address": "Oslo",
		"latitude": 59.9166101,
		"longitude": 10.7152601,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Tu-We 14:00-21:00; Th-Sa 14:00-22:00; Su 13:00-20:00",
		"googleRating": 4.5,
		"googleRatingCount": 133
	},
	{
		"id": "osm-13445339373",
		"name": "Corso",
		"address": "Oslo",
		"latitude": 59.9057852,
		"longitude": 10.7592045,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.7,
		"googleRatingCount": 18,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 11:30 PM; Wednesday: 4:00 – 11:30 PM; Thursday: 4:00 – 11:30 PM; Friday: 4:00 – 11:30 PM; Saturday: 4:00 – 11:30 PM; Sunday: Closed"
	},
	{
		"id": "osm-9705547309",
		"name": "Coyo - Meksikansk Restaurant & Taquilla Bar Sørenga",
		"address": "Oslo",
		"latitude": 59.901858,
		"longitude": 10.751396,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-Th 16:00-23:00; Fr 16:00-00:00; Sa 13:00-00:00; Su 13:00-22:00",
		"googleRating": 3.9,
		"googleRatingCount": 1913
	},
	{
		"id": "osm-3110733090",
		"name": "Crepêrie de Mari",
		"address": "Oslo",
		"latitude": 59.921514,
		"longitude": 10.759148,
		"cuisines": [
			"french"
		],
		"googleRating": 4.5,
		"googleRatingCount": 1479,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:30 PM; Saturday: 11:00 AM – 9:30 PM; Sunday: 11:00 AM – 9:00 PM"
	},
	{
		"id": "osm-2183282943",
		"name": "Curry & Ketchup",
		"address": "Oslo",
		"latitude": 59.927688,
		"longitude": 10.713837,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Su 13:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 4664
	},
	{
		"id": "osm-2181352341",
		"name": "Da Lat Café",
		"address": "Oslo",
		"latitude": 59.916806,
		"longitude": 10.753404,
		"cuisines": [
			"vietnamese"
		],
		"openingHours": "Mo-Su 11:00-21:00",
		"googleRating": 4.4,
		"googleRatingCount": 664
	},
	{
		"id": "osm-7064893531",
		"name": "Damaskus Huset",
		"address": "Oslo",
		"latitude": 59.919476,
		"longitude": 10.7644478,
		"cuisines": [
			"syrian"
		],
		"googleRating": 4.1,
		"googleRatingCount": 901,
		"openingHours": "Monday: 12:00 – 10:00 PM; Tuesday: 12:00 – 10:00 PM; Wednesday: 12:00 – 10:30 PM; Thursday: 2:00 – 10:00 PM; Friday: 12:00 – 10:00 PM; Saturday: 12:00 – 10:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-111284517",
		"name": "Dattera til Hagen",
		"address": "Oslo",
		"latitude": 59.91331,
		"longitude": 10.7601335,
		"cuisines": [
			"pizza",
			"tapas",
			"burger",
			"coffee_shop"
		],
		"openingHours": "Mo 11:00-24:00, Tu-We 11:00-01:00, Th 11:00-02:00, Fr-Sa 11:00-03:00, Su 12:00-24:00",
		"googleRating": 4.1,
		"googleRatingCount": 1378
	},
	{
		"id": "osm-12965285810",
		"name": "Deilig SUSHI",
		"address": "Oslo",
		"latitude": 59.913867,
		"longitude": 10.7226896,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.4,
		"googleRatingCount": 195,
		"openingHours": "Monday: 10:30 AM – 9:00 PM; Tuesday: 10:30 AM – 9:00 PM; Wednesday: 10:30 AM – 9:00 PM; Thursday: 10:30 AM – 9:00 PM; Friday: 10:30 AM – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-9735404510",
		"name": "Delhi Tandoori",
		"address": "Oslo",
		"latitude": 59.9196802,
		"longitude": 10.7512773,
		"cuisines": [
			"indian"
		],
		"googleRating": 4,
		"googleRatingCount": 308,
		"openingHours": "Monday: Closed; Tuesday: 3:30 – 10:00 PM; Wednesday: 3:30 – 10:00 PM; Thursday: 3:30 – 10:00 PM; Friday: 3:30 – 10:00 PM; Saturday: 3:30 – 10:00 PM; Sunday: 3:30 – 10:00 PM"
	},
	{
		"id": "osm-9566497407",
		"name": "Deli Sushi",
		"address": "Oslo",
		"latitude": 59.9269148,
		"longitude": 10.7349377,
		"cuisines": [
			"japanese"
		],
		"openingHours": "Tu-Sa 15:00-21:00; Su 14:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 86
	},
	{
		"id": "osm-292145479",
		"name": "Delicatessen",
		"address": "Oslo",
		"latitude": 59.918731,
		"longitude": 10.758267,
		"cuisines": [
			"tapas"
		],
		"googleRating": 4.4,
		"googleRatingCount": 1097,
		"openingHours": "Monday: 12:00 – 10:00 PM; Tuesday: 12:00 – 10:00 PM; Wednesday: 12:00 – 10:00 PM; Thursday: 12:00 – 10:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-879653642",
		"name": "Delicatessen",
		"address": "Oslo",
		"latitude": 59.9106942,
		"longitude": 10.7270382,
		"cuisines": [
			"tapas"
		],
		"googleRating": 4.2,
		"googleRatingCount": 1110,
		"openingHours": "Monday: 12:00 – 10:00 PM; Tuesday: 12:00 – 10:00 PM; Wednesday: 12:00 – 10:00 PM; Thursday: 12:00 – 10:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-9169783117",
		"name": "Delicatessen",
		"address": "Oslo",
		"latitude": 59.9264151,
		"longitude": 10.72262,
		"cuisines": [
			"tapas"
		],
		"openingHours": "Su-Tu 12:00+; We-Sa 12:00+",
		"googleRating": 4.3,
		"googleRatingCount": 725
	},
	{
		"id": "osm-13334174879",
		"name": "Den Sultne Mave",
		"address": "Oslo",
		"latitude": 59.9088421,
		"longitude": 10.6017993,
		"cuisines": [
			"indian"
		],
		"openingHours": "Tu-Sa 16:00-22:00; Su 16:00-21:00; Mo off",
		"googleRating": 4.9,
		"googleRatingCount": 491
	},
	{
		"id": "osm-4354657290",
		"name": "Der Peppern Gror",
		"address": "Oslo",
		"latitude": 59.9124878,
		"longitude": 10.7351729,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 16:00-22:00; Su 16:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 1895
	},
	{
		"id": "osm-11898642501",
		"name": "Der Peppern Gror",
		"address": "Oslo",
		"latitude": 59.9240037,
		"longitude": 10.7258312,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1895,
		"openingHours": "Monday: 4:00 – 9:00 PM; Tuesday: 4:00 – 9:00 PM; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 9:00 PM; Friday: 3:30 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-12630098201",
		"name": "Der Peppern Gror Bryn - Take Away",
		"address": "Oslo",
		"latitude": 59.9034843,
		"longitude": 10.8223214,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 15:00-21:00; Su 14:00-21:00",
		"googleRating": 3.8,
		"googleRatingCount": 39
	},
	{
		"id": "osm-4799902087",
		"name": "Digg",
		"address": "Oslo",
		"latitude": 59.9161142,
		"longitude": 10.7514721,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Su-Th 11:00-22:00, Fr 11:00-01:00, Sa 11:00-03:30",
		"googleRating": 4.2,
		"googleRatingCount": 227
	},
	{
		"id": "osm-9892016681",
		"name": "Digg",
		"address": "Oslo",
		"latitude": 59.9237665,
		"longitude": 10.7594122,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 345
	},
	{
		"id": "osm-11432622325",
		"name": "Digg",
		"address": "Oslo",
		"latitude": 59.928486,
		"longitude": 10.716279,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Sa 11:00-22:00; Su 12:00-22:00",
		"googleRating": 4.8,
		"googleRatingCount": 92
	},
	{
		"id": "osm-13515804062",
		"name": "Digg Pizza",
		"address": "Oslo",
		"latitude": 59.9244803,
		"longitude": 10.7309374,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.8,
		"googleRatingCount": 92,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-7778766115",
		"name": "DIL SE",
		"address": "Oslo",
		"latitude": 59.9291924,
		"longitude": 10.7980903,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Su 15:00-22:00",
		"googleRating": 4.8,
		"googleRatingCount": 360
	},
	{
		"id": "osm-10858331891",
		"name": "Din Deli",
		"address": "Oslo",
		"latitude": 59.9170789,
		"longitude": 10.7370933,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.5,
		"googleRatingCount": 83,
		"openingHours": "Monday: 8:00 AM – 8:00 PM; Tuesday: 8:00 AM – 8:00 PM; Wednesday: 8:00 AM – 8:00 PM; Thursday: 8:00 AM – 8:00 PM; Friday: 8:00 AM – 8:00 PM; Saturday: Closed; Sunday: Closed"
	},
	{
		"id": "osm-2622645325",
		"name": "Din Pizza Kebab & Grill",
		"address": "Oslo",
		"latitude": 59.8714343,
		"longitude": 10.8208618,
		"cuisines": [
			"pizza",
			"kebab",
			"burger",
			"pakistani",
			"chicken",
			"salad"
		],
		"openingHours": "Mo-Sa 11:00-23:00; Su 12:00-23:00",
		"googleRating": 4.6,
		"googleRatingCount": 379
	},
	{
		"id": "osm-2091308347",
		"name": "Dinner",
		"address": "Oslo",
		"latitude": 59.9138581,
		"longitude": 10.7346804,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Sa 11:00-02:00; Su 15:30-01:00",
		"googleRating": 4.5,
		"googleRatingCount": 2772
	},
	{
		"id": "osm-13386841837",
		"name": "Dinner",
		"address": "Oslo",
		"latitude": 59.9077415,
		"longitude": 10.7593002,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4.5,
		"googleRatingCount": 2772,
		"openingHours": "Monday: 3:30 PM – 12:00 AM; Tuesday: 3:30 PM – 12:00 AM; Wednesday: 3:30 PM – 12:00 AM; Thursday: 3:30 PM – 12:00 AM; Friday: 3:30 PM – 12:30 AM; Saturday: 3:30 PM – 12:30 AM; Sunday: 3:30 PM – 12:00 AM"
	},
	{
		"id": "osm-5101765637",
		"name": "Dinos Pizza",
		"address": "Oslo",
		"latitude": 59.9254385,
		"longitude": 10.7580071,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 14:30-01:00; Fr 14:30-02:00; Sa 13:00-02:00; Su 13:00-01; 00",
		"googleRating": 3.4,
		"googleRatingCount": 141
	},
	{
		"id": "osm-13416055219",
		"name": "Dirty Vegan",
		"address": "Oslo",
		"latitude": 59.9166247,
		"longitude": 10.7527997,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.6,
		"googleRatingCount": 186,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-737337283",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.9136538,
		"longitude": 10.8419055,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-22:00",
		"googleRating": 3.6,
		"googleRatingCount": 279
	},
	{
		"id": "osm-3278150375",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.9483708,
		"longitude": 10.7333012,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa,Su 13:00-22:00",
		"googleRating": 3.5,
		"googleRatingCount": 374
	},
	{
		"id": "osm-4115106489",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.931385,
		"longitude": 10.709896,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-23:00",
		"googleRating": 4.2,
		"googleRatingCount": 482
	},
	{
		"id": "osm-5043669192",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.9301957,
		"longitude": 10.7945168,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-23:00",
		"googleRating": 3.7,
		"googleRatingCount": 454
	},
	{
		"id": "osm-6435602258",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.9132498,
		"longitude": 10.7988728,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-23:00",
		"googleRating": 3.7,
		"googleRatingCount": 321
	},
	{
		"id": "osm-6474049827",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.912798,
		"longitude": 10.7483236,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.5,
		"googleRatingCount": 630,
		"openingHours": "Monday: 10:00 AM – 12:00 AM; Tuesday: 10:00 AM – 12:00 AM; Wednesday: 10:00 AM – 12:00 AM; Thursday: 10:00 AM – 12:00 AM; Friday: 10:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 11:00 AM – 12:00 AM"
	},
	{
		"id": "osm-6742092458",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.9461663,
		"longitude": 10.7676846,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-22:00",
		"googleRating": 3.3,
		"googleRatingCount": 358
	},
	{
		"id": "osm-7783705176",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.947037,
		"longitude": 10.622048,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 11:00-22:00",
		"googleRating": 3.1,
		"googleRatingCount": 181
	},
	{
		"id": "osm-8075666435",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.92318,
		"longitude": 10.731562,
		"cuisines": [
			"pizza"
		],
		"openingHours": "11:00-23:00",
		"googleRating": 3.5,
		"googleRatingCount": 477
	},
	{
		"id": "osm-9498047450",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.9198568,
		"longitude": 10.7595585,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.3,
		"googleRatingCount": 315,
		"openingHours": "Monday: 1:00 – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 1:00 – 11:00 PM; Thursday: 1:00 – 11:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-13477107624",
		"name": "Domino's",
		"address": "Oslo",
		"latitude": 59.8971469,
		"longitude": 10.8133469,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.3,
		"googleRatingCount": 221,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 1:30 – 10:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 1:00 – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-10816258754",
		"name": "Doug's Hamburgers",
		"address": "Oslo",
		"latitude": 59.9223072,
		"longitude": 10.7523212,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.1,
		"googleRatingCount": 142,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 11:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: 11:00 AM – 8:00 PM; Sunday: 11:00 AM – 6:00 PM"
	},
	{
		"id": "osm-12409606138",
		"name": "Doug's Hamburgers",
		"address": "Oslo",
		"latitude": 59.9067689,
		"longitude": 10.7579116,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.3,
		"googleRatingCount": 71,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 11:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: 11:00 AM – 8:00 PM; Sunday: 11:00 AM – 8:00 PM"
	},
	{
		"id": "osm-977584923",
		"name": "Down South Deli",
		"address": "Oslo",
		"latitude": 59.9234159,
		"longitude": 10.7394704,
		"cuisines": [
			"burger",
			"sandwich"
		],
		"openingHours": "We-Fr 16:00-21:00; Sa 13:00-20:00; Su 11:00-18:00; Mo,Tu off",
		"googleRating": 4.6,
		"googleRatingCount": 200
	},
	{
		"id": "osm-1371624782",
		"name": "Dragens restaurant",
		"address": "Oslo",
		"latitude": 59.942366,
		"longitude": 10.8116849,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4.3,
		"googleRatingCount": 264,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 1:00 AM; Saturday: 1:00 PM – 1:00 AM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-6684083405",
		"name": "Dronningens kebab",
		"address": "Oslo",
		"latitude": 59.911168,
		"longitude": 10.7484022,
		"cuisines": [
			"kebab",
			"falafel"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1927,
		"openingHours": "Monday: 9:30 AM – 4:00 AM; Tuesday: 9:30 AM – 4:00 AM; Wednesday: 9:30 AM – 4:00 AM; Thursday: 9:30 AM – 4:00 AM; Friday: 9:30 AM – 4:30 AM; Saturday: 9:30 AM – 4:30 AM; Sunday: 9:30 AM – 4:00 AM"
	},
	{
		"id": "osm-10709309325",
		"name": "Dronningens kebab",
		"address": "Oslo",
		"latitude": 59.9465416,
		"longitude": 10.7726783,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Su 09:30-23:00",
		"googleRating": 4.3,
		"googleRatingCount": 1927
	},
	{
		"id": "osm-1537546166",
		"name": "Dronningens Kebab",
		"address": "Oslo",
		"latitude": 59.9106138,
		"longitude": 10.7673019,
		"cuisines": [
			"kebab",
			"burger"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1927,
		"openingHours": "Monday: 9:30 AM – 4:00 AM; Tuesday: 9:30 AM – 4:00 AM; Wednesday: 9:30 AM – 4:00 AM; Thursday: 9:30 AM – 4:00 AM; Friday: 9:30 AM – 4:30 AM; Saturday: 9:30 AM – 4:30 AM; Sunday: 9:30 AM – 4:00 AM"
	},
	{
		"id": "osm-13237500983",
		"name": "Duken",
		"address": "Oslo",
		"latitude": 59.9254555,
		"longitude": 10.7609688,
		"cuisines": [
			"italian_pizza"
		],
		"googleRating": 4.7,
		"googleRatingCount": 20,
		"openingHours": "Monday: Closed; Tuesday: 3:00 PM – 12:00 AM; Wednesday: 3:00 PM – 12:00 AM; Thursday: 3:00 PM – 1:00 AM; Friday: 3:00 PM – 2:00 AM; Saturday: 3:00 PM – 2:00 AM; Sunday: 3:00 – 11:00 PM"
	},
	{
		"id": "osm-6368904985",
		"name": "Døgnvill burger",
		"address": "Oslo",
		"latitude": 59.9082267,
		"longitude": 10.7537186,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 11:30-22:00; Fr 11:30-23:00; Sa 12:00-23:00; Su 13:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 1640
	},
	{
		"id": "osm-2045457365",
		"name": "Døgnvill Burger",
		"address": "Oslo",
		"latitude": 59.9217225,
		"longitude": 10.7516596,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 12:00-24:00; Fr-Sa 12:00-01:00; Su 12:00-23:00",
		"googleRating": 4.5,
		"googleRatingCount": 1781
	},
	{
		"id": "osm-1329411519",
		"name": "East Kitchen",
		"address": "Oslo",
		"latitude": 59.9207198,
		"longitude": 10.7575475,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.4,
		"googleRatingCount": 537,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-11378298623",
		"name": "Eat Thai",
		"address": "Oslo",
		"latitude": 59.9117353,
		"longitude": 10.7427761,
		"cuisines": [
			"thai"
		],
		"googleRating": 3.5,
		"googleRatingCount": 145,
		"openingHours": "Monday: 11:00 AM – 7:00 PM; Tuesday: 11:00 AM – 7:00 PM; Wednesday: 11:00 AM – 7:00 PM; Thursday: 11:00 AM – 7:00 PM; Friday: 11:00 AM – 7:00 PM; Saturday: 12:00 – 6:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1362969403",
		"name": "Eataly Ristorante",
		"address": "Oslo",
		"latitude": 59.909216,
		"longitude": 10.7241874,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.1,
		"googleRatingCount": 1337,
		"openingHours": "Monday: 11:30 AM – 9:00 PM; Tuesday: 11:30 AM – 9:00 PM; Wednesday: 11:30 AM – 9:00 PM; Thursday: 11:30 AM – 9:00 PM; Friday: 11:30 AM – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-3210767983",
		"name": "EatHappy Vegan - Fredensborgveien",
		"address": "Oslo",
		"latitude": 59.919145,
		"longitude": 10.748152,
		"cuisines": [
			"vietnamese"
		],
		"openingHours": "Tu-Fr 12:00-20:00; Sa-Su 13:00-20:00",
		"googleRating": 4.9,
		"googleRatingCount": 425
	},
	{
		"id": "osm-311268456",
		"name": "Egon Byporten",
		"address": "Oslo",
		"latitude": 59.911853,
		"longitude": 10.751104,
		"cuisines": [
			"pizza",
			"burger",
			"meat",
			"pasta"
		],
		"openingHours": "Mo-Th 11:00-23:00; Fr-Sa 11:00-23:30; Su 11:00-23:00",
		"googleRating": 3.8,
		"googleRatingCount": 3459
	},
	{
		"id": "osm-2785848205",
		"name": "Egon Karl Johan",
		"address": "Oslo",
		"latitude": 59.914203,
		"longitude": 10.737883,
		"cuisines": [
			"pizza",
			"burger",
			"meat",
			"pasta"
		],
		"openingHours": "Mo-Su 10:00-24:00",
		"googleRating": 3.9,
		"googleRatingCount": 2806
	},
	{
		"id": "osm-266562503",
		"name": "Egon Nordstrand",
		"address": "Oslo",
		"latitude": 59.861313,
		"longitude": 10.800466,
		"cuisines": [
			"pizza",
			"burger",
			"meat",
			"pasta"
		],
		"openingHours": "Mo-Sa 10:00-23:00; Su 11:00-23:00",
		"googleRating": 3.9,
		"googleRatingCount": 721
	},
	{
		"id": "osm-1989013637",
		"name": "Egon Storo",
		"address": "Oslo",
		"latitude": 59.9468647,
		"longitude": 10.7753114,
		"cuisines": [
			"pizza",
			"burger",
			"meat",
			"pasta"
		],
		"openingHours": "Mo-Th 10:00-23:00; Fr-Sa 10:00-24:00; Su 11:00-23:00",
		"googleRating": 3.9,
		"googleRatingCount": 1004
	},
	{
		"id": "osm-1989017228",
		"name": "Egon Ullevål",
		"address": "Oslo",
		"latitude": 59.949432,
		"longitude": 10.736354,
		"cuisines": [
			"pizza",
			"burger",
			"meat",
			"pasta"
		],
		"openingHours": "Mo-Sa 10:00-23:00; Su 11:00-23:00",
		"googleRating": 3.8,
		"googleRatingCount": 616
	},
	{
		"id": "osm-1287798779",
		"name": "El Aroma",
		"address": "Oslo",
		"latitude": 59.9243701,
		"longitude": 10.7238344,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4.3,
		"googleRatingCount": 175
	},
	{
		"id": "osm-3965801259",
		"name": "El Camino",
		"address": "Oslo",
		"latitude": 59.916853,
		"longitude": 10.714929,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4.3,
		"googleRatingCount": 479,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 11:00 AM – 9:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-9059988583",
		"name": "El Camino",
		"address": "Oslo",
		"latitude": 59.908296,
		"longitude": 10.7550812,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa,Su 12:00-20:00",
		"googleRating": 4,
		"googleRatingCount": 494
	},
	{
		"id": "osm-11375026462",
		"name": "El Camino",
		"address": "Oslo",
		"latitude": 59.9252536,
		"longitude": 10.7226608,
		"cuisines": [
			"tex-mex"
		],
		"openingHours": "Mo 11:00-21:00; Tu,We 11:00-23:00; Th,Fr 11:00-23:30; Sa 11:30-23:30; Su 11:30-21:00",
		"googleRating": 3.9,
		"googleRatingCount": 466
	},
	{
		"id": "osm-2365987214",
		"name": "Emma’s Bagels",
		"address": "Oslo",
		"latitude": 59.928275,
		"longitude": 10.752567,
		"cuisines": [
			"bagel"
		],
		"googleRating": 4.8,
		"googleRatingCount": 69,
		"openingHours": "Monday: Closed; Tuesday: 8:00 AM – 3:00 PM; Wednesday: 8:00 AM – 3:00 PM; Thursday: 8:00 AM – 3:00 PM; Friday: 8:00 AM – 3:00 PM; Saturday: 9:00 AM – 3:00 PM; Sunday: 9:00 AM – 3:00 PM"
	},
	{
		"id": "osm-2811429719",
		"name": "Enoteca",
		"address": "Oslo",
		"latitude": 59.918403,
		"longitude": 10.705339,
		"cuisines": [
			"pizza"
		],
		"openingHours": "11:30-01:00",
		"googleRating": 4.3,
		"googleRatingCount": 213
	},
	{
		"id": "osm-12461261297",
		"name": "Estar Sushi",
		"address": "Oslo",
		"latitude": 59.9275128,
		"longitude": 10.7127817,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4,
		"googleRatingCount": 97,
		"openingHours": "Monday: Closed; Tuesday: 1:00 – 8:00 PM; Wednesday: 1:00 – 8:00 PM; Thursday: 1:00 – 8:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-6665258470",
		"name": "Falafel me",
		"address": "Oslo",
		"latitude": 59.913441,
		"longitude": 10.749295,
		"cuisines": [
			"falafel"
		],
		"googleRating": 4,
		"googleRatingCount": 360,
		"openingHours": "Monday: 10:00 AM – 12:00 AM; Tuesday: 10:00 AM – 12:00 AM; Wednesday: 10:00 AM – 12:00 AM; Thursday: 10:00 AM – 12:00 AM; Friday: 10:00 AM – 3:30 AM; Saturday: 10:00 AM – 3:30 AM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-7984723389",
		"name": "Falafel n' Juice",
		"address": "Oslo",
		"latitude": 59.920501,
		"longitude": 10.733653,
		"cuisines": [
			"middle_eastern",
			"juice"
		],
		"openingHours": "Mo-Fr 10:00-21:00; Sa 12:00-20:00",
		"googleRating": 4.9,
		"googleRatingCount": 1233
	},
	{
		"id": "osm-2790202300",
		"name": "Falaffel n' Juice",
		"address": "Oslo",
		"latitude": 59.9257295,
		"longitude": 10.759011,
		"cuisines": [
			"middle_eastern",
			"juice"
		],
		"openingHours": "Mo-Su 11:00-23:00",
		"googleRating": 4.9,
		"googleRatingCount": 1233
	},
	{
		"id": "osm-11119864105",
		"name": "Feniqia",
		"address": "Oslo",
		"latitude": 59.9061765,
		"longitude": 10.7607995,
		"cuisines": [
			"lebanese"
		],
		"googleRating": 4.4,
		"googleRatingCount": 955,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-4738519183",
		"name": "Fiskeriet",
		"address": "Oslo",
		"latitude": 59.9146384,
		"longitude": 10.7498581,
		"cuisines": [
			"fish"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa 10:00-21:00",
		"googleRating": 4.4,
		"googleRatingCount": 3068
	},
	{
		"id": "osm-13077469388",
		"name": "Fiskeriet",
		"address": "Oslo",
		"latitude": 59.9064042,
		"longitude": 10.7573088,
		"cuisines": [
			"fish"
		],
		"googleRating": 4.4,
		"googleRatingCount": 3068,
		"openingHours": "Monday: 11:00 AM – 10:30 PM; Tuesday: 11:00 AM – 10:30 PM; Wednesday: 11:00 AM – 10:30 PM; Thursday: 11:00 AM – 10:30 PM; Friday: 11:00 AM – 10:30 PM; Saturday: 12:00 – 10:30 PM; Sunday: 12:00 – 10:30 PM"
	},
	{
		"id": "osm-5734284194",
		"name": "Flamenco Pizza",
		"address": "Oslo",
		"latitude": 59.8840165,
		"longitude": 10.785806,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.4,
		"googleRatingCount": 17,
		"openingHours": "Monday: 1:00 – 11:00 PM; Tuesday: 1:00 – 11:00 PM; Wednesday: 1:00 – 11:00 PM; Thursday: 1:00 – 11:30 PM; Friday: 1:00 PM – 1:00 AM; Saturday: 1:00 PM – 1:00 AM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-10692882479",
		"name": "Flamme burger",
		"address": "Oslo",
		"latitude": 59.9189587,
		"longitude": 10.7592255,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.1,
		"googleRatingCount": 314,
		"openingHours": "Monday: 1:00 – 10:00 PM; Tuesday: 1:00 – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 11:00 AM – 11:00 PM"
	},
	{
		"id": "osm-3835842882",
		"name": "Flavour",
		"address": "Oslo",
		"latitude": 59.9141235,
		"longitude": 10.7673593,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4.8,
		"googleRatingCount": 189,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 11:00 PM; Wednesday: 3:00 – 11:00 PM; Thursday: 3:00 – 11:00 PM; Friday: 3:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: 3:00 – 11:00 PM"
	},
	{
		"id": "osm-5863322989",
		"name": "Florenze Lunsj",
		"address": "Oslo",
		"latitude": 59.922522,
		"longitude": 10.740685,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 5071,
		"openingHours": "Monday: 4:00 – 9:30 PM; Tuesday: 12:00 – 9:30 PM; Wednesday: 12:00 – 9:30 PM; Thursday: 12:00 – 9:30 PM; Friday: 12:00 – 9:30 PM; Saturday: 12:00 – 9:30 PM; Sunday: 4:00 – 9:30 PM"
	},
	{
		"id": "osm-11533672380",
		"name": "Fly Chicken",
		"address": "Oslo",
		"latitude": 59.9186432,
		"longitude": 10.6357731,
		"cuisines": [
			"chicken",
			"burger"
		],
		"openingHours": "Mo-Fr 11:00-21:30; Sa 11:00-21:00; Su 13:00-21:00",
		"googleRating": 3.9,
		"googleRatingCount": 114
	},
	{
		"id": "osm-12647263603",
		"name": "Fly Chicken",
		"address": "Oslo",
		"latitude": 59.926984,
		"longitude": 10.7772539,
		"cuisines": [
			"chicken"
		],
		"googleRating": 4.6,
		"googleRatingCount": 221,
		"openingHours": "Monday: 11:30 AM – 10:00 PM; Tuesday: 11:30 AM – 10:00 PM; Wednesday: 11:30 AM – 10:00 PM; Thursday: 11:30 AM – 10:00 PM; Friday: 11:30 AM – 10:00 PM; Saturday: 11:30 AM – 10:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-838853684",
		"name": "Foccaceria Paradiso",
		"address": "Oslo",
		"latitude": 59.9236776,
		"longitude": 10.757395,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.2,
		"googleRatingCount": 2786,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:30 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-126587819",
		"name": "Folkets Burger",
		"address": "Oslo",
		"latitude": 59.9246742,
		"longitude": 10.7889721,
		"cuisines": [
			"kebab",
			"burger",
			"pizza"
		],
		"googleRating": 3.8,
		"googleRatingCount": 399,
		"openingHours": "Monday: 10:00 AM – 11:00 PM; Tuesday: 10:00 AM – 11:00 PM; Wednesday: 10:00 AM – 11:00 PM; Thursday: 10:00 AM – 11:00 PM; Friday: 10:00 AM – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-1975692020",
		"name": "Foodie Asian Restaurant",
		"address": "Oslo",
		"latitude": 59.9127031,
		"longitude": 10.7362603,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Su 14:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 789
	},
	{
		"id": "osm-13522633901",
		"name": "Fornebu Pizza",
		"address": "Solgangsbrisen 5, Oslo",
		"latitude": 59.8960858,
		"longitude": 10.6218727,
		"cuisines": [
			"burger",
			"kebab",
			"pizza"
		],
		"openingHours": "Su-Tu, Th-Fr 11:00-22:00; We 09:00-22:00; Sa 13:00-22:00",
		"googleRating": 3.7,
		"googleRatingCount": 325
	},
	{
		"id": "osm-4635606749",
		"name": "Freddy Fuego",
		"address": "Oslo",
		"latitude": 59.9177621,
		"longitude": 10.7539042,
		"cuisines": [
			"international"
		],
		"openingHours": "11:00-21:00",
		"googleRating": 4.6,
		"googleRatingCount": 1390
	},
	{
		"id": "osm-11195652913",
		"name": "French Tacos and Burgers avenue",
		"address": "Oslo",
		"latitude": 59.9167975,
		"longitude": 10.7158051,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 12:00-23:00; Su 13:00-23:00",
		"googleRating": 4.8,
		"googleRatingCount": 270
	},
	{
		"id": "osm-11937375869",
		"name": "Fru Nilsen",
		"address": "Oslo",
		"latitude": 59.9153224,
		"longitude": 10.74108,
		"cuisines": [
			"sausage"
		],
		"openingHours": "Tu-Th 11:00-23:00; Fr-Sa 11:00-03:00",
		"googleRating": 4.9,
		"googleRatingCount": 33
	},
	{
		"id": "osm-11884847917",
		"name": "Frysja Sushi",
		"address": "Oslo",
		"latitude": 59.9658647,
		"longitude": 10.7720445,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.6,
		"googleRatingCount": 32,
		"openingHours": "Monday: Closed; Tuesday: 2:00 – 8:00 PM; Wednesday: 2:00 – 8:00 PM; Thursday: 2:00 – 8:00 PM; Friday: 1:00 – 8:00 PM; Saturday: 1:00 – 8:00 PM; Sunday: 1:00 – 8:00 PM"
	},
	{
		"id": "osm-12973919939",
		"name": "Frøya Sjømat",
		"address": "Oslo",
		"latitude": 59.9288014,
		"longitude": 10.805072,
		"cuisines": [
			"fish_and_chips"
		],
		"googleRating": 4.5,
		"googleRatingCount": 14,
		"openingHours": "Monday: Closed; Tuesday: Closed; Wednesday: Closed; Thursday: 11:00 AM – 5:00 PM; Friday: 11:00 AM – 5:00 PM; Saturday: 11:00 AM – 5:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-10711465616",
		"name": "Fukuya",
		"address": "Oslo",
		"latitude": 59.9222499,
		"longitude": 10.7044843,
		"cuisines": [
			"asian",
			"sushi"
		],
		"openingHours": "Mo-Th 14:00-22:00; Fr-Sa 12:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 111
	},
	{
		"id": "osm-1274798437",
		"name": "Fyret",
		"address": "Oslo",
		"latitude": 59.915179,
		"longitude": 10.748377,
		"cuisines": [
			"regional"
		],
		"googleRating": 4.6,
		"googleRatingCount": 363,
		"openingHours": "Monday: 11:00 AM – 1:00 AM; Tuesday: 11:00 AM – 1:00 AM; Wednesday: 11:00 AM – 1:00 AM; Thursday: 11:00 AM – 1:00 AM; Friday: 11:00 AM – 2:00 AM; Saturday: 12:00 PM – 2:00 AM; Sunday: Closed"
	},
	{
		"id": "osm-11035455186",
		"name": "Galgeberg Fastfood",
		"address": "Oslo",
		"latitude": 59.907291,
		"longitude": 10.7820916,
		"cuisines": [
			"burger",
			"kebab",
			"pizza"
		],
		"googleRating": 4.6,
		"googleRatingCount": 16,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 11:59 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-4568651087",
		"name": "Galgeberg sushi",
		"address": "Oslo",
		"latitude": 59.9078391,
		"longitude": 10.7814355,
		"cuisines": [
			"japanese"
		],
		"googleRating": 4.5,
		"googleRatingCount": 219,
		"openingHours": "Monday: 1:00 – 9:00 PM; Tuesday: 1:00 – 9:00 PM; Wednesday: 1:00 – 9:00 PM; Thursday: 1:00 – 9:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-5870421800",
		"name": "Gangnam",
		"address": "Oslo",
		"latitude": 59.9110585,
		"longitude": 10.7208983,
		"cuisines": [
			"korean"
		],
		"openingHours": "Su, Tu-Th 16:00-21:00; Fr-Sa 16:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 1014
	},
	{
		"id": "osm-10674613153",
		"name": "Gaza Kjøkken",
		"address": "Oslo",
		"latitude": 59.9144701,
		"longitude": 10.7471407,
		"cuisines": [
			"middle_eastern"
		],
		"openingHours": "Mo-Th 11:00-23:00, Fr,Sa 11:00-04:00, Su 12:00-23:00",
		"googleRating": 4.6,
		"googleRatingCount": 1010
	},
	{
		"id": "osm-13359571939",
		"name": "Genji Izakaya Ramen",
		"address": "Oslo",
		"latitude": 59.9107173,
		"longitude": 10.7455927,
		"cuisines": [
			"japanese",
			"sushi",
			"ramen"
		],
		"openingHours": "Mo-Su 12:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 398
	},
	{
		"id": "osm-2788528349",
		"name": "Ghost Pizza",
		"address": "Oslo",
		"latitude": 59.927672,
		"longitude": 10.7137912,
		"cuisines": [
			"italian",
			"pizza",
			"dessert"
		],
		"openingHours": "Mo-Su 15:30-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 784
	},
	{
		"id": "osm-9717150517",
		"name": "Girotondo",
		"address": "Oslo",
		"latitude": 59.9151459,
		"longitude": 10.7501007,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 16:00-22:00; Sa 13:00-22:00; Su 13:00-21:00",
		"googleRating": 4.6,
		"googleRatingCount": 1110
	},
	{
		"id": "osm-12103401797",
		"name": "Gladsmat",
		"address": "Oslo",
		"latitude": 59.9512957,
		"longitude": 10.7863844,
		"cuisines": [
			"pizza",
			"burger",
			"gyro"
		],
		"googleRating": 4.8,
		"googleRatingCount": 65,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 9:30 PM; Wednesday: 3:00 – 9:30 PM; Thursday: 3:00 – 9:30 PM; Friday: 3:00 – 9:30 PM; Saturday: 2:00 – 9:30 PM; Sunday: 2:00 – 9:30 PM"
	},
	{
		"id": "osm-12704735103",
		"name": "Gohan Matcha",
		"address": "Oslo",
		"latitude": 59.9143888,
		"longitude": 10.7500192,
		"cuisines": [
			"japanese"
		],
		"openingHours": "Mo-Fr 13:00-20:00; Sa 12:00-20:00; Su 13:00-18:00",
		"googleRating": 3.8,
		"googleRatingCount": 259
	},
	{
		"id": "osm-4346614026",
		"name": "Golden Mountain",
		"address": "Oslo",
		"latitude": 59.913201,
		"longitude": 10.734053,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
		"googleRating": 3.9,
		"googleRatingCount": 265
	},
	{
		"id": "osm-11884847916",
		"name": "Grains Bakeri (Frysja)",
		"address": "Oslo",
		"latitude": 59.9657871,
		"longitude": 10.7718925,
		"cuisines": [
			"cake",
			"coffee_shop",
			"french",
			"italian_pizza"
		],
		"openingHours": "Mo-Sa 08:00-22:00; Su 09:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 110
	},
	{
		"id": "osm-5854272907",
		"name": "Grand Pizza",
		"address": "Oslo",
		"latitude": 59.9138187,
		"longitude": 10.7571132,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.9,
		"googleRatingCount": 151
	},
	{
		"id": "osm-7185464151",
		"name": "Green Taste",
		"address": "Oslo",
		"latitude": 59.902928,
		"longitude": 10.767329,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Su 13:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 214
	},
	{
		"id": "osm-1988684938",
		"name": "Grill's Ville",
		"address": "Oslo",
		"latitude": 59.916462,
		"longitude": 10.714784,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.5,
		"googleRatingCount": 513,
		"openingHours": "Monday: 12:00 – 9:45 PM; Tuesday: 11:00 AM – 9:45 PM; Wednesday: 11:00 AM – 9:45 PM; Thursday: 11:00 AM – 4:00 AM; Friday: 12:00 PM – 4:00 AM; Saturday: 12:00 PM – 4:00 AM; Sunday: 12:00 – 9:45 PM"
	},
	{
		"id": "osm-3768066724",
		"name": "Grorud Kebab Og Pizza",
		"address": "Oslo",
		"latitude": 59.9613511,
		"longitude": 10.8819053,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4,
		"googleRatingCount": 49,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 11:00 AM – 9:30 PM; Sunday: 11:00 AM – 9:00 PM"
	},
	{
		"id": "osm-12912979726",
		"name": "Grotto",
		"address": "Oslo",
		"latitude": 59.9220004,
		"longitude": 10.7390268,
		"cuisines": [
			"french"
		],
		"googleRating": 4.3,
		"googleRatingCount": 140,
		"openingHours": "Monday: Closed; Tuesday: 5:00 – 11:30 PM; Wednesday: 5:00 – 11:30 PM; Thursday: 5:00 – 11:30 PM; Friday: 5:00 – 11:30 PM; Saturday: 5:00 – 11:30 PM; Sunday: 5:00 – 11:30 PM"
	},
	{
		"id": "osm-5094785588",
		"name": "Grytelokket",
		"address": "Oslo",
		"latitude": 59.9154725,
		"longitude": 10.755619,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.1,
		"googleRatingCount": 557,
		"openingHours": "Monday: 11:00 AM – 11:30 PM; Tuesday: 11:00 AM – 11:30 PM; Wednesday: 11:00 AM – 12:00 AM; Thursday: 11:00 AM – 12:00 AM; Friday: 11:00 AM – 3:30 AM; Saturday: 11:00 AM – 3:30 AM; Sunday: 12:00 PM – 12:00 AM"
	},
	{
		"id": "osm-1329411540",
		"name": "Grød Oslo",
		"address": "Oslo",
		"latitude": 59.9187282,
		"longitude": 10.7568036,
		"cuisines": [
			"scandinavian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 98,
		"openingHours": "Monday: 7:30 AM – 7:00 PM; Tuesday: 7:30 AM – 7:00 PM; Wednesday: 7:30 AM – 7:00 PM; Thursday: 7:30 AM – 7:00 PM; Friday: 7:30 AM – 7:00 PM; Saturday: 9:00 AM – 6:00 PM; Sunday: 9:00 AM – 6:00 PM"
	},
	{
		"id": "osm-3664306360",
		"name": "Grønland pizza & kebab",
		"address": "Oslo",
		"latitude": 59.9123509,
		"longitude": 10.7652227,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4,
		"googleRatingCount": 295,
		"openingHours": "Monday: 11:00 AM – 3:00 AM; Tuesday: 11:00 AM – 3:00 AM; Wednesday: 11:00 AM – 1:00 AM; Thursday: 11:00 AM – 3:00 AM; Friday: 11:00 AM – 3:00 AM; Saturday: 11:00 AM – 3:00 AM; Sunday: 12:00 PM – 3:00 AM"
	},
	{
		"id": "osm-816420559",
		"name": "Gutta fra Calcutta",
		"address": "Oslo",
		"latitude": 59.927841,
		"longitude": 10.7493162,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Su 15:00-23:00",
		"googleRating": 4.2,
		"googleRatingCount": 354
	},
	{
		"id": "osm-1971269630",
		"name": "Habibi Restaurant",
		"address": "Oslo",
		"latitude": 59.914414,
		"longitude": 10.747056,
		"cuisines": [
			"palestinian",
			"lebanese"
		],
		"openingHours": "Mo-Fr 15:00-23:00; Sa 12:00-23:00; Su 15:00-22:00; Mo-Th 16:00-24:00, Fr 16:00-01:00, Sa 12:00-01:00, Su 12:00-24:00",
		"googleRating": 4.2,
		"googleRatingCount": 1337
	},
	{
		"id": "osm-1616641810",
		"name": "Hai Sushi",
		"address": "Oslo",
		"latitude": 59.9076447,
		"longitude": 10.8192703,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.3,
		"googleRatingCount": 252
	},
	{
		"id": "osm-1960935484",
		"name": "Hanami",
		"address": "Oslo",
		"latitude": 59.908226,
		"longitude": 10.721138,
		"cuisines": [
			"japanese"
		],
		"openingHours": "Mo-Th 11:00-01:00; Fr 11:00-02:00; Sa 13:00-02:00; Su 15:00-24:00",
		"googleRating": 4.3,
		"googleRatingCount": 1192
	},
	{
		"id": "osm-5091617741",
		"name": "Handmade",
		"address": "Oslo",
		"latitude": 59.9192704,
		"longitude": 10.763709,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 11:00-23:00; Fr,Sa 11:00-03:30, Su 13:00-23:00",
		"googleRating": 3.9,
		"googleRatingCount": 382
	},
	{
		"id": "osm-12901874953",
		"name": "Hankki",
		"address": "Oslo",
		"latitude": 59.9249429,
		"longitude": 10.7426954,
		"cuisines": [
			"korean"
		]
	},
	{
		"id": "osm-1769606910",
		"name": "Happolati",
		"address": "Oslo",
		"latitude": 59.918231,
		"longitude": 10.740284,
		"cuisines": [
			"regional"
		],
		"openingHours": "Tu-Sa 17:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 396
	},
	{
		"id": "osm-12031991169",
		"name": "Happy Ending",
		"address": "Oslo",
		"latitude": 59.919319,
		"longitude": 10.7511998,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4.6,
		"googleRatingCount": 76,
		"openingHours": "Monday: Closed; Tuesday: 5:00 – 11:00 PM; Wednesday: 5:00 PM – 1:00 AM; Thursday: 5:00 PM – 1:00 AM; Friday: 5:00 PM – 2:00 AM; Saturday: 5:00 PM – 2:00 AM; Sunday: Closed"
	},
	{
		"id": "osm-5094785565",
		"name": "Happy Time",
		"address": "Oslo",
		"latitude": 59.9190949,
		"longitude": 10.7595715,
		"cuisines": [
			"kebab",
			"pizza",
			"burger"
		],
		"openingHours": "Fr,Sa 11:00-04:00, Su-Th 11:00-24:00",
		"googleRating": 3.1,
		"googleRatingCount": 28
	},
	{
		"id": "osm-9151307965",
		"name": "Hasle Linie Gastropub",
		"address": "Oslo",
		"latitude": 59.926988,
		"longitude": 10.793769,
		"cuisines": [
			"international",
			"fish_and_chips",
			"burger"
		],
		"openingHours": "Mo-Th 11:00-23:00, Fr 11:00-01:00, Sa 12:00-01:00, Su 12:00-23:30",
		"googleRating": 4,
		"googleRatingCount": 682
	},
	{
		"id": "osm-7111734043",
		"name": "Haugerud Pizza og Burger",
		"address": "Oslo",
		"latitude": 59.9225956,
		"longitude": 10.8568056,
		"cuisines": [
			"kebab"
		],
		"openingHours": "13:15-22:45",
		"googleRating": 3.8,
		"googleRatingCount": 284
	},
	{
		"id": "osm-1053666516",
		"name": "Havsmak",
		"address": "Oslo",
		"latitude": 59.915057,
		"longitude": 10.728644,
		"cuisines": [
			"seafood"
		],
		"googleRating": 4.3,
		"googleRatingCount": 70,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1349742672",
		"name": "Hayeli",
		"address": "Oslo",
		"latitude": 59.951047,
		"longitude": 10.8672261,
		"cuisines": [
			"indian"
		],
		"googleRating": 3.9,
		"googleRatingCount": 240,
		"openingHours": "Monday: 3:00 – 11:00 PM; Tuesday: 3:00 – 11:00 PM; Wednesday: 3:00 – 11:00 PM; Thursday: 3:00 – 11:00 PM; Friday: 3:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-3195514188",
		"name": "Hereford Steakhouse",
		"address": "Oslo",
		"latitude": 59.9148829,
		"longitude": 10.7398052,
		"cuisines": [
			"steak"
		],
		"openingHours": "Mo-Su 15:00-22:30",
		"googleRating": 3.9,
		"googleRatingCount": 1037
	},
	{
		"id": "osm-11469942025",
		"name": "Himalayan Nepali Restaurant",
		"address": "Oslo",
		"latitude": 59.905573,
		"longitude": 10.7677145,
		"cuisines": [
			"indian",
			"nepalese"
		],
		"openingHours": "Tu-Th 15:00-21:30; Mo 16:00-21:00; Fr-Su 15:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 272
	},
	{
		"id": "osm-3010287644",
		"name": "Hokkigai Sushi",
		"address": "Oslo",
		"latitude": 59.922837,
		"longitude": 10.738306,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.3,
		"googleRatingCount": 123,
		"openingHours": "Monday: 3:00 – 10:00 PM; Tuesday: 3:00 – 10:00 PM; Wednesday: 3:00 – 10:00 PM; Thursday: 3:00 – 10:00 PM; Friday: 3:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-137620239",
		"name": "Holtet Pizza & Grill",
		"address": "Oslo",
		"latitude": 59.8821457,
		"longitude": 10.7831855,
		"cuisines": [
			"pizza",
			"kebab",
			"hamburger"
		],
		"googleRating": 4.2,
		"googleRatingCount": 284,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 1:00 AM; Saturday: 11:00 AM – 1:00 AM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-4858182561",
		"name": "Hon San",
		"address": "Oslo",
		"latitude": 59.9128746,
		"longitude": 10.7374338,
		"cuisines": [
			"chinese",
			"asian"
		],
		"googleRating": 4.2,
		"googleRatingCount": 2253,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 4:00 – 10:00 PM; Sunday: 4:00 – 10:00 PM"
	},
	{
		"id": "osm-264768993",
		"name": "HOT SPICY GRILL",
		"address": "Oslo",
		"latitude": 59.8797672,
		"longitude": 10.8055523,
		"cuisines": [
			"pizza",
			"burger",
			"kebab",
			"indian"
		],
		"openingHours": "Mo-Su 11:00-04:00",
		"googleRating": 2.5,
		"googleRatingCount": 206
	},
	{
		"id": "osm-7108900707",
		"name": "Hot Temper",
		"address": "Oslo",
		"latitude": 59.9211608,
		"longitude": 10.7585635,
		"cuisines": [
			"chicken"
		],
		"googleRating": 4.6,
		"googleRatingCount": 642,
		"openingHours": "Monday: 4:00 – 9:00 PM; Tuesday: Closed; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 9:00 PM; Friday: 4:00 – 9:30 PM; Saturday: 2:00 – 9:30 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-12616053901",
		"name": "Hotpot Oslo",
		"address": "Oslo",
		"latitude": 59.911176,
		"longitude": 10.7631315,
		"cuisines": [
			"chinese"
		],
		"googleRating": 3.8,
		"googleRatingCount": 69,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 11:00 PM; Saturday: 2:00 – 11:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-5273825793",
		"name": "Hovseter Grill",
		"address": "Oslo",
		"latitude": 59.9500067,
		"longitude": 10.654305,
		"cuisines": [
			"burger",
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa,Su 13:00-22:00",
		"googleRating": 3.8,
		"googleRatingCount": 137
	},
	{
		"id": "osm-8089702698",
		"name": "Hrimnir Ramen",
		"address": "Oslo",
		"latitude": 59.921388,
		"longitude": 10.751334,
		"cuisines": [
			"japanese",
			"ramen"
		],
		"openingHours": "Su 13:00-21:30; Mo-Sa 13:00-22:30",
		"googleRating": 4.4,
		"googleRatingCount": 1481
	},
	{
		"id": "osm-5094785586",
		"name": "Hungry Birds",
		"address": "Oslo",
		"latitude": 59.9166356,
		"longitude": 10.7572509,
		"cuisines": [
			"pizza",
			"burger",
			"kebab",
			"falafel"
		],
		"googleRating": 4.8,
		"googleRatingCount": 255,
		"openingHours": "Monday: 11:00 AM – 11:30 PM; Tuesday: 11:30 AM – 11:00 PM; Wednesday: 11:30 AM – 11:00 PM; Thursday: 11:30 AM – 11:00 PM; Friday: 11:00 AM – 1:00 AM; Saturday: 11:30 AM – 12:00 AM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-6376869225",
		"name": "Hy's Sushi og Wok",
		"address": "Oslo",
		"latitude": 59.919807,
		"longitude": 10.791071,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Su 14:00-21:15",
		"googleRating": 4.1,
		"googleRatingCount": 230
	},
	{
		"id": "osm-12669709319",
		"name": "Ichi Sushi",
		"address": "Oslo",
		"latitude": 59.9289102,
		"longitude": 10.7770597,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.9,
		"googleRatingCount": 37
	},
	{
		"id": "osm-11809947580",
		"name": "Il Colosseo",
		"address": "Oslo",
		"latitude": 59.930186,
		"longitude": 10.7131381,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 633,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 10:00 PM; Saturday: 2:00 – 10:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-10659614884",
		"name": "Il Professore",
		"address": "Oslo",
		"latitude": 59.9085172,
		"longitude": 10.7690816,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 272
	},
	{
		"id": "osm-3729794725",
		"name": "Il Vero",
		"address": "Oslo",
		"latitude": 59.9078738,
		"longitude": 10.7590191,
		"cuisines": [
			"italian",
			"pizza"
		],
		"googleRating": 2.8,
		"googleRatingCount": 34,
		"openingHours": "Monday: 10:00 AM – 10:00 PM; Tuesday: 10:00 AM – 10:00 PM; Wednesday: 10:00 AM – 10:00 PM; Thursday: 10:00 AM – 10:00 PM; Friday: 10:00 AM – 10:00 PM; Saturday: 10:00 AM – 8:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1711617558",
		"name": "Illegal Burger",
		"address": "Oslo",
		"latitude": 59.91575,
		"longitude": 10.7487202,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 14:00-23:00; Fr,Sa 14:00-01:00; Su 14:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 2985
	},
	{
		"id": "osm-708811598",
		"name": "Indi Gastrobar",
		"address": "Oslo",
		"latitude": 59.908649,
		"longitude": 10.77941,
		"cuisines": [
			"indian"
		],
		"openingHours": "We-Mo 16:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 131
	},
	{
		"id": "osm-12710774542",
		"name": "Indian Streetfood & Co",
		"address": "Oslo",
		"latitude": 59.9038871,
		"longitude": 10.7568194,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Th 15:00-22:00; Fr 15:00-23:00; Sa,Su 00:00-23:00",
		"googleRating": 4.6,
		"googleRatingCount": 525
	},
	{
		"id": "osm-12731854594",
		"name": "Indian Takeaway",
		"address": "Oslo",
		"latitude": 59.9215677,
		"longitude": 10.7744211,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 15:00-21:45; Su 13:30-21:30",
		"googleRating": 4.7,
		"googleRatingCount": 840
	},
	{
		"id": "osm-8946642782",
		"name": "Indique Flavours",
		"address": "Oslo",
		"latitude": 59.946145,
		"longitude": 10.6435485,
		"cuisines": [
			"indian"
		],
		"openingHours": "Tu-Su 16:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 157
	},
	{
		"id": "osm-1312363753",
		"name": "IndiSpice",
		"address": "Oslo",
		"latitude": 59.9196489,
		"longitude": 10.7337075,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Th 16:00-22:00; Fr, Sa 16:00-22:30; Su 15:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 703
	},
	{
		"id": "osm-10692828654",
		"name": "Isan Kitchen",
		"address": "Oslo",
		"latitude": 59.921481,
		"longitude": 10.75943,
		"cuisines": [
			"thai"
		],
		"googleRating": 5,
		"googleRatingCount": 2
	},
	{
		"id": "osm-7923533702",
		"name": "Istanbul Kebab",
		"address": "Oslo",
		"latitude": 59.913115,
		"longitude": 10.76109,
		"cuisines": [
			"turkish"
		],
		"googleRating": 4.1,
		"googleRatingCount": 1194,
		"openingHours": "Monday: 10:00 AM – 12:00 AM; Tuesday: 10:00 AM – 12:00 AM; Wednesday: 10:00 AM – 12:00 AM; Thursday: 10:00 AM – 12:00 AM; Friday: 10:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 11:00 AM – 12:00 AM"
	},
	{
		"id": "osm-9272852218",
		"name": "Istanbul Restaurant",
		"address": "Oslo",
		"latitude": 59.919218,
		"longitude": 10.764333,
		"cuisines": [
			"turkish",
			"kebab"
		],
		"openingHours": "Mo-Fr 10:00-24:00; Sa-Su 11:00-24:00",
		"googleRating": 4.1,
		"googleRatingCount": 1194
	},
	{
		"id": "osm-3392880104",
		"name": "Izakaya",
		"address": "Oslo",
		"latitude": 59.9182134,
		"longitude": 10.7417721,
		"cuisines": [
			"japanese"
		],
		"openingHours": "Mo-Sa 17:00-01:00",
		"googleRating": 4.6,
		"googleRatingCount": 846
	},
	{
		"id": "osm-12886173808",
		"name": "J&Co",
		"address": "Oslo",
		"latitude": 59.9282531,
		"longitude": 10.7513881,
		"cuisines": [
			"burger"
		],
		"googleRating": 3.8,
		"googleRatingCount": 28,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-12701729101",
		"name": "J2 Restaurant BBQ",
		"address": "Oslo",
		"latitude": 59.923777,
		"longitude": 10.7311141,
		"cuisines": [
			"barbecue",
			"korean"
		],
		"openingHours": "Tu-We 18:00-21:00; Th-Sa 17:00-23:00",
		"googleRating": 4.9,
		"googleRatingCount": 303
	},
	{
		"id": "osm-5101765649",
		"name": "Jagger",
		"address": "Oslo",
		"latitude": 59.9242483,
		"longitude": 10.7593906,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th,Sa 12:00-21:00; Fr 12:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 104
	},
	{
		"id": "osm-3594161609",
		"name": "Jaipur",
		"address": "Oslo",
		"latitude": 59.9126407,
		"longitude": 10.7418176,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Th 11:30-22:30; Fr,Sa 11:30-23:00; Su 12:00-22:30",
		"googleRating": 4.3,
		"googleRatingCount": 3898
	},
	{
		"id": "osm-9447113185",
		"name": "Jamals Falafel",
		"address": "Oslo",
		"latitude": 59.9185581,
		"longitude": 10.7620099,
		"cuisines": [
			"middle_eastern"
		],
		"googleRating": 4.9,
		"googleRatingCount": 1239,
		"openingHours": "Monday: 10:00 AM – 11:00 PM; Tuesday: 10:00 AM – 11:00 PM; Wednesday: 10:00 AM – 11:00 PM; Thursday: 10:00 AM – 11:00 PM; Friday: 10:00 AM – 11:00 PM; Saturday: 10:00 AM – 11:00 PM; Sunday: 10:00 AM – 11:00 PM"
	},
	{
		"id": "osm-2076928814",
		"name": "Japanese Dining Sato",
		"address": "Oslo",
		"latitude": 59.9161712,
		"longitude": 10.7128452,
		"cuisines": [
			"japanese"
		],
		"googleRating": 4.3,
		"googleRatingCount": 384,
		"openingHours": "Monday: 3:00 – 10:00 PM; Tuesday: 3:00 – 10:00 PM; Wednesday: 3:00 – 10:00 PM; Thursday: 3:00 – 10:00 PM; Friday: 3:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-1964286275",
		"name": "Japon Sushi",
		"address": "Oslo",
		"latitude": 59.948208,
		"longitude": 10.731483,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Sa 11:00-21:00; Su 13:00-21:00",
		"googleRating": 3.6,
		"googleRatingCount": 121
	},
	{
		"id": "osm-10799329292",
		"name": "Japoniis",
		"address": "Oslo",
		"latitude": 59.9480368,
		"longitude": 10.6438478,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.1,
		"googleRatingCount": 152,
		"openingHours": "Monday: 12:00 – 9:00 PM; Tuesday: 12:00 – 9:00 PM; Wednesday: 12:00 – 9:00 PM; Thursday: 12:00 – 9:00 PM; Friday: 12:00 – 9:00 PM; Saturday: 12:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-3441434856",
		"name": "Jarman Gastropub",
		"address": "Oslo",
		"latitude": 59.9103329,
		"longitude": 10.7282951,
		"cuisines": [
			"burger",
			"fish_and_chips",
			"international",
			"sandwich"
		],
		"googleRating": 4.2,
		"googleRatingCount": 1068,
		"openingHours": "Monday: 11:30 AM – 10:00 PM; Tuesday: 11:30 AM – 10:00 PM; Wednesday: 11:30 AM – 10:00 PM; Thursday: 11:30 AM – 12:00 AM; Friday: 11:30 AM – 12:00 AM; Saturday: 12:00 PM – 12:00 AM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-12461261298",
		"name": "Jettz Burger",
		"address": "Oslo",
		"latitude": 59.9274715,
		"longitude": 10.7127156,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.3,
		"googleRatingCount": 27,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 3:00 PM – 12:00 AM; Thursday: 3:00 PM – 12:00 AM; Friday: 2:00 PM – 1:00 AM; Saturday: 2:00 PM – 1:00 AM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-973879088",
		"name": "Jewel of India",
		"address": "Oslo",
		"latitude": 59.915872,
		"longitude": 10.716795,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 15:00-23:00; Su 14:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 1133
	},
	{
		"id": "osm-13469011557",
		"name": "Joe & the Juice",
		"address": "Oslo",
		"latitude": 59.9125357,
		"longitude": 10.7520688,
		"cuisines": [
			"juice"
		],
		"googleRating": 3.7,
		"googleRatingCount": 491,
		"openingHours": "Monday: 7:00 AM – 8:00 PM; Tuesday: 7:00 AM – 8:00 PM; Wednesday: 7:00 AM – 8:00 PM; Thursday: 7:00 AM – 8:00 PM; Friday: 7:00 AM – 8:00 PM; Saturday: 9:00 AM – 7:00 PM; Sunday: 9:00 AM – 7:00 PM"
	},
	{
		"id": "osm-9045179251",
		"name": "Johnny Rockets",
		"address": "Oslo",
		"latitude": 59.9477254,
		"longitude": 10.7718993,
		"cuisines": [
			"burger"
		],
		"googleRating": 4,
		"googleRatingCount": 983,
		"openingHours": "Monday: 11:30 AM – 10:00 PM; Tuesday: 11:30 AM – 10:00 PM; Wednesday: 11:30 AM – 10:00 PM; Thursday: 11:30 AM – 10:00 PM; Friday: 11:30 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-12630097302",
		"name": "Jonathan sushi Bryn",
		"address": "Oslo",
		"latitude": 59.9034879,
		"longitude": 10.8218404,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa 11:00-20:00; Su 14:00-20:00",
		"googleRating": 4.6,
		"googleRatingCount": 378
	},
	{
		"id": "osm-1945332855",
		"name": "Jonoe",
		"address": "Oslo",
		"latitude": 59.888031,
		"longitude": 10.616395,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Tu-Su 16:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 323
	},
	{
		"id": "osm-6757277374",
		"name": "Jonoe Sushi",
		"address": "Oslo",
		"latitude": 59.9288431,
		"longitude": 10.7593327,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Th 14:00-22:30; Fr,Sa 14:00-23:00; Su 14:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 323
	},
	{
		"id": "osm-10013727494",
		"name": "Juicy Sushi",
		"address": "Oslo",
		"latitude": 59.9143106,
		"longitude": 10.7317969,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa 13:00-20:00",
		"googleRating": 4.2,
		"googleRatingCount": 142
	},
	{
		"id": "osm-6757226553",
		"name": "Jungel Pizza",
		"address": "Oslo",
		"latitude": 59.935396,
		"longitude": 10.765029,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.2,
		"googleRatingCount": 373,
		"openingHours": "Monday: 4:00 – 8:45 PM; Tuesday: 4:00 – 8:45 PM; Wednesday: 4:00 – 8:45 PM; Thursday: 4:00 – 8:45 PM; Friday: 2:00 – 8:45 PM; Saturday: 3:00 – 9:30 PM; Sunday: 3:00 – 9:30 PM"
	},
	{
		"id": "osm-10774024709",
		"name": "Jungel Pizza",
		"address": "Oslo",
		"latitude": 59.9373654,
		"longitude": 10.7525636,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 14:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 137
	},
	{
		"id": "osm-11071516106",
		"name": "Jønk",
		"address": "Oslo",
		"latitude": 59.9190068,
		"longitude": 10.748212,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Su 11:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 556
	},
	{
		"id": "osm-12980327901",
		"name": "Jønk",
		"address": "Oslo",
		"latitude": 59.9124887,
		"longitude": 10.7615674,
		"cuisines": [
			"burger"
		],
		"openingHours": "Su-Th 11:00-00:00; Fr-Sa 11:00-04:00",
		"googleRating": 4.1,
		"googleRatingCount": 556
	},
	{
		"id": "osm-2715487795",
		"name": "Kaffistova",
		"address": "Oslo",
		"latitude": 59.9147797,
		"longitude": 10.7401654,
		"cuisines": [
			"norwegian"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa-Su 11:00-19:00",
		"googleRating": 4,
		"googleRatingCount": 1471
	},
	{
		"id": "osm-8211186949",
		"name": "Kai Izakaya",
		"address": "Oslo",
		"latitude": 59.9293522,
		"longitude": 10.7972983,
		"cuisines": [
			"asian"
		],
		"openingHours": "Tu-Th 16:00-22:00; Fr-Sa 16:00-23:00",
		"googleRating": 4.7,
		"googleRatingCount": 113
	},
	{
		"id": "osm-10116843917",
		"name": "Kain Neo-Filipino Bistro",
		"address": "Oslo",
		"latitude": 59.9150321,
		"longitude": 10.7520916,
		"cuisines": [
			"filipino"
		],
		"openingHours": "Tu-Fr 16:00-22:00; Sa 14:00-22:00",
		"googleRating": 4.8,
		"googleRatingCount": 378
	},
	{
		"id": "osm-9267053722",
		"name": "Kami Sushi",
		"address": "Oslo",
		"latitude": 59.9093537,
		"longitude": 10.8130319,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Th 12:00-20:00; Fr 12:00-21:00; Sa,Su 14:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 323
	},
	{
		"id": "osm-86030241",
		"name": "Kampen Bistro",
		"address": "Oslo",
		"latitude": 59.913764,
		"longitude": 10.781102,
		"cuisines": [
			"burger",
			"salad"
		],
		"openingHours": "Mo-Fr 15:00-01:00; Sa-Su 13:00-01:00",
		"googleRating": 4.4,
		"googleRatingCount": 625
	},
	{
		"id": "osm-264768989",
		"name": "Karlsrud Mat og Vinhus",
		"address": "Oslo",
		"latitude": 59.8796914,
		"longitude": 10.8042443,
		"cuisines": [
			"wine"
		],
		"openingHours": "Mo off; Tu-Th 15:00-23:00; Fr-Su 13:00-01:00",
		"googleRating": 4.2,
		"googleRatingCount": 186
	},
	{
		"id": "osm-12669709316",
		"name": "Kebab Biten",
		"address": "Oslo",
		"latitude": 59.9289607,
		"longitude": 10.77766,
		"cuisines": [
			"kebab"
		],
		"googleRating": 3.8,
		"googleRatingCount": 631,
		"openingHours": "Monday: 10:00 AM – 4:00 AM; Tuesday: 10:00 AM – 4:00 AM; Wednesday: 10:00 AM – 4:00 AM; Thursday: 10:00 AM – 4:00 AM; Friday: 10:00 AM – 5:00 AM; Saturday: 10:00 AM – 5:00 AM; Sunday: 10:00 AM – 4:00 AM"
	},
	{
		"id": "osm-2192394366",
		"name": "Kebabbiten",
		"address": "Oslo",
		"latitude": 59.92018,
		"longitude": 10.734619,
		"cuisines": [
			"kebab"
		],
		"googleRating": 3.8,
		"googleRatingCount": 631,
		"openingHours": "Monday: 10:00 AM – 4:00 AM; Tuesday: 10:00 AM – 4:00 AM; Wednesday: 10:00 AM – 4:00 AM; Thursday: 10:00 AM – 4:00 AM; Friday: 10:00 AM – 5:00 AM; Saturday: 10:00 AM – 5:00 AM; Sunday: 10:00 AM – 4:00 AM"
	},
	{
		"id": "osm-10911462669",
		"name": "Khanateria",
		"address": "Oslo",
		"latitude": 59.9170028,
		"longitude": 10.753085,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Th,Su 16:00-21:00; Fr-Sa 15:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 691
	},
	{
		"id": "osm-5101765663",
		"name": "Khushi",
		"address": "Oslo",
		"latitude": 59.9254127,
		"longitude": 10.7569922,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 15:00-22:00; Su 14:00-21:00",
		"googleRating": 4.7,
		"googleRatingCount": 840
	},
	{
		"id": "osm-11287405949",
		"name": "Kinabolle Ensjø",
		"address": "Oslo",
		"latitude": 59.9154591,
		"longitude": 10.7895854,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Su 15:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 46
	},
	{
		"id": "osm-11287405950",
		"name": "Kinabolle Grønland",
		"address": "Oslo",
		"latitude": 59.9130096,
		"longitude": 10.7646103,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Sa 11:00-21:00; Su 13:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 375
	},
	{
		"id": "osm-5094785564",
		"name": "King Falafel",
		"address": "Oslo",
		"latitude": 59.9143252,
		"longitude": 10.7540886,
		"cuisines": [
			"falafel"
		],
		"googleRating": 4.7,
		"googleRatingCount": 1412,
		"openingHours": "Monday: 10:00 AM – 10:00 PM; Tuesday: 10:00 AM – 10:00 PM; Wednesday: 10:00 AM – 10:00 PM; Thursday: 10:00 AM – 10:00 PM; Friday: 10:00 AM – 10:00 PM; Saturday: 10:00 AM – 10:00 PM; Sunday: 10:00 AM – 10:00 PM"
	},
	{
		"id": "osm-11185426255",
		"name": "Kinnara",
		"address": "Oslo",
		"latitude": 59.9469155,
		"longitude": 10.7720186,
		"cuisines": [
			"thai"
		],
		"openingHours": "Tu-Su 14:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 257
	},
	{
		"id": "osm-1694617028",
		"name": "KLINK.",
		"address": "Oslo",
		"latitude": 59.9225581,
		"longitude": 10.7523828,
		"cuisines": [
			"american"
		],
		"googleRating": 4.7,
		"googleRatingCount": 27,
		"openingHours": "Monday: Closed; Tuesday: 10:00 AM – 11:00 PM; Wednesday: 10:00 AM – 11:00 PM; Thursday: 10:00 AM – 11:00 PM; Friday: 10:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 11:00 AM – 9:00 PM"
	},
	{
		"id": "osm-13394584934",
		"name": "Koi Sushi",
		"address": "Oslo",
		"latitude": 59.9363064,
		"longitude": 10.830086,
		"cuisines": [
			"sushi",
			"bubble_tea",
			"japanese"
		],
		"openingHours": "Mo off; Tu-Su 14:00-21:00",
		"googleRating": 5,
		"googleRatingCount": 9
	},
	{
		"id": "osm-5155784047",
		"name": "Koie",
		"address": "Oslo",
		"latitude": 59.9170641,
		"longitude": 10.7526086,
		"cuisines": [
			"japanese"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa,Su 12:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 2735
	},
	{
		"id": "osm-10210591717",
		"name": "Koie Ramen",
		"address": "Oslo",
		"latitude": 59.9233417,
		"longitude": 10.7594095,
		"cuisines": [
			"ramen"
		],
		"googleRating": 4.4,
		"googleRatingCount": 128,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-8938901225",
		"name": "Koie Ramen Munch",
		"address": "Oslo",
		"latitude": 59.906789,
		"longitude": 10.756149,
		"cuisines": [
			"ramen"
		],
		"openingHours": "Mo-Su 11:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 1310
	},
	{
		"id": "osm-10709309319",
		"name": "Kompis Lillo gård",
		"address": "Oslo",
		"latitude": 59.9449375,
		"longitude": 10.7717418,
		"cuisines": [
			"burger",
			"pizza"
		],
		"googleRating": 4.3,
		"googleRatingCount": 329,
		"openingHours": "Monday: 1:00 – 8:00 PM; Tuesday: 1:00 – 8:00 PM; Wednesday: 1:00 – 8:00 PM; Thursday: 1:00 – 8:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 11:00 AM – 9:00 PM; Sunday: 1:00 – 8:00 PM"
	},
	{
		"id": "osm-8831377617",
		"name": "Kongen Marina",
		"address": "Oslo",
		"latitude": 59.910169,
		"longitude": 10.705178,
		"cuisines": [
			"american"
		],
		"googleRating": 4.4,
		"googleRatingCount": 1617,
		"openingHours": "Monday: 10:00 AM – 10:00 PM; Tuesday: 10:00 AM – 10:00 PM; Wednesday: 10:00 AM – 10:00 PM; Thursday: 10:00 AM – 10:00 PM; Friday: 10:00 AM – 11:00 PM; Saturday: 10:00 AM – 11:00 PM; Sunday: 10:00 AM – 10:00 PM"
	},
	{
		"id": "osm-11281480727",
		"name": "Korndokki",
		"address": "Oslo",
		"latitude": 59.9222187,
		"longitude": 10.7522904,
		"cuisines": [
			"korean"
		],
		"googleRating": 4.2,
		"googleRatingCount": 82,
		"openingHours": "Monday: Closed; Tuesday: 10:00 AM – 8:00 PM; Wednesday: 10:00 AM – 8:00 PM; Thursday: 10:00 AM – 8:00 PM; Friday: 10:00 AM – 8:00 PM; Saturday: 10:00 AM – 8:00 PM; Sunday: 11:00 AM – 6:00 PM"
	},
	{
		"id": "osm-865263903",
		"name": "Kos Kos",
		"address": "Oslo",
		"latitude": 59.9136459,
		"longitude": 10.7435244,
		"cuisines": [
			"mediterranean"
		],
		"openingHours": "Mo 16:00-22:00; Tu-Th 15:00-22:00; Fr 14:00-22:00; Sa 13:00-23:00; Su 15:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 1267
	},
	{
		"id": "osm-1929351073",
		"name": "Kullt",
		"address": "Oslo",
		"latitude": 59.911155,
		"longitude": 10.735915,
		"cuisines": [
			"burger",
			"grill"
		],
		"openingHours": "Mo-Tu 15:00-23:00; We-Th 15:00-01:00; Fr-Sa 15:00-03:00; Su off",
		"googleRating": 4.1,
		"googleRatingCount": 1834
	},
	{
		"id": "osm-6007974685",
		"name": "Kverneriet",
		"address": "Oslo",
		"latitude": 59.914472,
		"longitude": 10.7185529,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo 16:00-23:00; Tu-Fr 11:00-23:00; Sa-Su 12:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 1539
	},
	{
		"id": "osm-10830604726",
		"name": "Kylling & Pizza",
		"address": "Oslo",
		"latitude": 59.929579,
		"longitude": 10.7791995,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.7,
		"googleRatingCount": 354,
		"openingHours": "Monday: 1:00 – 11:00 PM; Tuesday: 1:00 – 11:00 PM; Wednesday: 1:00 – 11:00 PM; Thursday: 1:00 – 11:00 PM; Friday: 9:00 AM – 1:00 AM; Saturday: 9:00 AM – 1:00 AM; Sunday: 9:00 AM – 1:00 AM"
	},
	{
		"id": "osm-2484288273",
		"name": "Köd",
		"address": "Oslo",
		"latitude": 59.91637,
		"longitude": 10.715608,
		"cuisines": [
			"steak_house"
		],
		"openingHours": "Mo-Su,PH 17:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 1437
	},
	{
		"id": "osm-12076526569",
		"name": "KöD",
		"address": "Oslo",
		"latitude": 59.9104104,
		"longitude": 10.7448223,
		"cuisines": [
			"steak_house"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1437,
		"openingHours": "Monday: 4:00 – 9:00 PM; Tuesday: 4:00 – 9:00 PM; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 9:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-10709309320",
		"name": "Kårhuset",
		"address": "Oslo",
		"latitude": 59.944752,
		"longitude": 10.7716096,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Su 13:00-22:00, Tu-Fr 16:00-24:00, Sa 13:00-24:00",
		"googleRating": 4.8,
		"googleRatingCount": 28
	},
	{
		"id": "osm-10914437464",
		"name": "La Mayor",
		"address": "Oslo",
		"latitude": 59.916374,
		"longitude": 10.7512157,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-We 17:00-22:00; Th-Fr 17:00-23:00; Sa 12:00-23:00",
		"googleRating": 4.7,
		"googleRatingCount": 296
	},
	{
		"id": "osm-5322455423",
		"name": "La Sangria Resturante Espanjol",
		"address": "Oslo",
		"latitude": 59.918876,
		"longitude": 10.733761,
		"cuisines": [
			"tapas",
			"spanish"
		],
		"openingHours": "Mo-Su 15:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 637
	},
	{
		"id": "osm-1537546029",
		"name": "La Villa",
		"address": "Oslo",
		"latitude": 59.912668,
		"longitude": 10.763699,
		"cuisines": [
			"turkish"
		],
		"openingHours": "Mo-Su 10:00-24:00",
		"googleRating": 4.4,
		"googleRatingCount": 862
	},
	{
		"id": "osm-13228358030",
		"name": "Laffico Pizza",
		"address": "Oslo",
		"latitude": 59.9199783,
		"longitude": 10.7078807,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.4,
		"googleRatingCount": 197,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 10:00 PM"
	},
	{
		"id": "osm-3650497117",
		"name": "Lahori Dera",
		"address": "Oslo",
		"latitude": 59.9131307,
		"longitude": 10.7655019,
		"cuisines": [
			"pakistani"
		],
		"googleRating": 3.8,
		"googleRatingCount": 970,
		"openingHours": "Monday: 12:00 – 11:00 PM; Tuesday: 12:00 – 11:00 PM; Wednesday: 12:00 – 11:00 PM; Thursday: 12:00 – 11:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 10:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-12108641654",
		"name": "Lamberts",
		"address": "Oslo",
		"latitude": 59.8726424,
		"longitude": 10.8123404,
		"cuisines": [
			"european",
			"norwegian"
		],
		"openingHours": "Mo-Fr 10:00-21:00; Sa 11:00-21:00; Su 13:00-21:00",
		"googleRating": 4.6,
		"googleRatingCount": 29
	},
	{
		"id": "osm-12656859401",
		"name": "Las cazuelas sabor a Mexico",
		"address": "Oslo",
		"latitude": 59.9361003,
		"longitude": 10.7622263,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Tu-Sa 15:00-21:00; Su 16:00-21:00",
		"googleRating": 4.7,
		"googleRatingCount": 171
	},
	{
		"id": "osm-383735732",
		"name": "Le Benjamin",
		"address": "Oslo",
		"latitude": 59.918733,
		"longitude": 10.757967,
		"cuisines": [
			"french"
		],
		"googleRating": 4.7,
		"googleRatingCount": 865,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 9:30 PM; Wednesday: 4:00 – 9:30 PM; Thursday: 4:00 – 9:30 PM; Friday: 4:00 – 9:30 PM; Saturday: 4:00 – 9:30 PM; Sunday: 4:00 – 9:30 PM"
	},
	{
		"id": "osm-12127487601",
		"name": "Lemongrass",
		"address": "Oslo",
		"latitude": 59.9094382,
		"longitude": 10.7456322,
		"cuisines": [
			"caribbean"
		],
		"googleRating": 4.2,
		"googleRatingCount": 381,
		"openingHours": "Monday: 11:00 AM – 2:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 3:00 – 9:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-10210511403",
		"name": "Lett",
		"address": "Oslo",
		"latitude": 59.9133412,
		"longitude": 10.7319036,
		"cuisines": [
			"salad"
		],
		"googleRating": 4,
		"googleRatingCount": 165,
		"openingHours": "Monday: 9:00 AM – 8:00 PM; Tuesday: 9:00 AM – 8:00 PM; Wednesday: 9:00 AM – 8:00 PM; Thursday: 9:00 AM – 8:00 PM; Friday: 9:00 AM – 7:00 PM; Saturday: 11:00 AM – 5:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-11799994401",
		"name": "Lett",
		"address": "Oslo",
		"latitude": 59.9142167,
		"longitude": 10.7416874,
		"cuisines": [
			"salad"
		],
		"googleRating": 4,
		"googleRatingCount": 165,
		"openingHours": "Monday: 9:00 AM – 8:00 PM; Tuesday: 9:00 AM – 8:00 PM; Wednesday: 9:00 AM – 8:00 PM; Thursday: 9:00 AM – 8:00 PM; Friday: 9:00 AM – 7:00 PM; Saturday: 11:00 AM – 5:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-11800033351",
		"name": "Lett",
		"address": "Oslo",
		"latitude": 59.9218961,
		"longitude": 10.7266755,
		"cuisines": [
			"salad"
		],
		"googleRating": 3.7,
		"googleRatingCount": 149,
		"openingHours": "Monday: 8:00 AM – 8:00 PM; Tuesday: 8:00 AM – 8:00 PM; Wednesday: 8:00 AM – 8:00 PM; Thursday: 8:00 AM – 8:00 PM; Friday: 8:00 AM – 8:00 PM; Saturday: 10:00 AM – 6:00 PM; Sunday: 10:00 AM – 6:00 PM"
	},
	{
		"id": "osm-11816170412",
		"name": "Lett",
		"address": "Oslo",
		"latitude": 59.9272868,
		"longitude": 10.7201558,
		"cuisines": [
			"salad"
		],
		"openingHours": "Mo-Fr 08:00-20:00; Sa,Su 10:00-18:00",
		"googleRating": 3.7,
		"googleRatingCount": 149
	},
	{
		"id": "osm-5094785554",
		"name": "Lett & Mett",
		"address": "Oslo",
		"latitude": 59.9140861,
		"longitude": 10.7542781,
		"cuisines": [
			"kebab"
		],
		"googleRating": 3.6,
		"googleRatingCount": 31,
		"openingHours": "Monday: 10:00 AM – 7:00 PM; Tuesday: 10:00 AM – 7:00 PM; Wednesday: 10:00 AM – 7:00 PM; Thursday: 10:00 AM – 7:00 PM; Friday: 10:00 AM – 7:00 PM; Saturday: 10:00 AM – 6:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-7904813107",
		"name": "Lett og God",
		"address": "Oslo",
		"latitude": 59.9120748,
		"longitude": 10.7520208,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4,
		"googleRatingCount": 47,
		"openingHours": "Monday: 9:00 AM – 7:00 PM; Tuesday: 9:00 AM – 7:00 PM; Wednesday: 9:00 AM – 7:00 PM; Thursday: 9:00 AM – 7:00 PM; Friday: 9:00 AM – 7:00 PM; Saturday: 11:00 AM – 5:00 PM; Sunday: 11:00 AM – 5:00 PM"
	},
	{
		"id": "osm-12691135548",
		"name": "Li-Li",
		"address": "Oslo",
		"latitude": 59.93108,
		"longitude": 10.7786002,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4,
		"googleRatingCount": 141,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 10:00 PM; Saturday: 2:00 – 10:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-13515804061",
		"name": "Lille Amerika Bislett",
		"address": "Pilestredet 65, Oslo",
		"latitude": 59.9245872,
		"longitude": 10.7309225,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.1,
		"googleRatingCount": 121,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 12:00 – 10:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-12369819501",
		"name": "Lille Amerika Sentrum",
		"address": "Oslo",
		"latitude": 59.9161045,
		"longitude": 10.7545354,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 11:00-22:00; Fr 11:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 885
	},
	{
		"id": "osm-10030484195",
		"name": "Lille Marmaris",
		"address": "Oslo",
		"latitude": 59.95988,
		"longitude": 10.880715,
		"cuisines": [
			"kebab",
			"pizza"
		],
		"openingHours": "Mo-Th 13:00-23:00; Fr-Su 13:00-00:00; Su 14:00-00:00",
		"googleRating": 4.2,
		"googleRatingCount": 92
	},
	{
		"id": "osm-5316879861",
		"name": "Lille Oslo Lunsjbar",
		"address": "Oslo",
		"latitude": 59.9196518,
		"longitude": 10.7609586,
		"cuisines": [
			"regional",
			"buffet",
			"international"
		],
		"openingHours": "Mo-Fr 11:00-16:00",
		"googleRating": 4.6,
		"googleRatingCount": 226
	},
	{
		"id": "osm-4736654458",
		"name": "Lille Saigon 1",
		"address": "Oslo",
		"latitude": 59.9164349,
		"longitude": 10.751189,
		"cuisines": [
			"vietnamese"
		],
		"openingHours": "11:00-23:00",
		"googleRating": 4,
		"googleRatingCount": 1208
	},
	{
		"id": "osm-3441434868",
		"name": "lille sumo sushi",
		"address": "Oslo",
		"latitude": 59.9133334,
		"longitude": 10.7327705,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4,
		"googleRatingCount": 245,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 12:00 – 9:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-2045441425",
		"name": "Listen to Baljit",
		"address": "Oslo",
		"latitude": 59.915146,
		"longitude": 10.717611,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Fr 14:00-23:00; Sa 13:00-23:00; Su 14:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 1193
	},
	{
		"id": "osm-392057322",
		"name": "Lofoten Fiskerestaurant",
		"address": "Oslo",
		"latitude": 59.908569,
		"longitude": 10.724388,
		"cuisines": [
			"seafood"
		],
		"openingHours": "Mo-Fr 11:00-23:00; Su 12:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 1719
	},
	{
		"id": "osm-340047873",
		"name": "Lofotstua",
		"address": "Oslo",
		"latitude": 59.9272795,
		"longitude": 10.7123803,
		"cuisines": [
			"norwegian"
		],
		"openingHours": "Mo-Fr 15:00-21:30",
		"googleRating": 4.7,
		"googleRatingCount": 218
	},
	{
		"id": "osm-9141519422",
		"name": "Lofthus samvirkelag",
		"address": "Oslo",
		"latitude": 59.946661,
		"longitude": 10.643112,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.4,
		"googleRatingCount": 124,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 2:00 – 11:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-3549921714",
		"name": "Lofthus Samvirkelag Apostrophe",
		"address": "Oslo",
		"latitude": 59.921263,
		"longitude": 10.763736,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Tu-We 16:00-21:00; Th-Fr 16:00-22:00; Sa 12:00-22:00; Su 12:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 293
	},
	{
		"id": "osm-1883597407",
		"name": "Lofthus Samvirkelag Torshov",
		"address": "Oslo",
		"latitude": 59.9394733,
		"longitude": 10.7736697,
		"cuisines": [
			"pizza"
		],
		"openingHours": "We-Su 16:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 477
	},
	{
		"id": "osm-311166509",
		"name": "Lorry",
		"address": "Oslo",
		"latitude": 59.9207598,
		"longitude": 10.728849,
		"cuisines": [
			"regional"
		],
		"openingHours": "Mo 11:00-01:00; Tu-Sa 11:00-03:30; Su 12:00-01:00",
		"googleRating": 4.1,
		"googleRatingCount": 3537
	},
	{
		"id": "osm-1932777090",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.935918,
		"longitude": 10.765486,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4,
		"googleRatingCount": 714,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 3:30 AM; Saturday: 11:00 AM – 3:30 AM; Sunday: 11:00 AM – 11:00 PM"
	},
	{
		"id": "osm-4799902088",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.916183,
		"longitude": 10.7515841,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4.2,
		"googleRatingCount": 2876,
		"openingHours": "Monday: 11:00 AM – 12:00 AM; Tuesday: 11:00 AM – 12:00 AM; Wednesday: 11:00 AM – 12:00 AM; Thursday: 11:00 AM – 12:00 AM; Friday: 11:00 AM – 3:30 AM; Saturday: 11:00 AM – 3:30 AM; Sunday: 11:00 AM – 12:00 AM"
	},
	{
		"id": "osm-5236963253",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.9285608,
		"longitude": 10.7159856,
		"cuisines": [
			"tacos"
		],
		"openingHours": "Su-Th 11:00-23:00, Fr,Sa 11:00-03:30",
		"googleRating": 4.2,
		"googleRatingCount": 125
	},
	{
		"id": "osm-6531869325",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.911944,
		"longitude": 10.749407,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-Th 11:00-22:00; Fr,Sa 11:00-03:30",
		"googleRating": 4.2,
		"googleRatingCount": 2876
	},
	{
		"id": "osm-9045179252",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.9480295,
		"longitude": 10.7716424,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4.3,
		"googleRatingCount": 784,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-9790113394",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.9117964,
		"longitude": 10.743085,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-Fr 10:00-19:00; Sa 10:00-18:00",
		"googleRating": 4.2,
		"googleRatingCount": 2876
	},
	{
		"id": "osm-10036658797",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.9254077,
		"longitude": 10.7593879,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Su-Th 11:00-23:00, Fr,Sa 11:00-03:00",
		"googleRating": 4,
		"googleRatingCount": 714
	},
	{
		"id": "osm-10285981377",
		"name": "Los Tacos",
		"address": "Oslo",
		"latitude": 59.936938,
		"longitude": 10.6835727,
		"cuisines": [
			"mexican"
		],
		"googleRating": 4.2,
		"googleRatingCount": 172,
		"openingHours": "Monday: 3:00 – 10:00 PM; Tuesday: 3:00 – 10:00 PM; Wednesday: 3:00 – 10:00 PM; Thursday: 3:00 – 10:00 PM; Friday: 3:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-2344889048",
		"name": "Louis Pizza",
		"address": "Oslo",
		"latitude": 59.9332,
		"longitude": 10.733404,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Tu-Sa 14:00-22:00; Su 15:00-21:00",
		"googleRating": 4.8,
		"googleRatingCount": 104
	},
	{
		"id": "osm-12723792861",
		"name": "Løkka Sushi",
		"address": "Oslo",
		"latitude": 59.9287662,
		"longitude": 10.7646859,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.7,
		"googleRatingCount": 94,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: Closed; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 11:00 PM; Saturday: 2:00 – 11:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-3210872300",
		"name": "Løren kiosk og grill",
		"address": "Oslo",
		"latitude": 59.931233,
		"longitude": 10.791296,
		"cuisines": [
			"pizza",
			"burger",
			"kebab"
		],
		"openingHours": "Mo-Th 12:00-23:00, Fr,Sa 12:00-01:00, Su 12:00-23:00",
		"googleRating": 2.9,
		"googleRatingCount": 97
	},
	{
		"id": "osm-8436229223",
		"name": "Mac + Cheese Bar",
		"address": "Oslo",
		"latitude": 59.9186803,
		"longitude": 10.7511467,
		"cuisines": [
			"american"
		],
		"googleRating": 3.3,
		"googleRatingCount": 112,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 9:00 PM; Wednesday: 3:00 – 9:00 PM; Thursday: 3:00 – 9:00 PM; Friday: 3:00 – 9:00 PM; Saturday: 11:00 AM – 8:00 PM; Sunday: 10:00 AM – 10:00 PM"
	},
	{
		"id": "osm-11704386367",
		"name": "Mad Love",
		"address": "Oslo",
		"latitude": 59.9096864,
		"longitude": 10.767994,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.7,
		"googleRatingCount": 341,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 9:00 PM; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 4:00 – 9:00 PM"
	},
	{
		"id": "osm-10969326100",
		"name": "Made in India",
		"address": "Oslo",
		"latitude": 59.9233776,
		"longitude": 10.7515098,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 551,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 4:00 – 10:00 PM; Sunday: 4:00 – 10:00 PM"
	},
	{
		"id": "osm-34693421",
		"name": "Mahayana Asian Dining",
		"address": "Oslo",
		"latitude": 59.9133121,
		"longitude": 10.736849,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Fr 11:00-24:00; Sa 13:00-24:00; Su 14:00-23:00",
		"googleRating": 4.1,
		"googleRatingCount": 977
	},
	{
		"id": "osm-11822291359",
		"name": "Majorstuen Sushi",
		"address": "Oslo",
		"latitude": 59.9294959,
		"longitude": 10.7142363,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4,
		"googleRatingCount": 264,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 12:00 – 9:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-355320757",
		"name": "Mamma Pizza",
		"address": "Oslo",
		"latitude": 59.950059,
		"longitude": 10.764512,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 11:00-23:00; Fr 11:00-00:00; Sa 12:00-00:00; Su 12:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 71
	},
	{
		"id": "osm-5856905820",
		"name": "Mamma Pizza",
		"address": "Oslo",
		"latitude": 59.910803,
		"longitude": 10.746863,
		"cuisines": [
			"italian",
			"pizza",
			"pasta"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa,Su 12:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 6301
	},
	{
		"id": "osm-10749278606",
		"name": "Mamma Pizza Osteria di mare",
		"address": "Oslo",
		"latitude": 59.9127131,
		"longitude": 10.7262911,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa-Su 12:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 894
	},
	{
		"id": "osm-2969227093",
		"name": "Mantra by Mr. India",
		"address": "Oslo",
		"latitude": 59.911053,
		"longitude": 10.74671,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 16:00-21:30",
		"googleRating": 4.5,
		"googleRatingCount": 1555
	},
	{
		"id": "osm-10858331890",
		"name": "Masala politics",
		"address": "Oslo",
		"latitude": 59.9124134,
		"longitude": 10.744913,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1014,
		"openingHours": "Monday: 3:00 – 11:00 PM; Tuesday: 3:00 – 11:00 PM; Wednesday: 3:00 – 11:00 PM; Thursday: 3:00 – 11:00 PM; Friday: 3:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-12726285075",
		"name": "Massimo",
		"address": "Oslo",
		"latitude": 59.9162156,
		"longitude": 10.7143292,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.7,
		"googleRatingCount": 82,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 9:00 PM; Wednesday: 3:00 – 9:00 PM; Thursday: 3:00 – 9:00 PM; Friday: 3:00 – 9:00 PM; Saturday: 3:00 – 9:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-7778766114",
		"name": "Massimo pizza",
		"address": "Oslo",
		"latitude": 59.92939,
		"longitude": 10.797143,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Tu-Su 15:00-21:00",
		"googleRating": 4.7,
		"googleRatingCount": 70
	},
	{
		"id": "osm-315233909",
		"name": "Max",
		"address": "Oslo",
		"latitude": 59.912701,
		"longitude": 10.741744,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-We,Sa 10:00-02:00, Th 10:00-03:30; Fr,Sa 10:00-05:00",
		"googleRating": 3.7,
		"googleRatingCount": 4149
	},
	{
		"id": "osm-3410635669",
		"name": "Max",
		"address": "Oslo",
		"latitude": 59.912749,
		"longitude": 10.7633574,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th,Su 10:00-02:00; Fr-Sa 10:00-17:00",
		"googleRating": 3.7,
		"googleRatingCount": 4149
	},
	{
		"id": "osm-1523679603",
		"name": "McDonald's",
		"address": "Oslo",
		"latitude": 59.9248806,
		"longitude": 10.7590478,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-We 09:30-24:00, Th 09:30-03:30, Fr 09:30-04:30, Sa 10:00-04:30, Su 10:00-24:00",
		"googleRating": 3.5,
		"googleRatingCount": 1204
	},
	{
		"id": "osm-1884335181",
		"name": "McDonald's",
		"address": "Oslo",
		"latitude": 59.9136556,
		"longitude": 10.7334928,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 08:00-23:30, Fr 08:00-04:00, Sa 09:00-04:00, Su 09:00-23:30",
		"googleRating": 3.6,
		"googleRatingCount": 3161
	},
	{
		"id": "osm-13040179115",
		"name": "McDonald's",
		"address": "Oslo",
		"latitude": 59.9150708,
		"longitude": 10.722518,
		"cuisines": [
			"burger"
		],
		"googleRating": 3.6,
		"googleRatingCount": 3161,
		"openingHours": "Monday: Open 24 hours; Tuesday: Open 24 hours; Wednesday: Open 24 hours; Thursday: Open 24 hours; Friday: Open 24 hours; Saturday: Open 24 hours; Sunday: Open 24 hours"
	},
	{
		"id": "osm-53273754",
		"name": "McDonald's Alnabru",
		"address": "Oslo",
		"latitude": 59.9246752,
		"longitude": 10.8437118,
		"cuisines": [
			"burger"
		],
		"openingHours": "24/7",
		"googleRating": 3.6,
		"googleRatingCount": 2663
	},
	{
		"id": "osm-674078616",
		"name": "McDonald's Alnasenteret",
		"address": "Oslo",
		"latitude": 59.9257276,
		"longitude": 10.8480696,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 10:00-21:00, Sa 09:00-18:00, Su 00:00-24:00",
		"googleRating": 3.3,
		"googleRatingCount": 268
	},
	{
		"id": "osm-9735882193",
		"name": "McDonald's Bryn",
		"address": "Oslo",
		"latitude": 59.903092,
		"longitude": 10.822575,
		"cuisines": [
			"burger"
		],
		"openingHours": "Su-We 07:00-24:00, Th-Sa 07:00-04:00",
		"googleRating": 3.7,
		"googleRatingCount": 824
	},
	{
		"id": "osm-5632395522",
		"name": "McDonald's CC Vest",
		"address": "Oslo",
		"latitude": 59.9172769,
		"longitude": 10.6360163,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 09:00-21:30; Sa 09:00-20:00; Su 10:00-20:00",
		"googleRating": 3.8,
		"googleRatingCount": 949
	},
	{
		"id": "osm-7056025824",
		"name": "McDonald's Furuset",
		"address": "Oslo",
		"latitude": 59.9308014,
		"longitude": 10.8687264,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 07:00-23:30, Sa 08:00-23:30, Su 09:00-23:30",
		"googleRating": 3.6,
		"googleRatingCount": 2083
	},
	{
		"id": "osm-308042943",
		"name": "McDonald's Gaustad",
		"address": "Oslo",
		"latitude": 59.9482143,
		"longitude": 10.7236247,
		"cuisines": [
			"burger"
		],
		"openingHours": "24/7",
		"googleRating": 3.8,
		"googleRatingCount": 2505
	},
	{
		"id": "osm-750594775",
		"name": "McDonald's Grorud",
		"address": "Oslo",
		"latitude": 59.9495533,
		"longitude": 10.8851478,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 07:00-23:30, Sa 08:00-23:00, Su 09:00-23:30",
		"googleRating": 3.4,
		"googleRatingCount": 1947
	},
	{
		"id": "osm-7056025825",
		"name": "McDonald's Linderud",
		"address": "Oslo",
		"latitude": 59.9431523,
		"longitude": 10.8355941,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Fr 10:00-22:00, Sa 09:00-22:00, Su 12:00-22:00",
		"googleRating": 3,
		"googleRatingCount": 260
	},
	{
		"id": "osm-333736232",
		"name": "McDonald's Majorstuen",
		"address": "Oslo",
		"latitude": 59.92931,
		"longitude": 10.717159,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 07:00-24:00, Fr 07:00-03:00, Sa 08:00-03:00, Su 08:00-24:00",
		"googleRating": 3.5,
		"googleRatingCount": 2317
	},
	{
		"id": "osm-3725960004",
		"name": "McDonald's Storgata",
		"address": "Oslo",
		"latitude": 59.913542,
		"longitude": 10.7496487,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Su 07:00-04:00",
		"googleRating": 3.7,
		"googleRatingCount": 4714
	},
	{
		"id": "osm-7056025827",
		"name": "McDonald's Storo",
		"address": "Oslo",
		"latitude": 59.9467639,
		"longitude": 10.7748483,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 09:00-23:00, Su 10:00-23:00",
		"googleRating": 3.4,
		"googleRatingCount": 1662
	},
	{
		"id": "osm-4754833656",
		"name": "Mediterranean grill",
		"address": "Oslo",
		"latitude": 59.9172644,
		"longitude": 10.7535691,
		"cuisines": [
			"kebab",
			"pizza"
		],
		"googleRating": 4.3,
		"googleRatingCount": 1271,
		"openingHours": "Monday: 10:00 AM – 4:00 AM; Tuesday: 10:00 AM – 4:00 AM; Wednesday: 10:00 AM – 4:00 AM; Thursday: 10:00 AM – 4:00 AM; Friday: 10:00 AM – 4:00 AM; Saturday: 10:00 AM – 4:00 AM; Sunday: 11:00 AM – 4:00 AM"
	},
	{
		"id": "osm-1784555269",
		"name": "Mega Sushi",
		"address": "Oslo",
		"latitude": 59.941678,
		"longitude": 10.770899,
		"cuisines": [
			"japanese"
		],
		"openingHours": "Mo-Fr 12:00-20:00; Sa,Su 13:00-20:00",
		"googleRating": 4.5,
		"googleRatingCount": 98
	},
	{
		"id": "osm-2284901715",
		"name": "Mehfel",
		"address": "Oslo",
		"latitude": 59.9103025,
		"longitude": 10.7435978,
		"cuisines": [
			"pakistani"
		],
		"openingHours": "Mo-Sa 16:00-23:00; Su 16:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 792
	},
	{
		"id": "osm-4736654460",
		"name": "Mela Café",
		"address": "Oslo",
		"latitude": 59.9167832,
		"longitude": 10.7505866,
		"cuisines": [
			"arab"
		],
		"openingHours": "Mo-Fr 11:00-24:00; Sa 13:00-24:00",
		"googleRating": 4.5,
		"googleRatingCount": 656
	},
	{
		"id": "osm-7864963685",
		"name": "Mesob Restaurant",
		"address": "Oslo",
		"latitude": 59.9138093,
		"longitude": 10.7626945,
		"cuisines": [
			"african",
			"ethiopian"
		],
		"googleRating": 4.7,
		"googleRatingCount": 501,
		"openingHours": "Monday: 1:00 – 10:00 PM; Tuesday: 1:00 – 10:00 PM; Wednesday: 1:00 – 10:00 PM; Thursday: 1:00 – 10:00 PM; Friday: 1:00 – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 1:00 – 10:00 PM"
	},
	{
		"id": "osm-12728383803",
		"name": "Midtpunktet",
		"address": "Oslo",
		"latitude": 59.9359185,
		"longitude": 10.8286153,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Tu-Fr 15:00-22:00; Sa 15:00-22:00; Su 15:00-21:00",
		"googleRating": 4.6,
		"googleRatingCount": 54
	},
	{
		"id": "osm-12520076134",
		"name": "Mike's Corner",
		"address": "Oslo",
		"latitude": 59.9062689,
		"longitude": 10.7595147,
		"cuisines": [
			"american"
		],
		"openingHours": "Mo-Fr 11:00-19:00; Sa 12:00-20:00; Su 12:00-19:00",
		"googleRating": 4.1,
		"googleRatingCount": 246
	},
	{
		"id": "osm-4219438419",
		"name": "Mimi Sushi",
		"address": "Oslo",
		"latitude": 59.918116,
		"longitude": 10.74375,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.7,
		"googleRatingCount": 266,
		"openingHours": "Monday: 1:00 – 9:00 PM; Tuesday: 1:00 – 9:00 PM; Wednesday: 1:00 – 9:00 PM; Thursday: 1:00 – 9:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-12669709322",
		"name": "Ming Wok",
		"address": "Oslo",
		"latitude": 59.9289526,
		"longitude": 10.7768432,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4,
		"googleRatingCount": 41,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 10:00 PM; Saturday: 2:00 – 10:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-12647213276",
		"name": "Mini Sushi",
		"address": "Oslo",
		"latitude": 59.9265265,
		"longitude": 10.7755375,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.6,
		"googleRatingCount": 485,
		"openingHours": "Monday: 1:00 – 9:00 PM; Tuesday: 1:00 – 9:00 PM; Wednesday: 1:00 – 9:00 PM; Thursday: 1:00 – 9:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-9705547308",
		"name": "Mirabel Sørenga",
		"address": "Oslo",
		"latitude": 59.9022726,
		"longitude": 10.7520254,
		"cuisines": [
			"mediterranean"
		],
		"googleRating": 4,
		"googleRatingCount": 1904,
		"openingHours": "Monday: 12:00 – 11:00 PM; Tuesday: 12:00 – 11:00 PM; Wednesday: 12:00 – 11:00 PM; Thursday: 12:00 – 11:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:30 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-5094785578",
		"name": "Miss Gin",
		"address": "Oslo",
		"latitude": 59.9197931,
		"longitude": 10.7591979,
		"cuisines": [
			"vietnamese"
		],
		"openingHours": "Mo-Fr 10:00-21:00; Sa,Su 11:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 278
	},
	{
		"id": "osm-2348123125",
		"name": "Mm Sushi",
		"address": "Oslo",
		"latitude": 59.930984,
		"longitude": 10.733992,
		"cuisines": [
			"japanese"
		],
		"googleRating": 4.6,
		"googleRatingCount": 63,
		"openingHours": "Monday: 10:00 AM – 7:45 PM; Tuesday: 10:00 AM – 7:45 PM; Wednesday: 10:00 AM – 7:45 PM; Thursday: 10:00 AM – 7:45 PM; Friday: 10:00 AM – 7:45 PM; Saturday: 12:00 – 7:45 PM; Sunday: 2:00 – 7:45 PM"
	},
	{
		"id": "osm-12701736801",
		"name": "Momo Chhe Bislett",
		"address": "Oslo",
		"latitude": 59.9240325,
		"longitude": 10.7310778,
		"cuisines": [
			"asian"
		],
		"openingHours": "Su 16:00-21:00; Mo, We-Sa 17:00-22:00",
		"googleRating": 4.9,
		"googleRatingCount": 191
	},
	{
		"id": "osm-1355957108",
		"name": "Mon an",
		"address": "Oslo",
		"latitude": 59.9258712,
		"longitude": 10.8122006,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.8,
		"googleRatingCount": 53,
		"openingHours": "Monday: 11:00 AM – 8:30 PM; Tuesday: 11:00 AM – 8:30 PM; Wednesday: 11:00 AM – 8:30 PM; Thursday: 11:00 AM – 8:30 PM; Friday: 11:00 AM – 8:30 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-5101765639",
		"name": "Monsun Noodlebar",
		"address": "Oslo",
		"latitude": 59.9246327,
		"longitude": 10.7582738,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Th 16:00-22:00; Fr 16:00-23:00; Sa 13:00-23:00; Su 13:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 1154
	},
	{
		"id": "osm-13464250802",
		"name": "Mr Pizza",
		"address": "Oslo",
		"latitude": 59.8977806,
		"longitude": 10.8120747,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.3,
		"googleRatingCount": 146,
		"openingHours": "Monday: 3:00 – 9:00 PM; Tuesday: 3:00 – 9:00 PM; Wednesday: 3:00 – 9:00 PM; Thursday: 3:00 – 9:00 PM; Friday: 3:00 – 9:45 PM; Saturday: 3:00 – 9:45 PM; Sunday: 2:00 – 9:45 PM"
	},
	{
		"id": "osm-3454582815",
		"name": "Mr. Fish",
		"address": "Oslo",
		"latitude": 59.934053,
		"longitude": 10.761423,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Th 11:00-21:00; Fr 11:00-22:00; Sa 12:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 307
	},
	{
		"id": "osm-292143401",
		"name": "Mucho Mas",
		"address": "Oslo",
		"latitude": 59.924171,
		"longitude": 10.759395,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Tu-Fr 16:00-21:00; Sa 14:00-22:00; Su 14:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 1190
	},
	{
		"id": "osm-9183808595",
		"name": "Munchies",
		"address": "Oslo",
		"latitude": 59.907073,
		"longitude": 10.755975,
		"cuisines": [
			"burger"
		],
		"googleRating": 4.1,
		"googleRatingCount": 409,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-12630098202",
		"name": "My Italian Pizza",
		"address": "Oslo",
		"latitude": 59.9049496,
		"longitude": 10.8223403,
		"cuisines": [
			"italian_pizza"
		],
		"openingHours": "We-Su 16:00-21:00",
		"googleRating": 4.8,
		"googleRatingCount": 71
	},
	{
		"id": "osm-2196380412",
		"name": "Mymy Sushi",
		"address": "Oslo",
		"latitude": 59.910107,
		"longitude": 10.748091,
		"cuisines": [
			"japanese",
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-20:00; Sa 14:00-19:00",
		"googleRating": 4.3,
		"googleRatingCount": 306
	},
	{
		"id": "osm-2392586687",
		"name": "Maaemo",
		"address": "Oslo",
		"latitude": 59.907552,
		"longitude": 10.7581789,
		"cuisines": [
			"regional"
		],
		"openingHours": "Mo-Fr 18:00+",
		"googleRating": 4.7,
		"googleRatingCount": 846
	},
	{
		"id": "osm-10969326101",
		"name": "Nam Fah",
		"address": "Oslo",
		"latitude": 59.9232159,
		"longitude": 10.7512543,
		"cuisines": [
			"thai"
		],
		"googleRating": 4.6,
		"googleRatingCount": 376,
		"openingHours": "Monday: Closed; Tuesday: Closed; Wednesday: 3:00 – 9:00 PM; Thursday: 3:00 – 9:00 PM; Friday: 3:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-5908171035",
		"name": "Nam Kang",
		"address": "Oslo",
		"latitude": 59.9188075,
		"longitude": 10.7476749,
		"cuisines": [
			"japanese",
			"korean"
		],
		"openingHours": "Mo-We 16:00-22:30; Th-Sa 16:00-23:00",
		"googleRating": 4.1,
		"googleRatingCount": 489
	},
	{
		"id": "osm-13291230302",
		"name": "NAMI Asian Fusion",
		"address": "Oslo",
		"latitude": 59.9494436,
		"longitude": 10.7654557,
		"cuisines": [
			"asian"
		],
		"openingHours": "Tu-Th 11:00-23:00, Mo 11:00-22:30, Fr 11:00-24:00, Sa 15:00-24:00, Su 15:00-22:30",
		"googleRating": 4.6,
		"googleRatingCount": 36
	},
	{
		"id": "osm-11447073933",
		"name": "Natraj",
		"address": "Oslo",
		"latitude": 59.9158245,
		"longitude": 10.7131082,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 279,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 4:00 – 10:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-5094785574",
		"name": "New Anarkali",
		"address": "Oslo",
		"latitude": 59.9194028,
		"longitude": 10.7595584,
		"cuisines": [
			"indian"
		],
		"openingHours": "Su-Mo 16:00-22:00; We-Th 16:00-22:00; Fr-Sa 16:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 824
	},
	{
		"id": "osm-860579095",
		"name": "New Beirut Kebab",
		"address": "Oslo",
		"latitude": 59.9141041,
		"longitude": 10.7469809,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Su-We 10:00-24:00, Th-Sa 10:00-04:00",
		"googleRating": 4.2,
		"googleRatingCount": 1009
	},
	{
		"id": "osm-10013710376",
		"name": "New Delhi",
		"address": "Oslo",
		"latitude": 59.9089247,
		"longitude": 10.7233745,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Th 15:00-23:00; Fr-Sa 15:00-24:00; Sa 14:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 2233
	},
	{
		"id": "osm-9705547310",
		"name": "New Flavors of India",
		"address": "Oslo",
		"latitude": 59.903215,
		"longitude": 10.754208,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Su 14:00-00:00",
		"googleRating": 3.9,
		"googleRatingCount": 59
	},
	{
		"id": "osm-1229981429",
		"name": "New Winny Kebab",
		"address": "Oslo",
		"latitude": 59.9453322,
		"longitude": 10.7804383,
		"cuisines": [
			"kebab"
		],
		"googleRating": 4.8,
		"googleRatingCount": 1324,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 2:00 – 11:00 PM; Sunday: 2:00 – 11:00 PM"
	},
	{
		"id": "osm-4738519185",
		"name": "Nikay",
		"address": "Oslo",
		"latitude": 59.9141019,
		"longitude": 10.750458,
		"cuisines": [
			"peruvian"
		],
		"googleRating": 3.4,
		"googleRatingCount": 54
	},
	{
		"id": "osm-9795309703",
		"name": "Njokobok",
		"address": "Oslo",
		"latitude": 59.909651,
		"longitude": 10.77624,
		"cuisines": [
			"african"
		],
		"openingHours": "Su, We-Th 17:00-22:00; Fr-Sa 17:00-23:00",
		"googleRating": 4.8,
		"googleRatingCount": 364
	},
	{
		"id": "osm-7778766116",
		"name": "Noa Asia",
		"address": "Oslo",
		"latitude": 59.929222,
		"longitude": 10.797854,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.1,
		"googleRatingCount": 111,
		"openingHours": "Monday: 1:00 – 9:00 PM; Tuesday: 1:00 – 9:00 PM; Wednesday: 1:00 – 9:00 PM; Thursday: 1:00 – 9:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-3729807525",
		"name": "Nodee",
		"address": "Oslo",
		"latitude": 59.907804,
		"longitude": 10.7593755,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.2,
		"googleRatingCount": 833,
		"openingHours": "Monday: 5:30 – 10:00 PM; Tuesday: 5:30 – 10:00 PM; Wednesday: 5:00 – 10:00 PM; Thursday: 5:00 – 11:00 PM; Friday: 5:00 – 11:00 PM; Saturday: 4:00 PM – 12:00 AM; Sunday: 4:00 – 10:00 PM"
	},
	{
		"id": "osm-1937432192",
		"name": "Noi Delicatesse",
		"address": "Oslo",
		"latitude": 59.9271711,
		"longitude": 10.6771184,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 10:00-17:00; Fr 10:00-21:00; Sa 10:00-15:00",
		"googleRating": 4.7,
		"googleRatingCount": 11
	},
	{
		"id": "osm-4536285004",
		"name": "Nomads",
		"address": "Oslo",
		"latitude": 59.9144385,
		"longitude": 10.7206354,
		"cuisines": [
			"asian_fusion"
		],
		"googleRating": 4.6,
		"googleRatingCount": 222
	},
	{
		"id": "osm-5290156121",
		"name": "Norlaks Sushi Sæter",
		"address": "Oslo",
		"latitude": 59.8610837,
		"longitude": 10.8007638,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 13:00-21:00",
		"googleRating": 4,
		"googleRatingCount": 135
	},
	{
		"id": "osm-3665953768",
		"name": "Nydalen Pizza og Grill",
		"address": "Oslo",
		"latitude": 59.9476234,
		"longitude": 10.7674915,
		"cuisines": [
			"pizza",
			"burger",
			"kebab"
		],
		"openingHours": "Mo-Sa 10:00-23:00; Su 11:00-23:00",
		"googleRating": 4.3,
		"googleRatingCount": 298
	},
	{
		"id": "osm-3665953766",
		"name": "Nydalen Sushi & Wok",
		"address": "Oslo",
		"latitude": 59.9487208,
		"longitude": 10.7666893,
		"cuisines": [
			"sushi",
			"asian"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa-Su 12:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 326
	},
	{
		"id": "osm-1485578755",
		"name": "O' Sole Mio",
		"address": "Oslo",
		"latitude": 59.8602863,
		"longitude": 10.6657503,
		"cuisines": [
			"pizza"
		],
		"openingHours": "We-Su 15:30-21:30",
		"googleRating": 4.7,
		"googleRatingCount": 108
	},
	{
		"id": "osm-12921217800",
		"name": "Obento Box",
		"address": "Oslo",
		"latitude": 59.9223338,
		"longitude": 10.7521536,
		"cuisines": [
			"japanese"
		],
		"googleRating": 3.7,
		"googleRatingCount": 30,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 11:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: 10:00 AM – 8:00 PM; Sunday: 11:00 AM – 6:00 PM"
	},
	{
		"id": "osm-1318750168",
		"name": "Olivia",
		"address": "Oslo",
		"latitude": 59.922375,
		"longitude": 10.726215,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.1,
		"googleRatingCount": 2274,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 12:00 – 9:30 PM"
	},
	{
		"id": "osm-1960944751",
		"name": "Olivia",
		"address": "Oslo",
		"latitude": 59.908732,
		"longitude": 10.722392,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Th 11:00-23:00; Fr-Sa 11:00-01:00; Su 12:00-23:00",
		"googleRating": 4.2,
		"googleRatingCount": 5264
	},
	{
		"id": "osm-3441434861",
		"name": "Olivia",
		"address": "Oslo",
		"latitude": 59.9102239,
		"longitude": 10.7279709,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.2,
		"googleRatingCount": 5264,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-5315431323",
		"name": "Olivia",
		"address": "Oslo",
		"latitude": 59.9104989,
		"longitude": 10.7512005,
		"cuisines": [
			"pizza",
			"italian",
			"pasta"
		],
		"googleRating": 4,
		"googleRatingCount": 1807,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-6379363052",
		"name": "Oppsal Sushi-Thai",
		"address": "Oslo",
		"latitude": 59.8930773,
		"longitude": 10.8416386,
		"cuisines": [
			"sushi",
			"thai"
		],
		"openingHours": "Mo-Su 14:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 121
	},
	{
		"id": "osm-1884388489",
		"name": "Oriental",
		"address": "Oslo",
		"latitude": 59.914496,
		"longitude": 10.74092,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Sa 15:00-23:30; Su 15:00-22:30",
		"googleRating": 4.1,
		"googleRatingCount": 351
	},
	{
		"id": "osm-3655282215",
		"name": "Oslo kebab og pizzahus",
		"address": "Oslo",
		"latitude": 59.9126076,
		"longitude": 10.7640047,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Su 11:00-05:00",
		"googleRating": 3.6,
		"googleRatingCount": 714
	},
	{
		"id": "osm-2790201984",
		"name": "Ostebutikken",
		"address": "Oslo",
		"latitude": 59.9268728,
		"longitude": 10.7589656,
		"cuisines": [
			"french"
		],
		"googleRating": 4.7,
		"googleRatingCount": 399,
		"openingHours": "Monday: 4:00 – 11:00 PM; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 4:00 – 10:00 PM"
	},
	{
		"id": "osm-12878789170",
		"name": "Osten",
		"address": "Oslo",
		"latitude": 59.9134946,
		"longitude": 10.7860401,
		"cuisines": [
			"italian_pizza"
		],
		"googleRating": 4.5,
		"googleRatingCount": 95,
		"openingHours": "Monday: 4:00 – 9:00 PM; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 4:00 – 11:00 PM; Sunday: 4:00 – 9:00 PM"
	},
	{
		"id": "osm-10030495113",
		"name": "Osushi",
		"address": "Oslo",
		"latitude": 59.9607913,
		"longitude": 10.8820863,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.5,
		"googleRatingCount": 176,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-3655282223",
		"name": "P. Communale",
		"address": "Oslo",
		"latitude": 59.911007,
		"longitude": 10.763015,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.6,
		"googleRatingCount": 77,
		"openingHours": "Monday: Closed; Tuesday: Closed; Wednesday: 5:00 – 10:00 PM; Thursday: 5:00 – 10:00 PM; Friday: 5:00 – 10:00 PM; Saturday: 5:00 – 10:00 PM; Sunday: 5:00 – 10:00 PM"
	},
	{
		"id": "osm-10137860341",
		"name": "Pacific Poke",
		"address": "Oslo",
		"latitude": 59.9207685,
		"longitude": 10.7575452,
		"cuisines": [
			"hawaiian"
		],
		"openingHours": "Mo-Fr 11:00-20:00; Sa-Su 12:00-20:00",
		"googleRating": 4.1,
		"googleRatingCount": 48
	},
	{
		"id": "osm-12820420444",
		"name": "Palazzo Comunale",
		"address": "Oslo",
		"latitude": 59.9210695,
		"longitude": 10.7534774,
		"cuisines": [
			"italian"
		],
		"openingHours": "We-Fr 17:00-22:00  Sa 12:00-16:00, 17:00-22:00 Su 12:00-19:00",
		"googleRating": 4.6,
		"googleRatingCount": 77
	},
	{
		"id": "osm-5101765656",
		"name": "Palazzo Pizzeria",
		"address": "Oslo",
		"latitude": 59.9229904,
		"longitude": 10.7593986,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Su-Th 13:00-22:59; Fr-Sa 13:00-23:59",
		"googleRating": 3.5,
		"googleRatingCount": 276
	},
	{
		"id": "osm-2272981675",
		"name": "Panda",
		"address": "Oslo",
		"latitude": 59.942045,
		"longitude": 10.807928,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4.1,
		"googleRatingCount": 505,
		"openingHours": "Monday: 1:00 – 10:00 PM; Tuesday: 1:00 – 10:00 PM; Wednesday: 1:00 – 10:00 PM; Thursday: 1:00 – 10:00 PM; Friday: 1:00 – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 1:00 – 10:00 PM"
	},
	{
		"id": "osm-3425476333",
		"name": "Pane e Vino",
		"address": "Oslo",
		"latitude": 59.9210411,
		"longitude": 10.7703904,
		"cuisines": [
			"pizza",
			"italian"
		],
		"openingHours": "Mo-We 14:00-23:00; Th 14:00-24:00; Fr-Sa 00:00-01:00, 14:00-24:00; Su 00:00-01:00, 14:00-23:00",
		"googleRating": 4.2,
		"googleRatingCount": 483
	},
	{
		"id": "osm-10204149141",
		"name": "Pao Bar & BBQ",
		"address": "Oslo",
		"latitude": 59.9214517,
		"longitude": 10.7575351,
		"cuisines": [
			"thai"
		],
		"googleRating": 4.4,
		"googleRatingCount": 140,
		"openingHours": "Monday: Closed; Tuesday: 5:00 – 9:00 PM; Wednesday: 5:00 – 9:00 PM; Thursday: 5:00 – 10:00 PM; Friday: 5:00 – 10:00 PM; Saturday: 2:00 – 10:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1616628466",
		"name": "Papa Rosa",
		"address": "Oslo",
		"latitude": 59.9066851,
		"longitude": 10.8192878,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Su 10:00-23:00",
		"googleRating": 4.9,
		"googleRatingCount": 5413
	},
	{
		"id": "osm-3070239921",
		"name": "Paradis pizza",
		"address": "Oslo",
		"latitude": 59.9260446,
		"longitude": 10.6415843,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.8,
		"googleRatingCount": 206,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-10911462670",
		"name": "Parthenon - Pizza & Grillbar",
		"address": "Oslo",
		"latitude": 59.9171023,
		"longitude": 10.7532459,
		"cuisines": [
			"pizza",
			"burger",
			"kebab",
			"grill"
		],
		"googleRating": 3.7,
		"googleRatingCount": 479,
		"openingHours": "Monday: 10:00 AM – 4:00 AM; Tuesday: 10:00 AM – 4:00 AM; Wednesday: 10:00 AM – 4:00 AM; Thursday: 10:00 AM – 4:00 AM; Friday: 10:00 AM – 4:00 AM; Saturday: 10:00 AM – 4:00 AM; Sunday: 10:00 AM – 4:00 AM"
	},
	{
		"id": "osm-973883768",
		"name": "Pascal",
		"address": "Oslo",
		"latitude": 59.915095,
		"longitude": 10.725796,
		"cuisines": [
			"cake",
			"coffee_shop",
			"french",
			"tea"
		],
		"openingHours": "Mo-Fr 09:00-17:30; Sa 10:00-17:30; Su 11:00-17:30",
		"googleRating": 4.3,
		"googleRatingCount": 1085
	},
	{
		"id": "osm-13237974005",
		"name": "Pele Pele",
		"address": "Oslo",
		"latitude": 59.9123157,
		"longitude": 10.7607494,
		"cuisines": [
			"chicken"
		],
		"googleRating": 4.8,
		"googleRatingCount": 42,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-3687984625",
		"name": "Peloton",
		"address": "Oslo",
		"latitude": 59.9174698,
		"longitude": 10.7543497,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 07:30-01:00; Fr 07:30-03:00; Sa 09:00-03:00; Su 10:00-19:00",
		"googleRating": 4.3,
		"googleRatingCount": 987
	},
	{
		"id": "osm-428063057",
		"name": "Peppes",
		"address": "Oslo",
		"latitude": 59.9200173,
		"longitude": 10.6843247,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-23:00; Sa 12:00-23:00; Su 13:00-23:00",
		"googleRating": 3.9,
		"googleRatingCount": 627
	},
	{
		"id": "osm-25337471",
		"name": "Peppes Pizza",
		"address": "Oslo",
		"latitude": 59.911368,
		"longitude": 10.749451,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo 11:00-22:30; Tu-Sa 11:00-23:30; Su 13:00-22:30",
		"googleRating": 4,
		"googleRatingCount": 2250
	},
	{
		"id": "osm-307506585",
		"name": "Peppes Pizza",
		"address": "Oslo",
		"latitude": 59.9129421,
		"longitude": 10.7384783,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Tu 11:00-22:00; We-Sa 11:00-23:00; Su 13:00-20:00",
		"googleRating": 4,
		"googleRatingCount": 2250
	},
	{
		"id": "osm-1988656478",
		"name": "Peppes Pizza",
		"address": "Oslo",
		"latitude": 59.914004,
		"longitude": 10.71885,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 12:00-23:00; Fr 12:00-24:00; Sa 13:00-24:00; Su 13:00-23:00",
		"googleRating": 4,
		"googleRatingCount": 2250
	},
	{
		"id": "osm-3132098800",
		"name": "Peppes Pizza",
		"address": "Oslo",
		"latitude": 59.9113885,
		"longitude": 10.7519691,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 10:00-22:00; Su 12:00-21:00; Fr-Sa 10:00-23:00",
		"googleRating": 3.8,
		"googleRatingCount": 2590
	},
	{
		"id": "osm-3719846545",
		"name": "Peppes Pizza",
		"address": "Oslo",
		"latitude": 59.930908,
		"longitude": 10.792592,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-23:00, Sa,Su 13:00-23:00",
		"googleRating": 3.8,
		"googleRatingCount": 607
	},
	{
		"id": "osm-3730288771",
		"name": "Peppes Pizza",
		"address": "Oslo",
		"latitude": 59.9475867,
		"longitude": 10.6453416,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 13:00-22:00; Sa,Su 15:00-22:00",
		"googleRating": 3.4,
		"googleRatingCount": 122
	},
	{
		"id": "osm-1667094976",
		"name": "Peppes Pizza - Lambertseter",
		"address": "Oslo",
		"latitude": 59.871468,
		"longitude": 10.807359,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.9,
		"googleRatingCount": 150,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 1:00 PM – 12:00 AM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-9706840698",
		"name": "Peppes Pizza Ensjø",
		"address": "Oslo",
		"latitude": 59.913174,
		"longitude": 10.788736,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 14:00-22:00; Fr 14:00-23:00; Sa-Su 13:00-23:00",
		"googleRating": 3.4,
		"googleRatingCount": 102
	},
	{
		"id": "osm-25332171",
		"name": "Peppes Pizza Nydalen",
		"address": "Oslo",
		"latitude": 59.9499642,
		"longitude": 10.7664274,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4,
		"googleRatingCount": 879,
		"openingHours": "Monday: 11:00 AM – 10:30 PM; Tuesday: 11:00 AM – 10:30 PM; Wednesday: 11:00 AM – 10:30 PM; Thursday: 11:00 AM – 10:30 PM; Friday: 11:00 AM – 10:30 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-3392864698",
		"name": "Persia Classic Restaurant",
		"address": "Oslo",
		"latitude": 59.9169122,
		"longitude": 10.7423823,
		"cuisines": [
			"persian"
		],
		"googleRating": 4.5,
		"googleRatingCount": 1636
	},
	{
		"id": "osm-11050983978",
		"name": "Perugina Pizzeria",
		"address": "Oslo",
		"latitude": 59.9323405,
		"longitude": 10.7594576,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 16:00-22:00; Fr-Su 11:00-23:00",
		"googleRating": 4.9,
		"googleRatingCount": 292
	},
	{
		"id": "osm-5091617744",
		"name": "Phuket",
		"address": "Oslo",
		"latitude": 59.9195866,
		"longitude": 10.7621712,
		"cuisines": [
			"thai"
		],
		"googleRating": 4,
		"googleRatingCount": 70,
		"openingHours": "Monday: 3:00 PM – 12:00 AM; Tuesday: Closed; Wednesday: 3:00 PM – 12:00 AM; Thursday: 3:00 PM – 12:00 AM; Friday: 3:00 PM – 1:00 AM; Saturday: 3:00 PM – 1:00 AM; Sunday: 3:00 PM – 1:00 AM"
	},
	{
		"id": "osm-2362920528",
		"name": "Picazzo Pizza",
		"address": "Oslo",
		"latitude": 59.9287834,
		"longitude": 10.7650771,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.7,
		"googleRatingCount": 613,
		"openingHours": "Monday: 1:00 PM – 3:00 AM; Tuesday: 1:00 PM – 3:00 AM; Wednesday: 1:00 PM – 3:00 AM; Thursday: Closed; Friday: 2:00 PM – 4:00 AM; Saturday: 1:00 PM – 4:00 AM; Sunday: 1:00 PM – 3:00 AM"
	},
	{
		"id": "osm-181344678",
		"name": "Pinerolo",
		"address": "Oslo",
		"latitude": 59.9087469,
		"longitude": 10.6079606,
		"cuisines": [
			"pizza",
			"italian"
		],
		"openingHours": "Tu-Fr 16:30-22:00; Sa 13:00-22:00; Su 13:00-21:00",
		"googleRating": 4.8,
		"googleRatingCount": 30
	},
	{
		"id": "osm-9200426624",
		"name": "Pink Fish",
		"address": "Oslo",
		"latitude": 59.9067816,
		"longitude": 10.756595,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Sa 11:30-19:00; Su 12:00-18:00",
		"googleRating": 4,
		"googleRatingCount": 865
	},
	{
		"id": "osm-2356664775",
		"name": "Pizza & Kina Expressen",
		"address": "Oslo",
		"latitude": 59.9467694,
		"longitude": 10.8758796,
		"cuisines": [
			"pizza",
			"chinese"
		],
		"googleRating": 3.8,
		"googleRatingCount": 135,
		"openingHours": "Monday: Closed; Tuesday: Closed; Wednesday: 2:00 – 8:00 PM; Thursday: 2:00 – 8:00 PM; Friday: 2:00 – 8:00 PM; Saturday: 2:00 – 8:00 PM; Sunday: 2:00 – 8:00 PM"
	},
	{
		"id": "osm-4858179614",
		"name": "Pizza Crudo",
		"address": "Oslo",
		"latitude": 59.9142826,
		"longitude": 10.7379088,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.1,
		"googleRatingCount": 221
	},
	{
		"id": "osm-1796704819",
		"name": "Pizza Pancetta",
		"address": "Oslo",
		"latitude": 59.939234,
		"longitude": 10.759237,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 14:00-22:00; Fr-Su 13:00-23:00",
		"googleRating": 4.5,
		"googleRatingCount": 140
	},
	{
		"id": "osm-1986907555",
		"name": "Pizza Pancetta",
		"address": "Oslo",
		"latitude": 59.920952,
		"longitude": 10.716545,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 14:00-22:00; Fr-Su 13:00-23:00",
		"googleRating": 4.3,
		"googleRatingCount": 209
	},
	{
		"id": "osm-1986911759",
		"name": "Pizza Pancetta",
		"address": "Oslo",
		"latitude": 59.930244,
		"longitude": 10.7194897,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 14:00-22:00; Fr-Su 13:00-23:00",
		"googleRating": 4.4,
		"googleRatingCount": 200
	},
	{
		"id": "osm-2192619453",
		"name": "Pizza Pancetta",
		"address": "Oslo",
		"latitude": 59.941695,
		"longitude": 10.770995,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Fr 14:00-22:00; Sa,Su 14:00-23:00",
		"googleRating": 4.5,
		"googleRatingCount": 140
	},
	{
		"id": "osm-11982619254",
		"name": "Pizza Pancetta Vålerenga",
		"address": "Oslo",
		"latitude": 59.9097365,
		"longitude": 10.7900065,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.5,
		"googleRatingCount": 115,
		"openingHours": "Monday: 2:00 – 11:00 PM; Tuesday: 2:00 – 11:00 PM; Wednesday: 2:00 – 11:00 PM; Thursday: 11:00 AM – 2:00 AM; Friday: 11:00 AM – 4:00 AM; Saturday: 11:00 AM – 4:00 AM; Sunday: 11:00 AM – 11:00 PM"
	},
	{
		"id": "osm-2313010193",
		"name": "Pizza Ricetta",
		"address": "Oslo",
		"latitude": 59.928103,
		"longitude": 10.754138,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.3,
		"googleRatingCount": 170,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 1:00 – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-2348129276",
		"name": "Pizza Ricetta",
		"address": "Oslo",
		"latitude": 59.9309,
		"longitude": 10.733944,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 14:00-22:00; Fr-Su 13:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 170
	},
	{
		"id": "osm-10694634531",
		"name": "Pizza Ricetta",
		"address": "Oslo",
		"latitude": 59.9299919,
		"longitude": 10.7608004,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.3,
		"googleRatingCount": 170,
		"openingHours": "Monday: 2:00 – 10:00 PM; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 1:00 – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 11:00 PM"
	},
	{
		"id": "osm-2181315314",
		"name": "Pizza Toscana",
		"address": "Oslo",
		"latitude": 59.9280811,
		"longitude": 10.751861,
		"cuisines": [
			"kebab",
			"pizza"
		],
		"openingHours": "Su-Th 11:00-01:00, Fr,Sa 11:00-04:00",
		"googleRating": 2.4,
		"googleRatingCount": 96
	},
	{
		"id": "osm-10249493809",
		"name": "Pizza Uno Fezo",
		"address": "Oslo",
		"latitude": 59.922378,
		"longitude": 10.735653,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 14:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 645
	},
	{
		"id": "osm-6379633079",
		"name": "Pizzabakeren Ensjø",
		"address": "Oslo",
		"latitude": 59.919427,
		"longitude": 10.793764,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa,Su 13:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 210
	},
	{
		"id": "osm-9025588929",
		"name": "Pizzabakeren Gamlebyen",
		"address": "Oslo",
		"latitude": 59.908359,
		"longitude": 10.768143,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.2,
		"googleRatingCount": 210,
		"openingHours": "Monday: 1:00 – 10:00 PM; Tuesday: 1:00 – 10:00 PM; Wednesday: 1:00 – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 10:00 PM"
	},
	{
		"id": "osm-9025589018",
		"name": "Pizzabakeren Lambertseter",
		"address": "Oslo",
		"latitude": 59.8798653,
		"longitude": 10.8053244,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.9,
		"googleRatingCount": 164,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 11:00 AM – 10:00 PM"
	},
	{
		"id": "osm-9025588934",
		"name": "Pizzabakeren Nesodden",
		"address": "Oslo",
		"latitude": 59.8559,
		"longitude": 10.6608,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 13:00-21:00; Fr-Sa 13:00-22:00; Su 13:00-21:00",
		"googleRating": 3.6,
		"googleRatingCount": 126
	},
	{
		"id": "osm-9025586611",
		"name": "Pizzabakeren Pilestredet",
		"address": "Oslo",
		"latitude": 59.918306,
		"longitude": 10.734827,
		"cuisines": [
			"pizza"
		],
		"googleRating": 2.6,
		"googleRatingCount": 48,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-9025589020",
		"name": "Pizzabakeren Stabekk",
		"address": "Oslo",
		"latitude": 59.9085159,
		"longitude": 10.6018122,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 13:00-22:00; Fr-Sa 13:00-23:00; Su 13:00-22:00",
		"googleRating": 4,
		"googleRatingCount": 80
	},
	{
		"id": "osm-9025589017",
		"name": "Pizzabakeren Tåsen",
		"address": "Oslo",
		"latitude": 59.9438235,
		"longitude": 10.7476619,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.7,
		"googleRatingCount": 189,
		"openingHours": "Monday: 12:00 – 10:00 PM; Tuesday: 12:00 – 10:00 PM; Wednesday: 12:00 – 10:00 PM; Thursday: 12:00 – 10:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-9025588945",
		"name": "Pizzabakeren Ulsrud",
		"address": "Oslo",
		"latitude": 59.89193,
		"longitude": 10.853146,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.8,
		"googleRatingCount": 99,
		"openingHours": "Monday: 1:00 – 10:00 PM; Tuesday: 1:00 – 10:00 PM; Wednesday: 1:00 – 10:00 PM; Thursday: 1:00 – 10:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-1362142663",
		"name": "Pizzabua Grorud",
		"address": "Oslo",
		"latitude": 59.9609048,
		"longitude": 10.883833,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 16:00-23:30; Sa-Su 15:00-23:30",
		"googleRating": 4.7,
		"googleRatingCount": 616
	},
	{
		"id": "osm-11927183922",
		"name": "Pizzabua Lambertseter",
		"address": "Oslo",
		"latitude": 59.8750429,
		"longitude": 10.8105076,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo 15:00-22:45; Tu-Su 14:00-22:45",
		"googleRating": 4.4,
		"googleRatingCount": 319
	},
	{
		"id": "osm-858468086",
		"name": "PizzaBuzzen",
		"address": "Oslo",
		"latitude": 59.9297737,
		"longitude": 10.805879,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.4,
		"googleRatingCount": 371,
		"openingHours": "Monday: 1:00 – 9:00 PM; Tuesday: 1:00 – 9:00 PM; Wednesday: 1:00 – 9:00 PM; Thursday: 1:00 – 9:00 PM; Friday: 1:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-7888033961",
		"name": "PizzaMix",
		"address": "Oslo",
		"latitude": 59.9018522,
		"longitude": 10.7888297,
		"cuisines": [
			"kebab",
			"pizza",
			"burger"
		],
		"googleRating": 3.5,
		"googleRatingCount": 417,
		"openingHours": "Monday: 5:00 PM – 6:00 AM; Tuesday: 3:00 PM – 6:00 AM; Wednesday: 3:00 PM – 6:00 AM; Thursday: 3:00 PM – 6:00 AM; Friday: 3:00 PM – 6:00 AM; Saturday: 3:00 PM – 6:00 AM; Sunday: 1:00 PM – 6:00 AM"
	},
	{
		"id": "osm-7900468981",
		"name": "Pizzeria La Pietra",
		"address": "Oslo",
		"latitude": 59.9083018,
		"longitude": 10.7872287,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 15:00-22:00; Sa-Su 14:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 591
	},
	{
		"id": "osm-7206938625",
		"name": "Ploy's Thai Mat",
		"address": "Oslo",
		"latitude": 59.931394,
		"longitude": 10.778617,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Fr 11:00-21:00, Sa-Su 13:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 50
	},
	{
		"id": "osm-4754833646",
		"name": "Polka Shots & Bites",
		"address": "Oslo",
		"latitude": 59.91784,
		"longitude": 10.7537853,
		"cuisines": [
			"polish"
		],
		"googleRating": 4.7,
		"googleRatingCount": 510,
		"openingHours": "Monday: Closed; Tuesday: 12:00 – 9:00 PM; Wednesday: 12:00 – 9:00 PM; Thursday: 12:00 – 9:00 PM; Friday: 12:00 – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 1:00 – 8:00 PM"
	},
	{
		"id": "osm-7131583905",
		"name": "Polskie Jadło",
		"address": "Oslo",
		"latitude": 59.9135718,
		"longitude": 10.7586121,
		"cuisines": [
			"polish"
		],
		"googleRating": 4.7,
		"googleRatingCount": 294,
		"openingHours": "Monday: 2:00 – 8:30 PM; Tuesday: 2:00 – 8:30 PM; Wednesday: 2:00 – 8:30 PM; Thursday: 2:00 – 8:30 PM; Friday: 2:00 – 8:30 PM; Saturday: 1:00 – 8:30 PM; Sunday: 1:00 – 8:30 PM"
	},
	{
		"id": "osm-992757272",
		"name": "Prima Fila",
		"address": "Oslo",
		"latitude": 59.9132,
		"longitude": 10.7345626,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 2122,
		"openingHours": "Monday: 12:00 – 10:00 PM; Tuesday: 12:00 – 10:00 PM; Wednesday: 12:00 – 10:30 PM; Thursday: 12:00 – 11:00 PM; Friday: 12:00 – 11:30 PM; Saturday: 12:00 – 11:30 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-3650497116",
		"name": "Punjab Tandoori",
		"address": "Oslo",
		"latitude": 59.9129319,
		"longitude": 10.7619425,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.2,
		"googleRatingCount": 2971,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-2263337380",
		"name": "Punjabi Masala",
		"address": "Oslo",
		"latitude": 59.924176,
		"longitude": 10.731017,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.1,
		"googleRatingCount": 533,
		"openingHours": "Monday: 3:00 – 10:00 PM; Tuesday: 3:00 – 10:00 PM; Wednesday: 3:00 – 10:00 PM; Thursday: 3:00 – 10:00 PM; Friday: 3:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-5872999428",
		"name": "På Hjørnet",
		"address": "Oslo",
		"latitude": 59.9119034,
		"longitude": 10.7235451,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 640,
		"openingHours": "Monday: 1:00 PM – 3:00 AM; Tuesday: 1:00 PM – 3:00 AM; Wednesday: 1:00 PM – 3:00 AM; Thursday: 1:00 PM – 3:00 AM; Friday: 1:00 PM – 3:00 AM; Saturday: 1:00 PM – 3:00 AM; Sunday: 1:00 PM – 3:00 AM"
	},
	{
		"id": "osm-12736825842",
		"name": "Raffiné",
		"address": "Oslo",
		"latitude": 59.9171387,
		"longitude": 10.7384996,
		"cuisines": [
			"lebanese"
		],
		"googleRating": 4.8,
		"googleRatingCount": 347,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 3:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-3650497114",
		"name": "Rahma Restaurant",
		"address": "Oslo",
		"latitude": 59.9121023,
		"longitude": 10.7624906,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Su 12:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 112
	},
	{
		"id": "osm-11185426256",
		"name": "Red Sun",
		"address": "Oslo",
		"latitude": 59.9469598,
		"longitude": 10.7715278,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Su 15:00-22:30",
		"googleRating": 4.5,
		"googleRatingCount": 152
	},
	{
		"id": "osm-12959461595",
		"name": "Refresh",
		"address": "Oslo",
		"latitude": 59.9223019,
		"longitude": 10.7519121,
		"cuisines": [
			"juice"
		],
		"googleRating": 3.1,
		"googleRatingCount": 34,
		"openingHours": "Monday: Closed; Tuesday: 10:00 AM – 8:00 PM; Wednesday: 10:00 AM – 8:00 PM; Thursday: 10:00 AM – 8:00 PM; Friday: 10:00 AM – 8:00 PM; Saturday: 10:00 AM – 8:00 PM; Sunday: 10:00 AM – 6:00 PM"
	},
	{
		"id": "osm-3138858975",
		"name": "Registan",
		"address": "Oslo",
		"latitude": 59.909201,
		"longitude": 10.7682391,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Sa 14:00-21:00; Su 14:00-20:00",
		"googleRating": 4.8,
		"googleRatingCount": 500
	},
	{
		"id": "osm-9892121835",
		"name": "Render Burger",
		"address": "Oslo",
		"latitude": 59.929612,
		"longitude": 10.760857,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Su 12:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 254
	},
	{
		"id": "osm-9720937317",
		"name": "Rent mel",
		"address": "Oslo",
		"latitude": 59.9103814,
		"longitude": 10.7471673,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Su 07:30-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 591
	},
	{
		"id": "osm-12520076132",
		"name": "Restaurant Betong",
		"address": "Oslo",
		"latitude": 59.9064331,
		"longitude": 10.7596687,
		"cuisines": [
			"nordic"
		],
		"googleRating": 4.6,
		"googleRatingCount": 129,
		"openingHours": "Monday: Closed; Tuesday: 5:00 PM – 12:00 AM; Wednesday: 5:00 PM – 12:00 AM; Thursday: 5:00 PM – 12:00 AM; Friday: 5:00 PM – 12:00 AM; Saturday: 5:00 PM – 12:00 AM; Sunday: Closed"
	},
	{
		"id": "osm-2181346709",
		"name": "Restaurant Mother India",
		"address": "Oslo",
		"latitude": 59.923885,
		"longitude": 10.731089,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.3,
		"googleRatingCount": 551,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 4:00 – 10:00 PM; Sunday: 4:00 – 10:00 PM"
	},
	{
		"id": "osm-11954395773",
		"name": "Revier",
		"address": "Oslo",
		"latitude": 59.9094451,
		"longitude": 10.7409432,
		"cuisines": [
			"bistro"
		],
		"googleRating": 4.1,
		"googleRatingCount": 12
	},
	{
		"id": "osm-9547646217",
		"name": "Rice Bowl",
		"address": "Oslo",
		"latitude": 59.910598,
		"longitude": 10.744255,
		"cuisines": [
			"asian",
			"thai"
		],
		"openingHours": "Mo-Fr 12:00-22:00; Sa 13:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 2303
	},
	{
		"id": "osm-2785920497",
		"name": "Risbolle",
		"address": "Oslo",
		"latitude": 59.910916,
		"longitude": 10.746947,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Sa 11:00-22:00; Su 13:30-21:00",
		"googleRating": 4.4,
		"googleRatingCount": 252
	},
	{
		"id": "osm-302034426",
		"name": "Roald & Umberto",
		"address": "Oslo",
		"latitude": 59.908379,
		"longitude": 10.769636,
		"cuisines": [
			"italian"
		],
		"openingHours": "Tu-Th 16:00-23:00; Fr-Sa 16:00-24:00; Su 15:00-23:00",
		"googleRating": 4.1,
		"googleRatingCount": 351
	},
	{
		"id": "osm-13541392248",
		"name": "Rollsushi",
		"address": "Oslo",
		"latitude": 59.9307242,
		"longitude": 10.7121571,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.7,
		"googleRatingCount": 330,
		"openingHours": "Monday: 2:00 – 8:00 PM; Tuesday: 2:00 – 8:00 PM; Wednesday: 2:00 – 8:00 PM; Thursday: 2:00 – 8:00 PM; Friday: 2:00 – 8:00 PM; Saturday: 2:00 – 8:00 PM; Sunday: 3:00 – 8:00 PM"
	},
	{
		"id": "osm-3974758583",
		"name": "Rorbua",
		"address": "Oslo",
		"latitude": 59.908949,
		"longitude": 10.724334,
		"cuisines": [
			"fish",
			"local"
		],
		"googleRating": 4.3,
		"googleRatingCount": 2738,
		"openingHours": "Monday: 3:00 – 9:30 PM; Tuesday: 3:00 – 9:30 PM; Wednesday: 3:00 – 9:30 PM; Thursday: 3:00 – 9:30 PM; Friday: 3:00 – 9:30 PM; Saturday: 12:00 – 9:30 PM; Sunday: 3:00 – 9:30 PM"
	},
	{
		"id": "osm-11239655737",
		"name": "Rosenhoff kiosk",
		"address": "Oslo",
		"latitude": 59.9286023,
		"longitude": 10.7774486,
		"cuisines": [
			"pizza"
		],
		"openingHours": "We-Fr 16:00-21:00; Sa-Su 14:00-21:00",
		"googleRating": 4.9,
		"googleRatingCount": 146
	},
	{
		"id": "osm-11148587905",
		"name": "Ruffino",
		"address": "Oslo",
		"latitude": 59.91513,
		"longitude": 10.7271869,
		"cuisines": [
			"italian"
		],
		"googleRating": 4.6,
		"googleRatingCount": 865,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 11:00 PM; Wednesday: 4:00 – 11:00 PM; Thursday: 4:00 – 11:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 4:00 – 11:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-5594718422",
		"name": "Rugantino",
		"address": "Oslo",
		"latitude": 59.9149307,
		"longitude": 10.7505402,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Th 16:00-23:00; Fr,Sa 16:00-01:00",
		"googleRating": 4.6,
		"googleRatingCount": 385
	},
	{
		"id": "osm-1531963131",
		"name": "Rustad Pizza og Kebab",
		"address": "Oslo",
		"latitude": 59.873899,
		"longitude": 10.8433773,
		"cuisines": [
			"kebab"
		]
	},
	{
		"id": "osm-10013720664",
		"name": "Sabi Omakase",
		"address": "Oslo",
		"latitude": 59.9142902,
		"longitude": 10.7290769,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Tu-Sa 18:30-23:00",
		"googleRating": 4.9,
		"googleRatingCount": 237
	},
	{
		"id": "osm-1376727134",
		"name": "Sabi Sushi",
		"address": "Oslo",
		"latitude": 59.9429007,
		"longitude": 10.7034616,
		"cuisines": [
			"japanese"
		],
		"googleRating": 4.1,
		"googleRatingCount": 113,
		"openingHours": "Monday: 3:00 – 9:00 PM; Tuesday: 3:00 – 9:00 PM; Wednesday: 3:00 – 9:00 PM; Thursday: 3:00 – 9:00 PM; Friday: 3:00 – 9:00 PM; Saturday: 3:00 – 9:00 PM; Sunday: 3:00 – 9:00 PM"
	},
	{
		"id": "osm-3012156925",
		"name": "Sabi Sushi",
		"address": "Oslo",
		"latitude": 59.918911,
		"longitude": 10.703558,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 16:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 126
	},
	{
		"id": "osm-12875029096",
		"name": "Sabi Sushi",
		"address": "Oslo",
		"latitude": 59.9243314,
		"longitude": 10.6735024,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-We,Sa-Su 14:30-21:00; Th-Fr 11:30-21:00",
		"googleRating": 4.8,
		"googleRatingCount": 33
	},
	{
		"id": "osm-13334271809",
		"name": "Sabi Sushi Stabekk",
		"address": "Oslo",
		"latitude": 59.908516,
		"longitude": 10.6017478,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 14:00-21:00",
		"googleRating": 4,
		"googleRatingCount": 54
	},
	{
		"id": "osm-10709309324",
		"name": "Sabi Sushi Storo",
		"address": "Oslo",
		"latitude": 59.9455872,
		"longitude": 10.7723684,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.7,
		"googleRatingCount": 235,
		"openingHours": "Monday: 2:00 – 9:30 PM; Tuesday: 2:00 – 9:30 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 2:00 – 10:00 PM; Saturday: 2:00 – 10:00 PM; Sunday: 2:00 – 9:30 PM"
	},
	{
		"id": "osm-10250800075",
		"name": "Sabrura Sticks & Sushi Markveien",
		"address": "Oslo",
		"latitude": 59.918743,
		"longitude": 10.7571934,
		"cuisines": [
			"sushi"
		],
		"googleRating": 3.8,
		"googleRatingCount": 372,
		"openingHours": "Monday: 10:00 AM – 11:00 PM; Tuesday: 10:00 AM – 11:00 PM; Wednesday: 10:00 AM – 11:00 PM; Thursday: 10:00 AM – 11:00 PM; Friday: 10:00 AM – 11:00 PM; Saturday: 10:00 AM – 11:00 PM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-2348090407",
		"name": "Sagene Pizzaria",
		"address": "Oslo",
		"latitude": 59.937447,
		"longitude": 10.755235,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.7,
		"googleRatingCount": 190,
		"openingHours": "Monday: 11:00 AM – 1:00 AM; Tuesday: 11:00 AM – 1:00 AM; Wednesday: 11:00 AM – 1:00 AM; Thursday: 11:00 AM – 1:00 AM; Friday: 11:00 AM – 1:00 AM; Saturday: 11:00 AM – 4:00 AM; Sunday: 11:00 AM – 1:00 AM"
	},
	{
		"id": "osm-10774037636",
		"name": "Saigon Express",
		"address": "Oslo",
		"latitude": 59.9381079,
		"longitude": 10.7569221,
		"cuisines": [
			"asian",
			"sushi"
		],
		"openingHours": "Mo-Su 13:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 183
	},
	{
		"id": "osm-10013753447",
		"name": "Sakee Sushibar",
		"address": "Oslo",
		"latitude": 59.9102413,
		"longitude": 10.7260321,
		"cuisines": [
			"sushi",
			"japanese"
		],
		"openingHours": "Mo-Sa 14:00-21:00; Su 14:00-20:30",
		"googleRating": 4,
		"googleRatingCount": 196
	},
	{
		"id": "osm-13228358029",
		"name": "Sakura Sushi",
		"address": "Oslo",
		"latitude": 59.9200072,
		"longitude": 10.7078096,
		"cuisines": [
			"sushi"
		],
		"googleRating": 3.9,
		"googleRatingCount": 69,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-1948294798",
		"name": "San Lorenzo",
		"address": "Oslo",
		"latitude": 59.9138755,
		"longitude": 10.7291599,
		"cuisines": [
			"pizza"
		],
		"googleRating": 5,
		"googleRatingCount": 1
	},
	{
		"id": "osm-5767668090",
		"name": "Sanjays Indian Restaurant & Bar",
		"address": "Oslo",
		"latitude": 59.9304743,
		"longitude": 10.7934584,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 15:00-23:00; Su 14:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 688
	},
	{
		"id": "osm-6227401451",
		"name": "Sanremo Pizza & Grill",
		"address": "Oslo",
		"latitude": 59.933643,
		"longitude": 10.763827,
		"cuisines": [
			"pizza",
			"kebab",
			"hamburger"
		],
		"openingHours": "Su-Th 11:00-24:00, Fr 10:00-03:00, Sa 11:00-04:00",
		"googleRating": 4.5,
		"googleRatingCount": 265
	},
	{
		"id": "osm-11125603294",
		"name": "Sanremo Restaurant & Pizzeria",
		"address": "Oslo",
		"latitude": 59.8665021,
		"longitude": 10.8392124,
		"cuisines": [
			"italian"
		],
		"openingHours": "Tu-Sa 11:00-21:00; Su 12:00-20:00; Mo off",
		"googleRating": 4.5,
		"googleRatingCount": 265
	},
	{
		"id": "osm-11898386202",
		"name": "Santa Rosa",
		"address": "Oslo",
		"latitude": 59.9282024,
		"longitude": 10.7172229,
		"cuisines": [
			"italian"
		],
		"openingHours": "Su-Th 11:00-23:00; Fr-Sa 11:00-23:00",
		"googleRating": 4.7,
		"googleRatingCount": 127
	},
	{
		"id": "osm-4936700057",
		"name": "Sapporo Ramen Bar",
		"address": "Oslo",
		"latitude": 59.9233273,
		"longitude": 10.7513933,
		"cuisines": [
			"ramen",
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-20:00; Sa 11:00-19:00",
		"googleRating": 4.4,
		"googleRatingCount": 894
	},
	{
		"id": "osm-5091617737",
		"name": "Saray Restaurant",
		"address": "Oslo",
		"latitude": 59.9193931,
		"longitude": 10.764115,
		"cuisines": [
			"turkish"
		],
		"openingHours": "Mo-Su 10:00-24:00",
		"googleRating": 4.3,
		"googleRatingCount": 885
	},
	{
		"id": "osm-325067585",
		"name": "Sawan",
		"address": "Oslo",
		"latitude": 59.9188268,
		"longitude": 10.7157254,
		"cuisines": [
			"thai"
		],
		"googleRating": 4.5,
		"googleRatingCount": 662,
		"openingHours": "Monday: 5:00 – 11:00 PM; Tuesday: 5:00 – 11:00 PM; Wednesday: 5:00 – 11:00 PM; Thursday: 5:00 – 11:00 PM; Friday: 5:00 – 11:00 PM; Saturday: 4:00 – 11:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1940306128",
		"name": "Sea Sushi Bar",
		"address": "Oslo",
		"latitude": 59.928376,
		"longitude": 10.761239,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Su 13:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 195
	},
	{
		"id": "osm-9702947372",
		"name": "Shanghai2K18",
		"address": "Oslo",
		"latitude": 59.9115279,
		"longitude": 10.7451437,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Su 14:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 1452
	},
	{
		"id": "osm-6757226537",
		"name": "Shanti Indian Cuisine",
		"address": "Oslo",
		"latitude": 59.93701,
		"longitude": 10.766587,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Sa 16:00-22:00; Su 15:00-21:00",
		"googleRating": 4.8,
		"googleRatingCount": 189
	},
	{
		"id": "osm-3397094878",
		"name": "Shawarma House",
		"address": "Oslo",
		"latitude": 59.9124062,
		"longitude": 10.7589167,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Fr 10:00-24:00, Sa 10:00-01:00, Su 10:00-24:00",
		"googleRating": 4.1,
		"googleRatingCount": 283
	},
	{
		"id": "osm-11446422185",
		"name": "Shebi’s Burger",
		"address": "Oslo",
		"latitude": 59.90929,
		"longitude": 10.7682366,
		"cuisines": [
			"burger",
			"kebab"
		],
		"googleRating": 4.7,
		"googleRatingCount": 60,
		"openingHours": "Monday: 12:00 – 11:00 PM; Tuesday: 12:00 – 11:00 PM; Wednesday: 12:00 – 11:00 PM; Thursday: 12:00 – 11:00 PM; Friday: 12:00 PM – 2:00 AM; Saturday: 12:00 PM – 2:00 AM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-986355613",
		"name": "Signalen Sjøbad",
		"address": "Oslo",
		"latitude": 59.870696,
		"longitude": 10.6557608,
		"cuisines": [
			"pizza",
			"italian"
		],
		"openingHours": "Mo,Tu 16:00-22:00; We-Fr 16:00-23:00; Sa 13:00-23:00; Su 13:00-20:00",
		"googleRating": 4.8,
		"googleRatingCount": 63
	},
	{
		"id": "osm-12787850800",
		"name": "Silin Bakeri",
		"address": "Oslo",
		"latitude": 59.9095306,
		"longitude": 10.7681067,
		"cuisines": [
			"syrian"
		],
		"googleRating": 4.9,
		"googleRatingCount": 435,
		"openingHours": "Monday: 10:00 AM – 8:00 PM; Tuesday: 10:00 AM – 8:00 PM; Wednesday: 10:00 AM – 8:00 PM; Thursday: 10:00 AM – 8:00 PM; Friday: 10:00 AM – 8:00 PM; Saturday: 10:00 AM – 8:00 PM; Sunday: 10:00 AM – 8:00 PM"
	},
	{
		"id": "osm-2484254221",
		"name": "Silk Road",
		"address": "Oslo",
		"latitude": 59.91261,
		"longitude": 10.710141,
		"cuisines": [
			"asian",
			"chinese",
			"french",
			"indonesian",
			"international",
			"italian",
			"lebanese"
		],
		"openingHours": "We-Th 17:00-23:00; Fr-Sa 17:00-24:00",
		"googleRating": 4.9,
		"googleRatingCount": 76
	},
	{
		"id": "osm-5878291587",
		"name": "Silver Chopsticks & Sushi",
		"address": "Oslo",
		"latitude": 59.933256,
		"longitude": 10.763153,
		"cuisines": [
			"asian"
		],
		"googleRating": 2.8,
		"googleRatingCount": 95,
		"openingHours": "Monday: 1:00 – 11:00 PM; Tuesday: 1:00 – 11:00 PM; Wednesday: 1:00 – 11:00 PM; Thursday: 1:00 – 11:00 PM; Friday: 1:00 – 11:00 PM; Saturday: 1:30 – 11:00 PM; Sunday: 1:30 – 10:30 PM"
	},
	{
		"id": "osm-49139391",
		"name": "Sjølyst Marina Restaurant",
		"address": "Oslo",
		"latitude": 59.9200777,
		"longitude": 10.6737385,
		"cuisines": [
			"nordic"
		],
		"openingHours": "Mo-Su 12:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 137
	},
	{
		"id": "osm-1074903252",
		"name": "Sjømagasinet",
		"address": "Oslo",
		"latitude": 59.907828,
		"longitude": 10.722002,
		"cuisines": [
			"seafood"
		],
		"openingHours": "Mo-Fr 11:30-24:00,13:00-24:00",
		"googleRating": 4.3,
		"googleRatingCount": 752
	},
	{
		"id": "osm-7101264347",
		"name": "Skatten Oslo",
		"address": "Oslo",
		"latitude": 59.9147444,
		"longitude": 10.7752721,
		"cuisines": [
			"nordic"
		],
		"openingHours": "Tu-Th,Su 11:00-01:00, Mo 11:00-24:00, Fr,Sa 11:00-03:30",
		"googleRating": 4.2,
		"googleRatingCount": 391
	},
	{
		"id": "osm-5711115142",
		"name": "Skillebekk SUSHI",
		"address": "Oslo",
		"latitude": 59.912645,
		"longitude": 10.709971,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 13:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 89
	},
	{
		"id": "osm-5734224918",
		"name": "Skrenten Pizza",
		"address": "Oslo",
		"latitude": 59.9024102,
		"longitude": 10.7719668,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.8,
		"googleRatingCount": 263,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 9:00 PM; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 9:00 PM; Friday: 4:00 – 10:00 PM; Saturday: 4:00 – 10:00 PM; Sunday: 4:00 – 9:00 PM"
	},
	{
		"id": "osm-5773305659",
		"name": "Skullerud Sushi AS",
		"address": "Oslo",
		"latitude": 59.86639,
		"longitude": 10.839235,
		"cuisines": [
			"sushi",
			"thai"
		],
		"openingHours": "Su-Th 12:00-21:00; Fr-Sa 12:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 169
	},
	{
		"id": "osm-3632504866",
		"name": "Skur 33",
		"address": "Oslo",
		"latitude": 59.9077661,
		"longitude": 10.7334808,
		"cuisines": [
			"italian"
		],
		"openingHours": "Tu 16:00-22:00; We-Sa 11:30-22:00; Su 13:00-20:00",
		"googleRating": 4.3,
		"googleRatingCount": 1111
	},
	{
		"id": "osm-12222696620",
		"name": "Smestad sushi",
		"address": "Oslo",
		"latitude": 59.9371359,
		"longitude": 10.683503,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Tu-Su 13:00-20:00",
		"googleRating": 4.5,
		"googleRatingCount": 21
	},
	{
		"id": "osm-869302065",
		"name": "Smia Galleri",
		"address": "Oslo",
		"latitude": 59.906453,
		"longitude": 10.785521,
		"cuisines": [
			"french"
		],
		"openingHours": "Tu-Fr 16:00-22:00; Sa 13:00-22:00; Su 13:00-21:00",
		"googleRating": 4.7,
		"googleRatingCount": 481
	},
	{
		"id": "osm-11898432277",
		"name": "Smoothie Exchange",
		"address": "Oslo",
		"latitude": 59.927189,
		"longitude": 10.7196353,
		"cuisines": [
			"juice"
		],
		"googleRating": 4.3,
		"googleRatingCount": 73,
		"openingHours": "Monday: 7:30 AM – 7:00 PM; Tuesday: 7:30 AM – 7:00 PM; Wednesday: 7:30 AM – 7:00 PM; Thursday: 7:30 AM – 7:00 PM; Friday: 7:30 AM – 7:00 PM; Saturday: 9:00 AM – 6:00 PM; Sunday: 10:00 AM – 6:00 PM"
	},
	{
		"id": "osm-11459920148",
		"name": "Smoothie Xchange",
		"address": "Oslo",
		"latitude": 59.9106706,
		"longitude": 10.753086,
		"cuisines": [
			"juice"
		],
		"googleRating": 3.8,
		"googleRatingCount": 55,
		"openingHours": "Monday: 7:00 AM – 9:00 PM; Tuesday: 7:00 AM – 9:00 PM; Wednesday: 7:00 AM – 9:00 PM; Thursday: 7:00 AM – 9:00 PM; Friday: 7:00 AM – 9:00 PM; Saturday: 9:30 AM – 8:00 PM; Sunday: 10:00 AM – 6:00 PM"
	},
	{
		"id": "osm-12921248023",
		"name": "Smoothie Zone",
		"address": "Oslo",
		"latitude": 59.9210171,
		"longitude": 10.7566432,
		"cuisines": [
			"juice"
		],
		"googleRating": 4.5,
		"googleRatingCount": 73,
		"openingHours": "Monday: 10:00 AM – 6:00 PM; Tuesday: 10:00 AM – 6:00 PM; Wednesday: 10:00 AM – 6:00 PM; Thursday: 10:00 AM – 6:00 PM; Friday: 10:00 AM – 6:00 PM; Saturday: 11:00 AM – 5:00 PM; Sunday: 11:00 AM – 5:00 PM"
	},
	{
		"id": "osm-13018869327",
		"name": "Smoothie Zone",
		"address": "Oslo",
		"latitude": 59.9272756,
		"longitude": 10.7953225,
		"cuisines": [
			"juice"
		],
		"googleRating": 4.5,
		"googleRatingCount": 73,
		"openingHours": "Monday: 10:00 AM – 6:00 PM; Tuesday: 10:00 AM – 6:00 PM; Wednesday: 10:00 AM – 6:00 PM; Thursday: 10:00 AM – 6:00 PM; Friday: 10:00 AM – 6:00 PM; Saturday: 11:00 AM – 5:00 PM; Sunday: 11:00 AM – 5:00 PM"
	},
	{
		"id": "osm-12973406990",
		"name": "Smoothiexhange",
		"address": "Oslo",
		"latitude": 59.9128734,
		"longitude": 10.7415277,
		"cuisines": [
			"juice"
		],
		"googleRating": 4.2,
		"googleRatingCount": 20,
		"openingHours": "Monday: 7:30 AM – 6:30 PM; Tuesday: 7:30 AM – 6:30 PM; Wednesday: 7:30 AM – 6:30 PM; Thursday: 7:30 AM – 6:30 PM; Friday: 7:30 AM – 6:30 PM; Saturday: 10:00 AM – 6:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-12690754754",
		"name": "Sofienberg Grill",
		"address": "Oslo",
		"latitude": 59.9237732,
		"longitude": 10.7646141,
		"cuisines": [
			"kebab",
			"burger",
			"pizza",
			"fish_and_chips"
		],
		"openingHours": "Mo-Fr 11:00-23:00, Sa,Su,PH 12:00-24:00",
		"googleRating": 3.4,
		"googleRatingCount": 71
	},
	{
		"id": "osm-7923533717",
		"name": "Sofienberg Sushi og Wok",
		"address": "Oslo",
		"latitude": 59.9228046,
		"longitude": 10.7609823,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 14:00-20:30",
		"googleRating": 5,
		"googleRatingCount": 4
	},
	{
		"id": "osm-1769606908",
		"name": "Sonny's kebab",
		"address": "Oslo",
		"latitude": 59.9187015,
		"longitude": 10.7401277,
		"cuisines": [
			"kebab"
		],
		"googleRating": 3.3,
		"googleRatingCount": 147
	},
	{
		"id": "osm-3839780264",
		"name": "Soya Sushi",
		"address": "Oslo",
		"latitude": 59.899361,
		"longitude": 10.847523,
		"cuisines": [
			"asian"
		],
		"openingHours": "Tu-Th 14:00-20:00; Fr-Su 14:00-21:00; Mo off",
		"googleRating": 3.7,
		"googleRatingCount": 134
	},
	{
		"id": "osm-11983625684",
		"name": "Spektrum Bar & Resturant",
		"address": "Oslo",
		"latitude": 59.9132552,
		"longitude": 10.7525584,
		"cuisines": [
			"pizza",
			"burger",
			"fish_and_chips"
		],
		"googleRating": 4.7,
		"googleRatingCount": 448,
		"openingHours": "Monday: 12:00 – 10:00 PM; Tuesday: 12:00 – 10:00 PM; Wednesday: 12:00 – 10:00 PM; Thursday: 12:00 – 10:00 PM; Friday: 12:00 – 10:30 PM; Saturday: 12:00 – 10:30 PM; Sunday: 12:00 – 8:00 PM"
	},
	{
		"id": "osm-10936736974",
		"name": "Spiseriet OGK",
		"address": "Oslo",
		"latitude": 59.9624329,
		"longitude": 10.6390535,
		"cuisines": [
			"international"
		],
		"googleRating": 4.6,
		"googleRatingCount": 39,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 5:00 PM; Saturday: 12:00 – 5:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-2461518886",
		"name": "St. Lars",
		"address": "Oslo",
		"latitude": 59.926532,
		"longitude": 10.731107,
		"cuisines": [
			"barbecue"
		],
		"openingHours": "Mo-Sa 16:30-24:00",
		"googleRating": 4.4,
		"googleRatingCount": 633
	},
	{
		"id": "osm-1033293278",
		"name": "Stabekk Kebab",
		"address": "Oslo",
		"latitude": 59.909408,
		"longitude": 10.601885,
		"cuisines": [
			"kebab",
			"burger",
			"american",
			"chicken",
			"doner",
			"steak",
			"barbecue"
		],
		"openingHours": "Mo-Fr 10:30-20:30; Sa-Su 11:30-20:30",
		"googleRating": 3.9,
		"googleRatingCount": 123
	},
	{
		"id": "osm-3979406958",
		"name": "Starmo Pizzeria",
		"address": "Oslo",
		"latitude": 59.934237,
		"longitude": 10.761337,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.1,
		"googleRatingCount": 39
	},
	{
		"id": "osm-1815939256",
		"name": "Stop & Go",
		"address": "Oslo",
		"latitude": 59.9536957,
		"longitude": 10.8736594,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.5,
		"googleRatingCount": 1064,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-12571352601",
		"name": "Street Chef",
		"address": "Oslo",
		"latitude": 59.945075,
		"longitude": 10.8092818,
		"cuisines": [
			"burger"
		],
		"openingHours": "Su 12:00-01:00; Mo-Tu, Th-Sa 11:00-01:00; We 17:00-01:00",
		"googleRating": 4.5,
		"googleRatingCount": 137
	},
	{
		"id": "osm-7005956383",
		"name": "Stykke",
		"address": "Oslo",
		"latitude": 59.927345,
		"longitude": 10.796235,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.6,
		"googleRatingCount": 273,
		"openingHours": "Monday: 11:00 AM – 9:00 PM; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 1:00 – 9:00 PM"
	},
	{
		"id": "osm-9359487713",
		"name": "Stykke Sentrum",
		"address": "Oslo",
		"latitude": 59.9173203,
		"longitude": 10.7396597,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.5,
		"googleRatingCount": 29,
		"openingHours": "Monday: Closed; Tuesday: 11:00 AM – 9:00 PM; Wednesday: 11:00 AM – 9:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-2785920548",
		"name": "Subway",
		"address": "Oslo",
		"latitude": 59.9111475,
		"longitude": 10.7480379,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Mo-Sa 10:00-21:00; Su 11:00-19:00",
		"googleRating": 3.5,
		"googleRatingCount": 239
	},
	{
		"id": "osm-3090736997",
		"name": "Subway",
		"address": "Oslo",
		"latitude": 59.9137317,
		"longitude": 10.7417682,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Mo-Fr 09:00-20:00; Sa 10:00-18:00",
		"googleRating": 3.3,
		"googleRatingCount": 487
	},
	{
		"id": "osm-4677378370",
		"name": "Subway",
		"address": "Oslo",
		"latitude": 59.9274858,
		"longitude": 10.7197634,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Mo-Sa 09:00-22:00; Su 10:00-20:00",
		"googleRating": 3,
		"googleRatingCount": 440
	},
	{
		"id": "osm-5578308992",
		"name": "Subway",
		"address": "Oslo",
		"latitude": 59.915445,
		"longitude": 10.737398,
		"cuisines": [
			"sandwich"
		],
		"googleRating": 3.6,
		"googleRatingCount": 269,
		"openingHours": "Monday: 9:00 AM – 8:00 PM; Tuesday: 9:00 AM – 8:00 PM; Wednesday: 9:00 AM – 8:00 PM; Thursday: 9:00 AM – 8:00 PM; Friday: 9:00 AM – 8:00 PM; Saturday: 10:00 AM – 6:00 PM; Sunday: 11:00 AM – 6:00 PM"
	},
	{
		"id": "osm-6136462187",
		"name": "Sukhumvit Soup&Grill",
		"address": "Oslo",
		"latitude": 59.91217,
		"longitude": 10.726725,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Sa 11:00-21:00",
		"googleRating": 4.9,
		"googleRatingCount": 194
	},
	{
		"id": "osm-12787862012",
		"name": "Sultan Food & Sweets",
		"address": "Oslo",
		"latitude": 59.9123095,
		"longitude": 10.7654021,
		"cuisines": [
			"burger",
			"pizza",
			"shawarma"
		],
		"googleRating": 4.7,
		"googleRatingCount": 1842,
		"openingHours": "Monday: 11:00 AM – 3:00 AM; Tuesday: 11:00 AM – 3:00 AM; Wednesday: 11:00 AM – 3:00 AM; Thursday: 11:00 AM – 3:00 AM; Friday: 11:00 AM – 3:00 AM; Saturday: 11:00 AM – 4:00 AM; Sunday: 11:00 AM – 3:00 AM"
	},
	{
		"id": "osm-1935110008",
		"name": "Sumo",
		"address": "Oslo",
		"latitude": 59.914574,
		"longitude": 10.719193,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4,
		"googleRatingCount": 693,
		"openingHours": "Monday: 11:00 AM – 10:30 PM; Tuesday: 11:00 AM – 10:30 PM; Wednesday: 11:00 AM – 10:30 PM; Thursday: 11:00 AM – 10:30 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-4733576814",
		"name": "Sumo",
		"address": "Oslo",
		"latitude": 59.9222392,
		"longitude": 10.7273941,
		"cuisines": [
			"japanese"
		],
		"googleRating": 4,
		"googleRatingCount": 698,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 12:00 – 11:00 PM"
	},
	{
		"id": "osm-9690315164",
		"name": "Sumo",
		"address": "Oslo",
		"latitude": 59.9062604,
		"longitude": 10.7586381,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Th 11:00-22:00; Fr 11:00-32:00; Sa 12:00-21:00; Su 12:00-21:00",
		"googleRating": 3.8,
		"googleRatingCount": 585
	},
	{
		"id": "osm-12331353601",
		"name": "Sumo",
		"address": "Oslo",
		"latitude": 59.9146267,
		"longitude": 10.7364866,
		"cuisines": [
			"japanese",
			"sushi"
		],
		"openingHours": "Mo-We 11:00-22:00; Th-Sa 11:00-23:00; Su 12:00-22:00",
		"googleRating": 4,
		"googleRatingCount": 698
	},
	{
		"id": "osm-6757226549",
		"name": "Sun Sushi",
		"address": "Oslo",
		"latitude": 59.935531,
		"longitude": 10.765153,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Tu-Su 13:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 136
	},
	{
		"id": "osm-12841457401",
		"name": "Sur",
		"address": "Oslo",
		"latitude": 59.9153185,
		"longitude": 10.7382806,
		"cuisines": [
			"french"
		],
		"openingHours": "Tu-Fr 16:00-21:00; Sa 14:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 14506
	},
	{
		"id": "osm-383996246",
		"name": "Sushi & Dinner",
		"address": "Oslo",
		"latitude": 59.920475,
		"longitude": 10.733085,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4,
		"googleRatingCount": 255,
		"openingHours": "Monday: 12:00 – 9:00 PM; Tuesday: 12:00 – 9:00 PM; Wednesday: 12:00 – 9:00 PM; Thursday: 12:00 – 9:00 PM; Friday: 12:00 – 9:00 PM; Saturday: 1:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-2309697789",
		"name": "Sushi Adamstuen",
		"address": "Oslo",
		"latitude": 59.9328884,
		"longitude": 10.733507,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa-Su 13:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 190
	},
	{
		"id": "osm-9558290117",
		"name": "Sushi Bowl",
		"address": "Oslo",
		"latitude": 59.910512,
		"longitude": 10.744167,
		"cuisines": [
			"sushi",
			"thai"
		],
		"openingHours": "Mo-Fr 12:00-22:00; Sa 13:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 817
	},
	{
		"id": "osm-6211357716",
		"name": "Sushi City Wok",
		"address": "Oslo",
		"latitude": 59.9111511,
		"longitude": 10.7483428,
		"cuisines": [
			"asian",
			"japanese",
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa-Su 13:00-22:00",
		"googleRating": 4.2,
		"googleRatingCount": 946
	},
	{
		"id": "osm-10678760021",
		"name": "Sushi Deluxe",
		"address": "Oslo",
		"latitude": 59.908898,
		"longitude": 10.768155,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 14:00-22:00",
		"googleRating": 4,
		"googleRatingCount": 200
	},
	{
		"id": "osm-383997705",
		"name": "Sushi Express",
		"address": "Oslo",
		"latitude": 59.921266,
		"longitude": 10.730067,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa,Su 13:00-21:00",
		"googleRating": 4.6,
		"googleRatingCount": 201
	},
	{
		"id": "osm-13541399928",
		"name": "Sushi Godbit",
		"address": "Oslo",
		"latitude": 59.9304128,
		"longitude": 10.712765,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.1,
		"googleRatingCount": 112,
		"openingHours": "Monday: 12:00 – 8:00 PM; Tuesday: 12:00 – 8:00 PM; Wednesday: 12:00 – 8:00 PM; Thursday: 12:00 – 8:00 PM; Friday: 12:00 – 8:00 PM; Saturday: 2:00 – 8:00 PM; Sunday: 2:00 – 8:00 PM"
	},
	{
		"id": "osm-10774036660",
		"name": "Sushi House",
		"address": "Oslo",
		"latitude": 59.9385052,
		"longitude": 10.7570994,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 13:00-21:00; Sa-Su 14:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 94
	},
	{
		"id": "osm-1213694549",
		"name": "Sushi of Life",
		"address": "Oslo",
		"latitude": 59.921441,
		"longitude": 10.716124,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.1,
		"googleRatingCount": 36,
		"openingHours": "Monday: 11:00 AM – 8:00 PM; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 11:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: Closed; Sunday: Closed"
	},
	{
		"id": "osm-10013718382",
		"name": "Sushi Of Life",
		"address": "Oslo",
		"latitude": 59.9142099,
		"longitude": 10.731575,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-20:00",
		"googleRating": 4.1,
		"googleRatingCount": 36
	},
	{
		"id": "osm-11983921022",
		"name": "Sushi og Thai Lambertseter",
		"address": "Oslo",
		"latitude": 59.872942,
		"longitude": 10.8122665,
		"cuisines": [
			"asian",
			"sushi",
			"thai"
		],
		"openingHours": "Mo-Su 14:00-21:00",
		"googleRating": 4,
		"googleRatingCount": 237
	},
	{
		"id": "osm-8251420799",
		"name": "Sushi Rose",
		"address": "Oslo",
		"latitude": 59.9417358,
		"longitude": 10.7630023,
		"cuisines": [
			"sushi"
		],
		"googleRating": 4.6,
		"googleRatingCount": 160,
		"openingHours": "Monday: 2:00 – 9:00 PM; Tuesday: 2:00 – 9:00 PM; Wednesday: 2:00 – 9:00 PM; Thursday: 2:00 – 9:00 PM; Friday: 2:00 – 9:00 PM; Saturday: 2:00 – 9:00 PM; Sunday: 2:00 – 9:00 PM"
	},
	{
		"id": "osm-2505136414",
		"name": "Sushi time",
		"address": "Oslo",
		"latitude": 59.9139243,
		"longitude": 10.7978525,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-We 10:00-19:00; Th 10:00-19:00; Fr 10:00-19:00; Su 13:00-18:00"
	},
	{
		"id": "osm-6841796311",
		"name": "Sushi Time",
		"address": "Oslo",
		"latitude": 59.9280977,
		"longitude": 10.7536558,
		"cuisines": [
			"sushi"
		]
	},
	{
		"id": "osm-1963760389",
		"name": "Sushihjørnet",
		"address": "Oslo",
		"latitude": 59.9328496,
		"longitude": 10.7340808,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-21:00; Sa-Su 13:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 72
	},
	{
		"id": "osm-10837215702",
		"name": "Svingen på sletta",
		"address": "Oslo",
		"latitude": 59.8976944,
		"longitude": 10.7822432,
		"cuisines": [
			"international"
		],
		"googleRating": 4.8,
		"googleRatingCount": 86,
		"openingHours": "Monday: Closed; Tuesday: Closed; Wednesday: 11:00 AM – 6:00 PM; Thursday: 11:00 AM – 9:00 PM; Friday: 11:00 AM – 9:00 PM; Saturday: 11:00 AM – 6:00 PM; Sunday: 11:00 AM – 6:00 PM"
	},
	{
		"id": "osm-8792307673",
		"name": "Szechuan Chengdu Restaurant",
		"address": "Oslo",
		"latitude": 59.9231392,
		"longitude": 10.7716418,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Mo-Su 14:00-21:30",
		"googleRating": 4.4,
		"googleRatingCount": 1223
	},
	{
		"id": "osm-5285791938",
		"name": "Tacopop",
		"address": "Oslo",
		"latitude": 59.908531,
		"longitude": 10.7584697,
		"cuisines": [
			"tacos",
			"mexican"
		],
		"googleRating": 3.9,
		"googleRatingCount": 58
	},
	{
		"id": "osm-9095744795",
		"name": "Tacoteket",
		"address": "Oslo",
		"latitude": 59.9402204,
		"longitude": 10.7214282,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Mo-Fr 11:00-17:30",
		"googleRating": 4.5,
		"googleRatingCount": 12
	},
	{
		"id": "osm-2110522805",
		"name": "Tandoori Hut",
		"address": "Oslo",
		"latitude": 59.937558,
		"longitude": 10.7558224,
		"cuisines": [
			"indian"
		],
		"googleRating": 4.2,
		"googleRatingCount": 282
	},
	{
		"id": "osm-2085240160",
		"name": "Tasty Thai",
		"address": "Oslo",
		"latitude": 59.925953,
		"longitude": 10.730409,
		"cuisines": [
			"thai"
		],
		"googleRating": 4.3,
		"googleRatingCount": 545,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 9:30 PM; Wednesday: 3:00 – 9:30 PM; Thursday: 3:00 – 9:30 PM; Friday: 3:00 – 9:30 PM; Saturday: 3:00 – 9:30 PM; Sunday: 3:00 – 9:30 PM"
	},
	{
		"id": "osm-344509174",
		"name": "Tatakii Asian",
		"address": "Oslo",
		"latitude": 59.9283461,
		"longitude": 10.7088669,
		"cuisines": [
			"asian",
			"sushi"
		],
		"openingHours": "Mo, Su 16:00-21:30; Tu-Th 16:00-23:00; Fr, Sa 16:00-00:00",
		"googleRating": 4.3,
		"googleRatingCount": 956
	},
	{
		"id": "osm-9812718617",
		"name": "Teatro Terrasse",
		"address": "Oslo",
		"latitude": 59.9123893,
		"longitude": 10.7305962,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.4,
		"googleRatingCount": 253,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 2:00 – 10:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-221404796",
		"name": "Texburger Vækerø",
		"address": "Oslo",
		"latitude": 59.9177353,
		"longitude": 10.6597447,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 10:30-00:30; Su 12:00-00:30",
		"googleRating": 4.5,
		"googleRatingCount": 4238
	},
	{
		"id": "osm-667387932",
		"name": "TGI Fridays",
		"address": "Oslo",
		"latitude": 59.90964,
		"longitude": 10.726513,
		"cuisines": [
			"american"
		],
		"googleRating": 3.6,
		"googleRatingCount": 2882,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 11:00 PM; Saturday: 11:00 AM – 11:00 PM; Sunday: 12:00 – 10:00 PM"
	},
	{
		"id": "osm-4394334136",
		"name": "TGI Fridays",
		"address": "Oslo",
		"latitude": 59.9124621,
		"longitude": 10.7504168,
		"cuisines": [
			"american"
		],
		"openingHours": "Mo,Tu 11:00-21:00, We,Th 11:00-22:00, Fr,Sa 11:00-23:00, Su 12:00-21:00",
		"googleRating": 3.6,
		"googleRatingCount": 2882
	},
	{
		"id": "osm-1523679585",
		"name": "Thai Corner",
		"address": "Oslo",
		"latitude": 59.9254107,
		"longitude": 10.775141,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Fr 14:00-21:00; Su 14:00-21:00",
		"googleRating": 4.1,
		"googleRatingCount": 217
	},
	{
		"id": "osm-12701736901",
		"name": "Thai Orchid Restaurant",
		"address": "Oslo",
		"latitude": 59.9163481,
		"longitude": 10.7547153,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Sa 12:00-21:00; Su 14:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 828
	},
	{
		"id": "osm-7788521340",
		"name": "The Codfather",
		"address": "Oslo",
		"latitude": 59.8980339,
		"longitude": 10.6216929,
		"cuisines": [
			"fish_and_chips"
		],
		"googleRating": 4.6,
		"googleRatingCount": 107
	},
	{
		"id": "osm-12841457601",
		"name": "The fox and loaf",
		"address": "Oslo",
		"latitude": 59.9138956,
		"longitude": 10.7508763,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Tu-Sa 11:00-18:00",
		"googleRating": 4,
		"googleRatingCount": 127
	},
	{
		"id": "osm-3471869888",
		"name": "The Greasy House",
		"address": "Oslo",
		"latitude": 59.937861,
		"longitude": 10.754605,
		"cuisines": [
			"burger"
		],
		"googleRating": 3.9,
		"googleRatingCount": 312,
		"openingHours": "Monday: 11:00 AM – 11:00 PM; Tuesday: 11:00 AM – 11:00 PM; Wednesday: 11:00 AM – 11:00 PM; Thursday: 11:00 AM – 11:00 PM; Friday: 11:00 AM – 12:00 AM; Saturday: 11:00 AM – 12:00 AM; Sunday: 9:00 AM – 11:00 PM"
	},
	{
		"id": "osm-11076664482",
		"name": "The Salmon",
		"address": "Oslo",
		"latitude": 59.9080216,
		"longitude": 10.7232991,
		"cuisines": [
			"fish"
		],
		"openingHours": "Mo-Su 11:30-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 3105
	},
	{
		"id": "osm-8143157020",
		"name": "The Vandalay",
		"address": "Oslo",
		"latitude": 59.907181,
		"longitude": 10.7578531,
		"cuisines": [
			"indian"
		],
		"googleRating": 3.6,
		"googleRatingCount": 394
	},
	{
		"id": "osm-292143398",
		"name": "Theka",
		"address": "Oslo",
		"latitude": 59.923498,
		"longitude": 10.758101,
		"cuisines": [
			"indian"
		],
		"openingHours": "Mo-Fr 15:00-22:00; Sa-Su 12:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 537
	},
	{
		"id": "osm-12462860921",
		"name": "Tiffany's",
		"address": "Oslo",
		"latitude": 59.9302951,
		"longitude": 10.7926513,
		"cuisines": [
			"burger",
			"japanese"
		],
		"googleRating": 4.4,
		"googleRatingCount": 373,
		"openingHours": "Monday: 4:00 – 10:00 PM; Tuesday: 4:00 – 10:00 PM; Wednesday: 4:00 – 10:00 PM; Thursday: 4:00 – 10:00 PM; Friday: 4:00 – 11:00 PM; Saturday: 1:00 – 11:00 PM; Sunday: 1:00 – 10:00 PM"
	},
	{
		"id": "osm-1770766093",
		"name": "Tijuana",
		"address": "Oslo",
		"latitude": 59.922088,
		"longitude": 10.759126,
		"cuisines": [
			"mexican"
		],
		"openingHours": "Tu-We 16:00-01:30; Th 16:00-03:30; Fr 14:30-03:30; Sa 12:00-03:30",
		"googleRating": 3.8,
		"googleRatingCount": 1651
	},
	{
		"id": "osm-13343041312",
		"name": "Tomodomo Noodles",
		"address": "Oslo",
		"latitude": 59.9175125,
		"longitude": 10.7393865,
		"cuisines": [
			"ramen",
			"udon"
		],
		"openingHours": "Mo-We 15:00-20:00; Th-Fr 15:00-21:00; Sa 13:00-21:00; Su 13:00-20:00",
		"googleRating": 4.7,
		"googleRatingCount": 270
	},
	{
		"id": "osm-2628979001",
		"name": "Toms Sushi & Wok",
		"address": "Oslo",
		"latitude": 59.922729,
		"longitude": 10.771045,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 14:00-21:00",
		"googleRating": 4.9,
		"googleRatingCount": 75
	},
	{
		"id": "osm-1329411515",
		"name": "Trancher Entrecôte",
		"address": "Oslo",
		"latitude": 59.918852,
		"longitude": 10.759593,
		"cuisines": [
			"steak_house"
		],
		"openingHours": "Mo-Su 16:00-23:00",
		"googleRating": 4.5,
		"googleRatingCount": 762
	},
	{
		"id": "osm-2456497506",
		"name": "Trans Sushi",
		"address": "Oslo",
		"latitude": 59.921661,
		"longitude": 10.732103,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa-Su 13:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 117
	},
	{
		"id": "osm-11835386441",
		"name": "Trattoria Crudo",
		"address": "Oslo",
		"latitude": 59.9499726,
		"longitude": 10.765839,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.1,
		"googleRatingCount": 158,
		"openingHours": "Monday: Closed; Tuesday: 11:30 AM – 11:00 PM; Wednesday: 11:30 AM – 11:00 PM; Thursday: 11:30 AM – 11:00 PM; Friday: 11:30 AM – 11:00 PM; Saturday: 12:00 – 11:00 PM; Sunday: Closed"
	},
	{
		"id": "osm-1329411486",
		"name": "Trattoria Popolare",
		"address": "Oslo",
		"latitude": 59.918269,
		"longitude": 10.759943,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Tu 11:00-24:00; We-Th 11:00-01:00; Fr 11:00-02:00; Su 12:00-24:00; Sa 11:00-00:00",
		"googleRating": 4.2,
		"googleRatingCount": 1805
	},
	{
		"id": "osm-835666196",
		"name": "Trollbua",
		"address": "Oslo",
		"latitude": 59.9521515,
		"longitude": 10.7962898,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 15:00-22:00; Sa 14:00-22:00; Su 13:00-22:00",
		"googleRating": 4.5,
		"googleRatingCount": 101
	},
	{
		"id": "osm-5101765651",
		"name": "Troys",
		"address": "Oslo",
		"latitude": 59.924633,
		"longitude": 10.7586736,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Sa 12:00-23:00; Su 14:00-23:00",
		"googleRating": 3.8,
		"googleRatingCount": 260
	},
	{
		"id": "osm-5005278651",
		"name": "Tuk Tuk Thai",
		"address": "Oslo",
		"latitude": 59.914134,
		"longitude": 10.7464928,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Fr 15:00-22:00; Sa 13:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 1069
	},
	{
		"id": "osm-5129429922",
		"name": "Tunco",
		"address": "Oslo",
		"latitude": 59.923389,
		"longitude": 10.740883,
		"cuisines": [
			"asian"
		],
		"openingHours": "Mo-Fr 11:30-22:00; Sa-Su 13:00-22:00",
		"googleRating": 4.6,
		"googleRatingCount": 647
	},
	{
		"id": "osm-9227303341",
		"name": "Tunco",
		"address": "Oslo",
		"latitude": 59.9159729,
		"longitude": 10.7507703,
		"cuisines": [
			"asian"
		],
		"googleRating": 4,
		"googleRatingCount": 75,
		"openingHours": "Monday: 11:00 AM – 10:00 PM; Tuesday: 11:00 AM – 10:00 PM; Wednesday: 11:00 AM – 10:00 PM; Thursday: 11:00 AM – 10:00 PM; Friday: 11:00 AM – 10:00 PM; Saturday: 11:00 AM – 10:00 PM; Sunday: 12:00 – 9:00 PM"
	},
	{
		"id": "osm-5316879862",
		"name": "Txotx",
		"address": "Oslo",
		"latitude": 59.9196105,
		"longitude": 10.7600068,
		"cuisines": [
			"tapas",
			"basque"
		],
		"openingHours": "Tu-Sa 16:00-01:00",
		"googleRating": 4.4,
		"googleRatingCount": 652
	},
	{
		"id": "osm-7959754713",
		"name": "Tøyen Pizza & Grill",
		"address": "Oslo",
		"latitude": 59.9143678,
		"longitude": 10.7763374,
		"cuisines": [
			"pizza",
			"burger",
			"falafel",
			"fast_food",
			"kebab"
		],
		"openingHours": "Su-Th 10:00-01:00; Fr-Sa 10:00-03:30",
		"googleRating": 3.6,
		"googleRatingCount": 191
	},
	{
		"id": "osm-2964045256",
		"name": "Tåsen Cafebar & Pizza",
		"address": "Oslo",
		"latitude": 59.9524883,
		"longitude": 10.7518729,
		"cuisines": [
			"pizza",
			"kebab"
		],
		"openingHours": "Tu-Fr 12:00-21:00; Sa-Su 13:00-20:30",
		"googleRating": 4,
		"googleRatingCount": 709
	},
	{
		"id": "osm-1999461639",
		"name": "Uchi",
		"address": "Oslo",
		"latitude": 59.914354,
		"longitude": 10.741394,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Th 11:00-21:30; Fr 11:00-23:00; Sa 13:00-23:00; Su off",
		"googleRating": 4.4,
		"googleRatingCount": 427
	},
	{
		"id": "osm-4739354643",
		"name": "Ugly Duckling",
		"address": "Oslo",
		"latitude": 59.9164839,
		"longitude": 10.7525373,
		"cuisines": [
			"sandwich"
		],
		"googleRating": 4.6,
		"googleRatingCount": 70,
		"openingHours": "Monday: 11:00 AM – 7:00 PM; Tuesday: Closed; Wednesday: 11:00 AM – 7:00 PM; Thursday: 11:00 AM – 7:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: 1:00 – 10:00 PM; Sunday: 1:00 – 7:00 PM"
	},
	{
		"id": "osm-13068378751",
		"name": "Ugly Duckling",
		"address": "Oslo",
		"latitude": 59.9150404,
		"longitude": 10.736936,
		"cuisines": [
			"sandwich"
		],
		"openingHours": "Wed-Fri: 12 PM – 6 PM Sat: 12 PM - 5 PM Sun: 12 PM - 6 PM",
		"googleRating": 4.6,
		"googleRatingCount": 70
	},
	{
		"id": "osm-5868856801",
		"name": "UMai Sush",
		"address": "Oslo",
		"latitude": 59.9306098,
		"longitude": 10.7919132,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 12:00-21:00; Sa,Su 13:00-21:00",
		"googleRating": 4.5,
		"googleRatingCount": 304
	},
	{
		"id": "osm-9892059379",
		"name": "Umami Sushi",
		"address": "Oslo",
		"latitude": 59.923952,
		"longitude": 10.767991,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 11:00-21:00",
		"googleRating": 4.4,
		"googleRatingCount": 179
	},
	{
		"id": "osm-10013717804",
		"name": "Upper Crust",
		"address": "Oslo",
		"latitude": 59.914738,
		"longitude": 10.7303227,
		"cuisines": [
			"sandwich"
		],
		"googleRating": 3.5,
		"googleRatingCount": 34,
		"openingHours": "Monday: 7:00 AM – 8:00 PM; Tuesday: 7:00 AM – 8:00 PM; Wednesday: 7:00 AM – 8:00 PM; Thursday: 7:00 AM – 8:00 PM; Friday: 7:00 AM – 8:00 PM; Saturday: 10:00 AM – 7:00 PM; Sunday: 11:00 AM – 5:00 PM"
	},
	{
		"id": "osm-2788528556",
		"name": "Valkyrien Grill",
		"address": "Oslo",
		"latitude": 59.928139,
		"longitude": 10.718273,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Su 12:00-03:30",
		"googleRating": 3.5,
		"googleRatingCount": 351
	},
	{
		"id": "osm-5094785566",
		"name": "Verona pizza og kebab",
		"address": "Oslo",
		"latitude": 59.9139583,
		"longitude": 10.7548154,
		"cuisines": [
			"pizza"
		],
		"googleRating": 3.8,
		"googleRatingCount": 300,
		"openingHours": "Monday: 10:00 AM – 12:00 AM; Tuesday: 10:00 AM – 12:00 AM; Wednesday: 10:00 AM – 12:00 AM; Thursday: 10:00 AM – 12:00 AM; Friday: 10:00 AM – 12:00 AM; Saturday: 10:00 AM – 3:30 AM; Sunday: 10:00 AM – 12:00 AM"
	},
	{
		"id": "osm-7288007623",
		"name": "Vesuvio Café og Pizza",
		"address": "Oslo",
		"latitude": 59.92508,
		"longitude": 10.745584,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Tu-Su 11:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 645
	},
	{
		"id": "osm-13340053984",
		"name": "Vesuvio Vista Mare",
		"address": "Oslo",
		"latitude": 59.9086804,
		"longitude": 10.7259401,
		"cuisines": [
			"pizza",
			"seafood"
		],
		"openingHours": "Tu-Th 13:00-22:00; Fr 13:00-22:00; Sa 13:00-22:00; Mo, Su off",
		"googleRating": 4.6,
		"googleRatingCount": 65
	},
	{
		"id": "osm-3262162065",
		"name": "Vettakollen Pizzeria",
		"address": "Oslo",
		"latitude": 59.959833,
		"longitude": 10.695926,
		"cuisines": [
			"pizza"
		],
		"openingHours": "14:00-21:00",
		"googleRating": 4.8,
		"googleRatingCount": 255
	},
	{
		"id": "osm-11374926341",
		"name": "Villa Paradiso",
		"address": "Oslo",
		"latitude": 59.9290795,
		"longitude": 10.7182664,
		"cuisines": [
			"pizza",
			"italian"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 1013
	},
	{
		"id": "osm-4744755891",
		"name": "Villa Paradiso Frogner",
		"address": "Oslo",
		"latitude": 59.91509,
		"longitude": 10.717685,
		"cuisines": [
			"italian"
		],
		"openingHours": "Mo-Th 11:00-22:00; Fr 10:00-23:00; Sa 12:00-23:00; Su 12:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 1470
	},
	{
		"id": "osm-263710832",
		"name": "Villa Paradiso Grünerløkka",
		"address": "Oslo",
		"latitude": 59.923502,
		"longitude": 10.757423,
		"cuisines": [
			"pizza",
			"italian"
		],
		"openingHours": "Mo-We 08:00-21:00; Th-Fr 08:00-22:00; Sa 10:00-22:00; Su 11:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 2786
	},
	{
		"id": "osm-2045251453",
		"name": "Village",
		"address": "Oslo",
		"latitude": 59.918931,
		"longitude": 10.70268,
		"cuisines": [
			"indian"
		]
	},
	{
		"id": "osm-6374708172",
		"name": "Vinderen Kebab og Pizza",
		"address": "Oslo",
		"latitude": 59.9433554,
		"longitude": 10.6996176,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Su-Th 11:00-23:00, Fr,Sa 11:00-01:00",
		"googleRating": 4.4,
		"googleRatingCount": 308
	},
	{
		"id": "osm-1421832781",
		"name": "Vinny's Kebab",
		"address": "Oslo",
		"latitude": 59.9134696,
		"longitude": 10.7538702,
		"cuisines": [
			"kebab"
		],
		"openingHours": "Mo-Th 10:00-23:00; Fr 10:00-03:00; Sa 11:00-03:00; Su 12:00-23:00",
		"googleRating": 3.8,
		"googleRatingCount": 278
	},
	{
		"id": "osm-9936847317",
		"name": "Vinoteket",
		"address": "Oslo",
		"latitude": 59.915064,
		"longitude": 10.722015,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Tu-Sa 16:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 290
	},
	{
		"id": "osm-113871565",
		"name": "Vintage Kitchen",
		"address": "Oslo",
		"latitude": 59.9169655,
		"longitude": 10.7625315,
		"cuisines": [
			"french"
		],
		"openingHours": "Tu-Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-17:00",
		"googleRating": 4.5,
		"googleRatingCount": 271
	},
	{
		"id": "osm-10814243247",
		"name": "Vu Kjøkken",
		"address": "Oslo",
		"latitude": 59.92848,
		"longitude": 10.7997912,
		"cuisines": [
			"asian"
		],
		"googleRating": 4.9,
		"googleRatingCount": 160,
		"openingHours": "Monday: 11:00 AM – 8:00 PM; Tuesday: 11:00 AM – 8:00 PM; Wednesday: 11:00 AM – 8:00 PM; Thursday: 11:00 AM – 8:00 PM; Friday: 11:00 AM – 8:00 PM; Saturday: Closed; Sunday: 1:00 – 8:00 PM"
	},
	{
		"id": "osm-10204324980",
		"name": "Vulkan fisk",
		"address": "Oslo",
		"latitude": 59.9220043,
		"longitude": 10.7517635,
		"cuisines": [
			"seafood"
		],
		"googleRating": 4.5,
		"googleRatingCount": 1073,
		"openingHours": "Monday: Closed; Tuesday: 11:30 AM – 10:00 PM; Wednesday: 11:30 AM – 10:00 PM; Thursday: 11:30 AM – 10:00 PM; Friday: 11:30 AM – 10:00 PM; Saturday: 11:30 AM – 10:00 PM; Sunday: 12:00 – 8:00 PM"
	},
	{
		"id": "osm-2284961002",
		"name": "Vulkani Sushi",
		"address": "Oslo",
		"latitude": 59.9272632,
		"longitude": 10.7712071,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Su 14:00-21:00",
		"googleRating": 4.2,
		"googleRatingCount": 138
	},
	{
		"id": "osm-4558463883",
		"name": "Wasabi sushi",
		"address": "Oslo",
		"latitude": 59.9145418,
		"longitude": 10.7756722,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Fr 11:00-22:00; Sa,Su 13:00-22:00",
		"googleRating": 4,
		"googleRatingCount": 375
	},
	{
		"id": "osm-4548877490",
		"name": "Way Down South",
		"address": "Oslo",
		"latitude": 59.919037,
		"longitude": 10.754907,
		"cuisines": [
			"barbecue"
		],
		"googleRating": 4.5,
		"googleRatingCount": 2488,
		"openingHours": "Monday: Closed; Tuesday: 4:00 – 9:00 PM; Wednesday: 4:00 – 9:00 PM; Thursday: 4:00 – 9:00 PM; Friday: 4:00 – 9:30 PM; Saturday: 2:00 – 9:30 PM; Sunday: Closed"
	},
	{
		"id": "osm-4137156749",
		"name": "Whatsoup",
		"address": "Oslo",
		"latitude": 59.9117577,
		"longitude": 10.7430527,
		"cuisines": [
			"soup"
		],
		"openingHours": "Mo-Fr 10:00-20:00; Sa 10:00-18:00",
		"googleRating": 3.9,
		"googleRatingCount": 68
	},
	{
		"id": "osm-4343892495",
		"name": "Wünderburger",
		"address": "Oslo",
		"latitude": 59.9174041,
		"longitude": 10.7542231,
		"cuisines": [
			"burger"
		],
		"openingHours": "Mo-Th 11:00-22:00; Fr 11:00-01:00; Sa 12:00-01:00; Su 13:00-22:00",
		"googleRating": 4,
		"googleRatingCount": 616
	},
	{
		"id": "osm-3664306370",
		"name": "Waaberi Restaurant",
		"address": "Oslo",
		"latitude": 59.9123269,
		"longitude": 10.7666502,
		"cuisines": [
			"turkish"
		],
		"openingHours": "Tu-Su 12:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 379
	},
	{
		"id": "osm-4065303389",
		"name": "Xin Chao",
		"address": "Oslo",
		"latitude": 59.9180107,
		"longitude": 10.7506116,
		"cuisines": [
			"vietnamese"
		],
		"openingHours": "Tu-Su 14:00-21:00",
		"googleRating": 4.6,
		"googleRatingCount": 444
	},
	{
		"id": "osm-2023496836",
		"name": "Yaya’s",
		"address": "Oslo",
		"latitude": 59.91095,
		"longitude": 10.722625,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Su 16:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 753
	},
	{
		"id": "osm-2023518409",
		"name": "Yaya’s",
		"address": "Oslo",
		"latitude": 59.911873,
		"longitude": 10.737656,
		"cuisines": [
			"thai"
		],
		"openingHours": "Mo-Su 16:00-22:00",
		"googleRating": 4.1,
		"googleRatingCount": 753
	},
	{
		"id": "osm-506513943",
		"name": "Yo! Sushi",
		"address": "Oslo",
		"latitude": 59.9107142,
		"longitude": 10.7514161,
		"cuisines": [
			"sushi"
		],
		"openingHours": "Mo-Th 11:00-21:00; Fr-Sa 11:00-22:00; Su 12:00-21:00",
		"googleRating": 3.5,
		"googleRatingCount": 393
	},
	{
		"id": "osm-12669751801",
		"name": "Yum Cha",
		"address": "Oslo",
		"latitude": 59.9284989,
		"longitude": 10.7193587,
		"cuisines": [
			"chinese"
		],
		"openingHours": "Tu-Fr 16:00-23:00; Sa 14:00-23:00; Su 15:00-22:00",
		"googleRating": 4.4,
		"googleRatingCount": 335
	},
	{
		"id": "osm-11950721454",
		"name": "Yummy Falafel",
		"address": "Oslo",
		"latitude": 59.913026,
		"longitude": 10.7615109,
		"cuisines": [
			"falafel"
		],
		"googleRating": 4.2,
		"googleRatingCount": 214,
		"openingHours": "Monday: 11:30 AM – 9:30 PM; Tuesday: 11:30 AM – 9:30 PM; Wednesday: 11:30 AM – 9:30 PM; Thursday: 11:30 AM – 9:30 PM; Friday: 11:00 AM – 2:00 AM; Saturday: 12:30 PM – 12:00 AM; Sunday: 12:30 – 2:00 AM, 2:00 – 9:30 PM"
	},
	{
		"id": "osm-11809922334",
		"name": "Yummy House",
		"address": "Oslo",
		"latitude": 59.9305558,
		"longitude": 10.7125495,
		"cuisines": [
			"chinese"
		],
		"googleRating": 4.6,
		"googleRatingCount": 406,
		"openingHours": "Monday: Closed; Tuesday: 2:00 – 10:00 PM; Wednesday: 2:00 – 10:00 PM; Thursday: 2:00 – 10:00 PM; Friday: 3:00 – 11:00 PM; Saturday: 3:00 – 11:00 PM; Sunday: 2:00 – 10:00 PM"
	},
	{
		"id": "osm-2179124121",
		"name": "Yummy Sushi",
		"address": "Oslo",
		"latitude": 59.8916311,
		"longitude": 10.842741,
		"cuisines": [
			"sushi"
		],
		"openingHours": "14:00-22:00",
		"googleRating": 4.7,
		"googleRatingCount": 282
	},
	{
		"id": "osm-6391982050",
		"name": "Zam Zam avd Hasle",
		"address": "Oslo",
		"latitude": 59.919906,
		"longitude": 10.7913528,
		"cuisines": [
			"pizza",
			"burger"
		],
		"openingHours": "Mo-Su 14:00-22:00",
		"googleRating": 4.8,
		"googleRatingCount": 216
	},
	{
		"id": "osm-5094785570",
		"name": "Zarathustra Meyhane",
		"address": "Oslo",
		"latitude": 59.918573,
		"longitude": 10.759595,
		"cuisines": [
			"turkish"
		],
		"openingHours": "Tu-Su 16:00-22:00",
		"googleRating": 4.3,
		"googleRatingCount": 330
	},
	{
		"id": "osm-12579248383",
		"name": "ZiO Pizza",
		"address": "Oslo",
		"latitude": 59.9326142,
		"longitude": 10.7243159,
		"cuisines": [
			"pizza"
		],
		"googleRating": 4.8,
		"googleRatingCount": 239,
		"openingHours": "Monday: Closed; Tuesday: 3:00 – 10:00 PM; Wednesday: 3:00 – 10:00 PM; Thursday: 3:00 – 10:00 PM; Friday: 3:00 – 10:00 PM; Saturday: 3:00 – 10:00 PM; Sunday: 3:00 – 10:00 PM"
	},
	{
		"id": "osm-9797054830",
		"name": "ZZ Pizza",
		"address": "Oslo",
		"latitude": 59.906052,
		"longitude": 10.775168,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Th 16:00-22:00; Fr 11:00-22:00; Sa 12:00-22:00; Su 12:00-21:00",
		"googleRating": 4.3,
		"googleRatingCount": 595
	},
	{
		"id": "osm-110789298",
		"name": "Årvoll pizza",
		"address": "Oslo",
		"latitude": 59.9469545,
		"longitude": 10.8161113,
		"cuisines": [
			"pizza"
		],
		"openingHours": "Mo-Fr 11:00-23:00; Sa,Su 12:00-23:00",
		"googleRating": 4.9,
		"googleRatingCount": 207
	}
];
