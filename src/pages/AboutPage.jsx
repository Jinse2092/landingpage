import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Eye, Award, ShieldCheck } from 'lucide-react';

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

const AboutPage = () => {
  const handleLogin = () => {
    window.location.href = 'https://app.forvoq.com/#/login';
  };

  const handleRegister = () => {
    window.location.href = 'https://app.forvoq.com/#/register';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLogin={handleLogin} onRegister={handleRegister} />
      <main className="flex-grow pt-20 md:pt-24">
        {/* About Us Header */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <motion.div 
            className="container mx-auto px-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About FORVOQ</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              Your trusted partner in e-commerce fulfillment, dedicated to helping your business thrive.
            </p>
          </motion.div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 text-lg mb-4">
                  FORVOQ was founded in Angamaly with a simple mission: to simplify e-commerce fulfillment for businesses of all sizes. We saw the challenges companies faced in managing inventory, processing orders, and delivering exceptional customer experiences, and we knew we could provide a better way.
                </p>
                <p className="text-gray-700 text-lg">
                  Today, we are proud to be a leading fulfillment agency, leveraging technology and expertise to empower e-commerce businesses to scale efficiently and effectively.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20"></div>
                  <img  alt="FORVOQ team working in a modern office" className="rounded-xl shadow-xl relative w-full h-auto" src="https://images.unsplash.com/photo-1590402494610-2c378a9114c6" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn}>
                <div className="flex items-center mb-4">
                  <Target className="h-10 w-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To provide seamless, reliable, and innovative e-commerce fulfillment solutions that enable our clients to focus on growth and customer satisfaction.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="flex items-center mb-4">
                  <Eye className="h-10 w-10 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Our Vision</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To be the most trusted and technologically advanced e-commerce fulfillment partner in India, recognized for our commitment to excellence and client success.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do at FORVOQ.
              </p>
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Customer Centricity", description: "Our clients' success is our top priority. We listen, adapt, and deliver.", icon: <Users className="h-8 w-8 mb-3 text-blue-600" /> },
                { title: "Innovation", description: "We continuously seek and implement cutting-edge solutions to enhance efficiency.", icon: <Award className="h-8 w-8 mb-3 text-blue-600" /> },
                { title: "Integrity", description: "We operate with transparency, honesty, and accountability in all our interactions.", icon: <ShieldCheck className="h-8 w-8 mb-3 text-blue-600" /> }
              ].map((value, index) => (
                <motion.div 
                  key={index}
                  className="glass-card p-6 rounded-xl text-center"
                  variants={fadeIn}
                >
                  {value.icon}
                  <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;