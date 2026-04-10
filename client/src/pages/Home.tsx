import Layout from "@/components/Layout";
import { studioInfo } from "@/data/studioData";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
        {/* Hero Section */}
        <section className="relative h-screen md:h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/nf-hero-editorial-collage-7k9z4955CLJVVxTaxHuPaT.webp')",
            }}
          />

          {/* Content */}
          <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
              NATIONAL
              <br />
              FREEDOM
            </h1>
            <p className="text-lg md:text-2xl font-serif leading-relaxed text-foreground/90 max-w-2xl mx-auto">
              {studioInfo.tagline}
            </p>
            <div className="pt-8">
              <a
                href="/studio"
                className="inline-block px-8 py-3 bg-foreground text-background font-bold tracking-widest text-sm hover:bg-accent transition-colors"
              >
                EXPLORE
              </a>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest uppercase">Recording</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Eclectic. Intimate. The right mix of vintage and modern.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest uppercase">Mastering</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  $100 per song. Digital or tape or both.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-widest uppercase">Location</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  Cottage Grove, Oregon. 20 min south of Eugene.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
