import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = ({ onLogin, onRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <span className="text-2xl font-bold text-blue-600">FORVOQ</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center space-x-6"
            >
              <a href="/#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <Button 
                variant="outline" 
                onClick={onLogin}
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Login
              </Button>
              <Button 
                onClick={onRegister}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Register
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="/#services" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">Services</a>
                <Link to="/about" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">About</Link>
                <Link to="/contact" onClick={closeMobileMenu} className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors">Contact</Link>
                <div className="flex flex-col space-y-3 pt-3">
                  <Button 
                    variant="outline" 
                    onClick={() => { onLogin(); closeMobileMenu(); }}
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Login
                  </Button>
                  <Button 
                    onClick={() => { onRegister(); closeMobileMenu(); }}
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Register
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;