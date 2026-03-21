import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CheckCircle, Award, Heart, Users } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

export default function AboutPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="bg-secondary py-20">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground animate-fade-up">
            About Us
          </h1>
          <p className="mt-4 text-secondary-foreground/70 max-w-lg text-lg opacity-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
            Family-owned, community-focused, and committed to honest auto care since 1998.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src={teamPhoto} alt="The Precision Auto team" className="rounded-lg shadow-lg w-full object-cover aspect-[16/10]" />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  When Mike Reeves opened Precision Auto in 1998, he had one simple rule: treat every customer like a neighbor. Twenty-five years later, that philosophy hasn't changed.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  What started as a two-bay garage has grown into a full-service repair facility — but we've never lost that small-shop feel. We explain every repair in plain English, show you the old parts, and never push services you don't need.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We're proud to be ASE-certified, BBB-accredited, and trusted by over 5,000 families in the Springfield area.
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
            {[
              { icon: CheckCircle, title: "Honesty First", desc: "We'll never recommend a repair you don't need. Period." },
              { icon: Award, title: "Expert Technicians", desc: "ASE certified with ongoing training on the latest vehicles." },
              { icon: Heart, title: "Community Roots", desc: "Proud sponsor of local teams, charity drives, and school programs." },
              { icon: Users, title: "Family Values", desc: "We treat your car — and your family — the way we treat our own." },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Owner Bio */}
      <section className="py-20 bg-background">
        <div className="container max-w-3xl text-center">
          <ScrollReveal>
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
              <span className="font-heading text-2xl font-bold text-secondary-foreground">MR</span>
            </div>
            <h2 className="font-heading text-2xl font-bold">Mike Reeves</h2>
            <p className="text-primary font-semibold mt-1">Owner & Head Technician</p>
            <p className="text-foreground/80 mt-4 leading-relaxed max-w-xl mx-auto">
              With over 30 years of hands-on experience, Mike still gets under the hood every day. ASE Master Technician certified, he leads by example and personally oversees every major repair that leaves the shop.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}
