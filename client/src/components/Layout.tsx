import { Link } from "wouter";
import { studioInfo } from "@/data/studioData";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navLinks = [
    { href: "/studio", label: "/// STUDIO" },
    { href: "/gear", label: "/// GEAR" },
    { href: "/discography", label: "/// DISCOGRAPHY" },
    { href: "/mastering", label: "/// MASTERING" },
    { href: "/about", label: "/// ABOUT" },
    { href: "/contact", label: "/// CONTACT" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-serif">
      {/* Header Navigation */}
      <header className="border-b border-border sticky top-0 z-50 bg-background">
        <nav className="container max-w-6xl mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <Link href="/" className="text-2xl md:text-3xl font-bold tracking-widest hover:opacity-75 transition-opacity">
              /// NF
            </Link>
            <ul className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm font-bold tracking-widest">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent pb-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
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
