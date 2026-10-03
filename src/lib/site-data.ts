export const products = [
  { id: "250", name: "Miel pura 250 ml", volume: "250 ml", price: 100 },
  { id: "365", name: "Miel pura 365 ml", volume: "365 ml", price: 130 },
  { id: "500", name: "Miel pura ½ litro", volume: "½ litro", price: 170 },
  { id: "1000", name: "Miel pura 1 litro", volume: "1 litro", price: 260 },
  { id: "galon", name: "Miel pura galón", volume: "Galón", price: 850 },
] as const;

export const stores = [
  { city: "Estelí", address: "De Pizza Hut, 2 cuadras al oeste y 1 al sur" },
  { city: "Jinotepe", address: "Plaza frente a Dollar Store, módulo 3, stand de Cacao y Miel" },
  { city: "Managua", address: "Altamira, Plaza San Mateo, segundo piso, tienda Eyka Collection" },
] as const;

export const posts = [
  { slug: "como-reconocer-miel-pura", category: "Vida natural", title: "¿Cómo reconocer una miel pura?", excerpt: "Color, aroma y cristalización: aprendé a observar las señales naturales de una miel auténtica.", minutes: "4 min" },
  { slug: "abejas-y-polinizacion", category: "El mundo de las abejas", title: "Abejas: pequeñas guardianas de nuestra comida", excerpt: "La polinización sostiene cultivos, bosques y alimentos. Conocé por qué cada colmena importa.", minutes: "5 min" },
  { slug: "miel-en-tu-rutina", category: "Bienestar", title: "5 formas sencillas de sumar miel a tu día", excerpt: "Ideas prácticas para desayunos, bebidas y recetas familiares, usando miel con equilibrio.", minutes: "3 min" },
] as const;