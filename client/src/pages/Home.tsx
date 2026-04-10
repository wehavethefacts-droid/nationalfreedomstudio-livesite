import Layout from "@/components/Layout";
import { studioInfo } from "@/data/studioData";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section with Video/Image Background */}
        <section className="relative w-full h-screen md:h-[100vh] overflow-hidden bg-black">
          {/* Desktop: Video Background */}
          <div className="hidden md:block absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_control-wide_01_4c2a4d5b.jpg"
            >
              <source
                src="https://nationalfreedom.studio/assets/nf-hero.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          {/* Mobile: Static Image Background */}
          <div
            className="md:hidden absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_control-wide_01_4c2a4d5b.jpg')",
            }}
          />

          {/* Typewriter Text Overlay - Large repeating text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_logo_white_ce7cb558.svg"
              alt="National Freedom"
              className="w-full h-full object-cover opacity-90"
            />
          </div>

          {/* Keyboard Keys Divider at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-white opacity-80">
            <svg
              viewBox="0 0 1200 100"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <g fill="none" stroke="black" strokeWidth="2">
                {/* Keyboard key pattern */}
                <rect x="10" y="10" width="20" height="20" />
                <rect x="40" y="10" width="20" height="20" />
                <rect x="70" y="10" width="20" height="20" />
                <rect x="100" y="10" width="20" height="20" />
                <rect x="130" y="10" width="20" height="20" />
                <rect x="160" y="10" width="20" height="20" />
                <rect x="190" y="10" width="20" height="20" />
                <rect x="220" y="10" width="20" height="20" />
                <rect x="250" y="10" width="20" height="20" />
                <rect x="280" y="10" width="20" height="20" />
                <rect x="310" y="10" width="20" height="20" />
                <rect x="340" y="10" width="20" height="20" />
                <rect x="370" y="10" width="20" height="20" />
                <rect x="400" y="10" width="20" height="20" />
                <rect x="430" y="10" width="20" height="20" />
                <rect x="460" y="10" width="20" height="20" />
                <rect x="490" y="10" width="20" height="20" />
                <rect x="520" y="10" width="20" height="20" />
                <rect x="550" y="10" width="20" height="20" />
                <rect x="580" y="10" width="20" height="20" />
                <rect x="610" y="10" width="20" height="20" />
                <rect x="640" y="10" width="20" height="20" />
                <rect x="670" y="10" width="20" height="20" />
                <rect x="700" y="10" width="20" height="20" />
                <rect x="730" y="10" width="20" height="20" />
                <rect x="760" y="10" width="20" height="20" />
                <rect x="790" y="10" width="20" height="20" />
                <rect x="820" y="10" width="20" height="20" />
                <rect x="850" y="10" width="20" height="20" />
                <rect x="880" y="10" width="20" height="20" />
                <rect x="910" y="10" width="20" height="20" />
                <rect x="940" y="10" width="20" height="20" />
                <rect x="970" y="10" width="20" height="20" />
                <rect x="1000" y="10" width="20" height="20" />
                <rect x="1030" y="10" width="20" height="20" />
                <rect x="1060" y="10" width="20" height="20" />
                <rect x="1090" y="10" width="20" height="20" />
                <rect x="1120" y="10" width="20" height="20" />
                <rect x="1150" y="10" width="20" height="20" />
              </g>
            </svg>
          </div>
        </section>

        {/* Buffalo Head Section */}
        <section
          className="relative w-full py-24 md:py-32"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_5cd518b2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 container max-w-4xl mx-auto px-4 text-center">
            <p className="text-lg md:text-2xl font-serif leading-relaxed text-white">
              {studioInfo.tagline}
            </p>
          </div>
        </section>

        {/* Featured Info Section */}
        <section className="py-16 md:py-24 border-t border-border bg-background">
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
