import React from 'react';
import { BookOpen, Users, Target, Clock, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Comprehensive Study Materials',
    description: 'Access detailed study guides, practice problems, and exam-specific content created by industry experts.',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from credentialed actuaries with decades of real-world experience and proven teaching methods.',
    color: 'teal'
  },
  {
    icon: Target,
    title: 'Personalized Learning Path',
    description: 'Receive a customized study plan based on your background, timeline, and target exam.',
    color: 'orange'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Study at your own pace with 24/7 access to materials and recorded sessions.',
    color: 'green'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your improvement with detailed analytics and performance insights.',
    color: 'purple'
  },
  {
    icon: Shield,
    title: 'Pass Guarantee',
    description: 'We\'re so confident in our methods, we offer a money-back guarantee if you don\'t pass.',
    color: 'red'
  }
];

const colorClasses = {
  blue: 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400',
  teal: 'bg-secondary-100 dark:bg-secondary-900/30 text-secondary-600 dark:text-secondary-400',
  orange: 'bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
};

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose CAS Classes?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We've helped thousands of students pass their CAS exams with our proven methodology and expert guidance.
          </p>
        </div>

        {/* Training Sessions Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
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
                src="/image.png" 
                alt="Parents Orientation Session" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <img 
              src="/Screenshot 2025-09-01 101033.png" 
              alt="Teachers Training Session" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Teachers Training Session</h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Our comprehensive teacher training programs ensure that all our instructors are equipped with the latest teaching methodologies, exam preparation strategies, and industry best practices to deliver exceptional education.
            </p>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white dark:bg-gray-700 rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-8 transition-transform duration-300 group-hover:scale-110 ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;