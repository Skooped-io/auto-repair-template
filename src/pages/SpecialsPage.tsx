import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Tag } from "lucide-react";

const specials = [
  { title: "$10 Off Any Oil Change", desc: "Conventional or full synthetic. No appointment needed.", code: "OIL10", expires: "Valid through March 2026" },
  { title: "Free Brake Inspection", desc: "Complete brake system check — pads, rotors, fluid, and more.", code: "BRAKES", expires: "No expiration" },
  { title: "10% Off Your First Visit", desc: "New customer? Welcome! Take 10% off any service.", code: "WELCOME10", expires: "First-time customers only" },
  { title: "$25 Off A/C Recharge", desc: "Stay cool this summer with a full A/C recharge and leak check.", code: "COOL25", expires: "Seasonal — while supplies last" },
  { title: "Free Tire Rotation", desc: "With any oil change service. Keep your tires wearing evenly.", code: "TIRES", expires: "Valid through March 2026" },
  { title: "15% Off Engine Diagnostics", desc: "Check engine light on? Let us find the problem at a discount.", code: "DIAG15", expires: "Valid through March 2026" },
];

export default function SpecialsPage() {
  return (
    <Layout>
      <section className="bg-secondary py-20">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground animate-fade-up">
            Specials & Coupons
          </h1>
          <p className="mt-4 text-secondary-foreground/70 max-w-lg text-lg opacity-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
            Save on the services you need. Show this page or mention the code when you visit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specials.map((s, i) => (
              <ScrollReveal key={s.code} delay={i * 80}>
                <div className="bg-card rounded-lg border-2 border-dashed border-primary/25 p-6 h-full flex flex-col hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-5 h-5 text-primary" />
                    <h2 className="font-heading text-xl font-bold">{s.title}</h2>
                  </div>
                  <p className="text-foreground/80 text-sm flex-1">{s.desc}</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{s.expires}</span>
                    <span className="font-mono text-sm font-bold bg-primary/10 text-primary px-2 py-0.5 rounded">{s.code}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
