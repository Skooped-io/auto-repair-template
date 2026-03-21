import { Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Droplets, Disc3, Cpu, Cog, Snowflake, CircleDot, Zap, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroImg from "@/assets/hero-shop.jpg";

const services = [
  { icon: Droplets, title: "Oil Change", desc: "Full synthetic & conventional options" },
  { icon: Disc3, title: "Brake Repair", desc: "Pads, rotors, and full brake service" },
  { icon: Cpu, title: "Engine Diagnostics", desc: "Computer diagnostics & troubleshooting" },
  { icon: Cog, title: "Transmission", desc: "Fluid service, repair & rebuild" },
  { icon: Snowflake, title: "A/C Service", desc: "Recharge, repair & full system check" },
  { icon: CircleDot, title: "Tire Service", desc: "Rotation, balance, alignment & more" },
  { icon: Zap, title: "Electrical", desc: "Battery, alternator, starters & wiring" },
  { icon: FileCheck, title: "Inspections", desc: "State inspections & multi-point checks" },
];

const reviews = [
  { name: "Maria Gonzalez", text: "Took my car in for a weird noise — they found the issue fast, explained everything, and didn't charge me for anything I didn't need. Rare find!", stars: 5 },
  { name: "David Park", text: "Best prices in town and they actually show you the old parts. Been coming here for 3 years now with both our family cars.", stars: 5 },
  { name: "Lisa Thompson", text: "They squeezed me in same-day when my brakes started grinding. Fixed it in under 2 hours. Lifesavers!", stars: 5 },
  { name: "James Walker", text: "Honest mechanics are hard to find. These guys quoted me $400 less than the dealership for the same work. Will never go anywhere else.", stars: 5 },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Emergency Banner */}
      <div className="bg-primary text-primary-foreground py-2.5 text-center text-sm font-semibold">
        🚗 Car trouble? We offer same-day service. Call{" "}
        <a href="tel:5551234567" className="underline">(555) 123-4567</a>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Clean auto repair shop interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="container relative py-24 md:py-36">
          <div className="max-w-2xl">
            <h1
              className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground leading-[1.05] animate-fade-up"
              style={{ textWrap: "balance" }}
            >
              Honest Service. Expert Repairs.
            </h1>
            <p className="mt-5 text-lg text-secondary-foreground/80 max-w-lg opacity-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
              Your local auto repair shop — fair prices, real mechanics, no surprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <Link to="/contact">
                <Button variant="hero" size="lg">Schedule Service</Button>
              </Link>
              <a href="tel:5551234567">
                <Button variant="hero-outline" size="lg">
                  <Phone className="w-5 h-5 mr-1" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center" style={{ textWrap: "balance" }}>
              Our Services
            </h2>
            <p className="text-muted-foreground text-center mt-3 max-w-lg mx-auto">
              From routine maintenance to major repairs, we've got you covered.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 70}>
                <Link
                  to="/services"
                  className="group bg-card rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 block"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center">Why Choose Us</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { title: "ASE Certified", desc: "All technicians are ASE certified professionals" },
              { title: "Transparent Pricing", desc: "Upfront quotes — no hidden fees, ever" },
              { title: "Warranty on All Work", desc: "12-month / 12,000-mile warranty standard" },
              { title: "Family-Owned Since 1998", desc: "Over 25 years serving the community" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex flex-col items-center text-center">
                  <CheckCircle className="w-10 h-10 text-primary mb-3" />
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-16 bg-background">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-lg shadow-sm border p-8 md:p-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">
                Upfront Pricing — No Surprises
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { service: "Oil Change", price: "From $39.99" },
                  { service: "Brake Pads", price: "From $149.99" },
                  { service: "Diagnostics", price: "Free with Repair" },
                ].map((p) => (
                  <div key={p.service} className="py-4">
                    <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">{p.service}</p>
                    <p className="font-heading text-2xl font-bold text-primary mt-1">{p.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-card">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/15 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
                <Star className="w-4 h-4 fill-accent text-accent" />
                4.9 stars on Google
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 80}>
                <div className="bg-background rounded-lg p-6 shadow-sm h-full flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/80 flex-1 leading-relaxed">"{r.text}"</p>
                  <p className="mt-4 text-sm font-semibold text-foreground">{r.name}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Coupons */}
      <section className="py-20 bg-background">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
              Current Specials
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "$10 Off", desc: "Any Oil Change", code: "OIL10" },
              { title: "Free", desc: "Brake Inspection", code: "BRAKES" },
              { title: "10% Off", desc: "First Visit", code: "WELCOME10" },
            ].map((c, i) => (
              <ScrollReveal key={c.code} delay={i * 100}>
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center bg-card hover:border-primary/60 transition-colors">
                  <p className="font-heading text-3xl font-bold text-primary">{c.title}</p>
                  <p className="text-foreground font-semibold mt-1">{c.desc}</p>
                  <p className="text-xs text-muted-foreground mt-3">
                    Use code: <span className="font-mono font-bold text-foreground">{c.code}</span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-dark-surface text-dark-surface-foreground">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ textWrap: "balance" }}>
              Don't wait until it's a bigger problem.
            </h2>
            <p className="mt-4 text-dark-surface-foreground/70 max-w-md mx-auto">
              Schedule your service today or give us a call. We'll take care of the rest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">Schedule Service</Button>
              </Link>
              <a href="tel:5551234567">
                <Button variant="hero-outline" size="lg">
                  <Phone className="w-5 h-5 mr-1" />
                  (555) 123-4567
                </Button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
