import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { CheckCircle } from 'lucide-react';
import { services } from '../data/mock';

const ServicesPage = () => {
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
    return IconComponent ? <IconComponent className="w-10 h-10" /> : null;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99" 
            alt="Dental Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Our Services</Badge>
          <h1 className="text-5xl font-bold mb-4">Comprehensive Dental Solutions</h1>
          <p className="text-xl text-blue-50">Advanced treatments for every dental need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Complete Dental Care Under One Roof</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From preventive care to advanced cosmetic and restorative procedures, we offer a full range of dental services using the latest technology and techniques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className="border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                      {getIconComponent(service.icon)}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* General Dentistry Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">General Dentistry</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our general dentistry services form the foundation of good oral health. Regular check-ups allow us to detect problems early and prevent more serious issues. We provide thorough dental examinations, professional cleanings, cavity fillings, and preventive care education.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>What to expect:</strong> During your visit, we'll perform a comprehensive oral examination, check for cavities and gum disease, conduct professional cleaning, and provide personalized oral hygiene recommendations.
              </p>
            </div>

            {/* Cosmetic Dentistry Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Cosmetic Dentistry</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Transform your smile with our advanced cosmetic dentistry services. Whether you're looking to correct discoloration, repair chips, or achieve a complete smile makeover, our cosmetic procedures can help you achieve the confident smile you've always wanted.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Popular treatments include:</strong> Porcelain veneers for a perfect smile, tooth bonding for minor repairs, smile design consultations, and gum contouring for improved aesthetics.
              </p>
            </div>

            {/* Root Canal Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Root Canal Treatment</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Root canal treatment has come a long way. Using modern techniques and laser technology, we can perform virtually painless procedures that save your natural teeth. Our endodontists are experts in treating infected or damaged tooth pulp.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Advanced approach:</strong> We use rotary endodontics and laser-assisted treatment for faster healing, reduced discomfort, and higher success rates.
              </p>
            </div>

            {/* Dental Implants Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Dental Implants & Prosthodontics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dental implants are the gold standard for tooth replacement. They look, feel, and function like natural teeth, providing a permanent solution that can last a lifetime with proper care. Our prosthodontists are skilled in all aspects of implant dentistry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Complete solutions:</strong> From single tooth implants to full arch restoration, we offer comprehensive implant services including bone grafting when necessary.
              </p>
            </div>

            {/* Laser Dentistry Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Laser Dentistry</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Experience the future of dental care with our advanced laser technology. Laser dentistry allows for more precise treatments with less discomfort, minimal bleeding, and faster healing times. It's ideal for various procedures including gum treatment, cavity detection, and soft tissue surgeries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Advantages:</strong> Reduced need for anesthesia, minimal post-operative discomfort, faster recovery, and exceptional precision.
              </p>
            </div>

            {/* Teeth Whitening Detail */}
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Teeth Whitening & Cleaning</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Achieve a brighter, more radiant smile with our professional whitening treatments. Our in-office whitening can brighten your teeth by several shades in just one visit, while our professional cleaning removes plaque, tartar, and stains for a healthier mouth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Options available:</strong> In-office power whitening for immediate results, take-home custom whitening kits for convenience, and regular professional cleanings for maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss which treatment is right for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Book Appointment
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
