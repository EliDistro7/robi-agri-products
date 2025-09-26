'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Target, Eye, Heart, Users, MapPin, Leaf, Shield, Zap, Globe } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Andrew Robinson Andrea',
      position: 'Founder & CEO',
      image: '/ceo.png',
      description: 'Over 20 years of experience in agricultural development and livestock management.',
    },
    {
      name: 'Sarah Kilimo',
      position: 'Head of Livestock',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Expert in cattle breeding and animal nutrition with 15 years of experience.',
    },
    {
      name: 'John Mkulima',
      position: 'Agricultural Consultant',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Specialized in sustainable farming practices and crop management.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in all our products and services.',
      color: 'text-forest-600',
      bgColor: 'bg-forest-50',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible farming practices.',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Empowering local farmers and communities through knowledge sharing.',
      color: 'text-earth-600',
      bgColor: 'bg-earth-50',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Embracing modern technology to improve agricultural productivity.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
  ];

  const stats = [
    { number: '200+', label: 'Clients Served', icon: Users },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '50+', label: 'Team Members', icon: Heart },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Bold Design */}
      <section className="relative bg-gradient-to-br from-forest-900 via-forest-800 to-emerald-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Leaf className="absolute top-20 left-10 h-8 w-8 text-white/10 rotate-12" />
          <Target className="absolute top-40 right-20 h-6 w-6 text-white/10 -rotate-12" />
          <Users className="absolute bottom-32 left-32 h-10 w-10 text-white/10 rotate-45" />
          <Zap className="absolute bottom-20 right-10 h-7 w-7 text-white/10 -rotate-45" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extra-bold text-white mb-8 tracking-tight">
              <span className="brand-text">{t('about')}</span>
            </h1>
            <p className="font-subheading text-xl sm:text-2xl text-forest-100 max-w-4xl mx-auto leading-relaxed font-medium">
              Robi Agri Products & Livestock Production has been at the forefront of Tanzania's agricultural revolution, providing <strong className="text-emerald-300">sustainable solutions</strong> and quality livestock breeding services since 2008.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                  <stat.icon className="h-8 w-8 text-emerald-400 mx-auto mb-4" />
                  <div className="font-heading text-3xl font-extra-bold text-white mb-2">{stat.number}</div>
                  <div className="font-subheading text-forest-200 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our farm"
                  className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="font-heading text-2xl font-bold">Est. 2008</div>
                  <div className="font-subheading text-emerald-100">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-5xl font-extra-bold text-gray-900 mb-8 leading-tight">
                Our <span className="text-emerald-600">Story</span>
              </h2>
              <div className="space-y-6">
                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Founded with a <strong className="brand-subtext text-forest-700">vision to transform Tanzania's agricultural landscape</strong>, Robi Agri Products began as a small family farm and has grown into one of the region's most trusted agricultural companies.
                </p>
                <p className="font-body text-lg text-gray-700 leading-relaxed">
                  Our commitment to <strong className="brand-subtext text-emerald-700">sustainable farming practices</strong> and community empowerment has driven our success over the years, serving over 200 clients across Tanzania.
                </p>
              </div>
              <div className="mt-10 p-6 bg-gradient-to-r from-emerald-50 to-forest-50 rounded-2xl border-l-4 border-emerald-500">
                <h3 className="font-subheading text-xl font-semibold text-gray-900 mb-3">Today's Impact</h3>
                <p className="font-body text-gray-700">
                  We provide comprehensive agricultural solutions, premium livestock breeding services, and expert consultancy to help farmers maximize productivity while maintaining environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-forest-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Heart className="absolute top-16 left-16 h-12 w-12 text-white/5 rotate-12" />
          <Award className="absolute top-32 right-24 h-8 w-8 text-white/5 -rotate-12" />
          <MapPin className="absolute bottom-40 left-20 h-10 w-10 text-white/5 rotate-45" />
          <Globe className="absolute bottom-24 right-32 h-14 w-14 text-white/5 -rotate-45" />
          <Shield className="absolute top-64 left-1/2 h-6 w-6 text-white/5 rotate-12" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-white mb-6">
              Our <span className="text-emerald-400">Foundation</span>
            </h2>
            <p className="font-subheading text-xl text-forest-200 max-w-3xl mx-auto">
              Built on strong principles that guide our every decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Target className="h-16 w-16 text-emerald-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="card-title text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-forest-100 text-center leading-relaxed">
                  To provide <strong className="text-emerald-300">innovative agricultural solutions</strong> and quality livestock breeding services that enhance food security and improve livelihoods across Tanzania.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Eye className="h-16 w-16 text-emerald-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="card-title text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-forest-100 text-center leading-relaxed">
                  To be <strong className="text-emerald-300">East Africa's leading</strong> agricultural and livestock production company, known for excellence, sustainability, and community empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <Heart className="h-16 w-16 text-emerald-400 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="card-title text-2xl text-white">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-forest-100 text-center leading-relaxed">
                  <strong className="text-emerald-300">Excellence, sustainability, community focus, and innovation</strong> guide everything we do in our commitment to agricultural development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
                <h3 className="font-subheading text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="font-body text-forest-200 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Leadership</span> Team
            </h2>
            <p className="font-subheading text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals who lead our agricultural and livestock operations with passion and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2">
                <CardHeader className="text-center pb-6">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-forest-600 rounded-full p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="card-title text-2xl text-gray-900">{member.name}</CardTitle>
                  <p className="brand-subtext text-emerald-600 font-semibold text-lg">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-gray-600 text-center leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-gradient-to-br from-earth-50 to-forest-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Location</span>
            </h2>
            <p className="font-subheading text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Based in <strong className="text-forest-700">Dar es Salaam, Tanzania</strong>, we serve clients across the East African region with pride and dedication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start mb-10 group">
                <div className="bg-emerald-600 p-3 rounded-2xl mr-6 group-hover:bg-emerald-700 transition-colors">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="font-subheading text-2xl font-semibold text-gray-900 mb-3">Head Office</h3>
                  <p className="brand-subtext text-emerald-600 font-semibold text-lg mb-4">Dar es Salaam, Tanzania</p>
                  <p className="font-body text-gray-700 leading-relaxed">
                    Our main facility houses our administrative offices, research center, and livestock breeding operations in the heart of Tanzania's economic capital.
                  </p>
                </div>
              </div>
              
              <Card className="bg-gradient-to-br from-white to-emerald-50 border-emerald-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="card-title text-2xl text-gray-900 flex items-center">
                    <Shield className="h-6 w-6 text-emerald-600 mr-3" />
                    Facility Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Modern livestock breeding facilities',
                      'Agricultural research center',
                      'Equipment storage and maintenance',
                      'Training and consultation rooms',
                      'Quality control laboratory',
                      'Sustainable technology showcase'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3 group-hover:bg-emerald-700 transition-colors"></div>
                        <span className="font-body text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-emerald-100 to-forest-100 rounded-3xl shadow-2xl flex items-center justify-center border border-emerald-200">
                <div className="text-center text-emerald-700">
                  <Globe className="h-20 w-20 mx-auto mb-6 animate-pulse" />
                  <p className="font-subheading text-xl font-semibold">Interactive Map Coming Soon</p>
                  <p className="font-body text-emerald-600 mt-2">Experience our location in 3D</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-emerald-200">
                <div className="font-heading text-sm font-bold text-emerald-600">GPS</div>
                <div className="font-body text-xs text-gray-600">Dar es Salaam</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}