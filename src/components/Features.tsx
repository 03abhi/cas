import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        {/* Training Sessions Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Training Sessions
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Parents Orientation Session</h4>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We understand that parents play a crucial role in their child's educational journey. Our orientation sessions provide parents with comprehensive information about our programs, teaching methodologies, and how they can support their children's learning process.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">Understanding our curriculum and teaching approach</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">Progress tracking and communication methods</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600 dark:text-gray-300">Supporting your child's learning at home</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/training/student.jpg" 
                alt="Parents Orientation Session" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/training/teacher.jpg" 
              alt="Teachers Training Session" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Teachers Training Session</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary-600 dark:bg-secondary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600 dark:text-gray-300">Advanced teaching techniques and methodologies</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary-600 dark:bg-secondary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600 dark:text-gray-300">Latest exam patterns and question analysis</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary-600 dark:bg-secondary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                <span className="text-gray-600 dark:text-gray-300">Student engagement and motivation strategies</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;