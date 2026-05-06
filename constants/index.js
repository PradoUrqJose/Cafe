const navLinks = [
	{
		id: "cocktails",
		title: "Descripcion",
	},
	{
		id: "about",
		title: "Justificación",
	},
	{
		id: "work",
		title: "Vista",
	},
	{
		id: "contact",
		title: "",
	},
];

const cocktailLists = [
	{
		name: "Chapel Hill Shiraz",
		country: "AU",
		detail: "Battle",
		price: "$10",
	},
	{
		name: "Caten Malbee",
		country: "AU",
		detail: "Battle",
		price: "$49",
	},
	{
		name: "Rhino Pale Ale",
		country: "CA",
		detail: "750 ml",
		price: "$20",
	},
	{
		name: "Irish Guinness",
		country: "IE",
		detail: "600 ml",
		price: "$29",
	},
];

const mockTailLists = [
	{
		name: "Tropical Bloom",
		country: "US",
		detail: "Battle",
		price: "$10",
	},
	{
		name: "Passionfruit Mint",
		country: "US",
		detail: "Battle",
		price: "$49",
	},
	{
		name: "Citrus Glow",
		country: "CA",
		detail: "750 ml",
		price: "$20",
	},
	{
		name: "Lavender Fizz",
		country: "IE",
		detail: "600 ml",
		price: "$29",
	},
];

const profileLists = [
	{
		imgPath: "/images/profile1.png",
	},
	{
		imgPath: "/images/profile2.png",
	},
	{
		imgPath: "/images/profile3.png",
	},
	{
		imgPath: "/images/profile4.png",
	},
];

const featureLists = [
	"Perfectly balanced blends",
	"Garnished to perfection",
	"Ice-cold every time",
	"Expertly shaken & stirred",
];

const goodLists = [
	"Handpicked ingredients",
	"Signature techniques",
	"Bartending artistry in action",
	"Freshly muddled flavors",
];

const storeInfo = {
	heading: "Where to Find Us",
	address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
	contact: {
		phone: "(555) 987-6543",
		email: "hello@jsmcocktail.com",
	},
};

const openingHours = [
	{ day: "Mon–Thu", time: "11:00am – 12am" },
	{ day: "Fri", time: "11:00am – 2am" },
	{ day: "Sat", time: "9:00am – 2am" },
	{ day: "Sun", time: "9:00am – 1am" },
];

const socials = [
	{
		name: "Instagram",
		icon: "/images/insta.png",
		url: "#",
	},
	{
		name: "X (Twitter)",
		icon: "/images/x.png",
		url: "#",
	},
	{
		name: "Facebook",
		icon: "/images/fb.png",
		url: "#",
	},
];

const coffeeLogistics = [
	{
		id: 1,
		name: "FODA",
		image: "/images/europe.png",
		title: "Análisis Estratégico FODA",
		description:
			"Fortalezas: Café peruano de alta calidad y acceso con arancel 0% al mercado europeo. Oportunidades: Creciente demanda en Europa por productos sostenibles y trazables. Debilidades: Limitaciones en la infraestructura logística interna del Perú que incrementan los costos operativos. Amenazas: Regulaciones ambientales estrictas como la EUDR y fuerte competencia de países como Brasil y Colombia.",
	},
	{
		id: 2,
		name: "Mercado",
		image: "/images/image.png",
		title: "Mercado Destino: Alemania",
		description:
			"Alemania fue seleccionada como mercado objetivo por su alto consumo per cápita (+5 kg/persona) y por ser uno de los principales importadores de café peruano. Además, representa una puerta de entrada estratégica a la Unión Europea, con ventaja de arancel 0% gracias al acuerdo comercial vigente.",
	},
	{
		id: 3,
		name: "Envase",
		image: "/images/cofe-carp.png",
		title: "Envase, Embalaje y Unitarización",
		description:
			"Sacos de yute de 69 kg con barrera interna GrainPro para protección contra la humedad. Los sacos se agrupan sobre pallets de madera tratada (120x100 cm), asegurados con stretch film y zunchos para facilitar su manipulación con montacargas. Todo se consolida en un contenedor Dry de 20 pies.",
	},
	{
		id: 4,
		name: "Marcado",
		image: "/images/coffee_pallet.png",
		title: "Marcado de la Carga",
		description:
			"Cada unidad de carga incluye información clave como: producto, país de origen (Perú), exportador (PERHUSA), número de lote, peso neto y bruto, así como los puertos de embarque (Callao) y destino (Hamburgo).",
	},
	{
		id: 5,
		name: "Transporte",
		image: "/images/coffee_ship.png",
		title: "Logística Comercial y Transporte",
		description:
			"Transporte marítimo internacional en buque portacontenedores bajo modalidad contenerizada, ideal para grandes volúmenes de carga seca. Se movilizan 19,182 kg distribuidos en 278 sacos. Precio referencial: US$ 4.20 por kg (US$ 80,564.40). Incoterm FOB (Callao), donde el exportador entrega la mercancía a bordo y el comprador asume el transporte internacional.",
	},
];
export {
	navLinks,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	coffeeLogistics,
};
