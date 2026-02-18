import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="av-hero av-noise" data-testid="hero-section">
      {/* Content Side */}
      <div className="av-hero-content order-2 lg:order-1 bg-[#FAFAF9]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg"
        >
          <span className="av-mono text-[#2C3E30] mb-4 block">
            Science-Backed Wellness
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] mb-6 leading-tight">
            Elevate Your
            <br />
            <span className="italic text-[#2C3E30]">Daily Ritual</span>
          </h1>
          <p className="text-[#57534E] text-lg mb-8 leading-relaxed">
            Premium supplements and skincare formulated with clinically-proven 
            ingredients. Experience wellness that works, backed by science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/collections/all" 
              className="av-btn-primary inline-flex items-center justify-center gap-2 group"
              data-testid="hero-shop-btn"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
            <Link 
              to="/pages/science" 
              className="av-btn-secondary inline-flex items-center justify-center"
              data-testid="hero-science-btn"
            >
              Our Science
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-[#E7E5E4]">
            <div className="flex flex-wrap gap-6 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2C3E30] flex items-center justify-center">
                  <span className="text-[#FAFAF9] text-xs font-medium">GMP</span>
                </div>
                <span>Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2C3E30] flex items-center justify-center">
                  <span className="text-[#FAFAF9] text-xs font-medium">3P</span>
                </div>
                <span>Third-Party Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2C3E30] flex items-center justify-center">
                  <span className="text-[#FAFAF9] text-xs font-medium">30</span>
                </div>
                <span>Day Guarantee</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Media Side */}
      <div className="av-hero-media order-1 lg:order-2">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          src="https://images.unsplash.com/photo-1744115248140-7016e02141dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjB3ZWxsbmVzcyUyMHdvbWFuJTIweW9nYSUyMGNhbG0lMjBuYXR1cmUlMjBtb3JuaW5nfGVufDB8fHx8MTc3MTQxOTY2M3ww&ixlib=rb-4.1.0&q=85"
          alt="Woman in peaceful wellness setting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#FAFAF9]/30 lg:hidden" />
      </div>
    </section>
  );
};
