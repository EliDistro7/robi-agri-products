'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Wheat, 
  Users, 
  Truck, 
  Award, 
  MessageCircle, 
  Beef,
  Globe,
  TrendingUp,
  Shield,
  Clock,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  const products = [
    {
      icon: Wheat,
      title: 'Premium Agricultural Products',
      description: 'High-quality maize, beans, and ginger sourced from the finest farms in Tanzania',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: ['Premium Maize', 'Quality Beans', 'Fresh Ginger']
    },
    {
      icon: Beef,
      title: 'Premium Livestock',
      description: 'Healthy goats, sheep, and cattle for local and international markets',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: ['Healthy Goats', 'Quality Sheep', 'Prime Cattle']
    },
    {
      icon: Globe,
      title: 'International Supply',
      description: 'Reliable supply chain to Dubai, Oman, Qatar, and beef processing facilities',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=600',
      items: ['Dubai Export', 'Oman Trade', 'Qatar Supply']
    },
  ];

  const stats = [
    { icon: Award, value: '15+', label: 'Years of Excellence', color: 'text-forest-600' },
    { icon: Globe, value: '500+', label: 'International Shipments', color: 'text-earth-600' },
    { icon: Users, value: '200+', label: 'Satisfied Partners', color: 'text-forest-600' },
    { icon: TrendingUp, value: '50+', label: 'Growth Rate %', color: 'text-earth-600' },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Certified products meeting international standards'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable supply chain with on-time delivery guarantee'
    },
    {
      icon: MapPin,
      title: 'Global Reach',
      description: 'Serving Tanzania and expanding to Middle East markets'
    },
  ];

  return (
    <div className="min-h-screen font-body">
      {/* Enhanced Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/services.mp4" type="video/mp4" />
          {/* Fallback background if video fails to load */}
          Your browser does not support the video tag.
        </video>

        {/* Fallback Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'linear-gradient(135deg, rgba(46, 125, 50, 0.8), rgba(166, 124, 90, 0.8)), url(https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            display: 'none' // This will show if video fails
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/70 via-forest-800/50 to-earth-900/70 z-10" />
        
        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="max-w-5xl mx-auto">
            {/* Company Badge */}
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Globe className="w-5 h-5 mr-2" />
              <span className="font-heading font-semibold">Tanzania • Dubai • Oman • Qatar</span>
            </div>
            
            <h1 className="font-heading font-extra-bold text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="block text-white">RobiAgri</span>
              <span className="block bg-gradient-to-r from-earth-300 to-earth-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            
            <p className="font-subheading text-xl sm:text-2xl lg:text-3xl mb-6 text-gray-100 leading-relaxed">
              Agricultural Products • Livestock • International Supply
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Wheat className="w-8 h-8 text-earth-300 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg mb-2">Agricultural Products</h3>
                <p className="text-sm text-gray-200">Premium Maize, Beans & Ginger</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Beef className="w-8 h-8 text-earth-300 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg mb-2">Quality Livestock</h3>
                <p className="text-sm text-gray-200">Goats, Sheep & Cattle Supply</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Truck className="w-8 h-8 text-earth-300 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg mb-2">Beef Factories</h3>
                <p className="text-sm text-gray-200">Livestock for Processing Plants</p>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for premium agricultural products and livestock supply from Tanzania to Middle East markets and beef processing facilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-earth-500 to-earth-600 hover:from-earth-600 hover:to-earth-700 text-white font-heading font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Request Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-heading font-semibold px-8 py-4 rounded-full"
              >
                <Link href="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-b from-forest-50 to-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-gray-900 mb-4">
              Trusted by Partners Worldwide
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-forest-500 to-earth-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-forest-100 to-earth-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    <stat.icon className={`h-12 w-12 ${stat.color} mx-auto mb-4`} />
                    <div className="text-4xl font-heading font-extra-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="font-subheading text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading font-extra-bold text-4xl sm:text-5xl text-gray-900 mb-6">
              Our Premium Products
            </h2>
            <p className="font-subheading text-xl text-gray-600 max-w-3xl mx-auto">
              From farm to global markets, we deliver excellence in every shipment
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-forest-500 to-earth-500 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <product.icon className="h-6 w-6 text-forest-600" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading font-bold text-2xl text-gray-900 group-hover:text-forest-600 transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {product.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-forest-500 rounded-full mr-3"></div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-forest-600 to-forest-700 hover:from-forest-700 hover:to-forest-800 text-white font-heading font-semibold rounded-xl">
                    <Link href="/products" className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-forest-600 via-forest-700 to-earth-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Why Choose RobiAgriProducts?
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-colors">
                  <feature.icon className="h-16 w-16 text-earth-300 mx-auto mb-6" />
                  <h3 className="font-heading font-bold text-xl mb-4">{feature.title}</h3>
                  <p className="font-body text-gray-100 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-earth-800 via-earth-700 to-forest-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:50px_50px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-extra-bold text-4xl sm:text-5xl mb-8 leading-tight">
              Ready to Partner with Tanzania's 
              <span className="block text-earth-300">Premier Agricultural Supplier?</span>
            </h2>
            
            <p className="font-subheading text-xl sm:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Join our network of international partners and access premium agricultural products and livestock from Tanzania to global markets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-forest-700 hover:bg-gray-100 font-heading font-bold px-10 py-5 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/contact" className="flex items-center">
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-heading font-semibold px-10 py-5 rounded-full"
              >
                <Link href="/about">
                  Learn Our Story
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}