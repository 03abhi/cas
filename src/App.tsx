import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Faculty from './components/Faculty';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { DarkModeProvider } from './contexts/DarkModeContext';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <Features />
        <Faculty />
        <Testimonials />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </DarkModeProvider>
  );
}

export default App;