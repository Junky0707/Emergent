import React, { useState } from 'react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { clinicInfo } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Appointment Request Received!",
      description: "We'll contact you shortly to confirm your appointment.",
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-daab30f310ce" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">Contact Us</Badge>
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-50">We're here to answer your questions and schedule your visit</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-blue-100 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-sm text-gray-600">{clinicInfo.address}</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <a href={`tel:${clinicInfo.phone}`} className="text-sm text-blue-600 hover:text-blue-700">
                  {clinicInfo.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="border-blue-100 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <a href={`mailto:${clinicInfo.email}`} className="text-sm text-blue-600 hover:text-blue-700">
                  {clinicInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="border-blue-100 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-sm text-gray-600">{clinicInfo.hours.weekdays}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Appointment Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Book an Appointment</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you to confirm your appointment
                </p>
              </div>

              <Card className="border-blue-100">
                <CardHeader>
                  <CardTitle>Appointment Request Form</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input 
                          id="preferredDate"
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Input 
                          id="preferredTime"
                          name="preferredTime"
                          type="time"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message / Reason for Visit</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your dental concerns or the service you're interested in"
                        className="mt-2 min-h-[120px]"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                      <Send className="w-5 h-5 mr-2" />
                      Submit Appointment Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Find Us</h2>
                <Card className="border-blue-100 overflow-hidden">
                  <div className="w-full h-[400px]">
                    <iframe 
                      src={clinicInfo.mapEmbedUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Neem Dental Care Location"
                    ></iframe>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                        <p className="text-gray-600">{clinicInfo.address}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-blue-100 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    Working Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Monday - Friday</span>
                    <span className="text-gray-600">{clinicInfo.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Saturday</span>
                    <span className="text-gray-600">{clinicInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Sunday</span>
                    <span className="text-gray-600">{clinicInfo.hours.sunday}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-100 bg-green-50">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Emergency Dental Care</h4>
                  <p className="text-gray-600 mb-4">
                    For dental emergencies outside regular hours, please call us. We prioritize emergency cases and will do our best to accommodate you as soon as possible.
                  </p>
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-100">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit Us Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">Why Choose Neem Dental Care?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Convenient Location",
                  description: "Easy to reach in Mulund West with ample parking"
                },
                {
                  title: "Flexible Timings",
                  description: "Extended hours to accommodate your busy schedule"
                },
                {
                  title: "Quick Response",
                  description: "We respond to appointment requests within 24 hours"
                }
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
