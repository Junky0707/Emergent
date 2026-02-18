import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success('Welcome to the AURAVITA family!');
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="av-section bg-[#2C3E30]" data-testid="newsletter-section">
      <div className="av-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-[#A8A29E] mb-4 block">
            Stay Connected
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#FAFAF9] mb-6">
            Get 15% Off Your First Order
          </h2>
          <p className="text-[#D6D3D1] mb-8">
            Join our community for exclusive offers, wellness tips, and early access 
            to new products. Unsubscribe anytime.
          </p>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-[#FAFAF9]"
            >
              <CheckCircle className="w-6 h-6 text-[#FAFAF9]" strokeWidth={1.5} />
              <span className="text-lg">You're on the list!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-transparent border-b border-[#57534E] focus:border-[#FAFAF9] py-3 px-0 text-[#FAFAF9] placeholder:text-[#78716C] outline-none transition-colors"
                aria-label="Email address"
                data-testid="newsletter-email-input"
              />
              <button
                type="submit"
                className="bg-[#FAFAF9] text-[#1C1917] px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-[#E7E5E4] transition-colors flex items-center justify-center gap-2 group"
                data-testid="newsletter-submit-btn"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </form>
          )}

          <p className="text-xs text-[#78716C] mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
