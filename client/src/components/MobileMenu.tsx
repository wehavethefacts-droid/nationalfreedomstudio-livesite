import { useState } from "react";
import { Link } from "wouter";

const buffaloUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_29a9febb.png";
const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";

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
      {/* Floating Pink Menu Button in Lower Right - Distressed Frame Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-[9999] flex items-center justify-center"
        style={{
          width: '140px',
          height: '140px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
          padding: 0,
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 140 140"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25))',
          }}
        >
          {/* Outer pink background with organic wavy edges */}
          <path
            d="M 15 25 Q 18 12 28 15 Q 38 18 48 12 Q 58 8 70 12 Q 82 8 92 15 Q 102 18 125 20 L 128 35 Q 132 48 130 65 Q 132 82 128 100 L 125 120 Q 102 128 92 125 Q 82 132 70 128 Q 58 132 48 128 Q 38 132 28 125 Q 18 128 15 120 L 12 100 Q 8 82 10 65 Q 8 48 12 35 Z"
            fill="#d97a9a"
            stroke="none"
          />

          {/* Thick black rectangular frame with rounded corners */}
          <g stroke="black" strokeWidth="18" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Top border */}
            <path d="M 25 35 Q 35 28 50 32 Q 70 28 90 32 Q 105 28 115 35" />
            {/* Right border */}
            <path d="M 115 35 Q 122 50 120 70 Q 122 90 115 105" />
            {/* Bottom border */}
            <path d="M 115 105 Q 105 112 90 108 Q 70 112 50 108 Q 35 112 25 105" />
            {/* Left border */}
            <path d="M 25 105 Q 18 90 20 70 Q 18 50 25 35" />
          </g>

          {/* Center text - MENU or X */}
          <text
            x="70"
            y="75"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="48"
            fontWeight="bold"
            fontFamily="'Special Elite', serif"
            fill="black"
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            {isOpen ? 'X' : 'MENU'}
          </text>
        </svg>
      </button>

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
