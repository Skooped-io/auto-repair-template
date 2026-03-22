import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeoHead } from "@/components/SeoHead";
import { seoConfig, slugify } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Droplets, Disc3, Cpu, Cog, Snowflake, CircleDot, Zap, FileCheck, AlertTriangle } from "lucide-react";

const iconMap: Record<string, any> = { Droplets, Disc3, Cpu, Cog, Snowflake, CircleDot, Zap, FileCheck };

export default function ServicesPage() {
  const cfg = seoConfig;

  return (
    <Layout>
      <SeoHead page="services" />
      <section className="bg-secondary py-20">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground animate-fade-up">
            Our Services
          </h1>
          <p className="mt-4 text-secondary-foreground/70 max-w-lg text-lg opacity-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
            Full-service auto repair with transparent pricing and honest recommendations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container space-y-8">
          {cfg.services.map((s) => {
            const Icon = iconMap[s.icon] || Cog;
            return (
              <ScrollReveal key={s.title} delay={0}>
                <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <Link to={`/services/${slugify(s.title)}`} className="hover:text-primary transition-colors">
                          <h2 className="font-heading text-2xl font-bold">{s.title}</h2>
                        </Link>
                        <span className="font-heading text-xl font-bold text-primary">{s.price}</span>
                      </div>
                      <p className="text-foreground/80 mb-4">{s.descFull}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5 mb-4">
                        {s.includes.map((item) => (
                          <p key={item} className="text-sm text-foreground/70 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {item}
                          </p>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="flex items-start gap-2 text-sm text-accent-foreground bg-accent/10 px-3 py-2 rounded">
                          <AlertTriangle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          {s.warning}
                        </div>
                        <Link to="/contact" className="shrink-0">
                          <Button>Schedule This Service</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
