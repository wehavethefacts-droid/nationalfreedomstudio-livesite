import { Link } from "wouter";

export default function PageFooter() {
  const backslashUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-backslash-black_dd49c3a4.png";
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";
  const buffaloUrl = "https://nationalfreedom.studio/visuals/NF_buffalo-head_01.png";

  return (
    <footer className="relative w-full">
      {/* Backslash Divider */}
      <div
        className="relative w-full h-16 md:h-32 bg-contain bg-bottom bg-repeat-x"
        style={{
          backgroundImage: `url('${backslashUrl}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat-x',
        }}
      />

      {/* Footer Section with Buffalo and Navigation */}
      <section
        className="relative w-full py-12 md:py-20"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Buffalo Image - positioned behind content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
            <img
              src={buffaloUrl}
              alt="Buffalo"
              className="h-96 md:h-full object-contain"
              style={{maxHeight: '500px'}}
            />
          </div>

          {/* Content Box - positioned on top */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Info Box */}
            <div className="bg-black p-6 md:p-8">
              <hr className="border-gray-600 mt-0 mb-4" />

              <h3 className="text-2xl font-bold text-white mb-3" style={{fontFamily: "'Special Elite', serif"}}>
                /// The Studio
              </h3>
              
              <p className="text-white text-sm md:text-base font-bold mb-4" style={{fontFamily: "'Inconsolata', monospace"}}>
                National Freedom is a landmark studio where some of the most original records of the last decade were made.
              </p>

              <p className="text-white text-xs font-bold mb-4 hover:text-pink-400 transition-colors cursor-pointer" style={{fontFamily: "'Inconsolata', monospace", color: '#d97a9a'}}>
                More → → →
              </p>

              <hr className="border-gray-600 my-4" />

              {/* Navigation */}
              <nav className="py-3">
                <ul className="grid grid-cols-3 gap-4 md:gap-6 text-xs md:text-sm font-bold" style={{fontFamily: "'Special Elite', serif"}}>
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

              <hr className="border-gray-600 my-4" />

              {/* Copyright */}
              <div className="text-xs font-mono text-gray-500 space-y-1">
                <p>/// © 2020 - 2026 National Freedom Studio</p>
                <p>/// Site by T.rox</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
