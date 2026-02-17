import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Phone, MapPin, Clock, Star, ArrowRight, Shield, Award, Heart, Sparkles } from 'lucide-react';
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
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium & Professional */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-slate-900/95"></div>
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95" 
            alt="Professional Dental Care" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-amber-500/20 text-amber-200 border-amber-400/30 backdrop-blur-md px-6 py-2 text-sm font-medium">
            Trusted Dental Excellence Since 2010
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Your Smile,<br />Our Expertise
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-50 font-light max-w-3xl mx-auto leading-relaxed">
            Experience world-class dental care with cutting-edge technology and compassionate professionals in Mulund West
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-lg px-10 py-7 font-semibold shadow-2xl border-0"
              onClick={() => navigate('/contact')}
            >
              Book Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-7 font-semibold"
              onClick={() => window.location.href = `tel:${clinicInfo.phone}`}
            >
              <Phone className="mr-2 w-5 h-5" />
              {clinicInfo.phone}
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 text-center">
              <MapPin className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Premium Location</p>
                <p className="text-sm text-gray-600">Mulund West, Mumbai</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center">
              <Clock className="w-6 h-6 text-blue-700 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Extended Hours</p>
                <p className="text-sm text-gray-600">Mon-Fri: 9 AM - 8 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-center">
              <Star className="w-6 h-6 text-amber-500 fill-amber-500 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">4.7★ Rating</p>
                <p className="text-sm text-gray-600">200+ Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Premium Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-0">Comprehensive Care</Badge>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Dental Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From preventive care to advanced treatments, we deliver exceptional results with precision and care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-slate-200 bg-white overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {getIconComponent(service.icon)}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3 text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              onClick={() => navigate('/services')}
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-6 text-lg font-semibold shadow-lg"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-slate-100 text-slate-800 border-0">Why Neem Dental Care</Badge>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Excellence in Every Detail</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining advanced technology with personalized, compassionate care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
            {[
              { 
                icon: Award, 
                title: "Expert Specialists", 
                desc: "MDS & BDS qualified dentists with 15+ years experience",
                color: "from-blue-700 to-blue-900"
              },
              { 
                icon: Sparkles, 
                title: "Advanced Technology", 
                desc: "Latest laser systems and digital imaging for precision care",
                color: "from-amber-500 to-amber-600"
              },
              { 
                icon: Heart, 
                title: "Patient-Centered", 
                desc: "Personalized treatment plans designed for your unique needs",
                color: "from-blue-600 to-blue-800"
              },
              { 
                icon: Shield, 
                title: "Safety First", 
                desc: "Hospital-grade sterilization and infection control protocols",
                color: "from-slate-700 to-slate-900"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-0">Patient Stories</Badge>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Trusted by Families</h2>
            <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="border-slate-200 bg-white hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-lg font-semibold text-gray-900">{testimonial.name}</CardTitle>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-xs text-gray-500">{testimonial.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              variant="outline"
              size="lg"
              onClick={() => navigate('/testimonials')}
              className="border-2 border-blue-700 text-blue-800 hover:bg-blue-50 px-10 py-6 text-lg font-semibold"
            >
              Read More Reviews
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bS0yIDBoLTJ2Mmgydi0yem0tMiAwdi0ySDMwdjJoMnptLTItMmgtMnYyaDJ2LTJ6bTAgMHYtMmgtMnYyaDJ6bTItMnYtMmgtMnYyaDJ6bTAtMmgydi0yaC0ydjJ6bTItMmgydi0yaC0ydjJ6bS0yLTJoLTJ2Mmgydi0yem0wIDBodjJoMnYtMmgtMnptMi0yaC0ydjJoMnYtMnptMCAwaC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold mb-6">Ready for a Healthier Smile?</h2>
          <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Book your consultation today and take the first step towards optimal dental health
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xl px-12 py-7 font-bold shadow-2xl border-0"
            onClick={() => navigate('/contact')}
          >
            Schedule Your Visit
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
