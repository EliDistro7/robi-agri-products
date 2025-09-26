'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('products'), href: '/products' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('news'), href: '/news' },
    { name: t('contact'), href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              {/* Replace with actual logo when available */}
              <div className="relative w-12 h-12 mr-3 rounded-xl overflow-hidden bg-gradient-to-br from-forest-500 to-forest-700 flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                {/* Placeholder for logo image */}
                <Image
                  src="/logo.jpg" // Replace with your actual logo path
                  alt="Robi Agri Products Logo"
                  width={48}
                  height={48}
                  className="rounded-xl object-contain"
                  priority
                  onError={(e) => {
                    // Fallback to icon if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <Leaf className="h-7 w-7 text-white hidden" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-forest-800 group-hover:text-forest-600 transition-colors duration-200">
                  Robi Agri Products
                </span>
                <span className="text-xs text-forest-500 font-medium tracking-wide">
                  Quality Agricultural Solutions
                </span>
              </div>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-gray-600" />
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as 'en' | 'sw')}
                className="text-sm border-none bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="sw">SW</option>
              </select>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-900 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center px-3 py-2 space-x-2">
                <Globe className="h-4 w-4 text-gray-600" />
                <select
                  value={locale}
                  onChange={(e) => setLocale(e.target.value as 'en' | 'sw')}
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="en">English</option>
                  <option value="sw">Kiswahili</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}