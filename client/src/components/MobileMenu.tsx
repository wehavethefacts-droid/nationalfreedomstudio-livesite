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
      {/* Hamburger Menu Button in Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-[9999] flex flex-col gap-1.5"
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0",
        }}
      >
        <div
          style={{
            width: "24px",
            height: "3px",
            backgroundColor: "black",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(45deg) translateY(10px)" : "none",
          }}
        />
        <div
          style={{
            width: "24px",
            height: "3px",
            backgroundColor: "black",
            transition: "all 0.3s ease",
            opacity: isOpen ? 0 : 1,
          }}
        />
        <div
          style={{
            width: "24px",
            height: "3px",
            backgroundColor: "black",
            transition: "all 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translateY(-10px)" : "none",
          }}
        />
      </button>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url('${noiseUrl}')`,
            backgroundColor: "#f9f9f9",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-8 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Links */}
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Special Elite', serif",
                    color: "black",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#d97a9a";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "black";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Buffalo Image and Text */}
            <div className="flex flex-col items-center justify-center mt-8">
              <img
                src={buffaloUrl}
                alt="Buffalo Head"
                className="w-32 h-32 object-contain mb-4"
              />
              <div
                className="text-center space-y-0"
                style={{
                  fontFamily: "'Special Elite', serif",
                  fontSize: "12px",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                  lineHeight: "1.3",
                }}
              >
                <p>NATIONAL FREEDOM</p>
                <p>NATIONAL FREEDOM</p>
                <p>NATIONAL FR3EDOM</p>
                <p>NATIONAL FR33DOM</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
