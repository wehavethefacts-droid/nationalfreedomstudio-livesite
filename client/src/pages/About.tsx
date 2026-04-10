import Layout from "@/components/Layout";
import { aboutInfo, engineerInfo, swiftNote } from "@/data/studioData";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-foreground tracking-tight">
              /// ABOUT
            </h1>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif">/// About the studio</h2>
              <p className="text-base leading-relaxed text-foreground/90">
                {aboutInfo.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="text-sm font-bold tracking-widest uppercase">RATES</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {aboutInfo.rates}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-bold tracking-widest uppercase">LODGING</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {aboutInfo.lodging}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold tracking-widest uppercase">HISTORY</h3>
              <p className="text-sm leading-relaxed text-foreground/80">
                {aboutInfo.history}
              </p>
            </div>
          </div>
        </section>

        {/* Engineer Section */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-bold font-serif">/// House Engineer /// {engineerInfo.name}</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              {engineerInfo.bio}
            </p>
            <p className="text-base leading-relaxed text-foreground/80">
              {engineerInfo.details}
            </p>
          </div>
        </section>

        {/* Swift Section */}
        <section className="py-12 md:py-16 border-b border-border bg-muted">
          <div className="container max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-bold font-serif">/// {swiftNote.title}</h2>
            <p className="text-base leading-relaxed text-foreground/90">
              {swiftNote.text}
            </p>
            <p className="text-base font-bold text-foreground">
              If you need help, please get help: <a href={`tel:${swiftNote.helpline}`} className="hover:text-accent transition-colors">{swiftNote.helpline}</a>
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              You can also show your support and pick up some rad 7"s and merch at THE FUGYEP SOUNDATION.
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
