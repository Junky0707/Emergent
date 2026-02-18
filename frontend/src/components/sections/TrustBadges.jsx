import { motion } from 'framer-motion';
import { Shield, Leaf, Award, FlaskConical, Recycle, Heart } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'Third-Party Tested', description: 'Every batch verified' },
  { icon: Leaf, label: 'Clean Ingredients', description: 'No harmful additives' },
  { icon: Award, label: 'GMP Certified', description: 'Pharmaceutical standard' },
  { icon: FlaskConical, label: 'Science-Backed', description: 'Clinical studies' },
  { icon: Recycle, label: 'Sustainable', description: 'Eco-conscious packaging' },
  { icon: Heart, label: 'Cruelty-Free', description: 'Never tested on animals' },
];

export const TrustBadges = () => {
  return (
    <section className="py-12 md:py-16 bg-[#FFFFFF] border-y border-[#E7E5E4]" data-testid="trust-badges">
      <div className="av-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
              data-testid={`trust-badge-${index}`}
            >
              <div className="w-12 h-12 rounded-full bg-[#F5F5F4] flex items-center justify-center mb-3 group-hover:bg-[#2C3E30] transition-colors">
                <badge.icon className="w-5 h-5 text-[#2C3E30] group-hover:text-[#FAFAF9] transition-colors" strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-medium text-[#1C1917] mb-1">{badge.label}</h4>
              <p className="text-xs text-[#A8A29E]">{badge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
