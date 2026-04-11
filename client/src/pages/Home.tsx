import { Link } from "wouter";

export default function Home() {
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

        {/* Logo Overlay - SVG */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <Link href="/studio" className="pointer-events-auto cursor-pointer hover:opacity-75 transition-opacity">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_logo_white_90bb4d26.svg"
              alt="National Freedom Logo"
              style={{
                width: '1200px',
                height: 'auto',
                maxWidth: '90vw',
                display: 'block',
                marginLeft: '0'
              }}
            />
          </Link>
        </div>
      </section>

      {/* Backslash Divider - positioned to span hero and footer */}
      <div
        className="relative w-full -mt-8 md:-mt-16 h-16 md:h-32 z-20 bg-contain bg-bottom bg-repeat-x"
        style={{
          backgroundImage: `url('${backslashUrl}')`,
          backgroundSize: 'auto 100%',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'repeat-x',
        }}
      />

      {/* Footer Section */}
      <footer
        className="relative w-full py-16 md:py-12"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 md:grid md:grid-cols-2 md:gap-8">
          {/* Studio Info Box */}
          <div className="max-w-sm mt-auto md:ml-auto mx-auto p-6 bg-black">
            <h2 className="text-2xl font-bold font-serif leading-tight text-white mb-2">
              /// The Studio
            </h2>
            <p className="mb-0 text-white text-sm">
              National Freedom is a landmark studio where some of the most original records of the last decade were made.
            </p>
            <p className="mt-2">
              <Link href="/studio" className="text-blue-600 hover:text-white text-sm">
                More <span className="font-serif">→ → →</span>
              </Link>
            </p>
            <hr className="border-gray-700 mt-4" />

            {/* Footer Navigation */}
            <nav className="pt-6">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs font-mono">
                <li>
                  <Link href="/studio" className="font-bold uppercase hover:text-blue-600 text-gray-500">
                    ///Studio
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="font-bold uppercase hover:text-blue-600 text-gray-500">
                    g3ar
                  </Link>
                </li>
                <li>
                  <Link href="/discography" className="font-bold uppercase hover:text-blue-600 text-gray-500">
                    disc0g
                  </Link>
                </li>
                <li>
                  <Link href="/mastering" className="font-bold uppercase hover:text-blue-600 text-gray-500">
                    mast3ring
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-bold uppercase hover:text-blue-600 text-gray-500">
                    ab0ut
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-bold uppercase hover:text-blue-600 text-gray-500">
                    cont4ct
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buffalo Background Image (Right side on desktop) */}
          <div className="hidden md:flex items-end justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_29a9febb.png"
              alt="Buffalo Head"
              className="max-h-96 object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
