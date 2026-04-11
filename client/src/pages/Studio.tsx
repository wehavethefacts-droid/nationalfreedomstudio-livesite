import PageFooter from "@/components/PageFooter";

export default function Studio() {
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

      {/* Photo Gallery Section */}
      <section className="relative w-full py-12 md:py-16 bg-white">
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

          {/* CTA Section */}
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl font-bold mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-colors"
              style={{fontFamily: "'Special Elite', serif"}}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}
