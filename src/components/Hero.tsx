import React from 'react';
import { Phone, MessageCircle, Star, Users, Award } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section className={`pt-0 pb-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-primary-50 via-white to-secondary-50'
    }`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start min-h-[75vh] pt-12">
          <div className="animate-fade-in-up">
            <h1 className={`text-2xl lg:text-3xl font-bold mb-4 leading-relaxed ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">Coaching students to build strong</span>
              <span className="block">foundations through customized</span>
              <span className="block">study plans</span>
            </h1>
            
            <p className={`text-xl lg:text-2xl font-bold mb-8 italic ${
              isDarkMode ? 'text-blue-400' : 'text-primary-600'
            }`}>
              Analyze Gaps. Practise. Improve.
            </p>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start space-x-4 animate-stagger-1">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                  <i className={`fas fa-search-plus text-sm ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}></i>
                </div>
                <div className="flex-1">
                  <span className={`font-bold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Deep Analysis:</span> 
                  <span className={`ml-1 text-base ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>We deeply analyse each student's work, mistakes, and weakness.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-stagger-2">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                }`}>
                  <i className={`fas fa-user-check text-sm ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}></i>
                </div>
                <div className="flex-1">
                  <span className={`font-bold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Personalized Plan for Each Student:</span> 
                  <span className={`ml-1 text-base ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>With help of Analytics, we create personalized and focused practice plan for each student.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-stagger-3">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100'
                }`}>
                  <i className={`fas fa-users text-sm ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}></i>
                </div>
                <div className="flex-1">
                  <span className={`font-bold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Small & Focused Batches:</span> 
                  <span className={`ml-1 text-base ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Limited students in each batch.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-stagger-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'
                }`}>
                  <i className={`fas fa-bolt text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}></i>
                </div>
                <div className="flex-1">
                  <span className={`font-bold text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Faster Learning Curve Through Personalization:</span> 
                  <span className={`ml-1 text-base ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Every student progresses at their own best pace.</span>
                </div>
              </div>
            </div>

            <div className="text-left">
              <p className={`text-lg lg:text-xl font-bold italic ${
                isDarkMode ? 'text-blue-400' : 'text-primary-600'
              }`}>
                Foundation . CBSE . IIT-JEE . NEET
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className={`rounded-2xl shadow-xl p-6 lg:p-8 border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Get Your Free Study Plan</h3>
              <form className="space-y-3">
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Full Name</label>
                  <input 
                    type="text" 
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      isDarkMode 
                        ? 'border-gray-600 bg-gray-700 text-white' 
                        : 'border-gray-200 bg-white text-gray-900'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Email Address</label>
                  <input 
                    type="email" 
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      isDarkMode 
                        ? 'border-gray-600 bg-gray-700 text-white' 
                        : 'border-gray-200 bg-white text-gray-900'
                    }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Target Exam</label>
                  <select className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-gray-600 bg-gray-700 text-white' 
                      : 'border-gray-200 bg-white text-gray-900'
                  }`}>
                    <option>Select your target exam</option>
                    <option>Exam P</option>
                    <option>Exam FM</option>
                    <option>Exam MAS-I</option>
                    <option>Exam MAS-II</option>
                    <option>Exam 5</option>
                    <option>Exam 6</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                >
                  Get My Free Study Plan
                </button>
              </form>
              <p className={`text-sm mt-6 text-center ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;