import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "After just 4 weeks, my skin looks noticeably brighter and more even. The Luminous Serum has become a non-negotiable part of my morning routine.",
    author: "Sarah M.",
    title: "Verified Buyer",
    product: "Luminous Serum",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 2,
    quote: "I've tried countless supplements for stress, but the Botanical Blend actually works. I feel calmer and more focused throughout the day.",
    author: "Michael T.",
    title: "Verified Buyer",
    product: "Botanical Blend",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
  },
  {
    id: 3,
    quote: "The quality is exceptional. You can tell these products are made with care. My skin has never looked better, and I love that everything is third-party tested.",
    author: "Emma L.",
    title: "Verified Buyer",
    product: "Renewal Cream",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="av-section bg-[#FAFAF9]" data-testid="testimonials-section">
      <div className="av-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="av-mono text-[#2C3E30] mb-2 block">Community</span>
            <h2 className="font-heading text-3xl md:text-4xl text-[#1C1917]">
              What Our <span className="italic">Customers</span> Say
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-[#E7E5E4] rounded-full hover:bg-[#F5F5F4] transition-colors"
              aria-label="Previous testimonial"
              data-testid="prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 border border-[#E7E5E4] rounded-full hover:bg-[#F5F5F4] transition-colors"
              aria-label="Next testimonial"
              data-testid="next-testimonial"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`av-testimonial ${index === currentIndex ? 'ring-2 ring-[#2C3E30]' : ''}`}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <Quote className="w-8 h-8 text-[#E7E5E4] mb-4" strokeWidth={1} />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#E7E5E4]'}`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>

              <p className="av-testimonial-quote">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-medium text-[#1C1917]">{testimonial.author}</p>
                  <p className="text-sm text-[#A8A29E]">{testimonial.title} • {testimonial.product}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-[#E7E5E4]">
          {[
            { value: '50,000+', label: 'Happy Customers' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Would Recommend' },
            { value: '15+', label: 'Years of Research' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-3xl md:text-4xl text-[#1C1917] mb-2">{stat.value}</p>
              <p className="text-sm text-[#57534E]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
