import PageFooter from "@/components/PageFooter";

export default function Studio() {
  // Studio photos with labels - masonry layout with varying sizes
  const studioPhotos = [
    { label: "/// Drums + bobs & bits", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_drum-corner_01_3ff37c40.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// 1969 Gibson ES-125 guitar + amps", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_guitar-amps_01_aeb85bf7.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Wurli Upright /// Melody Grand", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_pianos_01_6a8da621.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Pianos", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_pianos_01_6a8da621.jpg", colSpan: 1, rowSpan: 1 },
    { label: "/// Main Room", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_main-room_01_40cf4bff.jpg", colSpan: 2, rowSpan: 1 },
    { label: "/// Rack", url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_rack_01_a19ed1bb.jpg", colSpan: 1, rowSpan: 1 },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay Content */}
      <section className="relative w-full min-h-[auto] md:min-h-[auto] flex items-center justify-start bg-black overflow-hidden py-4 md:py-6">
        {/* Black Background */}
        <div className="absolute inset-0 w-full h-full bg-black z-0" />
        
        {/* White Grainy Dots Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-5"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png')",
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 px-4 md:px-8 py-4 md:py-6 max-w-3xl ml-2 md:ml-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
            /// TH3 STUDIO
          </h1>
          <p className="text-white text-base md:text-lg font-bold leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
            Eclectic. Intimate. The right mix of vintage hunkydory and modern wizbang. This isn't a sterile, operating-room audio clinic. National Freedom is making music in someone's rad living room that feels like your own rad living room.
          </p>
        </div>
      </section>

      {/* Full-Width Control Room Image */}
      <section className="relative w-full h-[550px] md:h-[700px] overflow-hidden">
        <img
          src="https://nationalfreedom.studio/visuals/NF_control-wide_01.jpg"
          alt="Control Room"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute bottom-0 right-0 p-4 md:p-6">
          <p className="text-white text-lg md:text-2xl font-bold text-right" style={{fontFamily: "'Special Elite', serif"}}>
            /// Control Room
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative w-full py-12 md:py-16 bg-black">
        {/* Grainy Texture Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png')",
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-12 auto-rows-[300px] md:auto-rows-[350px]">
            {/* First row: Drums and Guitar */}
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

            {/* Second row: Pianos */}
            <div className="relative overflow-hidden group col-span-1 md:col-span-2">
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

            {/* Third row: Full width Main Room */}
            <div className="relative overflow-hidden group col-span-2 md:col-span-4">
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

            {/* Fourth row: Rack */}
            <div className="relative overflow-hidden group col-span-2 md:col-span-2">
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
          </div>

          {/* CTA Section */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl font-bold mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-pink-400 text-black font-bold hover:bg-pink-300 transition-colors"
              style={{fontFamily: "'Special Elite', serif"}}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      <PageFooter />
    </div>
  );
}
