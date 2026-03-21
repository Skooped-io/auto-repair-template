import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/specials", label: "Specials" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-secondary shadow-lg">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-sm">PR</span>
          </div>
          <span className="font-heading text-xl font-bold text-secondary-foreground tracking-tight">
            Precision Auto
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-semibold transition-colors hover:text-primary ${
                pathname === l.to ? "text-primary" : "text-secondary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:5551234567" className="flex items-center gap-1.5 text-secondary-foreground/90 text-sm font-semibold">
            <Phone className="w-4 h-4" />
            (555) 123-4567
          </a>
          <Link to="/contact">
            <Button size="default">Schedule Service</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-secondary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-secondary border-t border-secondary-foreground/10 pb-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-2.5 text-sm font-semibold transition-colors ${
                pathname === l.to ? "text-primary" : "text-secondary-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 pt-2 flex flex-col gap-2">
            <a href="tel:5551234567" className="flex items-center gap-1.5 text-secondary-foreground/90 text-sm font-semibold">
              <Phone className="w-4 h-4" />
              (555) 123-4567
            </a>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full">Schedule Service</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
