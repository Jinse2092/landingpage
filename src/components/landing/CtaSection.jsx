import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtaSection = ({ onRegister, onLogin }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your E-commerce Fulfillment?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join hundreds of businesses that trust FORVOQ for their e-commerce fulfillment needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={onRegister}
              className="bg-white text-blue-700 hover:bg-gray-100 font-medium rounded-full"
            >
              Create an Account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={onLogin}
              className="bg-blue-600 text-white hover:bg-blue-700 font-medium rounded-full border-transparent"
            >
              Login to Dashboard
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;