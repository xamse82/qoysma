'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-3xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              HAATECH
            </span>
          </Link>

          {/* Desktop CALL NOW button */}
          <div className="hidden md:flex items-center">
            <Link
              href="tel:+2524836239"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              CALL NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3 px-4">
              <Link
                href="tel:+2524836239"
                className="block text-center bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold text-lg mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                CALL NOW
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
