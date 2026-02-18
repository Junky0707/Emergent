import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Leaf, FlaskConical } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: FlaskConical,
      title: 'Science-First',
      description: 'Every ingredient is backed by clinical research. We only use what has been proven to work.'
    },
    {
      icon: Leaf,
      title: 'Sustainably Sourced',
      description: 'We partner with ethical suppliers and prioritize organic, sustainably-harvested ingredients.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'GMP-certified facilities, third-party testing, and rigorous quality control at every step.'
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'We listen to our customers and continuously improve based on real feedback and results.'
    }
  ];

  const team = [
    {
      name: 'Dr. Rachel Chen',
      role: 'Founder & CSO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300',
      bio: 'PhD in Biochemistry from Stanford. 15+ years in nutraceutical research.'
    },
    {
      name: 'Marcus Williams',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300',
      bio: 'Former VP at leading wellness brand. Harvard MBA.'
    },
    {
      name: 'Dr. Sarah Park',
      role: 'Head of R&D',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300',
      bio: 'Dermatologist with 12 years of clinical experience.'
    }
  ];

  return (
    <div data-testid="about-page">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7592740/pexels-photo-7592740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1C1917]/60" />
        </div>
        <div className="av-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-[#D4AF37] mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FAFAF9] mb-6">
              Bridging Science
              <br />
              <span className="italic">& Nature</span>
            </h1>
            <p className="text-lg text-[#D6D3D1] leading-relaxed">
              AURAVITA was founded on a simple belief: the best wellness products 
              should be both scientifically proven and naturally derived.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="av-section bg-[#FAFAF9]">
        <div className="av-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="av-mono text-[#2C3E30] mb-4 block">Our Mission</span>
              <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917] mb-6">
                Wellness That <span className="italic">Actually</span> Works
              </h2>
              <p className="text-[#57534E] text-lg mb-6 leading-relaxed">
                We started AURAVITA because we were tired of empty promises in the wellness 
                industry. Products that claimed miracles but delivered nothing. Marketing that 
                prioritized hype over honesty.
              </p>
              <p className="text-[#57534E] mb-8 leading-relaxed">
                Our team of scientists, formulators, and wellness experts work tirelessly to 
                create products that genuinely improve lives. Every ingredient is chosen for 
                its proven efficacy. Every claim is backed by research. Every product is tested 
                rigorously before it reaches you.
              </p>
              <Link 
                to="/pages/science"
                className="inline-flex items-center gap-2 av-btn-primary group"
              >
                Our Science
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/7723282/pexels-photo-7723282.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Scientific research at AURAVITA"
                className="w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#2C3E30] text-[#FAFAF9] p-6 max-w-xs">
                <p className="font-heading text-3xl mb-2">15+</p>
                <p className="text-sm text-[#D6D3D1]">Years of combined research experience</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="av-section bg-[#F5F5F4]">
        <div className="av-container">
          <div className="text-center mb-16">
            <span className="av-mono text-[#2C3E30] mb-4 block">What We Stand For</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917]">
              Our <span className="italic">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FFFFFF] p-8 border border-[#E7E5E4]"
                data-testid={`value-${index}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#2C3E30]/10 flex items-center justify-center mb-6">
                  <value.icon className="w-5 h-5 text-[#2C3E30]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl text-[#1C1917] mb-3">{value.title}</h3>
                <p className="text-sm text-[#57534E] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="av-section bg-[#FFFFFF]">
        <div className="av-container">
          <div className="text-center mb-16">
            <span className="av-mono text-[#2C3E30] mb-4 block">Leadership</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917]">
              Meet Our <span className="italic">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
                data-testid={`team-member-${index}`}
              >
                <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-heading text-xl text-[#1C1917] mb-1">{member.name}</h3>
                <p className="text-sm text-[#A8522E] mb-3">{member.role}</p>
                <p className="text-sm text-[#57534E]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="av-section bg-[#2C3E30]">
        <div className="av-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl text-[#FAFAF9] mb-6">
              Experience the <span className="italic">AURAVITA</span> Difference
            </h2>
            <p className="text-[#D6D3D1] mb-8">
              Join thousands who have transformed their wellness routines with our 
              science-backed products.
            </p>
            <Link 
              to="/collections/all"
              className="inline-flex items-center gap-2 bg-[#FAFAF9] text-[#1C1917] px-8 py-4 rounded-full font-medium hover:bg-[#E7E5E4] transition-colors group"
              data-testid="about-cta"
            >
              Shop Our Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
