import { Link } from 'react-router-dom';
import { Instagram, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    }
  };

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { label: 'All Products', href: '/collections/all' },
        { label: 'Supplements', href: '/collections/supplements' },
        { label: 'Skincare', href: '/collections/skincare' },
        { label: 'Bundles', href: '/collections/bundles' },
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'Our Story', href: '/pages/about' },
        { label: 'Science', href: '/pages/science' },
        { label: 'Sustainability', href: '/pages/sustainability' },
        { label: 'Careers', href: '/pages/careers' },
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact Us', href: '/pages/contact' },
        { label: 'FAQs', href: '/pages/faqs' },
        { label: 'Shipping', href: '/pages/shipping' },
        { label: 'Returns', href: '/pages/returns' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-[#1C1917] text-[#FAFAF9]" role="contentinfo">
      {/* Newsletter Section */}
      <div className="border-b border-[#3D3835]">
        <div className="av-container py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl mb-4">
                Join the <span className="italic">AURAVITA</span> community
              </h3>
              <p className="text-[#A8A29E] max-w-md">
                Be the first to know about new products, exclusive offers, and wellness insights from our experts.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-b border-[#57534E] focus:border-[#FAFAF9] py-3 text-[#FAFAF9] placeholder:text-[#78716C] outline-none transition-colors"
                aria-label="Email for newsletter"
                data-testid="newsletter-email"
              />
              <button 
                type="submit"
                className="bg-[#FAFAF9] text-[#1C1917] px-8 py-3 rounded-full font-medium text-sm uppercase tracking-wider hover:bg-[#E7E5E4] transition-colors"
                data-testid="newsletter-submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="av-container py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-8 lg:mb-0">
            <Link to="/" className="font-heading text-2xl tracking-wide block mb-6" data-testid="footer-logo">
              AURAVITA
            </Link>
            <p className="text-[#A8A29E] text-sm max-w-xs mb-6 leading-relaxed">
              Premium wellness products backed by science. Elevating your daily rituals with clinically-proven formulations.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#3D3835] rounded-full hover:bg-[#292524] hover:border-[#57534E] transition-colors"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-xs font-medium uppercase tracking-wider mb-6 text-[#FAFAF9]">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#A8A29E] hover:text-[#FAFAF9] transition-colors"
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3D3835]">
        <div className="av-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#78716C]">
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/pages/privacy" className="hover:text-[#FAFAF9] transition-colors">Privacy Policy</Link>
              <Link to="/pages/terms" className="hover:text-[#FAFAF9] transition-colors">Terms of Service</Link>
              <Link to="/pages/accessibility" className="hover:text-[#FAFAF9] transition-colors">Accessibility</Link>
            </div>
            <p>© {new Date().getFullYear()} AURAVITA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
