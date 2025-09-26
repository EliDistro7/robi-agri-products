'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe, Leaf, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('products'), href: '/products' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('news'), href: '/news' },
    { name: t('licenses'), href: '/licenses' },
    { name: t('contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-forest-100 sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
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
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-forest-700 hover:text-forest-600 transition-all duration-200 rounded-lg hover:bg-forest-50 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-forest-100 to-earth-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </Link>
            ))}
            
            {/* Enhanced Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-forest-700 hover:text-forest-600 hover:bg-forest-50 rounded-lg transition-all duration-200 border border-forest-200 hover:border-forest-300"
              >
                <Globe className="h-4 w-4" />
                <span className="text-lg">{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Language Dropdown */}
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-forest-100 py-2 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLocale(language.code as 'en' | 'sw');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-forest-50 transition-colors duration-150 ${
                        locale === language.code ? 'bg-forest-50 text-forest-600 font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span>{language.name}</span>
                      {locale === language.code && (
                        <div className="ml-auto w-2 h-2 bg-forest-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="ml-4 pl-4 border-l border-forest-200">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Language Switcher */}
            <button
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              className="flex items-center space-x-1 px-2 py-1 text-sm text-forest-700 hover:bg-forest-50 rounded-md transition-colors duration-200"
            >
              <span className="text-base">{currentLanguage.flag}</span>
              <span className="text-xs font-medium">{currentLanguage.code.toUpperCase()}</span>
            </button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-forest-50 rounded-lg transition-colors duration-200"
            >
              <div className="relative w-6 h-6">
                <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                  <Menu className="h-6 w-6 text-forest-700" />
                </div>
                <div className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`}>
                  <X className="h-6 w-6 text-forest-700" />
                </div>
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-forest-100 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-forest-700 hover:text-forest-600 hover:bg-forest-50 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <div className="w-2 h-2 bg-forest-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  </div>
                </Link>
              ))}
              
              {/* Mobile Language Options */}
              <div className="pt-4 border-t border-forest-100 mt-4">
                <p className="text-xs font-semibold text-forest-500 uppercase tracking-wider mb-3 px-4">
                  Language
                </p>
                <div className="space-y-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLocale(language.code as 'en' | 'sw');
                        setIsMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-base rounded-lg transition-all duration-200 ${
                        locale === language.code 
                          ? 'bg-forest-50 text-forest-600 font-medium' 
                          : 'text-forest-700 hover:bg-forest-50 hover:text-forest-600'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="flex-1 text-left">{language.name}</span>
                      {locale === language.code && (
                        <div className="w-2 h-2 bg-forest-500 rounded-full"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-forest-100 mt-4">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white py-3 rounded-lg font-medium transition-all duration-200 shadow-md">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Language Dropdown */}
        {isLanguageDropdownOpen && (
          <div className="lg:hidden absolute right-4 top-20 w-48 bg-white rounded-xl shadow-lg border border-forest-100 py-2 z-50">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => {
                  setLocale(language.code as 'en' | 'sw');
                  setIsLanguageDropdownOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-forest-50 transition-colors duration-150 ${
                  locale === language.code ? 'bg-forest-50 text-forest-600 font-medium' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {locale === language.code && (
                  <div className="ml-auto w-2 h-2 bg-forest-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Click outside to close dropdowns */}
      {(isLanguageDropdownOpen || isMenuOpen) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            setIsLanguageDropdownOpen(false);
            setIsMenuOpen(false);
          }}
        />
      )}
    </header>
  );
}