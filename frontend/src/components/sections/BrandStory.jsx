import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const BrandStory = () => {
  const timeline = [
    { year: '2018', title: 'The Beginning', description: 'Founded with a mission to bridge the gap between clinical efficacy and natural wellness.' },
    { year: '2020', title: 'First Breakthrough', description: 'Launched our patented Vitamin C Complex after 2 years of clinical trials.' },
    { year: '2022', title: 'Global Recognition', description: 'Expanded to 30+ countries and earned B-Corp certification.' },
    { year: '2024', title: 'Innovation Continues', description: 'Introduced our AI-powered skin analysis and personalized regimens.' },
  ];

  return (
    <section className="av-section bg-[#1C1917] text-[#FAFAF9]" data-testid="brand-story-section">
      <div className="av-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Story Content */}
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-[#A8A29E] mb-4 block">Our Story</span>
            <h2 className="font-heading text-3xl md:text-4xl mb-6">
              Rooted in Science,
              <br />
              <span className="italic text-[#D4AF37]">Driven by Nature</span>
            </h2>
            <p className="text-[#A8A29E] text-lg mb-8 leading-relaxed">
              AURAVITA was born from a simple belief: that the best wellness products 
              should be both scientifically proven and naturally derived. We've spent 
              years perfecting formulations that deliver visible results without compromise.
            </p>
            <p className="text-[#A8A29E] mb-8 leading-relaxed">
              Every product in our collection undergoes rigorous third-party testing 
              and is crafted in GMP-certified facilities. We're committed to transparency, 
              sustainability, and your wellbeing.
            </p>
            <Link 
              to="/pages/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#FAFAF9] border-b border-[#FAFAF9] pb-1 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors group"
              data-testid="read-our-story"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>

          {/* Timeline */}
          <div className="av-timeline">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="av-timeline-item"
                data-testid={`timeline-${item.year}`}
              >
                <span className="text-xs font-mono text-[#D4AF37] mb-2 block">{item.year}</span>
                <h4 className="font-heading text-xl mb-2">{item.title}</h4>
                <p className="text-sm text-[#A8A29E]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Founder Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-[#3D3835]"
        >
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="font-heading text-2xl md:text-3xl italic mb-8 leading-relaxed">
              "We believe wellness should be accessible, transparent, and truly effective. 
              Every product we create is a testament to that belief."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#292524] flex items-center justify-center">
                <span className="font-heading text-lg text-[#D4AF37]">DR</span>
              </div>
              <div className="text-left">
                <p className="font-medium">Dr. Rachel Chen</p>
                <p className="text-sm text-[#A8A29E]">Founder & Chief Science Officer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
