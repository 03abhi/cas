import React from 'react';
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8">
          <div className="text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-primary-400 mb-4 sm:mb-6">
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <span>CAS</span>
                <div className="text-xs sm:text-sm font-normal text-gray-300">
                  <div>Concepts And Skills</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
              <a href="https://www.facebook.com/learncas" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.instagram.com/c.a.s_concept_and_skills/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="https://www.linkedin.com/company/cas-educations/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-center sm:text-left font-medium text-sm sm:text-base lg:text-lg">
              © 2025 CAS Concepts And Skills. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm sm:text-base lg:text-lg">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm sm:text-base lg:text-lg">Terms of Service</a>
              <a href="mailto:info@casclasses.com" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors font-medium text-sm sm:text-base lg:text-lg">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">info@casclasses.com</span>
                <span className="sm:hidden">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;