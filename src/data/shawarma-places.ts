export type ShawarmaPlace = {
	id: string;
	name: string;
	address: string;
	latitude: number;
	longitude: number;
};

export const shawarmaPlaces: ShawarmaPlace[] = [
	// Grønland/Tøyen
	{
		id: "shawarma-house",
		name: "Shawarma House",
		address: "Smalgangen 1, 0188 Oslo",
		latitude: 59.9131,
		longitude: 10.76,
	},
	{
		id: "sultan-oslo",
		name: "Sultan Oslo",
		address: "Grønlandsleiret 16a, 0190 Oslo",
		latitude: 59.9126,
		longitude: 10.7622,
	},
	{
		id: "oslo-kebab-pizza-hus",
		name: "Oslo Kebab & Pizza Hus",
		address: "Tøyengata 1, 0190 Oslo",
		latitude: 59.914,
		longitude: 10.763,
	},
	// Sentrum
	{
		id: "dronningens-kebab",
		name: "Dronningens Kebab",
		address: "Dronningens gate 27, 0154 Oslo",
		latitude: 59.9117,
		longitude: 10.7442,
	},
	{
		id: "gazakjokken",
		name: "Gazakjøkken",
		address: "Møllergata 10, 0179 Oslo",
		latitude: 59.9155,
		longitude: 10.748,
	},
	{
		id: "new-beirut-kebab",
		name: "New Beirut Kebab",
		address: "Møllergata 8, 0179 Oslo",
		latitude: 59.9153,
		longitude: 10.7477,
	},
	{
		id: "king-falafel",
		name: "King Falafel",
		address: "Brugata 3A, 0186 Oslo",
		latitude: 59.9138,
		longitude: 10.7535,
	},
	// Torggata/Storgata
	{
		id: "mediterranean-grill",
		name: "Mediterranean Grill",
		address: "Torggata 34, 0183 Oslo",
		latitude: 59.9175,
		longitude: 10.7523,
	},
	{
		id: "falafel-me",
		name: "Falafel Me",
		address: "Storgata 13, 0155 Oslo",
		latitude: 59.9138,
		longitude: 10.7498,
	},
	{
		id: "parthenon",
		name: "Parthenon Pizza & Grillbar",
		address: "Osterhaus' gate 14A, 0183 Oslo",
		latitude: 59.9193,
		longitude: 10.7547,
	},
	// Bislett
	{
		id: "bislett-kebab",
		name: "Bislett Kebab House",
		address: "Hegdehaugsveien 2, 0167 Oslo",
		latitude: 59.92,
		longitude: 10.734,
	},
	{
		id: "habibi-pilestredet",
		name: "Habibi Pilestredet",
		address: "Pilestredet 55, 0350 Oslo",
		latitude: 59.9225,
		longitude: 10.7365,
	},
	// Majorstuen
	{
		id: "majorstuen-grill",
		name: "Majorstuen Grill & Kebab",
		address: "Bogstadveien 53B, 0366 Oslo",
		latitude: 59.929,
		longitude: 10.716,
	},
	// Grünerløkka
	{
		id: "falafel-n-juice",
		name: "Falafel n' Juice",
		address: "Thorvald Meyers gate 33D, 0555 Oslo",
		latitude: 59.9223,
		longitude: 10.7585,
	},
	// Nydalen
	{
		id: "nydalen-kebab",
		name: "Nydalen Kebab og Pizza",
		address: "Maridalsveien 256, 0872 Oslo",
		latitude: 59.9495,
		longitude: 10.7665,
	},
	// Carl Berner
	{
		id: "damaskus-huset",
		name: "Damaskus Huset",
		address: "Trondheimsveien 12C, 0560 Oslo",
		latitude: 59.9265,
		longitude: 10.772,
	},
	// Sagene
	{
		id: "san-remo",
		name: "San Remo Pizza & Grill",
		address: "Torshovgata 7, 0476 Oslo",
		latitude: 59.928,
		longitude: 10.756,
	},
	// Grefsen
	{
		id: "new-winny-kebab",
		name: "New Winny Kebab",
		address: "Grefsenveien 57, 0487 Oslo",
		latitude: 59.944,
		longitude: 10.779,
	},
];
