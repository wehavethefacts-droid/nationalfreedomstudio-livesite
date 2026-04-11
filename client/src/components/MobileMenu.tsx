import { useState } from "react";
import { Link } from "wouter";

const buffaloUrl = "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=400&h=400&fit=crop";

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
        className="md:hidden fixed bottom-6 right-6 z-40 w-16 h-16 flex items-center justify-center"
        style={{
          backgroundColor: "#d97a9a",
          border: "3px solid black",
          fontFamily: "'Special Elite', serif",
          fontSize: "24px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        {isOpen ? "X" : "≡"}
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
                className="w-32 h-32 object-contain mb-6"
              />
              <div
                className="text-center space-y-1"
                style={{
                  fontFamily: "'Special Elite', serif",
                  fontSize: "14px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
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
                className="w-16 h-16 flex items-center justify-center"
                style={{
                  backgroundColor: "#d97a9a",
                  border: "3px solid black",
                  fontFamily: "'Special Elite', serif",
                  fontSize: "24px",
                  fontWeight: "bold",
                  cursor: "pointer",
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
