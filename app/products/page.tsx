'use client';

import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Wheat, 
  Beef, 
  Globe, 
  Truck, 
  Package,
  Ship,
  ArrowRight, 
  Star,
  MapPin,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

export default function ProductsPage() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;

    if (!video || !hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  const agriculturalProducts = [
    {
      icon: Wheat,
      title: 'Premium Maize Supply',
      description: 'High-quality maize sourced from the finest farms across Tanzania. Our maize meets international export standards and is perfect for both human consumption and animal feed.',
      features: ['Grade A quality maize', 'Moisture content optimized', 'Aflatoxin tested & certified', 'Bulk packaging available'],
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Export Quality',
      color: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Package,
      title: 'Quality Beans',
      description: 'Premium kidney beans, black beans, and navy beans carefully selected and processed to meet international quality standards for export to Middle East markets.',
      features: ['Multiple bean varieties', 'Carefully sorted & cleaned', 'Export certification included', 'Competitive bulk pricing'],
      image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Premium',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Wheat,
      title: 'Fresh Ginger Supply',
      description: 'Fresh, aromatic ginger harvested from organic farms. Our ginger is known for its high quality, strong flavor, and excellent shelf life for international shipping.',
      features: ['Organic certified ginger', 'High gingerol content', 'Extended shelf life', 'Temperature controlled shipping'],
      image: 'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Organic',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const livestockServices = [
    {
      icon: Beef,
      title: 'Premium Goats',
      description: 'Healthy, well-bred goats suitable for meat production and breeding. All our goats are veterinary checked and come with complete health documentation.',
      features: ['Boer & Kalahari Red breeds', 'Veterinary health certificates', 'Breeding age animals available', 'Quarantine facility available'],
      image: 'https://images.pexels.com/photos/62321/kitten-cat-fluffy-gray-62321.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Healthy Stock',
      color: 'from-blue-500 to-indigo-600',
      destinations: ['Dubai', 'Oman', 'Qatar', 'Local Markets']
    },
    {
      icon: Beef,
      title: 'Quality Sheep',
      description: 'Prime sheep breeds ideal for meat production and export. Our sheep are grass-fed and raised in optimal conditions to ensure the highest quality.',
      features: ['Dorper & Blackhead Persian', 'Grass-fed & free-range', 'Export documentation ready', 'Live weight guarantee'],
      image: 'https://images.pexels.com/photos/2743549/pexels-photo-2743549.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Prime Quality',
      color: 'from-purple-500 to-pink-600',
      destinations: ['Dubai', 'Oman', 'Qatar', 'Beef Factories']
    },
    {
      icon: Beef,
      title: 'Premium Cattle',
      description: 'Top-grade cattle for beef production and export. Our cattle are raised using modern farming techniques and are perfect for both live export and beef processing.',
      features: ['Angus & Boran breeds', 'Modern farming techniques', 'Export quality standards', 'Traceability documentation'],
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Export Ready',
      color: 'from-red-500 to-red-700',
      destinations: ['Dubai', 'Oman', 'Qatar', 'Beef Processing Plants']
    }
  ];

  const exportDestinations = [
    {
      country: 'Dubai, UAE',
      flag: '🇦🇪',
      description: 'Regular shipments of livestock and agricultural products to Dubai markets',
      speciality: 'Live livestock & premium agricultural products'
    },
    {
      country: 'Oman',
      flag: '🇴🇲', 
      description: 'Quality cattle, goats, and sheep supply to Omani importers',
      speciality: 'Premium livestock for meat production'
    },
    {
      country: 'Qatar',
      flag: '🇶🇦',
      description: 'Export partner for high-quality agricultural and livestock products',
      speciality: 'Bulk agricultural products & live animals'
    }
  ];

  return (
    <div className="min-h-screen font-body">
      {/* Enhanced Hero Section with Video */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/ships.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-earth-600/20 backdrop-blur-sm border border-earth-400/30 text-earth-300 text-lg font-heading font-semibold">
              <Globe className="w-5 h-5 mr-3" />
              Tanzania • Dubai • Oman • Qatar
            </span>
          </div>
          <h1 className="font-heading text-6xl sm:text-8xl font-extra-bold mb-8 leading-tight">
            Premium
            <span className="block bg-gradient-to-r from-earth-300 to-earth-400 bg-clip-text text-transparent">
              Agricultural Products
            </span>
            <span className="block text-4xl sm:text-5xl text-forest-300 mt-4">
              & Quality Livestock
            </span>
          </h1>
          <p className="font-subheading text-2xl sm:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
            From Tanzania's finest farms to international markets - your trusted partner for 
            maize, beans, ginger, and premium livestock supply.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-earth-500 to-earth-600 hover:from-earth-600 hover:to-earth-700 text-white px-10 py-5 text-xl font-heading font-bold rounded-full shadow-2xl">
              View Our Products
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-xl font-heading font-semibold backdrop-blur-sm rounded-full">
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Agricultural Products Section */}
      <section className="py-24 bg-gradient-to-b from-white to-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-earth-100 text-earth-700 text-lg font-heading font-semibold mb-6">
              <Wheat className="w-5 h-5 mr-3" />
              Agricultural Products
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-gray-900 mb-8">
              Premium Agricultural Supply
            </h2>
            <p className="font-subheading text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              High-quality agricultural products sourced from Tanzania's finest farms, 
              meeting international export standards for global markets.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-earth-500 to-earth-600 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {agriculturalProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-white">
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${product.color} text-white text-sm font-heading font-bold uppercase tracking-wider shadow-xl`}>
                    {product.badge}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.color} shadow-xl`}>
                      <product.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-3xl font-bold text-gray-900 mb-4 group-hover:text-earth-600 transition-colors duration-300">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600 text-lg leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className={`w-5 h-5 text-green-500 mr-4 flex-shrink-0`} />
                        <span className="font-body text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${product.color} hover:shadow-xl transition-all duration-300 text-white font-heading font-bold py-4 text-lg rounded-xl`}>
                    Get Quote
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Livestock Services Section */}
      <section className="py-24 bg-gradient-to-b from-forest-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-forest-100 text-forest-700 text-lg font-heading font-semibold mb-6">
              <Beef className="w-5 h-5 mr-3" />
              Premium Livestock
            </div>
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-gray-900 mb-8">
              Quality Livestock Supply
            </h2>
            <p className="font-subheading text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Healthy, well-bred livestock for international export and local beef processing facilities. 
              All animals come with complete health documentation and certifications.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-forest-500 to-forest-600 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {livestockServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 overflow-hidden bg-white">
                <div className="relative">
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>
                  <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-gradient-to-r ${service.color} text-white text-sm font-heading font-bold uppercase tracking-wider shadow-xl`}>
                    {service.badge}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-xl`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-3xl font-bold text-gray-900 mb-4 group-hover:text-forest-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  
                  {/* Destinations */}
                  <div className="mb-4">
                    <h4 className="font-heading font-semibold text-gray-800 mb-3">Supply Destinations:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.destinations.map((dest, idx) => (
                        <span key={idx} className="px-3 py-1 bg-forest-100 text-forest-700 text-sm font-medium rounded-full">
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-4 flex-shrink-0" />
                        <span className="font-body text-gray-700 font-medium text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-xl transition-all duration-300 text-white font-heading font-bold py-4 text-lg rounded-xl`}>
                    Request Quote
                    <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Export Destinations Section */}
      <section className="py-24 bg-gradient-to-r from-forest-600 via-forest-700 to-earth-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-white mb-8">
              Our Export Markets
            </h2>
            <p className="font-subheading text-2xl text-forest-100 max-w-4xl mx-auto leading-relaxed">
              Trusted partnerships across the Middle East, delivering quality products to international markets.
            </p>
            <div className="w-32 h-1 bg-white/30 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exportDestinations.map((destination, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center text-white border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-6xl mb-6">{destination.flag}</div>
                <h3 className="font-heading font-bold text-2xl mb-4">{destination.country}</h3>
                <p className="font-body text-forest-100 mb-6 leading-relaxed">{destination.description}</p>
                <div className="inline-flex items-center px-4 py-2 bg-earth-500/30 rounded-full text-earth-200 text-sm font-medium">
                  <Ship className="w-4 h-4 mr-2" />
                  {destination.speciality}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-earth-800 via-earth-700 to-forest-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3e%3cg fill="none" fill-rule="evenodd"%3e%3cg fill="white" fill-opacity="0.1"%3e%3ccircle cx="30" cy="30" r="2"/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold mb-8 leading-tight">
              Ready to Partner with
              <span className="block text-earth-300">RobiAgriProducts?</span>
            </h2>
            <p className="font-subheading text-2xl mb-12 text-earth-100 leading-relaxed">
              Join our network of international partners and access premium agricultural products 
              and livestock from Tanzania. Get competitive pricing and reliable supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-forest-700 hover:bg-earth-50 font-heading font-bold px-10 py-5 text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-full">
                <MessageCircle className="w-6 h-6 mr-3" />
                Contact Us Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-earth-300/50 text-earth-100 hover:bg-earth-600/20 font-heading font-bold px-10 py-5 text-xl backdrop-blur-sm rounded-full">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}