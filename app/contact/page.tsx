'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram, Send, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+255 696 781 179'],
      description: 'Call us during business hours',
      color: 'from-blue-500 to-blue-600',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@robiagri.co.tz', 'sales@robiagri.com'],
      description: 'Send us an email anytime',
      color: 'from-emerald-500 to-emerald-600',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Dar es Salaam, Tanzania'],
      description: 'Visit our main office and facilities',
      color: 'from-purple-500 to-purple-600',
      iconBg: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 5:00 PM', 'Sat: 8:00 AM - 12:00 PM'],
      description: 'We are closed on Sundays',
      color: 'from-amber-500 to-amber-600',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Bold Design */}
      <section className="relative bg-gradient-to-br from-forest-900 via-emerald-800 to-forest-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <MessageCircle className="absolute top-20 left-10 h-16 w-16 text-white/5 rotate-12 animate-pulse" />
          <Mail className="absolute top-40 right-20 h-12 w-12 text-white/5 -rotate-12" />
          <Phone className="absolute bottom-32 left-32 h-14 w-14 text-white/5 rotate-45" />
          <Sparkles className="absolute bottom-20 right-10 h-10 w-10 text-white/5 -rotate-45 animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <MessageCircle className="h-16 w-16 text-emerald-400" />
              </div>
            </div>
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extra-bold text-white mb-8 tracking-tight">
              <span className="brand-text">Get In </span>
              <span className="text-emerald-400">Touch</span>
            </h1>
            <p className="font-subheading text-xl sm:text-2xl text-forest-100 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Ready to transform your agricultural dreams into reality? <strong className="text-emerald-300">Let's start the conversation</strong> that will grow your future.
            </p>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="tel:+255696781179" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-emerald-400" />
                  <span className="text-white font-semibold">Call Now</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
              <a href="https://wa.me/255696781179" target="_blank" rel="noopener noreferrer" className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-emerald-400" />
                  <span className="text-white font-semibold">WhatsApp</span>
                  <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="text-center lg:text-left mb-12">
                  <h2 className="font-heading text-4xl font-extra-bold text-gray-900 mb-4">
                    <span className="text-emerald-600">Connect</span> With Us
                  </h2>
                  <p className="font-body text-lg text-gray-600 leading-relaxed">
                    Multiple ways to reach our agricultural experts
                  </p>
                </div>

                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <CardHeader className="relative">
                      <div className="flex items-start space-x-4">
                        <div className={`${info.iconBg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`h-8 w-8 ${info.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="card-title text-xl text-gray-900 mb-2">{info.title}</CardTitle>
                          <CardDescription className="text-gray-600">{info.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative pt-0">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="font-body text-gray-900 font-semibold mb-1 last:mb-0">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}

                {/* Social Media */}
                <Card className="bg-gradient-to-br from-emerald-50 to-forest-50 border-emerald-200 shadow-xl">
                  <CardHeader>
                    <CardTitle className="card-title flex items-center text-2xl text-gray-900">
                      <Sparkles className="h-8 w-8 text-emerald-600 mr-4" />
                      Follow Our Journey
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">Stay connected and inspired</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-6">
                      <a 
                        href="https://instagram.com/robiagriproducts_livestockprod" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <Instagram className="h-8 w-8 group-hover:scale-110 transition-transform" />
                      </a>
                      <a 
                        href="https://wa.me/255696781179" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-110"
                      >
                        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-2xl border-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-forest-500 to-emerald-600"></div>
                <CardHeader className="bg-gradient-to-br from-white to-emerald-50 pb-8">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-2xl mb-6">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="card-title text-4xl font-extra-bold text-gray-900 mb-4">
                      Send Us a <span className="text-emerald-600">Message</span>
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 max-w-md mx-auto">
                      Share your agricultural vision with us and we'll help make it a reality
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-16">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                      <p className="text-gray-600 text-lg">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            {t('name')} *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-colors duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            {t('email')} *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-colors duration-200"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            {t('phone')}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-colors duration-200"
                            placeholder="+255 123 456 789"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            {t('subject')} *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-colors duration-200"
                            placeholder="Subject of your inquiry"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                          {t('message')} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="min-h-40 border-2 border-gray-200 focus:border-emerald-500 rounded-xl transition-colors duration-200 resize-none"
                          placeholder="Tell us about your agricultural needs, goals, or questions. The more details you share, the better we can help you..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-emerald-600 to-forest-600 hover:from-emerald-700 hover:to-forest-700 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-3">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-3">
                            <span>{t('send')} Message</span>
                            <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-forest-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <MapPin className="absolute top-16 left-16 h-12 w-12 text-white/5 rotate-12" />
          <Sparkles className="absolute top-32 right-24 h-8 w-8 text-white/5 -rotate-12 animate-pulse" />
          <MessageCircle className="absolute bottom-40 left-20 h-10 w-10 text-white/5 rotate-45" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-white mb-6">
              Visit Our <span className="text-emerald-400">Farm</span>
            </h2>
            <p className="font-subheading text-xl text-forest-200 max-w-3xl mx-auto leading-relaxed">
              Experience our facilities firsthand and see sustainable agriculture in action in the heart of <strong className="text-emerald-300">Dar es Salaam</strong>
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-white/20">
            <div className="h-96 bg-gradient-to-br from-emerald-100/20 to-forest-100/20 flex items-center justify-center relative">
              <div className="text-center text-white">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
                  <MapPin className="h-12 w-12 text-emerald-400 animate-pulse" />
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">Interactive Farm Tour</h3>
                <p className="font-body text-forest-200 text-lg mb-8 max-w-md mx-auto">
                  Premium 3D mapping experience launching soon - explore our sustainable facilities virtually
                </p>
                <div className="inline-flex items-center space-x-2 bg-emerald-600 px-6 py-3 rounded-full">
                  <Sparkles className="h-5 w-5" />
                  <span className="font-semibold">Coming Soon</span>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                <div className="font-heading text-sm font-bold text-emerald-400">GPS</div>
                <div className="font-body text-xs text-white">Dar es Salaam</div>
              </div>
              
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20">
                <div className="font-heading text-sm font-bold text-emerald-400">Status</div>
                <div className="font-body text-xs text-white flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Open
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}