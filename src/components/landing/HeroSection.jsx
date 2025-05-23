import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const HeroSection = ({ onRegister, onLogin }) => {
  return (
    <section className="relative overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Streamline Your <br />
              <span className="gradient-text">E-commerce</span> Fulfillment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              FORVOQ is Angamaly's leading e-commerce fulfillment agency, helping businesses scale with end-to-end logistics solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={onRegister}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={onLogin}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-full"
              >
                Login to Dashboard
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
              <div className="glass-card rounded-2xl overflow-hidden relative">
                <img  alt="E-commerce fulfillment center with workers processing packages" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1689942010216-dc412bb1e7a9" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;