import Layout from "@/components/Layout";

export default function Studio() {
  const images = [
    { src: "https://nationalfreedom.studio/visuals/NF_control-wide_01.jpg", alt: "Control room wide" },
    { src: "https://nationalfreedom.studio/visuals/NF_rack_01.jpg", alt: "Equipment rack" },
    { src: "https://nationalfreedom.studio/visuals/NF_studer_crop_01.jpg", alt: "Studer tape machine" },
    { src: "https://nationalfreedom.studio/visuals/NF_main-room_01.jpg", alt: "Main recording room" },
    { src: "https://nationalfreedom.studio/visuals/NF_drum-corner_01.jpg", alt: "Drum corner" },
    { src: "https://nationalfreedom.studio/visuals/NF_guitar-amps_01.jpg", alt: "Guitar amplifiers" },
    { src: "https://nationalfreedom.studio/visuals/NF_pianos_01.jpg", alt: "Pianos" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-foreground tracking-tight">
              /// TH3 STUDIO
            </h1>
          </div>
        </section>

        {/* Description */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 font-serif">
              Eclectic. Intimate. The right mix of vintage hunkydory and modern wizbang. This isn't a sterile, operating-room audio clinic. National Freedom is making music in someone's rad living room that feels like your own rad living room.
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {images.map((img, idx) => (
                <div key={idx} className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
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
