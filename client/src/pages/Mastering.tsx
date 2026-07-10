import MasteringFooter from "@/components/MasteringFooter";
import { Helmet } from "react-helmet-async";
import { getSeoTags } from "@/lib/seoData";
import { breadcrumbSchema } from "@/lib/schema";

export default function Mastering() {
  const seo = getSeoTags('mastering');
  const noiseUrl = "/images/bg-noise_e533a6c1.png";
  const backslashUrl = "/images/bg-backslash-black_dd49c3a4.png";
  const controlRoomUrl = "/images/NF_control-wide-2026.webp?v=2026-07-02";

  const clients = [
    "Nathaniel Rateliff",
    "Dr. Dog",
    "The Walkmen",
    "Pedro the Lion / David Bazan",
    "Richard Swift",
    "Hamilton Leithauser",
    "Nicole Atkins",
    "Pure Bathing Culture",
    "Michael Nau",
    "Midlake",
    "Jessie Baylin",
    "Matt Costa",
    "Walter Martin",
    "Ken Pomeroy",
    "Unwed Sailor",
    "The Lassie Foundation",
    "Gardens & Villa",
    "Night Dreamer",
    "Benny Yurco",
    "Ester Drang",
    "Lauren Lakis",
    "Morella's Forest",
    "Wayne Everett",
    "Delaney Bailey",
    "GVTH DVDDY",
    "Fug Yep Soundation",
    "James McAllister & Shara Nova (Sovereign Film Score)"
  ];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seo.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.twitterTitle} />
        <meta name="twitter:description" content={seo.twitterDescription} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([{"name": "Home", "url": "https://nationalfreedomstudio.com"}, {"name": "Mastering", "url": "https://nationalfreedomstudio.com/mastering"}]))}
        </script>
      </Helmet>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[auto] md:min-h-[auto] flex items-center justify-start bg-black overflow-hidden py-2 md:py-3">
        <div className="absolute inset-0 w-full h-full bg-black z-0" />
        <div
          className="absolute inset-0 w-full h-full z-5"
          style={{
            backgroundImage: `url('${noiseUrl}')`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-3">
            <div style={{marginLeft: '10px', paddingTop: '20px', paddingBottom: '20px'}}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
                /// MASTERING
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed" style={{fontFamily: "'Inconsolata', monospace", maxWidth: '750px'}}>
                National Freedom offers mastering services with a bunch of options for deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section with Distressed Background */}
      <section
        className="relative w-full py-8 md:py-12"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em', marginTop: '-15px'}}>
                /// INFO & ETC.
              </h2>
              
              <div className="space-y-4 text-gray-900 text-base md:text-lg" style={{fontFamily: "'Inconsolata', monospace"}}>
                <p>
                  Mastering engineer <span className="font-bold">Christopher Colbert</span> <span style={{color: '#d97a9a'}}>(who's also the house engineer)</span> brings his 40 years of biz experience and seasoned ears to making your masters sound amazing across the frickin' myriad platforms we got these days. Digital or tape or both, we can do it.
                </p>
                
                <p>He's also quite the egalitarian.</p>
                
                <p className="font-bold">
                  Mastering is $100/per song<br />
                  (no matter who you are).
                </p>
                
                <p>Power to the people.</p>
              </div>
            </div>

            {/* Right Column - Clients */}
            <div className="p-6 md:p-8" style={{backgroundColor: 'rgba(150, 150, 150, 0.25)'}}>
              <h3 className="text-xl md:text-2xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.15em'}}>
                /// A SELECTION OF CLIENTS
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-base md:text-lg" style={{fontFamily: "'Inconsolata', monospace"}}>
                {clients.map((client, idx) => (
                  <p key={idx} className="font-bold">{client}</p>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center pb-4 md:pb-6">
            <p className="text-lg md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-black transition-colors text-sm md:text-base"
              style={{fontFamily: "'Inconsolata', monospace", letterSpacing: '0.1em'}}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Control Room Image Section */}
      <section className="relative w-full py-0 md:py-0" style={{backgroundColor: '#f9f9f9'}}>
        <div className="w-full px-2 md:px-4 relative z-10">
          <div className="relative">
            <img
              src={controlRoomUrl}
              alt="Control Room"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 p-3 md:p-4">
              <p className="text-white text-lg md:text-2xl font-bold" style={{fontFamily: "'Special Elite', serif"}}>
                /// Control Room
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Backslash Divider - Overlapping Image and Footer */}
      <div
        className="relative w-full -mt-8 md:-mt-16 h-20 md:h-40 z-20 bg-contain bg-bottom bg-repeat-x"
        style={{
          backgroundImage: `url('${backslashUrl}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat-x',
          backgroundAttachment: 'scroll',
        }}
      />

      {/* Footer - with negative margin to overlap divider */}
      <div style={{marginTop: '-2rem', position: 'relative', zIndex: 10}}>
        <MasteringFooter />
      </div>
      </div>
    </>
  );
}
