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

        {/* Logo Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Link href="/studio">
            <div className="w-full h-full cursor-pointer hover:opacity-80 transition-opacity flex items-center justify-center">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 990 399.6"
                className="w-4/5 h-4/5"
              >
                <style>{`.st0{fill:#FFFFFF;}`}</style>
                <g>
                  <path className="st0" d="M948.3,294.6c-5,0-10.8-11.1-7.9-14.7c1.8-1.4,1.4-2.9,1.1-3.9c-0.4-2.2,0.4-4.3-0.7-6.1c-2.5,0-3.9,2.9-5,5c-1.8,2.9-8.6,0.7-10-2.2c-1.1-1.4-3.2-2.9-5-2.9c-2.2,0.4-1.4,2.2-1.1,3.6c-1.4,5.7-0.4,12.5-3.6,17.6c-1.8,3.2-5.7,1.4-8.6,0.7c-5.4-2.9-2.5-10.4-3.2-15.4c3.2-3.9-2.9-9,0.7-11.5c2.9-2.9,1.4-7.2,2.2-10.4c0.4-3.2-2.5-6.8,0-9.7c-0.7-7.2-1.8-16.8,2.2-23.3c1.1-3.2-0.4-12.5,4.7-12.5c15.1,0.7,7.2,18.6,14.7,27.2c1.4,6.5,10.8,7.2,9-0.7c-1.4-6.1,5.7-10.8,4.7-17.2c0-1.1,0-2.2,1.1-2.5c3.6-0.7,2.9-5.7,6.5-6.1c6.1-1.8,8.6,3.6,8.2,9h0.4c-2.9,10.8-1.1,22.6-2.5,33.3c-1.4,2.2,2.5,3.6,1.1,5.7c-1.1,8.2-2.9,13.6-1.1,21.1c-1.4,4.3-0.7,9-3.2,12.9C952.6,294.2,950.1,294.2,948.3,294.6z"/>
                </g>
              </svg>
            </div>
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
