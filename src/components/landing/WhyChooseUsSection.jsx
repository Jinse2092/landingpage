import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const benefitsData = [
  {
    title: "Expertise in E-commerce",
    description: "Our team brings years of specialized experience in e-commerce logistics and fulfillment operations."
  },
  {
    title: "Advanced Technology",
    description: "Cutting-edge inventory management and order processing systems for maximum efficiency and accuracy."
  },
  {
    title: "Scalable Solutions",
    description: "Flexible fulfillment services that grow with your business, from startups to enterprise-level operations."
  },
  {
    title: "Cost Efficiency",
    description: "Reduce operational costs through optimized processes, bulk shipping rates, and efficient resource allocation."
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FORVOQ</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver exceptional value through our expertise, technology, and commitment to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
              <div className="glass-card rounded-2xl overflow-hidden relative">
                <img  alt="E-commerce analytics dashboard showing fulfillment metrics" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefitsData.map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-6"
                variants={fadeIn}
              >
                <div className="mr-4 text-blue-600 mt-1">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;