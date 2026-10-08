export const products = [
  { id: "vidrio-300", name: "Miel pura 300 ml (vidrio)", volume: "300 ml · vidrio", price: 320 },
  { id: "vidrio-180", name: "Miel pura 180 ml (vidrio)", volume: "180 ml · vidrio", price: 260 },
  { id: "1000", name: "Miel pura 1 litro (plástico)", volume: "1 litro · plástico", price: 330 },
  { id: "500", name: "Miel pura ½ litro (plástico)", volume: "½ litro · plástico", price: 180 },
  { id: "365", name: "Miel pura 365 ml (plástico)", volume: "365 ml · plástico", price: 150 },
  { id: "120", name: "Miel pura 120 ml (plástico)", volume: "120 ml · plástico", price: 120 },
] as const;

export const stores = [
  { city: "Estelí", address: "De Pizza Hut, 2 cuadras al oeste y 1 al sur" },
  { city: "Jinotepe", address: "Plaza frente a Dollar Store, módulo 3, stand de Cacao y Miel" },
  { city: "Managua", address: "Altamira, Plaza San Mateo, segundo piso, tienda Eyka Collection" },
] as const;

export const whatsappNumber = "50585222975";