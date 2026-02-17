import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { clinicInfo } from '../data/mock';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ];

  const services = [
    { path: '/services', label: 'General Dentistry' },
    { path: '/services', label: 'Cosmetic Dentistry' },
    { path: '/services', label: 'Root Canal' },
    { path: '/services', label: 'Dental Implants' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Neem Dental Care</h3>
                <p className="text-sm text-slate-400">Excellence in Dentistry</p>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Providing world-class dental care in Mulund West with advanced technology and compassionate service since 2010.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Blog & Resources
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link to={service.path} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                    {service.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Laser Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  Teeth Whitening
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span className="text-slate-400 text-sm leading-relaxed">{clinicInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href={`tel:${clinicInfo.phone}`} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  {clinicInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <div className="text-slate-400 text-sm">
                  <p className="font-semibold text-white mb-1">Working Hours</p>
                  <p>Mon-Fri: {clinicInfo.hours.weekdays}</p>
                  <p>Sat: {clinicInfo.hours.saturday}</p>
                  <p>Sun: {clinicInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} Neem Dental Care. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-teal-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
