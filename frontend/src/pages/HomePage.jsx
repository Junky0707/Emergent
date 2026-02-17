import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Phone, MapPin, Clock, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { services, testimonials, clinicInfo } from '../data/mock';

const HomePage = () => {
  const navigate = useNavigate();
  
  const getIconComponent = (iconName) => {
    const icons = {
      Stethoscope: require('lucide-react').Stethoscope,
      Sparkles: require('lucide-react').Sparkles,
      Shield: require('lucide-react').Shield,
      Wrench: require('lucide-react').Wrench,
      Zap: require('lucide-react').Zap,
      Star: require('lucide-react').Star
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95" 
            alt="Dental clinic hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
            Trusted Dental Care in Mulund West
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Healthy Smiles Start Here
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-50">
            Experience compassionate, modern dental care with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8"
              onClick={() => navigate('/contact')}
            >
              Book Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8"
              onClick={() => window.location.href = `tel:${clinicInfo.phone}`}
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-blue-50 py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Mulund West, Mumbai</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-700">Mon-Fri: 9 AM - 8 PM</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-gray-700">4.7★ Rated by 200+ Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Comprehensive Dental Care</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From routine check-ups to advanced treatments, we offer complete dental solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {getIconComponent(service.icon)}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/services')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600 text-white">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Excellence in Dental Care</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: require('lucide-react').Award, title: "Expert Dentists", desc: "15+ years of combined experience" },
              { icon: require('lucide-react').Zap, title: "Advanced Technology", desc: "State-of-the-art equipment & laser dentistry" },
              { icon: require('lucide-react').Heart, title: "Patient-Centric", desc: "Compassionate care tailored to you" },
              { icon: require('lucide-react').ShieldCheck, title: "Safety First", desc: "Highest standards of hygiene & sterilization" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Patient Reviews</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Patients Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="border-blue-100">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{testimonial.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/testimonials')}
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Read More Reviews
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Schedule your appointment today and experience the difference of quality dental care
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8"
            onClick={() => navigate('/contact')}
          >
            Book Your Appointment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
