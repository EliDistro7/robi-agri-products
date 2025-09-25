'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Clock, Tag, Newspaper, TrendingUp, Sparkles, BookOpen, Filter, Search, Bell } from 'lucide-react';

export default function NewsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const newsArticles = [
    {
      title: 'Sustainable Farming Practices for Better Yields',
      excerpt: 'Discover revolutionary eco-friendly farming methods that boost productivity by up to 40% while protecting our precious environment for future generations.',
      author: 'John Mkulima',
      date: '2024-01-15',
      category: 'Agriculture',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '5 min read',
      trending: true,
      featured: true,
    },
    {
      title: 'Cattle Breeding: Selecting the Right Bulls',
      excerpt: 'Master the art of genetic selection with our comprehensive guide to choosing premium breeding bulls that will transform your herd quality.',
      author: 'Sarah Kilimo',
      date: '2024-01-12',
      category: 'Livestock',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '7 min read',
      trending: false,
    },
    {
      title: 'Market Trends: Dairy Prices in East Africa',
      excerpt: 'Deep dive analysis of current dairy market dynamics with expert predictions and strategic insights for maximizing your profits.',
      author: 'Robert Mwangi',
      date: '2024-01-10',
      category: 'Market Analysis',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '4 min read',
      trending: true,
    },
    {
      title: 'Nutrition Tips for Healthy Livestock',
      excerpt: 'Essential feeding strategies and nutritional insights that ensure optimal health, growth, and productivity in your cattle operations.',
      author: 'Sarah Kilimo',
      date: '2024-01-08',
      category: 'Livestock',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '6 min read',
      trending: false,
    },
    {
      title: 'Technology in Modern Agriculture',
      excerpt: 'Explore cutting-edge digital solutions and AI-powered farming techniques that are reshaping the future of agricultural productivity.',
      author: 'John Mkulima',
      date: '2024-01-05',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '8 min read',
      trending: true,
    },
    {
      title: 'Seasonal Farming Calendar for Tanzania',
      excerpt: 'Your complete roadmap to perfect timing - discover the optimal planting and harvesting seasons for maximum crop yields in Tanzania.',
      author: 'John Mkulima',
      date: '2024-01-03',
      category: 'Agriculture',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
      readTime: '10 min read',
      trending: false,
    },
  ];

  const categories = [
    { name: 'All', color: 'from-gray-500 to-gray-600', icon: BookOpen },
    { name: 'Agriculture', color: 'from-green-500 to-emerald-600', icon: Sparkles },
    { name: 'Livestock', color: 'from-amber-500 to-orange-600', icon: User },
    { name: 'Market Analysis', color: 'from-blue-500 to-indigo-600', icon: TrendingUp },
    { name: 'Technology', color: 'from-purple-500 to-pink-600', icon: Sparkles },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Bold Design */}
      <section className="relative bg-gradient-to-br from-forest-900 via-emerald-800 to-forest-900 py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <Newspaper className="absolute top-20 left-10 h-16 w-16 text-white/5 rotate-12 animate-pulse" />
          <TrendingUp className="absolute top-40 right-20 h-12 w-12 text-white/5 -rotate-12" />
          <BookOpen className="absolute bottom-32 left-32 h-14 w-14 text-white/5 rotate-45" />
          <Sparkles className="absolute bottom-20 right-10 h-10 w-10 text-white/5 -rotate-45 animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Newspaper className="h-16 w-16 text-emerald-400" />
              </div>
            </div>
            <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl font-extra-bold text-white mb-8 tracking-tight">
              <span className="brand-text">Latest </span>
              <span className="text-emerald-400">Insights</span>
            </h1>
            <p className="font-subheading text-xl sm:text-2xl text-forest-100 max-w-4xl mx-auto leading-relaxed font-medium mb-12">
              Stay ahead of the curve with <strong className="text-emerald-300">expert agricultural insights</strong>, cutting-edge farming techniques, and market intelligence from Tanzania's leading agricultural experts.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: '50+', label: 'Articles', icon: BookOpen },
                { number: '15K+', label: 'Readers', icon: User },
                { number: '24/7', label: 'Updated', icon: Clock },
                { number: '100%', label: 'Expert', icon: TrendingUp },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                    <stat.icon className="h-6 w-6 text-emerald-400 mx-auto mb-2" />
                    <div className="font-heading text-2xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="font-subheading text-forest-200 text-sm">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-extra-bold text-gray-900 mb-4">
              Explore by <span className="text-emerald-600">Category</span>
            </h2>
            <p className="font-body text-lg text-gray-600">
              Discover insights tailored to your agricultural interests
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:shadow-lg hover:scale-105 border border-gray-200'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                {selectedCategory === category.name && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.some(article => article.featured) && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="bg-gradient-to-br from-emerald-600 via-forest-600 to-emerald-700 rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-white font-semibold text-sm">Featured Story</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-16 text-white order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full">
                    {newsArticles[0].category}
                  </span>
                  <span className="ml-4 text-white/80 text-sm flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(newsArticles[0].date)}
                  </span>
                </div>
                <h2 className="font-heading text-4xl lg:text-5xl font-extra-bold mb-6 leading-tight">
                  {newsArticles[0].title}
                </h2>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  {newsArticles[0].excerpt}
                </p>
                <div className="flex items-center mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mr-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="text-white/90 font-medium">{newsArticles[0].author}</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-white/90">{newsArticles[0].readTime}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl group">
                  Read Full Article
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="h-64 lg:h-auto order-1 lg:order-2 relative">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-extra-bold text-gray-900 mb-4">
            Recent <span className="text-emerald-600">Articles</span>
          </h2>
          <p className="font-body text-lg text-gray-600">
            {selectedCategory === 'All' 
              ? 'Explore our complete collection of agricultural insights' 
              : `Latest insights in ${selectedCategory}`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.slice(1).map((article, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 overflow-hidden">
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-full backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>
                
                {/* Trending Badge */}
                {article.trending && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Trending
                    </div>
                  </div>
                )}
                
                {/* Read Time */}
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="card-title text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3 text-base leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span className="font-medium">{article.author}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group border-2 border-emerald-200 hover:border-emerald-600 hover:bg-emerald-50">
                  <span className="font-semibold">Read Article</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-forest-900 to-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Bell className="absolute top-16 left-16 h-12 w-12 text-white/5 rotate-12" />
          <Sparkles className="absolute top-32 right-24 h-8 w-8 text-white/5 -rotate-12 animate-pulse" />
          <Newspaper className="absolute bottom-40 left-20 h-10 w-10 text-white/5 rotate-45" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-600 rounded-full mb-8">
              <Bell className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="font-heading text-5xl sm:text-6xl font-extra-bold text-white mb-6">
              Never Miss an <span className="text-emerald-400">Update</span>
            </h2>
            
            <p className="font-subheading text-xl text-forest-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join <strong className="text-emerald-300">15,000+ farmers</strong> who receive our weekly agricultural insights, market updates, and expert tips directly in their inbox.
            </p>
            
            {isSubscribed ? (
              <div className="bg-green-600 text-white p-6 rounded-2xl max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">Welcome Aboard!</h3>
                <p>Thank you for subscribing. Check your email for confirmation.</p>
              </div>
            ) : (
              <div className="max-w-lg mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-14 border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-emerald-400 rounded-xl"
                    />
                    <Button 
                      onClick={handleSubscribe}
                      size="lg" 
                      className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8 font-bold rounded-xl group"
                    >
                      Subscribe
                      <Bell className="ml-2 h-5 w-5 group-hover:animate-pulse" />
                    </Button>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-white/70">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      Weekly Updates
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      No Spam
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                      Unsubscribe Anytime
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}