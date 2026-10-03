import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/pureza-hero.jpg";
import productsImage from "@/assets/pureza-productos.jpg";
import apiary from "@/assets/pureza-apiario.jpg";
import { products, posts } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Miel de Abeja Pureza Real — Del panal a su mesa" },
    { name: "description", content: "Miel pura nicaragüense, sin aditivos y producida con prácticas apícolas responsables." },
    { property: "og:title", content: "Miel de Abeja Pureza Real" },
    { property: "og:description", content: "Miel pura de Nicaragua, del panal a su mesa." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Home,
});

function Home() { return <>
  <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-primary">
    <img src={hero} alt="Frasco de miel pura sobre una mesa familiar" width={1600} height={1056} className="absolute inset-0 h-full w-full object-cover object-center" />
    <div className="absolute inset-0 bg-primary/55" />
    <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center px-5 py-20 lg:px-8">
      <div className="gentle-rise max-w-2xl text-primary-foreground">
        <p className="mb-5 text-sm font-bold uppercase">100% natural · Desde Estelí, Nicaragua</p>
        <h1 className="font-brand text-5xl leading-tight sm:text-6xl lg:text-7xl">La naturaleza,<br/>tal como debe ser.</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-primary-foreground/90">Miel pura, sin químicos ni aditivos. Cuidamos cada colmena para llevar bienestar y dulzura a tu mesa.</p>
        <Button asChild variant="honey" size="xl" className="mt-8"><Link to="/catalogo">Conocé nuestras presentaciones <ArrowRight /></Link></Button>
      </div>
    </div>
  </section>

  <section className="bg-cream py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div><p className="text-sm font-bold uppercase text-earth">Una historia que comenzó en 2012</p><h2 className="mt-4 font-brand text-4xl leading-tight text-primary sm:text-5xl">De nuestras colmenas a tu familia</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Somos una empresa apícola nicaragüense comprometida con una miel auténtica, trazable y respetuosa con el ciclo natural de las abejas.</p><Button asChild variant="outline" size="lg" className="mt-7"><Link to="/nosotros">Conocé nuestra historia <ArrowRight /></Link></Button></div>
      <img src={apiary} alt="Apicultor revisando una colmena saludable" loading="lazy" width={1408} height={1008} className="aspect-[7/5] w-full rounded-md object-cover" />
    </div>
    <div className="mt-16 grid gap-px overflow-hidden rounded-md bg-border sm:grid-cols-3">{[[ShieldCheck,"Pureza real","Sin aditivos ni químicos."],[Leaf,"Apicultura responsable","Cuidamos el ciclo natural de las abejas."],[Sprout,"Origen transparente","Trazabilidad desde la colmena hasta tu mesa."]].map(([Icon,title,text]) => <div className="bg-background p-7" key={String(title)}><Icon className="text-earth" size={28}/><h3 className="mt-5 text-lg font-bold text-primary">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{String(text)}</p></div>)}</div>
  </div></section>

  <section className="py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-bold uppercase text-earth">Para cada mesa</p><h2 className="mt-3 font-brand text-4xl text-primary">Una presentación para vos</h2></div><Button asChild variant="outline"><Link to="/catalogo">Ver catálogo <ArrowRight /></Link></Button></div><div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center"><img src={productsImage} alt="Presentaciones de miel Pureza Real" loading="lazy" width={1408} height={1056} className="aspect-[4/3] w-full rounded-md object-cover"/><div className="grid grid-cols-2 gap-px overflow-hidden rounded-md bg-border">{products.map((p)=><div key={p.id} className="bg-card p-5"><p className="font-semibold text-primary">{p.volume}</p><p className="mt-2 text-2xl font-bold">C${p.price}</p></div>)}</div></div></div></section>

  <section className="bg-lavender/35 py-20"><div className="mx-auto max-w-7xl px-5 lg:px-8"><p className="text-sm font-bold uppercase text-earth">Aprendamos juntos</p><h2 className="mt-3 font-brand text-4xl text-primary">Historias del panal</h2><div className="mt-9 grid gap-5 md:grid-cols-3">{posts.map((p)=><article key={p.slug} className="rounded-md border border-primary/10 bg-background p-6"><p className="text-xs font-bold uppercase text-earth">{p.category} · {p.minutes}</p><h3 className="mt-4 text-xl font-bold text-primary">{p.title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{p.excerpt}</p><Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">Leer artículo <ArrowRight size={16}/></Link></article>)}</div></div></section>
</>; }