'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/MASCOTDAZESTUDIO.png" alt="Daze Studio" width={80} height={80} />
            {/* <span className="text-[#e0e0e0] text-xl font-bold">Daze Studio</span> */}
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#e0e0e0] hover:text-[#9500ff] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#e0e0e0] hover:text-[#9500ff] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-[#e0e0e0] hover:text-[#9500ff] transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-[#e0e0e0] hover:text-[#9500ff] transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-[#e0e0e0] hover:text-[#9500ff] transition-colors">
              Contact
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#e0e0e0] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-[#e0e0e0] hover:text-[#9500ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-[#e0e0e0] hover:text-[#9500ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-[#e0e0e0] hover:text-[#9500ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-[#e0e0e0] hover:text-[#9500ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-[#e0e0e0] hover:text-[#9500ff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 