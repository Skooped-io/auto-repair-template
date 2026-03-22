import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeoHead } from "@/components/SeoHead";
import { seoConfig, getImage } from "@/lib/config";
import { CheckCircle, Award, Heart, Users } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const valueIcons = [CheckCircle, Award, Heart, Users];

export default function AboutPage() {
  const cfg = seoConfig;

  return (
    <Layout>
      <SeoHead page="about" />
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground animate-fade-up">
            About Us
          </h1>
          <p className="mt-4 text-secondary-foreground/70 max-w-lg text-lg opacity-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
            Family-owned, community-focused, and committed to honest auto care since {cfg.yearEstablished}.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src={getImage(null, 'team', teamPhoto)} alt={`The ${cfg.businessName} team`} className="rounded-lg shadow-lg w-full object-cover aspect-[16/10]" />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {cfg.about}
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  {cfg.aboutExtended}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {cfg.aboutCredentials}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-center mb-12">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cfg.values.map((v, i) => {
              const Icon = valueIcons[i] || CheckCircle;
              return (
                <ScrollReveal key={v.title} delay={i * 100}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{v.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <span className="font-heading text-2xl font-bold text-secondary-foreground">{cfg.ownerInitials}</span>
            </div>
            <h2 className="font-heading text-2xl font-bold">{cfg.ownerName}</h2>
            <p className="text-primary font-semibold mt-1">{cfg.ownerTitle}</p>
            <p className="text-foreground/80 mt-4 leading-relaxed max-w-xl mx-auto">
              {cfg.ownerBio}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
