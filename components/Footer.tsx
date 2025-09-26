'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Leaf, Phone, Mail, MapPin, MessageCircle, Instagram, 
  ExternalLink, Award, FileText, Shield, CheckCircle2
} from 'lucide-react';
import PDFRenderer from "@/components/features/PdfRenderer";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-900 via-earth-800 to-forest-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-forest-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-forest-400 to-forest-600 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="ml-4">
                <span className="text-2xl font-heading font-extra-bold text-white">Robi Agri</span>
                <div className="text-forest-200 font-subheading text-sm">Products & Livestock</div>
              </div>
            </div>
            
            <p className="text-earth-200 font-body mb-8 leading-relaxed max-w-md">
              {t('companyInfo')}
            </p>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-white font-heading font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
                <div className="space-y-3">
                  <div className="flex items-center group">
                    <Phone className="h-4 w-4 text-forest-300 mr-3 flex-shrink-0" />
                    <span className="text-earth-200 font-body text-sm">+255 696 781 179</span>
                  </div>
                  <div className="flex items-center group">
                    <Mail className="h-4 w-4 text-forest-300 mr-3 flex-shrink-0" />
                    <span className="text-earth-200 font-body text-sm">info@robiagri.com</span>
                  </div>
                  <div className="flex items-start group">
                    <MapPin className="h-4 w-4 text-forest-300 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-earth-200 font-body text-sm">Dar es Salaam, Tanzania</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-white font-heading font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
                <div className="space-y-2">
                  <Link href="/about" className="block text-earth-200 hover:text-forest-300 transition-colors duration-200 font-body text-sm hover:translate-x-1 transform transition-transform">{t('about')}</Link>
                  <Link href="/products" className="block text-earth-200 hover:text-forest-300 transition-colors duration-200 font-body text-sm hover:translate-x-1 transform transition-transform">{t('products')}</Link>
                  <Link href="/gallery" className="block text-earth-200 hover:text-forest-300 transition-colors duration-200 font-body text-sm hover:translate-x-1 transform transition-transform">{t('gallery')}</Link>
                  <Link href="/licenses" className="block text-earth-200 hover:text-forest-300 transition-colors duration-200 font-body text-sm hover:translate-x-1 transform transition-transform">Licenses</Link>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a 
                href="https://instagram.com/robiagriproducts_livestockprod" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-earth-700/30 hover:bg-forest-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-earth-600/30 hover:border-forest-500"
              >
                <Instagram className="h-4 w-4 text-earth-300 hover:text-white" />
              </a>
              <a 
                href="https://wa.me/255696781179" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-earth-700/30 hover:bg-forest-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border border-earth-600/30 hover:border-forest-500"
              >
                <MessageCircle className="h-4 w-4 text-earth-300 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Certificate Section - Redesigned */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-forest-400 to-forest-600 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white">Official License</h3>
                    <p className="text-forest-200 text-sm font-body">Government Certified</p>
                  </div>
                </div>
                <Link 
                  href="/licenses"
                  className="flex items-center space-x-2 px-3 py-1.5 bg-forest-600/20 hover:bg-forest-600/30 border border-forest-500/30 hover:border-forest-400/50 rounded-lg text-forest-200 hover:text-forest-100 transition-all text-sm font-body group"
                >
                  <span>View All</span>
                  <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              
              {/* PDF Viewer Container */}
              <div className="mb-4 rounded-lg overflow-hidden border border-white/10">
                <PDFRenderer 
                  pdfUrl="/TIN.pdf"
                  fileName="Governement Permit"
                  className="h-90"
                />
              </div>
              
              {/* Certificate Info */}
              <div className="bg-forest-700/20 rounded-xl p-4 border border-forest-600/20">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-forest-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-forest-100 font-subheading font-semibold text-sm mb-1">
                      NAFAKA Trading Permit
                    </h4>
                    <p className="text-earth-200 font-body text-xs leading-relaxed">
                      Official authorization to trade in cereals and agricultural products throughout Tanzania.
                    </p>
                    <div className="flex items-center space-x-4 mt-3 text-xs">
                      <span className="text-forest-200 font-mono">TBS/2024/001</span>
                      <span className="w-1 h-1 bg-earth-400 rounded-full"></span>
                      <span className="text-forest-200">Valid 2024-2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earth-700/30 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
              <p className="text-earth-300 font-body text-sm">
                © {new Date().getFullYear()} Robi Agri Products & Livestock Production.
              </p>
              <span className="text-earth-400 font-body text-sm">{t('rights')}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-forest-300" />
                <span className="font-body text-xs text-forest-200">Licensed & Verified</span>
              </div>
              <div className="w-px h-4 bg-earth-600"></div>
              <Link 
                href="/licenses" 
                className="flex items-center space-x-2 px-3 py-1.5 bg-earth-800/30 hover:bg-earth-700/40 rounded-md transition-colors text-xs font-body text-earth-200 hover:text-earth-100 border border-earth-700/30 hover:border-earth-600/50"
              >
                <FileText className="h-3 w-3" />
                <span>All Certificates</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}