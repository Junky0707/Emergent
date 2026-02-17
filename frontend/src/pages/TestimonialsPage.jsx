import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const TestimonialsPage = () => {
  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);
  const totalReviews = testimonials.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787" 
            alt="Patient Testimonials" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Patient Reviews</Badge>
          <h1 className="text-5xl font-bold mb-4">What Our Patients Say</h1>
          <p className="text-xl text-blue-50">Real experiences from real people</p>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-100">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
                  <div>
                    <div className="text-6xl font-bold text-blue-600 mb-2">{averageRating}</div>
                    <div className="flex gap-1 justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-600">Based on {totalReviews}+ reviews</p>
                  </div>
                  
                  <div className="border-l-0 md:border-l-2 border-blue-200 pl-0 md:pl-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellent Service</h3>
                    <p className="text-gray-600 max-w-md">
                      Our patients consistently rate us highly for quality care, professionalism, and results
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Patient Stories</h2>
            <p className="text-lg text-gray-600">Hear from those who have experienced our care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-blue-100 hover:shadow-lg transition-shadow relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardDescription className="text-sm text-gray-500">{testimonial.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Categories */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              What Patients Love Most
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  aspect: "Painless Procedures",
                  rating: 4.9,
                  description: "Our gentle approach and modern techniques ensure minimal discomfort"
                },
                {
                  aspect: "Professional Staff",
                  rating: 4.8,
                  description: "Friendly, knowledgeable team dedicated to your comfort"
                },
                {
                  aspect: "Modern Facilities",
                  rating: 4.9,
                  description: "Clean, comfortable environment with latest technology"
                },
                {
                  aspect: "Results & Outcomes",
                  rating: 4.8,
                  description: "Exceptional results that exceed patient expectations"
                }
              ].map((item, index) => (
                <Card key={index} className="border-blue-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.aspect}</h3>
                      <div className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-white" />
                        <span className="font-semibold">{item.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Experience Quality Care?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who trust us with their smiles
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
            Book Your Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
