import { Link } from "wouter";

export default function Studio() {
  const backslashUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-backslash-black_dd49c3a4.png";
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";
  
  // Studio photos with labels
  const studioPhotos = [
    { label: "/// Control Room", url: "https://nationalfreedom.studio/visuals/NF_control_01.jpg" },
    { label: "/// Main Room", url: "https://nationalfreedom.studio/visuals/NF_main_01.jpg" },
    { label: "/// Drums + bobs & bits", url: "https://nationalfreedom.studio/visuals/NF_drums_01.jpg" },
    { label: "/// 1969 Gibson ES-125 guitar + amps", url: "https://nationalfreedom.studio/visuals/NF_guitar_01.jpg" },
    { label: "/// Wurli Upright /// Melody Grand", url: "https://nationalfreedom.studio/visuals/NF_pianos_01.jpg" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay Content */}
      <section className="relative w-full min-h-screen md:min-h-[80vh] flex items-center justify-start overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://nationalfreedom.studio/visuals/NF_control_01.jpg')",
            backgroundPosition: 'center',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-5" />

        {/* Content Overlay */}
        <div className="relative z-10 px-6 md:px-12 py-12 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.05em'}}>
            /// TH3 STUDIO
          </h1>
          <p className="text-white text-base md:text-lg font-bold leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
            Eclectic. Intimate. The right mix of vintage hunkydory and modern wizbang. This isn't a sterile, operating-room audio clinic. National Freedom is making music in someone's rad living room that feels like your own rad living room.
          </p>
        </div>
      </section>

      {/* Backslash Divider */}
      <div
        className="relative w-full -mt-8 md:-mt-16 h-16 md:h-32 z-20 bg-contain bg-bottom bg-repeat-x"
        style={{
          backgroundImage: `url('${backslashUrl}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat-x',
          backgroundAttachment: 'scroll',
        }}
      />

      {/* Photo Gallery Section */}
      <section
        className="relative w-full py-12 md:py-16 -mt-8 md:-mt-16"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          paddingTop: 'calc(4rem + 4rem)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {studioPhotos.map((photo, idx) => (
              <div key={idx} className="relative h-80 md:h-96 overflow-hidden group">
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-bold" style={{fontFamily: "'Special Elite', serif"}}>
                    {photo.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="max-w-xl mt-auto mx-auto p-5 bg-black">
            <hr className="border-gray-600 mt-0 mb-3" />

            {/* Navigation */}
            <nav className="pt-2 pb-3">
              <ul className="grid grid-cols-3 gap-6 text-sm font-bold" style={{fontFamily: "'Special Elite', serif"}}>
                <li>
                  <Link href="/studio" className="transition-colors" style={{color: '#d97a9a'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'}>
                    ///STUDIO
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="transition-colors" style={{color: '#999'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#999'}>
                    ///G3AR
                  </Link>
                </li>
                <li>
                  <Link href="/discography" className="transition-colors" style={{color: '#999'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#999'}>
                    ///DISC0G
                  </Link>
                </li>
                <li>
                  <Link href="/mastering" className="transition-colors" style={{color: '#999'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#999'}>
                    ///MAST3RING
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="transition-colors" style={{color: '#999'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#999'}>
                    ///AB0UT
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="transition-colors" style={{color: '#999'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#999'}>
                    ///C0NT4CT
                  </Link>
                </li>
              </ul>
            </nav>
            <hr className="border-gray-600 mt-4 mb-4" />
            <div className="text-xs font-mono text-gray-500 space-y-1">
              <p>/// © 2020 - 2026 National Freedom Studio</p>
              <p>/// Site by T.rox</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
