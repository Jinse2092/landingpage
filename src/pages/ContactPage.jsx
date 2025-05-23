import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ContactPage = () => {
  const { toast } = useToast();

  const handleLogin = () => {
    window.location.href = 'https://app.forvoq.com/#/login';
  };

  const handleRegister = () => {
    window.location.href = 'https://app.app.forvoq.com/#/register';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
          variant: "default",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    }
  };


  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-blue-600 mb-3" />,
      title: "Email Us",
      detail: "forvoq@gmail.com",
      href: "mailto:forvoq@gmail.com"
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-600 mb-3" />,
      title: "Call Us",
      detail: (
        <>
          <a href="tel:+917902819040" className="block hover:text-blue-600 transition-colors">+91 7902819040</a>
          <a href="tel:+918547171165" className="block hover:text-blue-600 transition-colors">+91 8547171165</a>
          <a href="tel:+919961212450" className="block hover:text-blue-600 transition-colors">+91 9961212450</a>
          <a href="tel:+919961212446" className="block hover:text-blue-600 transition-colors">+91 9961212446</a>
        </>
      ),
    },
    {
      icon: <MapPin className="h-8 w-8 text-blue-600 mb-3" />,
      title: "Our Office",
      detail: "Angamaly, Kerala, India"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLogin={handleLogin} onRegister={handleRegister} />
      <main className="flex-grow pt-20 md:pt-24">
        {/* Contact Header */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <motion.div 
            className="container mx-auto px-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
          </motion.div>
        </section>

        {/* Contact Details & Form */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start mb-6">
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">{item.detail}</a>
                      ) : (
                        <p className="text-gray-600">{item.detail}</p>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Placeholder for map if needed in future */}
                <div className="mt-8 h-32 w-32 rounded-lg flex items-center justify-center mx-auto" style={{ background: 'transparent' }}>
                    <img src="/forvoqlogo.png" alt="FORVOQ logo" style={{ width: '125%', height: '125%', objectFit: 'contain', background: 'transparent' }} />
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="glass-card p-8 rounded-xl"
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                    <Input type="text" id="name" name="name" required className="mt-1" placeholder="Your Name"/>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                    <Input type="email" id="email" name="email" required className="mt-1" placeholder="your.email@example.com"/>
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                    <Input type="tel" id="phone" name="phone" className="mt-1" placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                    <Input type="text" id="subject" name="subject" required className="mt-1" placeholder="Message Subject"/>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">Message</Label>
                    <Textarea id="message" name="message" rows={5} required className="mt-1" placeholder="Your message here..."/>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
