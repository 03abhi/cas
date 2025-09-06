import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center" aria-label="CAS Classes Home">
              <img src="/logo.jpg" alt="CAS Classes" className="h-12 sm:h-16 w-auto object-contain img-responsive" />
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Programs</a>
            <a href="#faculty" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Faculty</a>
            <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 lg:w-5 lg:h-5" /> : <Moon className="w-4 h-4 lg:w-5 lg:h-5" />}
            </button>
            <a href="https://wa.me/918618197603" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center space-x-2 px-4 lg:px-6 py-2 lg:py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-all duration-300 font-medium hover-lift shadow-md text-sm lg:text-base">
              <svg className="w-3 h-3 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Chat with us</span>
            </a>
            <a href="tel:8618197603" className="btn-primary hover-lift text-sm lg:text-base">Call Us</a>
          </div>

          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-1.5 sm:p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-3 pt-3 pb-4 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
              <a href="#features" className="block px-3 py-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Programs</a>
              <a href="#faculty" className="block px-3 py-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Faculty</a>
              <a href="#testimonials" className="block px-3 py-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Reviews</a>
              <a href="#contact" className="block px-3 py-2.5 text-sm sm:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="pt-3 space-y-2">
                <a href="https://wa.me/918618197603" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-medium hover-lift shadow-md text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Chat with us</span>
                </a>
                <a href="tel:8618197603" className="w-full btn-primary text-center hover-lift text-sm sm:text-base" onClick={() => setIsMenuOpen(false)}>Call Us</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;