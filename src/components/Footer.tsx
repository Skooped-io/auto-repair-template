import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { seoConfig } from "@/lib/config";

export function Footer() {
  const cfg = seoConfig;

  return (
    <footer className="bg-dark-surface text-dark-surface-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-sm">{cfg.logoInitials}</span>
              </div>
              <span className="font-heading text-xl font-bold">{cfg.businessName}</span>
            </div>
            <p className="text-dark-surface-foreground/70 text-sm leading-relaxed">
              {cfg.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/services", label: "Our Services" },
                { to: "/about", label: "About Us" },
                { to: "/specials", label: "Coupons & Specials" },
                { to: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-dark-surface-foreground/70 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-dark-surface-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                {cfg.address.full}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href={`tel:${cfg.phoneRaw}`} className="hover:text-primary transition-colors">{cfg.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href={`mailto:${cfg.email}`} className="hover:text-primary transition-colors">{cfg.email}</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-dark-surface-foreground/70">
              <li className="flex justify-between"><span>{cfg.hours.weekdays.label}</span><span>{cfg.hours.weekdays.hours}</span></li>
              <li className="flex justify-between items-center">
                <span>{cfg.hours.saturday.label}</span>
                <span className="bg-accent/20 text-accent px-2 py-0.5 rounded text-xs font-semibold">{cfg.hours.saturday.hours}</span>
              </li>
              <li className="flex justify-between"><span>{cfg.hours.sunday.label}</span><span>{cfg.hours.sunday.hours}</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-surface-foreground/10 mt-12 pt-8 text-center text-sm text-dark-surface-foreground/50">
          © {new Date().getFullYear()} {cfg.businessNameFull}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
