import Layout from "@/components/Layout";
import { discography } from "@/data/studioData";

export default function Discography() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-foreground tracking-tight">
              /// DISCOGRAPHY
            </h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4">
            <p className="text-lg leading-relaxed text-foreground/90">
              These projects were recorded (or mostly recorded or maybe mixed) at National Freedom.
            </p>
          </div>
        </section>

        {/* Discography */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4 space-y-12 md:space-y-16">
            {discography.map((artist, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-base font-bold font-serif leading-tight tracking-widest text-foreground uppercase">
                  {artist.artist}
                </h3>
                <ul className="space-y-3 text-sm leading-relaxed text-foreground/80">
                  {artist.albums.map((album, albumIdx) => (
                    <li key={albumIdx} className="flex gap-3">
                      <span className="text-accent flex-shrink-0">——</span>
                      <span>
                        <strong>{album.title}</strong> /// {album.year} {album.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
