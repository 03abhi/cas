import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-primary-400 mb-6">
              <div className="flex items-center space-x-2">
                <span>CAS</span>
                <div className="text-sm font-normal text-gray-300">
                  <div>Concepts And Skills</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Empowering the next generation of actuaries with expert instruction, comprehensive materials, and proven success strategies.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-gray-800 dark:bg-gray-900 rounded-xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Exam Prep</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Exam P</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Exam FM</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">MAS-I</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">MAS-II</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Exam 5</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Exam 6</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Faculty</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors font-medium text-lg">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0 font-medium text-lg">
              © 2024 CAS Concepts And Skills. All rights reserved.
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-lg">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors font-medium text-lg">Terms of Service</a>
              <a href="mailto:support@casclasses.com" className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors font-medium text-lg">
                <Mail className="w-5 h-5" />
                <span>support@casclasses.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;