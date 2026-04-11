import { useState } from "react";
import { Link } from "wouter";

const buffaloUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_buffalo-head_01_29a9febb.png";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "STUDIO", href: "/studio" },
    { label: "G3AR", href: "/gear" },
    { label: "DISCOG", href: "/discography" },
    { label: "MAST3RING", href: "/mastering" },
    { label: "ABOUT", href: "/about" },
    { label: "CONT4CT", href: "/contact" },
  ];

  return (
    <>
      {/* Mobile Menu Button - Fixed bottom right */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-40 flex items-center justify-center"
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#d97a9a",
          border: "5px solid black",
          borderRadius: "25% 20% 28% 22% / 22% 28% 20% 25%",
          fontFamily: "'Special Elite', serif",
          fontSize: "32px",
          fontWeight: "900",
          cursor: "pointer",
          position: "relative",
          boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
          transition: "transform 0.2s ease",
        }}
      >
        {isOpen ? "X" : "MENU"}
      </button>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 overflow-y-auto"
          style={{
            backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" /></filter><rect width=\"100\" height=\"100\" fill=\"%23f5f5f5\" filter=\"url(%23noise)\" opacity=\"0.5\"/></svg>')",
            backgroundColor: "#f5f5f5",
          }}
        >
          <div className="w-full h-full flex flex-col justify-between p-6">
            {/* Navigation Links */}
            <nav className="mt-8">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <a
                        onClick={() => setIsOpen(false)}
                        className="text-2xl font-bold transition-colors"
                        style={{
                          fontFamily: "'Special Elite', serif",
                          color: "#000",
                        }}
                      >
                        {link.label}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Center Content - Buffalo and Text */}
            <div className="flex flex-col items-center justify-center flex-1">
              <img
                src={buffaloUrl}
                alt="Buffalo Head"
                className="w-40 h-40 object-contain mb-6"
              />
              <div
                className="text-center space-y-0"
                style={{
                  fontFamily: "'Special Elite', serif",
                  fontSize: "16px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                  lineHeight: "1.3",
                }}
              >
                <p>NATIONAL FREEDOM</p>
                <p>NATIONAL FREEDOM</p>
                <p>NATIONAL FR3EDOM</p>
                <p>NATIONAL FR33DOM</p>
              </div>
            </div>

            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#d97a9a",
                  border: "5px solid black",
                  borderRadius: "25% 20% 28% 22% / 22% 28% 20% 25%",
                  fontFamily: "'Special Elite', serif",
                  fontSize: "32px",
                  fontWeight: "900",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s ease",
                }}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
