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
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Link href="/studio" className="w-full h-full flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 990 399.6"
              className="w-full h-full"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            >
              <style>{`.st0{fill:#FFFFFF;}`}</style>
              <g>
                <path className="st0" d="M948.3,294.6c-5,0-10.8-11.1-7.9-14.7c1.8-1.4,1.4-2.9,1.1-3.9c-0.4-2.2,0.4-4.3-0.7-6.1c-2.5,0-3.9,2.9-5,5c-1.8,2.9-8.6,0.7-10-2.2c-1.1-1.4-3.2-2.9-5-2.9c-2.2,0.4-1.4,2.2-1.1,3.6c-1.4,5.7-0.4,12.5-3.6,17.6c-1.8,3.2-5.7,1.4-8.6,0.7c-5.4-2.9-2.5-10.4-3.2-15.4c3.2-3.9-2.9-9,0.7-11.5c2.9-2.9,1.4-7.2,2.2-10.4c0.4-3.2-2.5-6.8,0-9.7c-0.7-7.2-1.8-16.8,2.2-23.3c1.1-3.2-0.4-12.5,4.7-12.5c15.1,0.7,7.2,18.6,14.7,27.2c1.4,6.5,10.8,7.2,9-0.7c-1.4-6.1,5.7-10.8,4.7-17.2c0-1.1,0-2.2,1.1-2.5c3.6-0.7,2.9-5.7,6.5-6.1c6.1-1.8,8.6,3.6,8.2,9h0.4c-2.9,10.8-1.1,22.6-2.5,33.3c-1.4,2.2,2.5,3.6,1.1,5.7c-1.1,8.2-2.9,13.6-1.1,21.1c-1.4,4.3-0.7,9-3.2,12.9C952.6,294.2,950.1,294.2,948.3,294.6z"/>
                <path className="st0" d="M973.4,398.8c-5.7-1.4-9.3-6.5-9.3-12.5c0.7-3.6-3.6-6.8-7.2-6.1c-4.7,0.7-11.5-6.8-13.3,0c-2.5,5.4,2.2,13.3-3.2,16.5c-1.1,0.4-2.2,1.4-2.9,2.2c-4.3-0.7-6.8-4.7-8.6-8.6c1.8-3.9-2.5-8.2-1.4-12.5c1.8-2.5,2.9-5.4,2.2-7.9c1.1-5.7,1.4-11.5,1.8-17.2c1.1-6.5-2.9-12.9-0.7-19c-0.4-5.7-1.1-11.5,1.8-16.5c0-1.8,3.2-2.2,5.4-2.5c5,0,6.8,6.1,6.5,10c-1.1,4.7,4.7,6.8,4.3,11.5c-0.7,2.9,1.8,5.4,1.8,8.2c-0.4,4.7,6.1,7.5,7.9,3.2c0.7-1.8,0.7-3.6,1.1-5.4c-1.4-6.8,7.2-10.8,6.1-17.2c-0.4-2.5,1.1-3.9,2.2-5.7c0.4-1.1,0.7-3.2,1.4-3.6c9.3-4.7,13.6,5,11.1,13.3c-1.4,10.4,1.1,20.8,0,30.8c-1.4,2.2,2.5,3.9,0.7,5.7c-1.1,1.4-0.7,3.6-1.1,5.4C978,379.5,984.8,395.6,973.4,398.8z"/>
                <path className="st0" d="M953.6,188.5c-7.9,0.4-9-6.1-8.2-12.5l0,0c1.1-14-4.7-4.7-11.8-3.9c-2.9,0.4-6.8-9.3-8.2-1.8s0.4,11.8-5.4,17.2c-3.6,1.1-9.3,2.2-13.3,0.7c3.6-7.5-0.4-15.4,3.2-21.5c2.2-3.2-0.4-6.5,0-10.4c3.2-7.5,2.9-16.5,2.5-24.7c1.1-4.7,3.2-9,2.9-14c0-2.2,2.2-3.6,0.7-5.7c-1.4-1.1,3.6-5.7,4.7-6.5c7.2,0.4,6.5,8.6,10,13.3c-2.5,4.3,3.6,6.8,2.9,10.4c-0.4,1.8,0.4,3.2,0.7,4.7c-2.2,1.8,1.1,3.9,2.9,4.3c5.4,1.4,4.7-8.2,8.6-10.8c0.7-2.9,2.9-4.3,2.5-7.9c4.3-4.3,0.4-10.4,7.9-13.6c3.2-1.4,8.6,0.7,8.6,4.3c-0.7,2.5,0.7,5-1.1,7.2c-3.2,6.5,0,13.3-1.4,20.1c-1.4,11.1-0.7,22.9-3.2,33.3c0.4,4.7,0,9.7-1.1,14c-0.7,1.1-2.5,1.1-2.9,3.2C954.7,188.5,954,188.5,953.6,188.5z"/>
                <path className="st0" d="M944.3,83.5c-11.8-1.8-5.4-13.6-5-21.5c1.1-5.7-1.8-12.5,0.4-17.9c0.7-0.7,0.7-2.5,0.4-3.2c-1.8-5.7,1.8-11.8,0.7-17.9c2.2-3.9-1.4-7.2,0.7-11.5c1.1-6.5,6.8-15.8,10.8-5c2.2,4.7,5.4,9,4.7,14.7c0,3.2,3.6,5.4,3.2,9c0,1.4,1.4,2.2,1.4,3.9c0,2.2,1.8,2.9,3.2,3.6c1.4-3.9,3.9-7.2,4.3-11.5c2.5-1.1,1.8-3.2,2.2-5.4c1.8-5.7,3.9-11.5,7.2-16.5c1.4-3.6,8.2-5.7,10-2.2c0.4,3.9-0.7,7.9,1.4,11.5c0.4,0.7,0,2.2-0.4,2.9c0,3.6-3.2,6.5-2.2,10c0.7,1.1,0.7,2.2,0.4,3.6c-0.4,10.8-1.4,21.5,1.1,32.3c-1.4,3.6-2.9,7.2-2.5,10.4c0,2.5,2.9,3.9,0,6.5c-1.1,1.8,0,3.9-3.2,3.9c-1.1,0.4-2.9,0-3.9,0c-6.1,0.4-6.8-9-5.4-13.6c0.4-3.6,1.1-10.8,0-14.3c-2.2,0.4-5,1.4-5,4.7c-0.4,1.8-1.8,5.7-3.6,6.1c-2.2,0-4.7,0.4-6.1-1.8c-1.1-1.4-3.6-1.8-2.2-4.3c0.4-2.2-0.7-5.7-3.2-5.7c-2.2,0-4.3,2.2-2.5,3.9c-0.7,6.1,0.7,14-1.4,19.7c-0.4,0.4-1.1,1.1-1.1,1.8C949.3,81.3,945.4,83.1,944.3,83.5z"/>
              </g>
            </svg>
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
