import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Our toppers who made us proud
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
            <img
              src="/success/Results%20Poster%20-%203%20Toppers%20.png"
              alt="Results Poster - 3 Toppers"
              className="w-full h-[28rem] object-contain bg-white dark:bg-gray-800 animate-slow-zoom"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700">
            <img
              src="/success/toppers.png"
              alt="Toppers Collage"
              className="w-full h-[28rem] object-contain bg-white dark:bg-gray-800 animate-slow-zoom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;