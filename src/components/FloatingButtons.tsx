import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col space-y-3">
      {/* WhatsApp Chat Button */}
      <a
        href="https://wa.me/918618197603?text=Hi%20CAS%20Classes%2C%20I%20need%20help%20with%20courses."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </a>
      
      {/* Call Button */}
      <a
        href="tel:8618197603"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 transform hover:scale-110"
        aria-label="Call Us"
        title="Call us"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default FloatingButtons;


