'use client';

import React, { useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog as Cow, Wheat, Wrench, Users, Stethoscope, Truck, Beaker, Scaling as Seedling, ArrowRight, Star } from 'lucide-react';

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

  const livestockServices = [
    {
      icon: Cow,
      title: 'Premium Cattle Breeding & Sales',
      description: 'Expertly bred Holstein Friesian and Angus cattle with superior genetics for maximum milk production and quality beef. Each animal comes with comprehensive health records and breeding documentation.',
      features: ['Holstein Friesian dairy cattle', 'Premium Angus beef cattle', 'Complete health certificates', 'Genetic lineage records'],
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Premium',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Seedling,
      title: 'Scientific Animal Nutrition',
      description: 'Scientifically formulated feeds tailored to your livestock needs. Our nutrition experts create custom feeding programs to optimize growth, milk production, and overall animal health.',
      features: ['High-protein dairy feed mixes', 'Growth-optimized beef supplements', 'Specialized calf starter nutrition', 'Essential mineral complexes'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Custom',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Stethoscope,
      title: 'Professional Veterinary Care',
      description: 'Round-the-clock veterinary services with certified professionals. From preventive care to emergency treatment, we ensure your livestock stays healthy and productive.',
      features: ['24/7 emergency response', 'Comprehensive vaccination programs', 'Advanced disease diagnostics', 'Surgical intervention services'],
      image: 'https://images.pexels.com/photos/7658355/pexels-photo-7658355.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: '24/7',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Expert Breeding Consultancy',
      description: 'Transform your operation with our genetic expertise and breeding programs. Our consultants help you select the right breeding stock and implement profitable breeding strategies.',
      features: ['Genetic evaluation programs', 'Breeding strategy development', 'Herd performance analytics', 'Profitability optimization'],
      image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Expert',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  const agriculturalServices = [
    {
      icon: Wheat,
      title: 'Precision Crop Production',
      description: 'Advanced crop management from seed to harvest using modern precision agriculture techniques. Maximize your yields while minimizing input costs and environmental impact.',
      features: ['GPS-guided land preparation', 'Precision planting systems', 'Drone crop monitoring', 'Automated harvest solutions'],
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'High-Tech',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Wrench,
      title: 'Modern Farm Equipment',
      description: 'Access to cutting-edge agricultural machinery through our sales and rental programs. From compact tractors to large-scale harvesters, we have the right equipment for every operation.',
      features: ['Latest model tractors', 'Smart irrigation systems', 'Efficient harvesting equipment', 'Professional maintenance service'],
      image: 'https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Latest',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Beaker,
      title: 'Advanced Soil Analytics',
      description: 'Comprehensive soil testing and analysis using state-of-the-art laboratory equipment. Get detailed insights into your soil health and receive customized fertilization recommendations.',
      features: ['Complete nutrient analysis', 'Soil health assessment', 'pH and salinity testing', 'Custom fertilizer blending'],
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Scientific',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Truck,
      title: 'Premium Input Supply',
      description: 'Direct farm delivery of premium agricultural inputs including certified seeds, organic fertilizers, and crop protection products. Competitive pricing with reliable supply chains.',
      features: ['Certified hybrid seeds', 'Organic fertilizer blends', 'Integrated pest management', 'Same-day delivery service'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=600',
      badge: 'Premium',
      color: 'from-indigo-500 to-indigo-600'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Video */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          loop
          playsInline
        >
          <source src="/ships.mp4" type="video/mp4" />
        </video>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300 text-sm font-medium">
              <Star className="w-4 h-4 mr-2" />
              Premium Agricultural Solutions
            </span>
          </div>
          <h1 className="font-heading text-5xl sm:text-7xl font-extra-bold mb-8 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Agricultural Success
            </span>
          </h1>
          <p className="font-body text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-12">
            From premium livestock breeding to precision crop production, we provide cutting-edge solutions 
            that maximize your farming potential and profitability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold">
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Livestock Services */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              <Cow className="w-4 h-4 mr-2" />
              Livestock Excellence
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Premium Livestock Services
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional breeding programs and comprehensive livestock management solutions 
              designed to maximize your cattle operation's success and profitability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {livestockServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white">
                <div className="relative">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold uppercase tracking-wide shadow-lg`}>
                    {service.badge}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 shadow-sm`}></div>
                        <span className="font-body text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Agricultural Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              <Wheat className="w-4 h-4 mr-2" />
              Agricultural Innovation
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Modern Agricultural Solutions
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge agricultural services and equipment designed to enhance your crop production 
              efficiency while maximizing yields and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {agriculturalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden bg-white">
                <div className="relative">
                  <div className="relative h-56 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-white text-xs font-bold uppercase tracking-wide shadow-lg`}>
                    {service.badge}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg`}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-body text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 shadow-sm`}></div>
                        <span className="font-body text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 text-white font-semibold py-3`}>
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'url("data:image/svg+xml,%3csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3e%3cg fill="none" fill-rule="evenodd"%3e%3cg fill="white" fill-opacity="0.1"%3e%3ccircle cx="30" cy="30" r="2"/%3e%3c/g%3e%3c/g%3e%3c/svg%3e")'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              Ready to Revolutionize 
              <span className="block text-emerald-300">Your Farming Operation?</span>
            </h2>
            <p className="font-body text-xl mb-12 text-emerald-100 leading-relaxed">
              Our team of agricultural experts is ready to design personalized solutions 
              that perfectly match your farming goals, budget, and operational requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-100 hover:bg-emerald-600 font-semibold px-8 py-4 text-lg backdrop-blur-sm">
                Download Service Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}