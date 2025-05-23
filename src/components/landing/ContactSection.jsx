import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const contactInfoData = [
  {
    title: "Email Us",
    details: "forvoq@gmail.com",
    icon: <Mail className="h-6 w-6" />
  },
  {
    title: "Call Us",
    details: "+91 7902819040",
    icon: <Phone className="h-6 w-6" />
  },
  {
    title: "Visit Us",
    details: "Angamaly, Kerala, India",
    icon: <MapPin className="h-6 w-6" />
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Our team is here to help you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactInfoData.map((item, index) => (
            <motion.div 
              key={index}
              className="glass-card rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mx-auto w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;