'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { 
  Camera, 
  Filter, 
  Grid3X3, 
  MapPin, 
  Calendar,
  Eye,
  Download,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Premium cattle grazing on lush pasture lands',
      category: 'Livestock',
      location: 'Dar es Salaam Ranch',
      date: '2024-03-15',
      description: 'Our healthy cattle enjoying organic pasture feeding in our main facility.'
    },
    {
      src: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Modern agricultural farming operations with advanced irrigation',
      category: 'Agriculture',
      location: 'Main Farm',
      date: '2024-02-28',
      description: 'State-of-the-art irrigation systems supporting sustainable crop production.'
    },
    {
      src: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Modern farm facilities and processing centers',
      category: 'Facilities',
      location: 'Processing Center',
      date: '2024-03-01',
      description: 'Our modern processing facilities ensuring quality and safety standards.'
    },
    {
      src: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Cattle feeding operations with nutritious organic feed',
      category: 'Livestock',
      location: 'Feed Station',
      date: '2024-03-10',
      description: 'Daily feeding routines using specially formulated organic feed mixtures.'
    },
    {
      src: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Sustainable crop cultivation using eco-friendly methods',
      category: 'Agriculture',
      location: 'Crop Fields',
      date: '2024-02-20',
      description: 'Implementing sustainable farming practices for maximum yield and soil health.'
    },
    {
      src: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Premium dairy cattle in climate-controlled barns',
      category: 'Livestock',
      location: 'Dairy Barn',
      date: '2024-03-08',
      description: 'Our dairy cattle enjoying comfortable, climate-controlled living conditions.'
    },
    {
      src: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Advanced farm equipment and agricultural machinery',
      category: 'Equipment',
      location: 'Equipment Depot',
      date: '2024-01-15',
      description: 'Modern agricultural equipment ensuring efficient and precise farming operations.'
    },
    {
      src: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Organic farming practices promoting biodiversity',
      category: 'Agriculture',
      location: 'Organic Fields',
      date: '2024-02-05',
      description: 'Certified organic farming methods that preserve biodiversity and soil quality.'
    },
    {
      src: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1200',
      thumbnail: 'https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Healthy livestock monitored by veterinary professionals',
      category: 'Livestock',
      location: 'Veterinary Center',
      date: '2024-03-12',
      description: 'Regular health checkups ensuring the wellbeing of all our livestock.'
    },
  ];

  const categories = ['All', 'Livestock', 'Agriculture', 'Facilities', 'Equipment'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const totalImages = filteredImages.length;
    
    if (direction === 'prev') {
      const newIndex = currentIndex > 0 ? currentIndex - 1 : totalImages - 1;
      setSelectedImage(newIndex);
    } else {
      const newIndex = currentIndex < totalImages - 1 ? currentIndex + 1 : 0;
      setSelectedImage(newIndex);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-earth-50 to-forest-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-forest-700 via-forest-600 to-forest-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Camera className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="font-heading text-4xl lg:text-6xl font-bold mb-6">
              Our Gallery
              <span className="block text-forest-200 text-2xl lg:text-3xl mt-2">
                Operations & Facilities
              </span>
            </h1>
            
            <p className="font-body text-lg lg:text-xl text-forest-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our agricultural operations, livestock facilities, and sustainable farming practices 
              through our comprehensive photo gallery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{galleryImages.length}</div>
                <div className="text-forest-200 text-sm">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-forest-200 text-sm">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-forest-200 text-sm">Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2024</div>
                <div className="text-forest-200 text-sm">Latest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-forest-600 text-white shadow-md transform scale-105'
                      : 'bg-earth-100 text-earth-700 hover:bg-earth-200 hover:shadow-sm'
                  }`}
                >
                  {category}
                  <span className="ml-2 text-xs opacity-75">
                    ({category === 'All' ? galleryImages.length : galleryImages.filter(img => img.category === category).length})
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-earth-600 text-sm font-medium">View:</span>
              <div className="bg-earth-100 p-1 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Grid3X3 className="w-4 h-4 text-earth-600" />
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded ${viewMode === 'masonry' ? 'bg-white shadow-sm' : ''}`}
                >
                  <Filter className="w-4 h-4 text-earth-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'masonry-grid'
        }`}>
          {filteredImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 cursor-pointer border border-earth-100 hover:border-forest-200 transform hover:-translate-y-1"
              onClick={() => handleImageClick(index)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.thumbnail}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-heading font-bold text-sm mb-1 line-clamp-2">{image.alt}</h3>
                      <div className="flex items-center justify-between text-xs opacity-90">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {image.location}
                        </span>
                        <span className="bg-forest-600/80 px-2 py-1 rounded-full">{image.category}</span>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Eye className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-earth-400 mx-auto mb-4" />
            <h3 className="font-heading text-xl text-earth-600 mb-2">No images found</h3>
            <p className="text-earth-500">Try selecting a different category.</p>
          </div>
        )}
      </section>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-0">
          {selectedImage !== null && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="font-heading text-lg font-bold mb-2">{filteredImages[selectedImage].alt}</h3>
                <p className="text-sm text-gray-300 mb-3">{filteredImages[selectedImage].description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {filteredImages[selectedImage].location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(filteredImages[selectedImage].date).toLocaleDateString()}
                    </span>
                  </div>
                  <span className="bg-forest-600 px-3 py-1 rounded-full text-xs">
                    {filteredImages[selectedImage].category}
                  </span>
                </div>
              </div>

              {/* Image counter */}
              <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                {selectedImage + 1} / {filteredImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-forest-700 to-forest-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
            Visit Our Facilities
          </h2>
          <p className="font-body text-lg lg:text-xl text-forest-100 mb-8 max-w-2xl mx-auto">
            Schedule a visit to see our operations firsthand and learn about our sustainable farming practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-forest-700 hover:bg-earth-50 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule a Visit
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              {t('contact')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}