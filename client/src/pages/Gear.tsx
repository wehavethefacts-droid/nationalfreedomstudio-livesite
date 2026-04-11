import { Link } from "wouter";

export default function Gear() {
  const backslashUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-backslash-black_dd49c3a4.png";
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_control_01_0c8d15f9.jpg"
        >
          <source
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_home-vid_01_sm_ba1123e0.mp4"
            type="video/mp4"
          />
        </video>

        {/* Logo Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none" style={{ top: '-70px' }}>
          <div className="pointer-events-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.1em'}}>
              G3AR
            </h1>
          </div>
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

      {/* Content Section */}
      <section
        className="relative w-full py-16 md:py-12 -mt-8 md:-mt-16"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
          paddingTop: 'calc(4rem + 4rem)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Info Box */}
          <div className="max-w-xl mt-auto mx-auto p-5 bg-black">
            <h2 className="text-2xl font-bold leading-tight text-white mb-2" style={{fontFamily: "'Special Elite', serif"}}>
              /// The Gear
            </h2>
            <p className="mb-0 text-white text-base font-bold" style={{fontFamily: "'Inconsolata', monospace"}}>
              Our studio is equipped with the finest analog and digital equipment. From vintage consoles to modern workstations, we have everything needed to capture and craft exceptional sound.
            </p>
            <p className="mt-4">
              <Link href="/" className="text-base font-bold hover:opacity-80 transition-opacity" style={{color: '#d97a9a', fontFamily: "'Inconsolata', monospace"}}>
                Back → → →
              </Link>
            </p>
            <hr className="border-gray-600 mt-4 mb-3" />

            {/* Navigation */}
            <nav className="pt-2 pb-3">
              <ul className="grid grid-cols-3 gap-6 text-sm font-bold" style={{fontFamily: "'Special Elite', serif"}}>
                <li>
                  <Link href="/studio" className="transition-colors" style={{color: '#999'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#999'}>
                    ///STUDIO
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="transition-colors" style={{color: '#d97a9a'}} onMouseEnter={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'} onMouseLeave={(e) => (e.currentTarget as HTMLAnchorElement).style.color = '#d97a9a'}>
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
