'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-xl font-bold">Robi Agri Products</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {t('companyInfo')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/robiagriproducts_livestockprod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/255696781179" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">{t('about')}</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">{t('products')}</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">{t('gallery')}</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-emerald-400 transition-colors duration-200">{t('news')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contactTitle')}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-300">+255 696 781 179</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-gray-300">info@robiagri.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-1" />
                <span className="text-gray-300">Dar es Salaam, Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Robi Agri Products & Livestock Production. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}