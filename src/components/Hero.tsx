import React, { useState } from 'react';
import { Phone, MessageCircle, Star, Users, Award, CheckCircle } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Hero: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    email: '',
    studentGrade: ''
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
Contact Number: ${formData.contactNumber}
Email: ${formData.email}
Student Grade: ${formData.studentGrade}

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
      setFormData({ fullName: '', contactNumber: '', email: '', studentGrade: '' });
    }, 5000);
  };
  
  return (
    <section className={`pt-0 pb-12 sm:pb-16 lg:pb-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-white relative overflow-hidden'
    }`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0 -top-[28rem] -left-8">
        <img 
          src="/background-image.png" 
          alt="CAS Classes Background" 
          className={`w-full h-full object-cover object-top object-left ${
            isDarkMode ? 'brightness-75' : 'brightness-110'
          }`}
        />
        {/* General background overlay */}
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40"></div>
        {/* Semi-transparent overlay for student figure area */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-3/4 opacity-60"
          style={{
            background: isDarkMode 
              ? 'radial-gradient(ellipse 80% 100% at 30% 20%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 70%, transparent 100%)'
              : 'radial-gradient(ellipse 80% 100% at 30% 20%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0.2) 70%, transparent 100%)'
          }}
        ></div>
        {/* Additional subtle overlay for better blending */}
        <div 
          className="absolute top-0 left-0 w-1/3 h-1/2 opacity-40"
          style={{
            background: isDarkMode
              ? 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)'
              : 'linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
          }}
        ></div>
      </div>
      
      {/* Subtle light-blue abstract shapes */}
      {!isDarkMode && (
        <>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-xl z-10"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-lg z-10"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-50 rounded-full opacity-25 blur-2xl z-10"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-blue-100 rounded-full opacity-30 blur-lg z-10"></div>
        </>
      )}
      
      {/* Dark mode decorative elements */}
      {isDarkMode && (
        <>
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-900/20 rounded-full opacity-30 blur-xl z-10"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-900/20 rounded-full opacity-20 blur-lg z-10"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-800/20 rounded-full opacity-25 blur-2xl z-10"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-900/20 rounded-full opacity-30 blur-lg z-10"></div>
        </>
      )}
      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-6 lg:gap-8 items-start lg:items-center min-h-[60vh] sm:min-h-[70vh] py-6 sm:py-8">
          <div className="animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
            <h1 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="animate-hero-line-1">COACHING STUDENTS</div>
              <div className="animate-hero-line-2">
                TO BUILD <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>STRONG FOUNDATIONS</span>
              </div>
              <div className="animate-hero-line-3">THROUGH CUSTOMIZED STUDY PLANS</div>
            </h1>
            
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-6 max-w-md mx-auto lg:mx-0">
              <div className={`rounded-lg shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 animate-stagger-1 ${
                isDarkMode ? 'bg-gray-800/10' : 'bg-white/8'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                  }`}>
                    <i className={`fas fa-search-plus text-sm sm:text-base ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`}></i>
                  </div>
                  <span className={`font-bold text-sm sm:text-base lg:text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Deep Analysis</span>
                </div>
              </div>
              
              <div className={`rounded-lg shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 animate-stagger-2 ${
                isDarkMode ? 'bg-gray-800/10' : 'bg-white/8'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                  }`}>
                    <i className={`fas fa-user-check text-sm sm:text-base ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`}></i>
                  </div>
                  <span className={`font-bold text-sm sm:text-base lg:text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Personalized Plan for Each Student</span>
                </div>
              </div>
              
              <div className={`rounded-lg shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 animate-stagger-3 ${
                isDarkMode ? 'bg-gray-800/10' : 'bg-white/8'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-purple-900/30' : 'bg-purple-100'
                  }`}>
                    <i className={`fas fa-users text-sm sm:text-base ${
                      isDarkMode ? 'text-purple-400' : 'text-purple-600'
                    }`}></i>
                  </div>
                  <span className={`font-bold text-sm sm:text-base lg:text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Small & Focused Batches</span>
                </div>
              </div>
              
              <div className={`rounded-lg shadow-md p-3 sm:p-4 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-1 animate-stagger-4 ${
                isDarkMode ? 'bg-gray-800/10' : 'bg-white/8'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-yellow-900/30' : 'bg-yellow-100'
                  }`}>
                    <i className={`fas fa-bolt text-sm sm:text-base ${
                      isDarkMode ? 'text-yellow-400' : 'text-yellow-600'
                    }`}></i>
                  </div>
                  <span className={`font-bold text-sm sm:text-base lg:text-lg ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Faster Learning Curve Through Personalization</span>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left mt-4">
              <p className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold animate-fade-in-out ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Foundation . CBSE . IIT-JEE . NEET
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="animate-fade-in-up order-1 lg:order-2">
            <div className={`rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg w-full max-w-md mx-auto lg:ml-auto lg:mr-0 ${
              isDarkMode 
                ? 'bg-gray-800/40' 
                : 'bg-white/20'
            }`}>
              
                <h2 className={`text-xl sm:text-2xl font-bold mb-6 text-center animate-fade-in-up ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`} style={{ animationDelay: '0.2s' }}>
                  Get Started Today
                </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isDarkMode ? 'bg-green-900/30' : 'bg-green-100'
                  }`}>
                    <CheckCircle className={`w-8 h-8 ${
                      isDarkMode ? 'text-green-400' : 'text-green-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Thank You!
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    We'll contact you soon with your personalized study plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600' 
                          : 'bg-white text-gray-900 placeholder-gray-500 focus:bg-gray-50'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      placeholder="(555)123 4567"
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600' 
                          : 'bg-white text-gray-900 placeholder-gray-500 focus:bg-gray-50'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-white placeholder-gray-400 focus:bg-gray-600' 
                          : 'bg-white text-gray-900 placeholder-gray-500 focus:bg-gray-50'
                      }`}
                    />
                  </div>
                  
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Student Grade
                    </label>
                    <select
                      name="studentGrade"
                      value={formData.studentGrade}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-white focus:bg-gray-600' 
                          : 'bg-white text-gray-900 focus:bg-gray-50'
                      }`}
                    >
                      <option value="">Select your grade</option>
                      <option value="grade8">Grade 8</option>
                      <option value="grade9">Grade 9</option>
                      <option value="grade10">Grade 10</option>
                      <option value="grade11">Grade 11</option>
                      <option value="grade12">Grade 12</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2.5 px-4 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/40 shadow-lg hover:shadow-xl ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-blue-500/30'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  
                  <p className={`text-center text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    No spam. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;