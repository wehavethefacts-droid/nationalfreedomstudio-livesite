import Layout from "@/components/Layout";
import { gearCategories } from "@/data/studioData";

export default function Gear() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-foreground tracking-tight">
              /// GEAR
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              We have everything a first-class, modern studio requires——plus a grip of vintage electronics and instruments to make some original noise.
            </p>
          </div>
        </section>

        {/* Gear List */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {gearCategories.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-base font-bold font-serif leading-tight tracking-widest text-foreground uppercase">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-foreground/80">
                    {cat.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3">
                        <span className="text-accent flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 border-t border-border bg-secondary text-secondary-foreground">
          <div className="container max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Wanna book? Got questions?</h2>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-foreground text-background font-bold tracking-widest text-sm hover:bg-accent transition-colors"
            >
              GET IN TOUCH
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}
