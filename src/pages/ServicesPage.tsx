import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Droplets, Disc3, Cpu, Cog, Snowflake, CircleDot, Zap, FileCheck, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: Droplets, title: "Oil Change",
    desc: "Keep your engine running smoothly with regular oil changes. We offer conventional, synthetic blend, and full synthetic options.",
    includes: ["Up to 5 quarts of oil", "New oil filter", "Multi-point inspection", "Fluid top-off"],
    price: "From $39.99",
    warning: "Dashboard oil light on? Overdue for a change? Don't wait — old oil causes engine wear.",
  },
  {
    icon: Disc3, title: "Brake Repair",
    desc: "Your brakes are the most important safety system on your vehicle. We inspect, repair, and replace brake components to keep you safe.",
    includes: ["Brake pad replacement", "Rotor resurfacing or replacement", "Brake fluid flush", "Caliper inspection"],
    price: "From $149.99",
    warning: "Squealing, grinding, or soft brake pedal? Get your brakes checked immediately.",
  },
  {
    icon: Cpu, title: "Engine Diagnostics",
    desc: "Check engine light on? We use advanced diagnostic equipment to pinpoint the exact issue and give you a clear explanation.",
    includes: ["Computer code scan", "Full diagnostic report", "Clear explanation of findings", "Written repair estimate"],
    price: "Free with Repair",
    warning: "A check engine light can mean anything from a loose gas cap to a serious engine problem.",
  },
  {
    icon: Cog, title: "Transmission Service",
    desc: "Protect one of the most expensive components in your vehicle with regular transmission maintenance.",
    includes: ["Fluid change or flush", "Filter replacement", "Leak inspection", "Road test"],
    price: "From $179.99",
    warning: "Slipping gears, delayed shifts, or burning smell? Your transmission needs attention.",
  },
  {
    icon: Snowflake, title: "A/C Service",
    desc: "Stay cool with our complete A/C diagnostics and repair services.",
    includes: ["Refrigerant recharge", "Leak detection", "Compressor check", "Cabin filter replacement"],
    price: "From $89.99",
    warning: "Blowing warm air? Weak airflow? Your A/C system may have a leak.",
  },
  {
    icon: CircleDot, title: "Tire Service",
    desc: "Maximize tire life and improve safety with proper tire maintenance.",
    includes: ["Tire rotation", "Wheel balancing", "Alignment check", "Tire pressure adjustment"],
    price: "From $29.99",
    warning: "Uneven wear, pulling to one side, or vibration at speed? Time for tire service.",
  },
  {
    icon: Zap, title: "Electrical System",
    desc: "Modern vehicles rely heavily on electrical systems. We diagnose and repair all electrical issues.",
    includes: ["Battery testing & replacement", "Alternator & starter repair", "Wiring diagnostics", "Light & fuse replacement"],
    price: "From $49.99",
    warning: "Dim lights, slow cranking, or dead battery? Your electrical system needs attention.",
  },
  {
    icon: FileCheck, title: "Vehicle Inspections",
    desc: "Stay safe and road-legal with thorough vehicle inspections.",
    includes: ["State safety inspection", "Emissions testing", "Pre-purchase inspection", "Multi-point check"],
    price: "From $29.99",
    warning: "Buying a used car? A pre-purchase inspection can save you thousands.",
  },
];

export default function ServicesPage() {
  return (
    <Layout>
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
          {services.map((s, i) => (
            <ScrollReveal key={s.title} delay={0}>
              <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                      <h2 className="font-heading text-2xl font-bold">{s.title}</h2>
                      <span className="font-heading text-xl font-bold text-primary">{s.price}</span>
                    </div>
                    <p className="text-foreground/80 mb-4">{s.desc}</p>
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
          ))}
        </div>
      </section>
    </Layout>
  );
}
