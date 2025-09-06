import React, { useState } from 'react';
import { Phone, MessageCircle, Star, Users, Award, CheckCircle } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    targetExam: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create email content
    const subject = `Free Study Plan Request from ${formData.fullName}`;
    const body = `New Study Plan Request:

Name: ${formData.fullName}
Email: ${formData.email}
Target Exam: ${formData.targetExam}

Please contact this student with their personalized study plan.

Thank you!`;
    
    // Create mailto link
    const mailtoLink = `mailto:info@casclasses.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', targetExam: '' });
    }, 5000);
  };
  
  return (
    <section className={`pt-0 pb-12 sm:pb-16 lg:pb-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-primary-50 via-white to-secondary-50'
    }`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] pt-8 sm:pt-12">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-relaxed ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="block">Coaching students to build strong</span>
              <span className="block">foundations through customized</span>
              <span className="block">study plans</span>
            </h1>
            
            <p className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 sm:mb-8 italic text-center lg:text-left ${
              isDarkMode ? 'text-blue-400' : 'text-primary-600'
            }`}>
              Analyze Gaps. Practise. Improve.
            </p>
            
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-center lg:text-left">
              <div className="flex items-start space-x-3 sm:space-x-4 animate-stagger-1 justify-center lg:justify-start">
                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                }`}>
                  <i className={`fas fa-search-plus text-xs sm:text-sm ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}></i>
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-bold text-xs sm:text-sm lg:text-base ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Deep Analysis:</span> 
                  <span className={`ml-1 text-xs sm:text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>We deeply analyse each student's work, mistakes, and weakness.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 animate-stagger-2 justify-center lg:justify-start">
                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                }`}>
                  <i className={`fas fa-user-check text-xs sm:text-sm ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}></i>
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-bold text-xs sm:text-sm lg:text-base ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Personalized Plan for Each Student:</span> 
                  <span className={`ml-1 text-xs sm:text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>With help of Analytics, we create personalized and focused practice plan for each student.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 animate-stagger-3 justify-center lg:justify-start">
                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100'
                }`}>
                  <i className={`fas fa-users text-xs sm:text-sm ${
                    isDarkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}></i>
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-bold text-xs sm:text-sm lg:text-base ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Small & Focused Batches:</span> 
                  <span className={`ml-1 text-xs sm:text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Limited students in each batch.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 animate-stagger-4 justify-center lg:justify-start">
                <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'
                }`}>
                  <i className={`fas fa-bolt text-xs sm:text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`}></i>
                </div>
                <div className="flex-1 text-left">
                  <span className={`font-bold text-xs sm:text-sm lg:text-base ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Faster Learning Curve Through Personalization:</span> 
                  <span className={`ml-1 text-xs sm:text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>Every student progresses at their own best pace.</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold italic ${
                isDarkMode ? 'text-blue-400' : 'text-primary-600'
              }`}>
                Foundation . CBSE . IIT-JEE . NEET
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right mt-8 lg:mt-0">
            <div className={`rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 border-gray-700' 
                : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Get Your Free Study Plan</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className={`w-16 h-16 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                  </div>
                  <h4 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Thank You!</h4>
                  <p className={`text-lg ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your email client will open with a pre-filled message. Please send it to receive your personalized study plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className={`block text-sm font-semibold mb-2 sm:mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                        isDarkMode 
                          ? 'border-gray-600 bg-gray-700 text-white' 
                          : 'border-gray-200 bg-white text-gray-900'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 sm:mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                        isDarkMode 
                          ? 'border-gray-600 bg-gray-700 text-white' 
                          : 'border-gray-200 bg-white text-gray-900'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-semibold mb-2 sm:mb-3 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Target Exam</label>
                    <select 
                      name="targetExam"
                      value={formData.targetExam}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base ${
                        isDarkMode 
                          ? 'border-gray-600 bg-gray-700 text-white' 
                          : 'border-gray-200 bg-white text-gray-900'
                      }`}
                    >
                      <option value="">Select your target exam</option>
                      <option value="Exam P">Exam P</option>
                      <option value="Exam FM">Exam FM</option>
                      <option value="Exam MAS-I">Exam MAS-I</option>
                      <option value="Exam MAS-II">Exam MAS-II</option>
                      <option value="Exam 5">Exam 5</option>
                      <option value="Exam 6">Exam 6</option>
                    </select>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 sm:py-3 font-bold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-sm sm:text-base ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Study Plan'}
                  </button>
                </form>
              )}
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