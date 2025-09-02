import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-3">
      <a
        href="https://wa.me/918618197603"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform transform hover:translate-y-[-2px]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:8618197603"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform transform hover:translate-y-[-2px]"
        aria-label="Call Us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;


