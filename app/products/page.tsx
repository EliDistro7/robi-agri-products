'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cog as Cow, Wheat, Wrench, Users, Stethoscope, Truck, Beaker, Scaling as Seedling } from 'lucide-react';

export default function ProductsPage() {
  const { t } = useLanguage();

  const livestockServices = [
    {
      icon: Cow,
      title: 'Cattle Breeding & Sales',
      description: 'Premium cattle breeding with focus on high-yield dairy and beef cattle. We provide healthy, well-maintained livestock for both small and large-scale farmers.',
      features: ['Holstein Friesian cattle', 'Angus beef cattle', 'Health certificates', 'Breeding records'],
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Seedling,
      title: 'Animal Feed & Nutrition',
      description: 'High-quality animal feeds formulated for optimal nutrition and growth. Custom feed solutions based on livestock needs and budget requirements.',
      features: ['Dairy cow feed', 'Beef cattle supplements', 'Calf starter feeds', 'Mineral supplements'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Stethoscope,
      title: 'Veterinary Services',
      description: 'Comprehensive veterinary care including health check-ups, vaccinations, and treatment of livestock diseases.',
      features: ['Regular health check-ups', 'Vaccination programs', 'Disease treatment', 'Emergency care'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Users,
      title: 'Breeding Consultancy',
      description: 'Expert advice on livestock breeding, genetics, and herd management to improve productivity and profitability.',
      features: ['Breeding program design', 'Genetic selection', 'Herd management', 'Performance tracking'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const agriculturalServices = [
    {
      icon: Wheat,
      title: 'Crop Production Services',
      description: 'End-to-end crop production support from land preparation to harvest, ensuring maximum yield and quality.',
      features: ['Land preparation', 'Planting services', 'Crop monitoring', 'Harvest assistance'],
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Wrench,
      title: 'Farm Equipment & Machinery',
      description: 'Sales and rental of modern agricultural equipment and machinery for efficient farming operations.',
      features: ['Tractors and implements', 'Irrigation systems', 'Harvesting equipment', 'Maintenance services'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Beaker,
      title: 'Soil Testing & Analysis',
      description: 'Professional soil analysis and recommendations for optimal crop production and sustainable farming practices.',
      features: ['Soil composition analysis', 'Nutrient recommendations', 'pH level testing', 'Fertilizer guidance'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      icon: Truck,
      title: 'Input Supply & Delivery',
      description: 'Quality seeds, fertilizers, and agricultural inputs delivered directly to your farm.',
      features: ['Certified seeds', 'Organic fertilizers', 'Pesticides & herbicides', 'Delivery services'],
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('products')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive agricultural and livestock solutions designed to maximize your farming success. From quality livestock breeding to modern farming equipment, we provide everything you need.
          </p>
        </div>
      </section>

      {/* Livestock Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('livestockTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional livestock breeding and management services to help you build a successful cattle operation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {livestockServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <service.icon className="h-8 w-8 text-emerald-600 mr-3" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Agricultural Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('agricultureTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern agricultural services and equipment to enhance your crop production and farming efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {agriculturalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative h-48 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <service.icon className="h-8 w-8 text-emerald-600 mr-3" />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Custom Agricultural Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts can design personalized packages that meet your specific farming needs and budget requirements.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
            Contact Our Experts
          </Button>
        </div>
      </section>
    </div>
  );
}