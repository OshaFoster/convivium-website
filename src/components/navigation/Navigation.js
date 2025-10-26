'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from '@/components/Logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Music', href: '/music' },
    { name: 'Elements', href: '/elements' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Resources', href: '/resources' },
    { name: 'Blog', href: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-sm transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal border-charcoal-border'
          : 'border-warm-tan'
      }`}
      style={!isScrolled ? { backgroundColor: 'rgba(250, 248, 244, 0.95)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Site Name */}
          <Link href="/" className="flex items-center gap-3">
            <Logo className="w-12 h-12" />
            <span
              className={`text-3xl transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-neutral-900'
              }`}
              style={{ fontFamily: 'var(--font-oooh-baby)' }}
            >
              Pachamama Convivium
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-sky-400 transition-colors duration-200 font-light ${
                  isScrolled ? 'text-neutral-300' : 'text-neutral-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'hover:bg-charcoal-border' : 'hover:bg-neutral-100'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-white' : 'text-neutral-600'
              }`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden border-t transition-colors ${
          isScrolled
            ? 'border-charcoal-border bg-charcoal'
            : 'border-warm-tan bg-warm-cream'
        }`}>
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 hover:text-sky-400 transition-colors duration-200 font-light ${
                  isScrolled ? 'text-neutral-300' : 'text-neutral-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
