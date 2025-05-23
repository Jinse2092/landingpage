import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/landing/HeroSection';
import ServicesSection from '@/components/landing/ServicesSection';
import WhyChooseUsSection from '@/components/landing/WhyChooseUsSection';
import CtaSection from '@/components/landing/CtaSection';
import ContactSection from '@/components/landing/ContactSection';

const LandingPage = () => {
  const handleLogin = () => {
    window.location.href = 'https://app.app.forvoq.com/#/login';
  };

  const handleRegister = () => {
    window.location.href = 'https://app.app.forvoq.com/#/register';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLogin={handleLogin} onRegister={handleRegister} />
      <main>
        <HeroSection onRegister={handleRegister} onLogin={handleLogin} />
        <ServicesSection />
        <WhyChooseUsSection />
        <CtaSection onRegister={handleRegister} onLogin={handleLogin} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;