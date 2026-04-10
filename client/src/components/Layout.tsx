import { Link } from "wouter";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-2 overflow-hidden bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-75 transition-opacity">
            <img
              src="https://nationalfreedom.studio/visuals/NF_mark.svg"
              width="40"
              height="40"
              alt="National Freedom Studio"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center justify-end space-x-8">
              <li>
                <Link href="/studio" className="font-serif font-bold tracking-wider uppercase text-xs hover:text-blue-600">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/gear" className="font-serif font-bold tracking-wider uppercase text-xs hover:text-blue-600">
                  g3ar
                </Link>
              </li>
              <li>
                <Link href="/discography" className="font-serif font-bold tracking-wider uppercase text-xs hover:text-blue-600">
                  disc0g
                </Link>
              </li>
              <li>
                <Link href="/mastering" className="font-serif font-bold tracking-wider uppercase text-xs hover:text-blue-600">
                  mast3ring
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-serif font-bold tracking-wider uppercase text-xs hover:text-blue-600">
                  ab0ut
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-serif font-bold tracking-wider uppercase text-xs hover:text-blue-600">
                  cont4ct
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center space-x-5">
            <a
              href="https://www.instagram.com/nationalfreedomstudio"
              rel="noopener noreferrer"
              aria-label="National Freedom Studio on Instagram"
              target="_blank"
              className="text-black hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 140 140" fill="currentColor">
                <path d="M102.083 0H37.917A37.975 37.975 0 000 37.917v64.166A37.975 37.975 0 0037.917 140h64.166A37.975 37.975 0 00140 102.083V37.917A37.975 37.975 0 00102.083 0zM70 102.083A32.083 32.083 0 11102.083 70 32.083 32.083 0 0170 102.083zm37.917-64.166a8.75 8.75 0 118.75-8.75 8.75 8.75 0 01-8.75 8.75z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com/NatFreeStudio"
              rel="noopener noreferrer"
              aria-label="National Freedom Studio on Twitter"
              target="_blank"
              className="text-black hover:text-blue-600 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 140 140" fill="currentColor">
                <path d="M136.033 37.567a2.917 2.917 0 00-1.166-5.075l-4.609-1.167a2.917 2.917 0 01-1.925-4.083l2.567-5.192a2.917 2.917 0 00-3.383-4.083l-11.667 3.266a2.917 2.917 0 01-2.567-.466 29.167 29.167 0 00-17.5-5.834A29.167 29.167 0 0066.617 44.1v2.1a1.458 1.458 0 01-1.284 1.458c-16.391 1.925-32.083-6.416-49-25.9a2.975 2.975 0 00-2.975-.875 2.917 2.917 0 00-1.691 2.45 44.217 44.217 0 002.683 28.7 1.458 1.458 0 01-1.517 2.1L6.3 52.85a2.917 2.917 0 00-3.325 3.442A30.042 30.042 0 0016.8 78.342a1.458 1.458 0 010 2.625l-3.092 1.225a2.917 2.917 0 00-1.516 4.025 25.433 25.433 0 0018.666 14.466 1.458 1.458 0 010 2.742 63.817 63.817 0 01-25.025 4.842 2.974 2.974 0 00-1.166 5.833 117.017 117.017 0 0047.483 11.258 73.383 73.383 0 0040.833-11.666 72.917 72.917 0 0032.434-60.842v-5.075a2.917 2.917 0 011.05-2.217z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
