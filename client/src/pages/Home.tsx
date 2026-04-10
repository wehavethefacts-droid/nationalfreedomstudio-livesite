import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen md:min-h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://nationalfreedom.studio/visuals/NF_control_01.jpg"
        >
          <source
            src="https://nationalfreedom.studio/visuals/NF_home-vid_01_sm.mp4"
            type="video/mp4"
          />
        </video>

        {/* Logo Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <Link href="/studio">
            <img
              src="https://nationalfreedom.studio/visuals/NF_logo_white.svg"
              alt="National Freedom Studio"
              className="max-w-[80vw] w-screen rotate-6 cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full mt-8 md:mt-0 py-16 md:py-12 bg-cover bg-center bg-top">
        {/* Decorative Divider */}
        <div className="absolute -top-16 w-full h-16 md:h-32 bg-repeat-x"></div>

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
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <li>
                  <Link href="/studio" className="font-serif font-bold uppercase hover:text-blue-600 text-gray-500">
                    ///Studio
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="font-serif font-bold uppercase hover:text-blue-600 text-gray-500">
                    g3ar
                  </Link>
                </li>
                <li>
                  <Link href="/discography" className="font-serif font-bold uppercase hover:text-blue-600 text-gray-500">
                    disc0g
                  </Link>
                </li>
                <li>
                  <Link href="/mastering" className="font-serif font-bold uppercase hover:text-blue-600 text-gray-500">
                    mast3ring
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-serif font-bold uppercase hover:text-blue-600 text-gray-500">
                    ab0ut
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-serif font-bold uppercase hover:text-blue-600 text-gray-500">
                    cont4ct
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Buffalo Background Image (Right side on desktop) */}
          <div className="hidden md:flex items-end justify-center">
            <img
              src="https://nationalfreedom.studio/visuals/NF_buffalo-head_01.png"
              alt="Buffalo Head"
              className="max-h-96 object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
