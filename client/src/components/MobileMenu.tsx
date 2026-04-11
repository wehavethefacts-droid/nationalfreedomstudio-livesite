import { useState } from "react";
import { Link } from "wouter";

const buffaloUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_29a9febb.png";
const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";
const buttonMenuUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/button_menu_6425018d.png";
const buttonXUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/button_x_00dd56c7.png";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "/// STUDIO", href: "/studio" },
    { label: "/// G3AR", href: "/gear" },
    { label: "/// DISCOG", href: "/discography" },
    { label: "/// MAST3RING", href: "/mastering" },
    { label: "/// AB0UT", href: "/about" },
    { label: "/// C0NT4CT", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Pink Menu Button in Lower Right - Using Image */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-[9999]"
        style={{
          width: '90px',
          height: '90px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
          padding: 0,
          backgroundImage: `url('${isOpen ? buttonXUrl : buttonMenuUrl}')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        aria-label="Toggle menu"
      />

      {/* Full-screen Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-[9998] overflow-y-auto"
          style={{
            backgroundImage: `url('${noiseUrl}')`,
            backgroundColor: '#f5f5f5',
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
          }}
        >
          <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Navigation Links */}
            <nav className="mb-12 text-center space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-2xl font-bold transition-colors"
                  style={{
                    fontFamily: "'Special Elite', serif",
                    color: '#000',
                  }}
                >
                  {link.label.replace('/// ', '')}
                </Link>
              ))}
            </nav>

            {/* Buffalo Image */}
            <img
              src={buffaloUrl}
              alt="Buffalo Head"
              className="max-h-48 object-contain mb-8"
            />

            {/* Repeating Text */}
            <div className="text-center text-xs font-mono text-gray-700 space-y-1 mb-8">
              <p>NATIONAL FREEDOM</p>
              <p>NATIONAL FREEDOM</p>
              <p>NATIONAL FR3EDOM</p>
              <p>NATIONAL FR33DOM</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
