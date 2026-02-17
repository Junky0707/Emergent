import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Users, Award, Target } from 'lucide-react';
import { teamMembers } from '../data/mock';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09" 
            alt="About Neem Dental Care" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">About Us</Badge>
          <h1 className="text-5xl font-bold mb-4">Your Trusted Dental Care Partner</h1>
          <p className="text-xl text-blue-50">Committed to excellence in dental health since 2010</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Welcome to <strong>Neem Dental Care</strong>, where your smile is our passion. Located in the heart of Mulund West, Mumbai, we have been serving our community with dedication and expertise for over a decade.
              </p>
              
              <p className="text-lg leading-relaxed">
                Founded with a vision to provide world-class dental care in a warm, patient-friendly environment, Neem Dental Care has grown to become one of the most trusted dental clinics in the area. Our name, inspired by the ancient neem tree known for its healing properties, reflects our commitment to natural wellness and holistic oral health.
              </p>
              
              <p className="text-lg leading-relaxed">
                At Neem Dental Care, we believe that everyone deserves a healthy, beautiful smile. Our state-of-the-art facility is equipped with the latest dental technology, including laser dentistry and digital imaging systems, ensuring that our patients receive the most advanced and comfortable care available.
              </p>
              
              <p className="text-lg leading-relaxed">
                What sets us apart is our patient-centric approach. We take the time to listen to your concerns, explain procedures in detail, and create personalized treatment plans that align with your goals and budget. Our team of experienced dentists and friendly staff are dedicated to making every visit a positive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "We treat every patient with empathy, respect, and genuine concern for their well-being"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We pursue the highest standards in dental care through continuous learning and innovation"
              },
              {
                icon: Users,
                title: "Patient First",
                description: "Your comfort, safety, and satisfaction are at the center of everything we do"
              },
              {
                icon: Target,
                title: "Integrity",
                description: "We believe in honest communication and ethical practices in all our interactions"
              }
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center border-blue-100 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Meet Our Team</Badge>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Expert Dental Professionals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team of highly qualified dentists brings years of experience and specialized expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden border-blue-100 hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Qualification:</p>
                    <p className="text-sm text-gray-600">{member.qualification}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Experience:</p>
                    <p className="text-sm text-gray-600">{member.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Specialization:</p>
                    <p className="text-sm text-gray-600">{member.specialization}</p>
                  </div>
                  <p className="text-sm text-gray-600 pt-2 border-t">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed text-blue-50">
              To provide exceptional dental care that combines advanced technology, clinical expertise, 
              and genuine compassion, helping our patients achieve optimal oral health and confident smiles 
              that last a lifetime. We are committed to creating a welcoming environment where every patient 
              feels valued, informed, and empowered to make the best decisions for their dental health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
