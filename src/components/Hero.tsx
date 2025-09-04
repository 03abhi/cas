import React from 'react';
import { Phone, MessageCircle, Star, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-0 pb-24 lg:pb-32 transition-colors duration-300">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 animate-fade-in-up">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Coaching students to build strong foundations through customized study plans
            </h1>
            
            <p className="text-lg lg:text-xl font-bold text-primary-600 dark:text-primary-400 mb-8 italic">
              Analyze Gaps. Practise. Improve.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-4 animate-stagger-1">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <i className="fas fa-search-plus text-blue-600 dark:text-blue-400 text-sm"></i>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-900 dark:text-white">Deep Analysis:</span> 
                  <span className="text-gray-700 dark:text-gray-300 ml-1">We deeply analyse each student's work, mistakes, and weakness.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-stagger-2">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <i className="fas fa-user-check text-green-600 dark:text-green-400 text-sm"></i>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-900 dark:text-white">Personalized Plan for Each Student:</span> 
                  <span className="text-gray-700 dark:text-gray-300 ml-1">With help of Analytics, we create personalized and focused practice plan for each student.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-stagger-3">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                  <i className="fas fa-users text-purple-600 dark:text-purple-400 text-sm"></i>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-900 dark:text-white">Small & Focused Batches:</span> 
                  <span className="text-gray-700 dark:text-gray-300 ml-1">Limited students in each batch.</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 animate-stagger-4">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                  <i className="fas fa-bolt text-yellow-600 dark:text-yellow-400 text-sm"></i>
                </div>
                <div className="flex-1">
                  <span className="font-bold text-gray-900 dark:text-white">Faster Learning Curve Through Personalization:</span> 
                  <span className="text-gray-700 dark:text-gray-300 ml-1">Every student progresses at their own best pace.</span>
                </div>
              </div>
            </div>

            <div className="text-left">
              <p className="text-lg lg:text-xl font-bold text-primary-600 dark:text-primary-400 italic">
                Foundation . CBSE . IIT-JEE . NEET
              </p>
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