'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Target, Eye, Heart, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const team = [
    {
      name: 'Robert Mwangi',
      position: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
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
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Committed to environmentally responsible farming practices.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Empowering local farmers and communities through knowledge sharing.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Embracing modern technology to improve agricultural productivity.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('about')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Robi Agri Products & Livestock Production has been at the forefront of Tanzania's agricultural revolution, providing sustainable solutions and quality livestock breeding services since 2008.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our farm"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded with a vision to transform Tanzania's agricultural landscape, Robi Agri Products began as a small family farm and has grown into one of the region's most trusted agricultural companies. Our commitment to sustainable farming practices and community empowerment has driven our success over the years.
            </p>
            <p className="text-gray-600">
              Today, we serve over 200 clients across Tanzania, providing comprehensive agricultural solutions, premium livestock breeding services, and expert consultancy to help farmers maximize their productivity while maintaining environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide innovative agricultural solutions and quality livestock breeding services that enhance food security and improve livelihoods across Tanzania.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Eye className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be East Africa's leading agricultural and livestock production company, known for excellence, sustainability, and community empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Excellence, sustainability, community focus, and innovation guide everything we do in our commitment to agricultural development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <value.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals who lead our agricultural and livestock operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-emerald-600 font-medium">{member.position}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Based in Dar es Salaam, Tanzania, we serve clients across the East African region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-start mb-6">
                <MapPin className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Head Office</h3>
                  <p className="text-gray-600 mb-2">Dar es Salaam, Tanzania</p>
                  <p className="text-gray-600">
                    Our main facility houses our administrative offices, research center, and livestock breeding operations.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Facility Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Modern livestock breeding facilities</li>
                  <li>• Agricultural research center</li>
                  <li>• Equipment storage and maintenance</li>
                  <li>• Training and consultation rooms</li>
                  <li>• Quality control laboratory</li>
                </ul>
              </div>
            </div>
            
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="h-16 w-16 mx-auto mb-4" />
                <p>Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}