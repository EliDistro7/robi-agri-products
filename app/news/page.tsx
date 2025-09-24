'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  const { t } = useLanguage();

  const newsArticles = [
    {
      title: 'Sustainable Farming Practices for Better Yields',
      excerpt: 'Learn about eco-friendly farming methods that increase productivity while protecting the environment.',
      author: 'John Mkulima',
      date: '2024-01-15',
      category: 'Agriculture',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '5 min read',
    },
    {
      title: 'Cattle Breeding: Selecting the Right Bulls',
      excerpt: 'Expert guidance on choosing quality breeding bulls to improve your cattle genetics and productivity.',
      author: 'Sarah Kilimo',
      date: '2024-01-12',
      category: 'Livestock',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '7 min read',
    },
    {
      title: 'Market Trends: Dairy Prices in East Africa',
      excerpt: 'Analysis of current dairy market conditions and price predictions for the coming season.',
      author: 'Robert Mwangi',
      date: '2024-01-10',
      category: 'Market Analysis',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '4 min read',
    },
    {
      title: 'Nutrition Tips for Healthy Livestock',
      excerpt: 'Essential feeding guidelines to maintain optimal health and productivity in your cattle.',
      author: 'Sarah Kilimo',
      date: '2024-01-08',
      category: 'Livestock',
      image: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '6 min read',
    },
    {
      title: 'Technology in Modern Agriculture',
      excerpt: 'How digital tools and smart farming techniques are revolutionizing agricultural productivity.',
      author: 'John Mkulima',
      date: '2024-01-05',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '8 min read',
    },
    {
      title: 'Seasonal Farming Calendar for Tanzania',
      excerpt: 'Complete guide to planting and harvesting seasons for optimal crop production in Tanzania.',
      author: 'John Mkulima',
      date: '2024-01-03',
      category: 'Agriculture',
      image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      readTime: '10 min read',
    },
  ];

  const categories = ['All', 'Agriculture', 'Livestock', 'Market Analysis', 'Technology'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {t('news')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest agricultural insights, farming tips, market trends, and company news from Robi Agri Products.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-emerald-600 to-amber-600 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="ml-3 text-white/80 text-sm">{formatDate(newsArticles[0].date)}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{newsArticles[0].title}</h2>
              <p className="text-white/90 mb-6 text-lg">{newsArticles[0].excerpt}</p>
              <div className="flex items-center mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="text-white/80">{newsArticles[0].author}</span>
                <span className="mx-3 text-white/60">•</span>
                <span className="text-white/80">{newsArticles[0].readTime}</span>
              </div>
              <Button className="bg-white text-emerald-600 hover:bg-gray-100">
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="h-64 lg:h-auto">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="text-gray-600 line-clamp-3">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{formatDate(article.date)}</span>
                  <span className="mx-2">•</span>
                  <User className="h-4 w-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                  <Button variant="outline" size="sm">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Stay Informed
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest agricultural insights and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <Button className="bg-emerald-600 hover:bg-emerald-700 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}