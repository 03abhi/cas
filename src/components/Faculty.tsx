import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Sarah Mitchell',
    credentials: 'FCAS, MAAA',
    experience: '15+ years',
    specialization: 'Property & Casualty',
    image: '/teachers/t1.jpg',
    achievements: ['Former Chief Actuary at Fortune 500 Insurance', 'Published researcher in actuarial science', 'Exam P & FM specialist']
  },
  {
    name: 'Michael Chen',
    credentials: 'ACAS, PhD',
    experience: '12+ years',
    specialization: 'Risk Management',
    image: '/teachers/t2.jpg',
    achievements: ['Risk Management Consultant', 'CAS Exam Committee Member', 'MAS-I & MAS-II expert']
  },
  {
    name: 'Dr. Emily Rodriguez',
    credentials: 'FCAS, ASA',
    experience: '18+ years',
    specialization: 'Predictive Analytics',
    image: '/teachers/t3.jpg',
    achievements: ['Former VP of Analytics', 'Machine Learning in Insurance pioneer', 'Exam 5 & 6 specialist']
  },
  {
    name: 'David Thompson',
    credentials: 'ACAS, CFA',
    experience: '10+ years',
    specialization: 'Financial Analysis',
    image: '/teachers/t4.jpg',
    achievements: ['Investment Strategy Expert', 'Financial Modeling Specialist', 'Exam FM top scorer']
  },
  {
    name: 'Priya Kapoor',
    credentials: 'ACAS',
    experience: '8+ years',
    specialization: 'Statistics & Probability',
    image: '/teachers/t5.jpg',
    achievements: ['Exam P mentor', 'University guest lecturer', 'Student success advocate']
  }
];

const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn from Industry Leaders
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our faculty consists of credentialed actuaries with extensive industry experience and proven track records in exam preparation.
          </p>
        </div>

        {/* Students & Teachers Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Students & Teachers
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our collaborative learning environment brings together dedicated students and experienced teachers to create an optimal learning experience.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/Screenshot 2025-09-01 101050.png" 
              alt="Students and Teachers" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-2xl font-bold text-white mb-2">Building Success Together</h4>
              <p className="text-white/90">
                Our students and teachers work collaboratively to achieve academic excellence and exam success.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {faculty.map((instructor, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{instructor.name}</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">{instructor.credentials}</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                  <span className="text-gray-600 dark:text-gray-300 font-medium">{instructor.specialization}</span>
                </div>
                <div className="flex items-center space-x-2 mb-6">
                  <Users className="w-5 h-5 text-accent-600 dark:text-accent-400" />
                  <span className="text-gray-600 dark:text-gray-300 font-medium">{instructor.experience} experience</span>
                </div>
                <ul className="space-y-3">
                  {instructor.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300 flex items-start leading-relaxed">
                      <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;