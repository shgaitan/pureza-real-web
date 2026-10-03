import { Link } from "@tanstack/react-router";
import { Menu, X, Instagram, Facebook } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import logoAsset from "@/assets/pureza-real-logo.jpg.asset.json";

const links = [
  ["/", "Inicio"],
  ["/nosotros", "Quiénes somos"],
  ["/catalogo", "Catálogo"],
  ["/puntos-de-venta", "Puntos de venta"],
  ["/blog", "Blog"],
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="Pureza Real, inicio" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Pureza Real" className="h-16 w-auto mix-blend-multiply" />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegación principal">
          {links.map(([to, label]) => <Link key={to} to={to} className="text-sm font-semibold text-primary/75 transition-colors hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-primary/10 bg-background px-5 py-4 md:hidden">{links.map(([to, label]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="block border-b border-primary/10 py-3 font-semibold text-primary">{label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div><p className="font-brand text-3xl">Pureza Real</p><p className="mt-1 text-sm font-semibold uppercase">Del panal a su mesa</p><p className="mt-4 max-w-sm text-sm leading-6 text-primary-foreground/75">Miel nicaragüense 100% natural, producida con respeto por las abejas, las familias y nuestra tierra.</p></div>
        <div><p className="font-semibold">Explorá</p><div className="mt-4 grid gap-2 text-sm text-primary-foreground/75">{links.slice(1).map(([to,label]) => <Link key={to} to={to} className="hover:text-primary-foreground">{label}</Link>)}</div></div>
        <div><p className="font-semibold">Conectemos</p><p className="mt-4 text-sm text-primary-foreground/75">Estelí, Nicaragua</p><div className="mt-4 flex gap-2"><Button variant="cream" size="icon" aria-label="Instagram"><Instagram /></Button><Button variant="cream" size="icon" aria-label="Facebook"><Facebook /></Button></div></div>
      </div>
      <div className="border-t border-primary-foreground/15 py-5 text-center text-xs text-primary-foreground/60">© 2026 Miel de Abeja Pureza Real</div>
    </footer>
  </div>;
}