import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const faculty = [
  {
    name: 'Himanshu Awasthi',
    credentials: 'Physics · IIT Kharagpur',
    experience: '—',
    specialization: 'Physics',
    image: '/teachers/Himanshu Awasthi.png',
    achievements: ['Concept-first teaching', 'Doubt resolution and exam-focused practice']
  },
  {
    name: 'Debashmita',
    credentials: 'Chemistry · MSc',
    experience: '—',
    specialization: 'Chemistry',
    image: '/teachers/Debashmita.jpeg',
    achievements: ['Strong fundamentals in Physical, Organic & Inorganic', 'Result-oriented strategies']
  },
  {
    name: 'Bhavesh Sheth',
    credentials: 'Maths & Physics · NIT Trichy',
    experience: '—',
    specialization: 'Mathematics, Physics',
    image: '/teachers/bhavesh.jpeg',
    achievements: ['Bridges intuition with problem solving', 'Focus on speed and accuracy']
  },
  {
    name: 'Neha Pandiyan',
    credentials: 'Maths · Masters',
    experience: '—',
    specialization: 'Mathematics',
    image: '/teachers/Neha_Pandya_reduce_cropped-removebg-preview.png',
    achievements: ['Clear explanations with real-life analogies', 'Personalized guidance']
  },
  {
    name: 'Prashant S',
    credentials: 'Chemistry · MSc',
    experience: '—',
    specialization: 'Chemistry',
    image: '/teachers/Prashant-removebg-preview.png',
    achievements: ['Topic-wise mastery sessions', 'Extensive practice and revisions']
  }
];

const Faculty: React.FC = () => {
  return (
    <section id="faculty" className="py-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Learn from Industry Leaders
          </h2>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our faculty consists of credentialed actuaries with extensive industry experience and proven track records in exam preparation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {faculty.map((instructor, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 group text-center h-48 flex flex-col items-center justify-center"
            >
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-16 h-16 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 mb-2"
              />
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{instructor.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium text-xs">{instructor.credentials}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;