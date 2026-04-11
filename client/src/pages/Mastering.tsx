import PageFooter from "@/components/PageFooter";

export default function Mastering() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-start bg-black py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: "'Special Elite', serif"}}>
            /// MAST3RING
          </h1>
          <p className="text-white text-base md:text-lg font-bold max-w-3xl" style={{fontFamily: "'Inconsolata', monospace"}}>
            Mastering engineer Christopher Colbert (who's also the house engineer) brings his 30 years of biz experience and seasoned ears to making your masters sound amazing across the frickin' myriad platforms we got these days. Digital or tape or both, we can do it. He's also quite the egalitarian.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{fontFamily: "'Special Elite', serif"}}>
              Pricing
            </h2>
            <div className="text-lg md:text-xl font-bold space-y-4" style={{fontFamily: "'Inconsolata', monospace"}}>
              <p>Mastering is <span className="text-2xl">$100/per song</span></p>
              <p className="text-base md:text-lg text-gray-700">(no matter who you are)</p>
              <p className="text-xl mt-6 text-green-600">Power to the people.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
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
