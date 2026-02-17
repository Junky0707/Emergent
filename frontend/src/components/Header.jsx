import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Phone, Menu, X, Calendar } from 'lucide-react';
import { clinicInfo } from '../data/mock';

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/testimonials', label: 'Reviews' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-2 font-medium">
              <Phone className="w-3.5 h-3.5" />
              <a href={`tel:${clinicInfo.phone}`} className="hover:text-teal-100 transition-colors">
                {clinicInfo.phone}
              </a>
            </div>
            <div className="text-center">
              <span className="text-teal-50">Mon-Fri: {clinicInfo.hours.weekdays} | Sat: {clinicInfo.hours.saturday}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Neem Dental Care</h1>
              <p className="text-xs text-gray-600 font-medium">Excellence in Dentistry</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                  isActive(link.path)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-700 hover:bg-slate-50 hover:text-teal-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Button asChild className="bg-teal-600 hover:bg-teal-700 shadow-md font-semibold">
              <Link to="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-slate-200">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all font-medium ${
                    isActive(link.path)
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-gray-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-teal-600 hover:bg-teal-700 mt-2 font-semibold">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
