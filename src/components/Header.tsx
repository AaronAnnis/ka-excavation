"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-bg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-official.png"
            alt="K & A Excavation"
            width={280}
            height={105}
            className="h-16 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-text-body transition-colors hover:text-text-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:2072557707"
            className="rounded-md border border-text-dark bg-text-dark px-5 py-2 text-sm font-medium text-text-white transition-colors hover:bg-transparent hover:text-text-dark"
          >
            (207) 255-7707
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-text-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-text-body transition-colors hover:text-text-dark"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:2072557707"
            className="mt-3 block rounded-md border border-text-dark bg-text-dark px-5 py-2 text-center text-sm font-medium text-text-white"
          >
            (207) 255-7707
          </a>
        </div>
      )}
    </header>
  );
}
