import React from 'react';
import { Phone, MessageCircle, Star, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 section-padding transition-colors duration-300">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Trusted by 10,000+ students</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Excel in <span className="text-primary-600 dark:text-primary-400">CAS Exams</span> with Expert Guidance
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Join thousands of successful actuaries who've passed their CAS exams with our proven study methods, expert instructors, and comprehensive practice materials.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <a href="tel:8618197603" className="group btn-primary text-lg flex items-center justify-center hover-lift">
                <Phone className="w-5 h-5 mr-2" />
                <span>Call Us</span>
              </a>
              <a
                href="https://wa.me/918618197603"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-lg flex items-center justify-center hover-lift"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-4 mx-auto">
                  <Users className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">10,000+</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Students</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl mb-4 mx-auto">
                  <Award className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">95%</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-xl mb-4 mx-auto">
                  <Star className="w-8 h-8 text-accent-600 dark:text-accent-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-1">4.9/5</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">Rating</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-slide-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get Your Free Study Plan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Target Exam</label>
                  <select className="w-full px-5 py-4 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg">
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
                  className="w-full py-5 bg-primary-600 dark:bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl text-lg"
                >
                  Get My Free Study Plan
                </button>
              </form>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6 text-center">
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