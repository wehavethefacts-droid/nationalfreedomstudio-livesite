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
          width: '90px',
          height: '90px',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: isOpen ? 'scale(1.05)' : 'scale(1)',
          padding: 0,
        }}
      >
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
          }}
        >
          {/* Outer pink background with organic wavy edges */}
          <path
            d="M 10 18 Q 12 8 20 10 Q 28 12 35 8 Q 42 5 45 8 Q 52 5 57 8 Q 65 12 75 10 Q 82 12 85 18 L 87 28 Q 89 38 87 45 Q 89 52 87 62 L 85 72 Q 82 78 75 80 Q 65 85 57 82 Q 52 85 45 82 Q 42 85 35 82 Q 28 85 20 80 Q 12 78 10 72 L 8 62 Q 6 52 8 45 Q 6 38 8 28 Z"
            fill="#d97a9a"
            stroke="none"
          />

          {/* Thin black segmented border frame */}
          <g stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Top-left corner */}
            <path d="M 15 22 L 28 22" />
            {/* Top-right corner */}
            <path d="M 62 22 L 75 22" />
            {/* Right-top segment */}
            <path d="M 78 25 Q 82 35 80 45" />
            {/* Right-bottom segment */}
            <path d="M 80 45 Q 82 55 78 65" />
            {/* Bottom-right corner */}
            <path d="M 75 68 L 62 68" />
            {/* Bottom-left corner */}
            <path d="M 28 68 L 15 68" />
            {/* Left-bottom segment */}
            <path d="M 12 65 Q 8 55 10 45" />
            {/* Left-top segment */}
            <path d="M 10 45 Q 8 35 12 25" />
          </g>

          {/* Center text - MENU or X - much smaller */}
          <text
            x="45"
            y="50"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
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
