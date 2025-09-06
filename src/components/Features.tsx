import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-responsive-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Why Choose CAS Classes?
          </h2>
          <p className="text-responsive-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We've helped thousands of students pass their CAS exams with our proven methodology and expert guidance.
          </p>
        </div>

        <div className="grid-responsive">
          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🎯</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Personalized Learning</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Customized study plans tailored to each student's strengths and weaknesses</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">📊</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Progress Tracking</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Regular assessments and detailed progress reports to monitor improvement</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">👥</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Small Batch Sizes</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Limited students per batch ensuring individual attention and faster learning</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🏆</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Proven Results</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Consistent track record of student success in various competitive exams</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">📚</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Comprehensive Material</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Well-researched study materials and practice tests for thorough preparation</p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <span className="text-xl sm:text-2xl">🤝</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Expert Faculty</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Experienced teachers with deep subject knowledge and teaching expertise</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;