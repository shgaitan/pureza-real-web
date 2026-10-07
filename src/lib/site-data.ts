export type ProductLine = "plastico" | "vidrio";

export const products = [
  { id: "1000", line: "plastico", name: "Miel pura 1 litro", volume: "1 litro", price: 330 },
  { id: "500", line: "plastico", name: "Miel pura ½ litro", volume: "½ litro", price: 180 },
  { id: "365", line: "plastico", name: "Miel pura 365 ml", volume: "365 ml", price: 150 },
  { id: "120", line: "plastico", name: "Miel pura 120 ml", volume: "120 ml", price: 120 },
  { id: "vidrio-300", line: "vidrio", name: "Miel en vidrio 300 ml", volume: "Vidrio 300 ml", price: 320 },
  { id: "vidrio-180", line: "vidrio", name: "Miel en vidrio 180 ml", volume: "Vidrio 180 ml", price: 260 },
] as const satisfies ReadonlyArray<{ id: string; line: ProductLine; name: string; volume: string; price: number }>;

export const productLineLabels: Record<ProductLine, string> = {
  plastico: "Presentaciones plásticas",
  vidrio: "Presentaciones de vidrio",
};

export const stores = [
  { city: "Estelí", address: "De Pizza Hut, 2 cuadras al oeste y 1 al sur" },
  { city: "Jinotepe", address: "Plaza frente a Dollar Store, módulo 3, stand de Cacao y Miel" },
  { city: "Managua", address: "Altamira, Plaza San Mateo, segundo piso, tienda Eyka Collection" },
] as const;
