import PageFooter from "@/components/PageFooter";

export default function About() {
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
            /// AB0UT
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
                Christopher Colbert
              </h2>
              <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
                House engineer Christopher Colbert is a thirty-year veteran of live sound, studio recording, and mastering. He's worked alongside some of the biz's legendary engineers in studios around the world, mixed television performances for 120 Minutes, every late night talk show, and has a long list of FOH gigs——from Leon Bridges to The Walkmen to Mazzy Star and made or assisted on recordings for Pedro the Lion, Richard Swift, Mineral, Sixpence None the Richer, Elf Power, Nathaniel Rateliff, and countless more.
              </p>
              <p className="text-base md:text-lg text-gray-800 mb-4 leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
                He keeps all the tech, machines, instruments, and do-dads up to snuff and is always available to fix/cajole/prob-solve when needed. He can also be added to the studio fee if you'd like him there as your engineer.
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
                Like all classic engineers, he's a little grumpy, sharply funny, suffers no fools, and makes a finished jam sound amazing.
              </p>
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
