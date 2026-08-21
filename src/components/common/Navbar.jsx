import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Goals", href: "#goals" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#D9D5CE] bg-[#F8F7F4]/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold tracking-[0.2em] text-[#252525] transition hover:text-[#7A8B7A]"
          >
            KJNX
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-6 text-sm font-medium md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#6B6B6B] transition-colors duration-200 hover:text-[#7A8B7A]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-[#252525] transition hover:bg-[#EAE8E1] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              /* X icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 border-t border-[#D9D5CE] pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-[#6B6B6B] transition hover:bg-[#EAE8E1] hover:text-[#7A8B7A]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;