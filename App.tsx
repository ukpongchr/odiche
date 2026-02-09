import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import WhyChooseUs from './components/WhyChooseUs';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Contact from './components/Contact';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-brand-teal selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <AppointmentForm />
        <WhyChooseUs />
        <Doctors />
        <Testimonials />
        <Stats />
        <Contact />
        <CtaBanner />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;