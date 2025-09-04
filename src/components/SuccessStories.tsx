import React from 'react';
import Slider, { SlideData } from './Slider';

const SuccessStories: React.FC = () => {
  // Success stories data - you can easily replace these with your actual content
  const successStories: SlideData[] = [
    {
      id: 1,
      image: "/10toppers.jpg",
      title: "Success Stories from Our Students",
      subtitle: "Our toppers who made us proud",
      description: "Meet our exceptional students who achieved outstanding results and made us proud with their dedication and hard work.",
      alt: "Top performing students celebrating their success"
    },
    {
      id: 2,
      image: "/Toppers (10).png",
      title: "Academic Excellence",
      subtitle: "Consistent top performers",
      description: "Our students consistently achieve top ranks and excel in their academic pursuits through our comprehensive teaching methodology.",
      alt: "Students with academic achievements"
    },
    {
      id: 3,
      image: "/Toppers (11).png",
      title: "Outstanding Results",
      subtitle: "Proven track record of success",
      description: "Year after year, our students demonstrate exceptional performance, setting new benchmarks in academic excellence.",
      alt: "Students celebrating outstanding results"
    },
    {
      id: 4,
      image: "/Toppers (12).png",
      title: "Student Achievements",
      subtitle: "Celebrating every milestone",
      description: "We celebrate every achievement of our students, from small victories to major accomplishments that shape their future.",
      alt: "Students celebrating their achievements"
    },
    {
      id: 5,
      image: "/casresult.jpg",
      title: "CAS Results",
      subtitle: "Excellence in CAS examinations",
      description: "Our students consistently perform exceptionally well in CAS examinations, showcasing the effectiveness of our teaching approach.",
      alt: "CAS examination results and achievements"
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        {/* Slider Component */}
        <div className="relative">
          <Slider
            slides={successStories}
            autoPlay={true}
            autoPlayInterval={6000}
            showArrows={true}
            showDots={true}
            className="rounded-2xl overflow-hidden shadow-2xl"
          />
        </div>

        {/* Additional Content */}
        <div className="mt-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Join Our Success Stories
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Be part of our growing community of successful students. With our proven teaching methods, 
              expert faculty, and comprehensive study materials, you too can achieve your academic goals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Successful Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-300">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
