import React, { useState } from 'react';
import { Menu, X, Sun, Moon, MessageCircle } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center" aria-label="CAS Classes Home">
              <img src="/logo.jpg" alt="CAS Classes" className="h-16 w-auto object-contain" />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Programs</a>
            <a href="#faculty" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Faculty</a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="https://wa.me/918618197603" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 font-medium hover-lift shadow-md">
              <MessageCircle className="w-4 h-4" />
              <span>Chat with us</span>
            </a>
            <a href="tel:8618197603" className="btn-primary hover-lift">Call Us</a>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <a href="#features" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Programs</a>
              <a href="#faculty" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Faculty</a>
              <a href="#testimonials" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Reviews</a>
              <a href="#contact" className="block px-3 py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Contact</a>
              <div className="pt-4 space-y-2">
                <a href="https://wa.me/918618197603" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium hover-lift shadow-md">
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with us</span>
                </a>
                <a href="tel:8618197603" className="w-full btn-primary text-center hover-lift">Call Us</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;