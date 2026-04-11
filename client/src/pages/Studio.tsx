import { Link } from "wouter";

export default function Studio() {
  const backslashUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-backslash-black_dd49c3a4.png";
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";
  
  // Studio photos with labels - masonry layout with varying sizes
  const studioPhotos = [
    { label: "/// Rack", url: "https://nationalfreedom.studio/visuals/NF_rack_01.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Studer A80 VU MKIV", url: "https://nationalfreedom.studio/visuals/NF_studer_01.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Main Room", url: "https://nationalfreedom.studio/visuals/NF_main_01.jpg", colSpan: 2, rowSpan: 1 },
    { label: "/// Drums + bobs & bits", url: "https://nationalfreedom.studio/visuals/NF_drums_01.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// 1969 Gibson ES-125 guitar + amps", url: "https://nationalfreedom.studio/visuals/NF_guitar_01.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Wurli Upright /// Melody Grand", url: "https://nationalfreedom.studio/visuals/NF_pianos_01.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Pianos", url: "https://nationalfreedom.studio/visuals/NF_pianos_02.jpg", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay Content */}
      <section className="relative w-full min-h-screen md:min-h-[70vh] flex items-center justify-start overflow-hidden bg-black">
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
        <div className="relative z-10 px-6 md:px-12 py-12 max-w-3xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 auto-rows-[300px] md:auto-rows-[350px]">
            {/* First row: 2 equal photos */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[0].url}
                alt={studioPhotos[0].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[0].label}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[1].url}
                alt={studioPhotos[1].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[1].label}
                </p>
              </div>
            </div>

            {/* Second row: Full width photo */}
            <div className="relative overflow-hidden group col-span-2 md:col-span-4">
              <img
                src={studioPhotos[2].url}
                alt={studioPhotos[2].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[2].label}
                </p>
              </div>
            </div>

            {/* Third row: 2 equal photos */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[3].url}
                alt={studioPhotos[3].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[3].label}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[4].url}
                alt={studioPhotos[4].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[4].label}
                </p>
              </div>
            </div>

            {/* Fourth row: 2 equal photos */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[5].url}
                alt={studioPhotos[5].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[5].label}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
              <img
                src={studioPhotos[6].url}
                alt={studioPhotos[6].label}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
                  {studioPhotos[6].label}
                </p>
              </div>
            </div>
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
