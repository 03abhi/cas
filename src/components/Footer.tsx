import React from 'react';
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom py-8 lg:py-12">
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
          <div>
            <div className="text-3xl font-bold text-primary-400 mb-6">
              <div className="flex items-center space-x-2">
                <span>CAS</span>
                <div className="text-sm font-normal text-gray-300">
                  <div>Concepts And Skills</div>
                </div>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/learncas" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/c.a.s_concept_and_skills/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/cas-educations/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 font-medium text-lg">
              © 2025 CAS Concepts And Skills. All rights reserved.
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-lg">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-lg">Terms of Service</a>
              <a href="mailto:info@casclasses.com" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors font-medium text-lg">
                <Mail className="w-5 h-5" />
                <span>info@casclasses.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;