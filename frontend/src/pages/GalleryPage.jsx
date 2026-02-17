import React, { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { galleryImages } from '../data/mock';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'interior', label: 'Clinic Interior' },
    { value: 'equipment', label: 'Equipment' },
    { value: 'service', label: 'Patient Care' },
    { value: 'team', label: 'Our Team' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1643660526741-094639fbe53a" 
            alt="Gallery" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Gallery</Badge>
          <h1 className="text-5xl font-bold mb-4">Our Clinic & Facilities</h1>
          <p className="text-xl text-blue-50">Take a virtual tour of our modern dental clinic</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Explore Our Space</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities designed for your comfort and care
            </p>
          </div>

          {/* Category Tabs */}
          <Tabs defaultValue="all" className="w-full max-w-6xl mx-auto" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="text-sm md:text-base py-3"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredImages.map((image) => (
                    <Card 
                      key={image.id} 
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 border-blue-100 group"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={image.url} 
                          alt={image.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900">{image.caption}</h3>
                        <p className="text-sm text-gray-500 capitalize mt-1">{image.category}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              What Makes Our Clinic Special
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Modern Infrastructure",
                  description: "Spacious, well-lit treatment rooms designed for your comfort and privacy"
                },
                {
                  title: "Advanced Technology",
                  description: "Latest dental equipment including digital X-rays, laser systems, and intraoral cameras"
                },
                {
                  title: "Sterilization Standards",
                  description: "Hospital-grade sterilization protocols ensuring the highest safety standards"
                },
                {
                  title: "Comfortable Waiting Area",
                  description: "Relaxing ambiance with comfortable seating and entertainment options"
                },
                {
                  title: "Accessibility",
                  description: "Conveniently located with easy parking and accessibility for all patients"
                },
                {
                  title: "Child-Friendly Environment",
                  description: "Special area and amenities designed to make children feel at ease"
                }
              ].map((feature, index) => (
                <Card key={index} className="border-blue-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Visit Us Today</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience our modern facilities and compassionate care firsthand
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            Schedule Your Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
