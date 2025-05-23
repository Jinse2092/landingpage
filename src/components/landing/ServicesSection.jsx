import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Archive, BarChart3 } from 'lucide-react';

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

const servicesData = [
  {
    title: "E-commerce Fulfilment",
    description: "End-to-end order processing, from receiving inventory to shipping orders directly to your customers.",
    icon: <Truck className="h-10 w-10" />
  },
  {
    title: "Inventory Management",
    description: "Real-time tracking and management of your stock levels, ensuring optimal inventory and preventing stockouts.",
    icon: <Archive className="h-10 w-10" />
  },
  {
    title: "Packing Service",
    description: "Professional and secure packing solutions tailored to your products, ensuring safe transit and a great unboxing experience.",
    icon: <Package className="h-10 w-10" />
  },
  {
    title: "Analytics & Reporting",
    description: "Comprehensive reporting and analytics to track inventory levels, order status, and fulfillment performance.",
    icon: <BarChart3 className="h-10 w-10" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Fulfillment Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive e-commerce fulfillment solutions designed to optimize your operations and enhance customer satisfaction.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="service-card glass-card"
              variants={fadeIn}
            >
              <div className="service-icon mb-4 text-blue-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;