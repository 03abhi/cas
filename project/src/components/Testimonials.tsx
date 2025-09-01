import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Jessica Park',
    exam: 'Exam P',
    rating: 5,
    text: 'The structured approach and practice problems were exactly what I needed. Passed on my first attempt with a score of 8!',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150',
    company: 'Actuarial Analyst at Allstate'
  },
  {
    name: 'Marcus Williams',
    exam: 'Exam FM',
    rating: 5,
    text: 'The instructors really know their stuff. Complex concepts were broken down into digestible pieces. Highly recommend!',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    company: 'Risk Analyst at Progressive'
  },
  {
    name: 'Amanda Chen',
    exam: 'MAS-I',
    rating: 5,
    text: 'After failing twice on my own, CAS Classes helped me pass MAS-I. The study plan was game-changing.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150',
    company: 'Senior Actuary at Liberty Mutual'
  },
  {
    name: 'Robert Davis',
    exam: 'Exam 5',
    rating: 5,
    text: 'The mock exams perfectly simulated the real thing. I felt completely prepared and confident on exam day.',
    image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=150',
    company: 'Principal Actuary at State Farm'
  },
  {
    name: 'Lisa Thompson',
    exam: 'Exam 6',
    rating: 5,
    text: 'Outstanding instruction and support. The faculty truly cares about student success. Worth every penny!',
    image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=150',
    company: 'Consulting Actuary at Milliman'
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            See what our students have to say about their exam success
          </p>
        </div>

        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 lg:p-16 max-w-5xl mx-auto border border-gray-100 dark:border-gray-700 transition-colors duration-300">
            <Quote className="w-16 h-16 text-primary-200 dark:text-primary-300 mb-8" />
            
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed font-medium">
                  "{testimonials[currentIndex].text}"
                </blockquote>
                <div className="flex items-center space-x-6">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-primary-100 dark:border-primary-900"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white text-xl mb-1">{testimonials[currentIndex].name}</div>
                    <div className="text-primary-600 dark:text-primary-400 font-bold text-lg mb-1">Passed {testimonials[currentIndex].exam}</div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-4 text-center lg:text-right">
                <div className="inline-flex items-center space-x-6">
                  <button 
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <ChevronLeft className="w-7 h-7 text-gray-600 dark:text-gray-300" />
                  </button>
                  <span className="text-gray-500 dark:text-gray-400 font-medium">
                    {currentIndex + 1} of {testimonials.length}
                  </span>
                  <button 
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110"
                  >
                    <ChevronRight className="w-7 h-7 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-3">95%</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">First-time Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-600 dark:text-secondary-400 mb-3">10,000+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">Students Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-accent-600 dark:text-accent-400 mb-3">4.9/5</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-600 dark:text-green-400 mb-3">15+</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium text-lg">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;