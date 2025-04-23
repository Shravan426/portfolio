'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Portfolio
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}