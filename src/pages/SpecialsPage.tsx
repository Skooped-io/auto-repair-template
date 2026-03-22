import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeoHead } from "@/components/SeoHead";
import { seoConfig } from "@/lib/config";
import { Tag } from "lucide-react";

export default function SpecialsPage() {
  const cfg = seoConfig;

  return (
    <Layout>
      <SeoHead page="specials" />
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
            {cfg.specials.map((s, i) => (
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
