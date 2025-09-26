'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Shield, Award, CheckCircle2, Download, ExternalLink, 
  Calendar, FileText, Building2, Users, Leaf, Heart,
  Star, ArrowRight, Search, Filter, ChevronDown,
  Globe, MapPin, Phone, Mail
} from 'lucide-react';
import PDFRenderer from '@/components/features/PdfRenderer';

// Certification data structure
interface Certification {
  id: string;
  title: string;
  category: 'government' | 'iso' | 'organic' | 'safety' | 'quality' | 'environmental';
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  status: 'active' | 'expired' | 'pending';
  description: string;
  pdfUrl?: string;
  verificationCode?: string;
  scope: string[];
  icon: React.ComponentType<{ className?: string }>;
  priority: number;
}

const certifications: Certification[] = [
  {
    id: 'nafaka-permit',
    title: 'CHETI CHA KIBALI CHA KUNUNUA NAFAKA ',
    category: 'government',
    issuer: 'Tanzania Bureau of Standards (TBS)',
    issueDate: '2024-01-15',
    expiryDate: '2025-01-14',
    status: 'active',
    description: 'Official government permit authorizing agricultural production and livestock operations in Tanzania.',
    pdfUrl: '/nafaka.pdf',
    verificationCode: 'TBS/AG/2024/001',
    scope: ['Agricultural Production', 'Livestock Operations', 'Food Safety Compliance'],
    icon: Shield,
    priority: 1
  },

  {
    id: 'organic-certification',
    title: 'TIN NUMBER YA BIASHARA',
    category: 'organic',
    issuer: 'Tanzania Organic Agriculture Movement (TOAM)',
    issueDate: '2023-03-10',
    expiryDate: '2024-03-09',
    status: 'active',
    description: 'Certified organic farming practices ensuring chemical-free agricultural production.',
    pdfUrl: '/TIN.pdf',
    verificationCode: 'TOAM-ORG-2023-445',
    scope: ['Organic Farming', 'Chemical-Free Production', 'Sustainable Agriculture'],
    icon: Leaf,
    priority: 3
  },
  {
    id: 'livestock-health',
    title: 'LESENI YA BIASHARA',
    category: 'safety',
    issuer: 'Ministry of Livestock and Fisheries',
    issueDate: '2023-11-05',
    expiryDate: '2024-11-04',
    status: 'active',
    description: 'Veterinary health certification ensuring livestock welfare and disease prevention standards.',
    pdfUrl: '/leseni.pdf',
    verificationCode: 'MLF-VET-2023-778',
    scope: ['Animal Welfare', 'Disease Prevention', 'Veterinary Standards'],
    icon: Heart,
    priority: 4
  },


];

const categoryColors = {
  government: 'bg-blue-50 text-blue-700 border-blue-200',
  iso: 'bg-purple-50 text-purple-700 border-purple-200',
  organic: 'bg-green-50 text-green-700 border-green-200',
  safety: 'bg-orange-50 text-orange-700 border-orange-200',
  quality: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  environmental: 'bg-teal-50 text-teal-700 border-teal-200'
};

const CertificationsPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const categories = [
    { value: 'all', label: 'All Certifications', count: certifications.length },
    { value: 'government', label: 'Government Permits', count: certifications.filter(c => c.category === 'government').length },
    { value: 'iso', label: 'ISO Standards', count: certifications.filter(c => c.category === 'iso').length },
    { value: 'organic', label: 'Organic Certifications', count: certifications.filter(c => c.category === 'organic').length },
    { value: 'safety', label: 'Safety & Health', count: certifications.filter(c => c.category === 'safety').length },
    { value: 'environmental', label: 'Environmental', count: certifications.filter(c => c.category === 'environmental').length }
  ];

  const filteredCertifications = certifications
    .filter(cert => selectedCategory === 'all' || cert.category === selectedCategory)
    .filter(cert => 
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.priority - b.priority);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-TZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 to-forest-50">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-forest-700 via-forest-600 to-forest-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Official Certifications
              <span className="block text-forest-200 text-2xl lg:text-3xl mt-2">
                & Accreditations
              </span>
            </h1>
            
            <p className="font-body text-lg lg:text-xl text-forest-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              View and download our official certifications and permits. All documents are verified and up-to-date.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{certifications.filter(c => c.status === 'active').length}</div>
                <div className="text-forest-200 text-sm">Active Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{new Set(certifications.map(c => c.issuer)).size}</div>
                <div className="text-forest-200 text-sm">Certifying Bodies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-forest-200 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2024</div>
                <div className="text-forest-200 text-sm">Latest Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-earth-400" />
                <input
                  type="text"
                  placeholder="Search certifications or issuers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-earth-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {filteredCertifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-earth-100"
              >
             

                {/* Certificate Content */}
                <div className="p-4">
               

                  {/* PDF Preview */}
                  {cert.pdfUrl && (
                    <div className="mb-4">
                      <PDFRenderer
                        pdfUrl={cert.pdfUrl}
                        fileName={cert.title}
                        className="h-96 w-full rounded-lg border border-earth-200"
                      />
                    </div>
                  )}

                  {/* Download Action */}
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      download
                      className="w-full bg-forest-600 hover:bg-forest-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download Certificate
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-earth-400 mx-auto mb-4" />
            <h3 className="font-heading text-xl text-earth-600 mb-2">No certifications found</h3>
            <p className="text-earth-500">Try adjusting your search terms or filter selection.</p>
          </div>
        )}
      </section>

      {/* PDF Viewer Modal - Removed since PDFs are now inline */}

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-forest-700 to-forest-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6">Need Verification?</h2>
            <p className="font-body text-forest-100 mb-8">
              Contact us for certificate verification or additional documentation requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-forest-700 hover:bg-earth-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </Link>
              <a
                href="tel:+255123456789"
                className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Verification
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;