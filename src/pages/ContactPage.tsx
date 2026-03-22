import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SeoHead } from "@/components/SeoHead";
import { seoConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const cfg = seoConfig;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SeoHead page="contact" />
      <section className="bg-secondary py-20">
        <div className="container">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground animate-fade-up">
            Contact Us
          </h1>
          <p className="mt-4 text-secondary-foreground/70 max-w-lg text-lg opacity-0 animate-fade-up" style={{ animationDelay: "120ms" }}>
            Schedule a service, ask a question, or just say hello. We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-card rounded-lg shadow-sm border p-6 md:p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">Schedule a Service</h2>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Car className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-heading text-xl font-bold">Thank you!</h3>
                      <p className="text-muted-foreground mt-2">We'll get back to you within one business day to confirm your appointment.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Name *</label>
                          <input required type="text" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Phone *</label>
                          <input required type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">Email</label>
                        <input type="email" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Year</label>
                          <input type="text" placeholder="2020" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Make</label>
                          <input type="text" placeholder="Toyota" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Model</label>
                          <input type="text" placeholder="Camry" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Service Needed *</label>
                          <select required className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                            <option value="">Select a service</option>
                            {cfg.contactFormServices.map((o) => (
                              <option key={o} value={o}>{o}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-semibold mb-1.5 block">Preferred Date</label>
                          <input type="date" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-semibold mb-1.5 block">Description of Issue</label>
                        <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us what's going on with your vehicle..." />
                      </div>
                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Submit Request
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6">
              <ScrollReveal delay={100}>
                <div className="bg-card rounded-lg shadow-sm border p-6">
                  <h3 className="font-heading font-bold text-lg mb-4">Get In Touch</h3>
                  <ul className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{cfg.address.street}<br />{cfg.address.city}, {cfg.address.state} {cfg.address.zip}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      <a href={`tel:${cfg.phoneRaw}`} className="hover:text-primary transition-colors font-semibold">{cfg.phone}</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      <a href={`mailto:${cfg.email}`} className="hover:text-primary transition-colors">{cfg.email}</a>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-card rounded-lg shadow-sm border p-6">
                  <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Hours
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between"><span>{cfg.hours.weekdays.label}</span><span className="font-semibold">{cfg.hours.weekdays.hours}</span></li>
                    <li className="flex justify-between items-center">
                      <span>{cfg.hours.saturday.label}</span>
                      <span className="bg-accent/20 text-accent-foreground text-xs font-semibold px-2 py-0.5 rounded">{cfg.hours.saturday.hours}</span>
                    </li>
                    <li className="flex justify-between"><span>{cfg.hours.sunday.label}</span><span>{cfg.hours.sunday.hours}</span></li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-accent/10 rounded-lg p-6 border border-accent/20">
                  <h3 className="font-heading font-bold text-lg mb-2">After-Hours Drop-Off</h3>
                  <p className="text-sm text-foreground/80">
                    Can't make it during business hours? Use our secure key drop box by the front entrance — leave your keys and a note, and we'll call you first thing.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
