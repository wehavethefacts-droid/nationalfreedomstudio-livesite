import { Link } from "wouter";
import { studioInfo } from "@/data/studioData";

interface NavLink {
  href: string;
  label: string;
  highlight?: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navLinks = [
    { href: "/studio", label: "STUDIO", highlight: true },
    { href: "/gear", label: "GEAR", highlight: false },
    { href: "/discography", label: "DISCOGRAPHY", highlight: false },
    { href: "/mastering", label: "MASTERING", highlight: false },
    { href: "/about", label: "ABOUT", highlight: false },
    { href: "/contact", label: "CONTACT", highlight: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-serif">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <nav className="container max-w-6xl mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="hover:opacity-75 transition-opacity">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/NF_mark_5055bdeb.svg"
                alt="National Freedom Studio"
                className="h-6 md:h-8 w-auto"
              />
            </Link>

            {/* Center Navigation */}
            <ul className="flex gap-4 md:gap-8 text-xs md:text-sm font-bold tracking-widest">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:opacity-75 transition-colors ${
                      link.highlight ? "text-pink-500" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/nationalfreedomstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/nationalfreedom"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5-5M3 20v-7" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary text-secondary-foreground mt-12 md:mt-16">
        <div className="container max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold tracking-widest">/// THE STUDIO</h3>
              <div className="space-y-3 text-sm md:text-base leading-relaxed">
                <p>
                  <strong>National Freedom Studio</strong>
                </p>
                <p>Cottage Grove, Oregon</p>
                <p>
                  <a
                    href="mailto:nationalfreedomstudio@gmail.com"
                    className="hover:text-accent transition-colors underline"
                  >
                    nationalfreedomstudio@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <h3 className="text-lg md:text-xl font-bold tracking-widest">/// WANNA BOOK?</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Tell us about your project. Or just say hello.
              </p>
              <div className="space-y-2 text-xs md:text-sm">
                <p className="font-bold">
                  <a
                    href="mailto:nationalfreedomstudio@gmail.com"
                    className="hover:text-accent transition-colors"
                  >
                    {">> "} nationalfreedomstudio@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-foreground/20 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs md:text-sm">
            <p className="font-bold tracking-widest">/// {studioInfo.copyright}</p>
            <p className="text-foreground/75">© {new Date().getFullYear()} National Freedom Studio</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
