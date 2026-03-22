import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { seoConfig, slugify, getServiceBySlug } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { Droplets, Disc3, Cpu, Cog, Snowflake, CircleDot, Zap, FileCheck } from "lucide-react";

const iconMap: Record<string, any> = { Droplets, Disc3, Cpu, Cog, Snowflake, CircleDot, Zap, FileCheck };

const serviceContent: Record<string, string[]> = {
  "oil-change": [
    "Regular oil changes are the single most important thing you can do to extend the life of your engine. At {business}, we make it fast, affordable, and thorough — every oil change includes a multi-point inspection so we can catch small problems before they become expensive repairs.",
    "We carry conventional, synthetic blend, and full synthetic oils from trusted brands. Our technicians will recommend the right oil for your vehicle based on manufacturer specifications, your driving habits, and local climate conditions in {area}.",
    "Most oil changes are completed in under 30 minutes. No appointment necessary — just drive in during business hours and we'll take care of you.",
  ],
  "brake-repair": [
    "Your brakes are your vehicle's most critical safety system. At {business}, we provide complete brake service — from routine pad replacements to full brake system overhauls. Every brake job includes a thorough inspection of pads, rotors, calipers, brake lines, and fluid condition.",
    "We use OEM-quality or better brake components and back every repair with our standard warranty. Whether you're hearing squealing, grinding, or experiencing a soft pedal, our ASE-certified technicians will diagnose the issue accurately and give you an honest recommendation.",
    "Serving drivers throughout {area}, we see everything from daily commuters to heavy-duty trucks. We'll get your brakes back to factory performance — safely and affordably.",
  ],
  "engine-diagnostics": [
    "When your check engine light comes on, don't panic — but don't ignore it either. At {business}, we use professional-grade diagnostic scanners to read fault codes and pinpoint the exact issue. No guesswork, no unnecessary parts swaps.",
    "Our diagnostic process goes beyond just reading codes. We perform live data analysis, component testing, and visual inspections to identify the root cause — not just the symptom. You'll get a clear explanation of what's wrong and a written estimate before any work begins.",
    "From emission system faults to misfires and sensor failures, our technicians have the experience and equipment to diagnose even the trickiest problems. Serving {area} with honest, accurate diagnostics.",
  ],
  "transmission": [
    "Your transmission is one of the most complex and expensive components in your vehicle. Regular maintenance can prevent costly failures down the road. At {business}, we provide complete transmission services — from fluid changes to full rebuilds.",
    "Signs of transmission trouble include slipping gears, delayed engagement, rough shifts, and burning smells. If you notice any of these, bring your vehicle in right away. Early diagnosis can save thousands in repair costs.",
    "We service both automatic and manual transmissions on domestic and import vehicles. Our technicians use quality fluids and filters that meet or exceed manufacturer specifications. Trusted by drivers throughout {area}.",
  ],
  "a-c-service": [
    "Don't suffer through another summer with a weak or broken A/C system. At {business}, we provide complete automotive air conditioning service — from simple recharges to compressor replacements and everything in between.",
    "Our A/C diagnostic process includes checking refrigerant levels, testing for leaks with electronic detection equipment, inspecting the compressor, condenser, and evaporator, and verifying proper system pressures. We'll find the problem and fix it right the first time.",
    "If your A/C is blowing warm air, making unusual noises, or producing a musty smell, bring it in. We serve drivers throughout {area} and most A/C repairs can be completed same-day.",
  ],
  "tire-service": [
    "Proper tire maintenance improves safety, fuel economy, and tire life. At {business}, we offer complete tire services including rotation, balancing, alignment, and pressure checks — plus new tire sales and installation.",
    "Uneven tire wear is one of the most common issues we see, and it's usually caused by improper alignment or infrequent rotation. Our technicians will inspect your tires and recommend the right service to maximize their lifespan.",
    "Whether you need a simple rotation or a full set of new tires, we'll help you choose the right option for your vehicle and budget. Serving {area} with honest tire service and competitive pricing.",
  ],
  "electrical": [
    "Modern vehicles rely on complex electrical systems for everything from starting to safety features. At {business}, we diagnose and repair all automotive electrical issues — batteries, alternators, starters, wiring, lighting, and more.",
    "Electrical problems can be tricky to diagnose without the right equipment and experience. Our technicians use professional diagnostic tools to trace faults accurately, saving you time and money compared to trial-and-error repairs.",
    "Common signs of electrical trouble include dim headlights, slow engine cranking, dashboard warning lights, and intermittent component failures. If something electrical isn't working right, bring it to us. We serve the entire {area}.",
  ],
  "inspections": [
    "Whether you need a state safety inspection, emissions test, or pre-purchase evaluation, {business} provides thorough, honest vehicle inspections. We check every major system so you know exactly what you're working with.",
    "Buying a used car? A pre-purchase inspection is one of the smartest investments you can make. Our comprehensive check covers the engine, transmission, brakes, suspension, electrical system, and body condition — giving you the information you need to make a confident decision.",
    "We perform state-required inspections quickly and affordably. If your vehicle doesn't pass, we'll explain exactly what needs to be fixed and provide a fair estimate. Trusted by drivers throughout {area}.",
  ],
};

function getContent(slug: string): string[] {
  const cfg = seoConfig;
  const templates = serviceContent[slug] || [
    `At {business}, we provide professional ${slug.replace(/-/g, ' ')} services for vehicles of all makes and models. Our experienced technicians deliver quality workmanship at fair prices.`,
    `We use quality parts and follow manufacturer guidelines to ensure your vehicle receives the best possible care. Every job is backed by our standard warranty for your peace of mind.`,
    `Serving {area}, we're committed to honest service and transparent pricing. Contact us today for a free estimate.`,
  ];
  return templates.map(t =>
    t.replace(/\{business\}/g, cfg.businessNameFull)
     .replace(/\{area\}/g, cfg.serviceArea)
  );
}

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const cfg = seoConfig;
  const service = slug ? getServiceBySlug(slug) : null;

  useEffect(() => {
    if (!service) return;
    document.title = `${service.title} in ${cfg.address.city}, ${cfg.address.state} | ${cfg.businessName}`;
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    const desc = `Professional ${service.title.toLowerCase()} services in ${cfg.address.city}, ${cfg.address.state}. ${service.descFull} Call ${cfg.phone}.`;
    setMeta("description", desc);
    setMeta("og:title", document.title, "property");
    setMeta("og:description", desc, "property");

    const ldId = "schema-jsonld-service";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      provider: {
        "@type": "LocalBusiness",
        name: cfg.businessNameFull,
        telephone: cfg.phone,
      },
      areaServed: cfg.serviceArea,
    });

    return () => {
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [service, cfg]);

  if (!service || !slug) return <Navigate to="/services" replace />;

  const Icon = iconMap[service.icon] || Cog;
  const content = getContent(slug);
  const related = cfg.services.filter(s => slugify(s.title) !== slug).slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted border-b">
        <div className="container py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-secondary py-20">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-heading text-xl font-bold text-primary">{service.price}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground">
              {service.title}
            </h1>
            <p className="mt-4 text-secondary-foreground/70 max-w-xl text-lg">{service.descFull}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <ScrollReveal>
                <div className="prose prose-lg max-w-none">
                  {content.map((p, i) => (
                    <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* What's Included */}
              <ScrollReveal delay={100}>
                <div className="bg-card rounded-lg border p-6 md:p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">What's Included</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.includes.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Warning */}
              {service.warning && (
                <ScrollReveal delay={150}>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-5 flex items-start gap-3">
                    <span className="text-accent text-xl mt-0.5">⚠</span>
                    <p className="text-foreground/80">{service.warning}</p>
                  </div>
                </ScrollReveal>
              )}

              {/* CTA */}
              <ScrollReveal delay={200}>
                <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 md:p-8 text-center">
                  <h2 className="font-heading text-2xl font-bold mb-2">Get a Free Estimate</h2>
                  <p className="text-foreground/70 mb-6">
                    Call us or submit a service request online. No obligation, no pressure.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/contact">
                      <Button size="lg">
                        Schedule Service <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <a href={`tel:${cfg.phoneRaw}`} className="flex items-center gap-2 text-lg font-bold text-primary hover:underline">
                      <Phone className="w-5 h-5" /> {cfg.phone}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* NAP */}
              <ScrollReveal delay={100}>
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="font-heading text-lg font-bold mb-4">{cfg.businessNameFull}</h3>
                  <div className="space-y-3 text-sm text-foreground/70">
                    <a href={`tel:${cfg.phoneRaw}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 text-primary" /> {cfg.phone}
                    </a>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-primary mt-0.5" />
                      <span>{cfg.address.full}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Serving {cfg.serviceArea}</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Hours */}
              <ScrollReveal delay={150}>
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="font-heading text-lg font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex justify-between"><span>{cfg.hours.weekdays.label}</span><span>{cfg.hours.weekdays.hours}</span></div>
                    <div className="flex justify-between"><span>{cfg.hours.saturday.label}</span><span>{cfg.hours.saturday.hours}</span></div>
                    <div className="flex justify-between"><span>{cfg.hours.sunday.label}</span><span>{cfg.hours.sunday.hours}</span></div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Related Services */}
              <ScrollReveal delay={200}>
                <div className="bg-card rounded-lg border p-6">
                  <h3 className="font-heading text-lg font-bold mb-4">Other Services</h3>
                  <div className="space-y-2">
                    {related.map(r => {
                      const RIcon = iconMap[r.icon] || Cog;
                      return (
                        <Link
                          key={r.title}
                          to={`/services/${slugify(r.title)}`}
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-muted transition-colors group"
                        >
                          <RIcon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium group-hover:text-primary transition-colors">{r.title}</span>
                          <ChevronRight className="w-3.5 h-3.5 ml-auto text-muted-foreground" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}