import Layout from "@/components/Layout";
import { masteringInfo } from "@/data/studioData";

export default function Mastering() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-foreground tracking-tight">
              /// MASTERING
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif">National Freedom offers mastering services</h2>
              <p className="text-lg leading-relaxed text-foreground/90">
                {masteringInfo.description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold tracking-widest uppercase">/// INFO & ETC.</h3>
              <p className="text-base leading-relaxed text-foreground/80">
                {masteringInfo.engineerNote}
              </p>
              <p className="text-base font-bold leading-relaxed text-foreground">
                {masteringInfo.rate}
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4 space-y-6">
            <h3 className="text-base font-bold tracking-widest uppercase">/// A SELECTION OF CLIENTS</h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              The Lassie Foundation, and many more independent and major label artists.
            </p>
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
