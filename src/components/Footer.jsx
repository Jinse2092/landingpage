import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white mb-4 block">FORVOQ</span>
            <p className="mb-4 text-gray-400">
              Leading e-commerce fulfillment agency based in Angamaly, helping businesses scale with end-to-end logistics solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Services</span>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">E-commerce Fulfilment</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Inventory Management</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Packing Service</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Company</span>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-lg font-semibold text-white mb-4 block">Contact</span>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-gray-400" />
                <span className="text-gray-400">forvoq@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="mr-2 text-gray-400 mt-1" />
                <div className="flex flex-col">
                  <a href="tel:+917902819040" className="text-gray-400 hover:text-white transition-colors">+91 7902819040</a>
                  <a href="tel:+918547171165" className="text-gray-400 hover:text-white transition-colors">+91 8547171165</a>
                  <a href="tel:+919961212450" className="text-gray-400 hover:text-white transition-colors">+91 9961212450</a>
                  <a href="tel:+919961212446" className="text-gray-400 hover:text-white transition-colors">+91 9961212446</a>
                </div>
              </li>
              <li className="text-gray-400">Angamaly, Kerala, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} FORVOQ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;