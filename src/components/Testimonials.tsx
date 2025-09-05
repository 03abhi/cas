import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const Testimonials: React.FC = () => {
  const { isDarkMode } = useDarkMode();
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Akshar",
      exam: "JEE Main - 98.5%ile",
      image: "/Akshar.jpg",
      feedback: "CAS Classes helped me achieve my dream score in JEE Main. The personalized study plan and expert guidance made all the difference. The teachers are incredibly supportive and the doubt clearing sessions are excellent.",
      rating: 5
    },
    {
      id: 2,
      name: "Derek Foley",
      exam: "NEET - Rank 1250",
      image: "/Derek Foley.png",
      feedback: "The comprehensive study material and regular mock tests at CAS Classes prepared me perfectly for NEET. The faculty's teaching methodology is outstanding and helped me secure a great rank.",
      rating: 5
    },
    {
      id: 3,
      name: "Amrutha",
      exam: "JEE Advanced - AIR 4500",
      image: "/amrutha.jpeg",
      feedback: "CAS Classes transformed my approach to problem-solving. The concept clarity sessions and practice tests were instrumental in my JEE Advanced success. Highly recommended for serious aspirants.",
      rating: 5
    },
    {
      id: 4,
      name: "Priya",
      exam: "NEET - Rank 890",
      image: "/Priya.jpg",
      feedback: "The structured curriculum and individual attention at CAS Classes helped me improve my NEET performance significantly. The teachers are patient and explain complex topics in simple ways.",
      rating: 5
    },
    {
      id: 5,
      name: "Parvsh",
      exam: "JEE Main - 97.2%ile",
      image: "/Parvsh.jpg",
      feedback: "CAS Classes provided the perfect environment for my JEE preparation. The small batch size ensured personalized attention, and the regular assessments helped me track my progress effectively.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={`py-16 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Student Feedback
          </h2>
          <p className={`text-xl lg:text-2xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Hear from our successful students
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                      <div
                        key={item.id}
                        className={`rounded-2xl p-6 shadow-xl border transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
                          isDarkMode 
                            ? 'bg-gray-700 border-gray-600' 
                            : 'bg-white border-gray-200'
                        }`}
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1">
                            <h3 className={`font-bold text-lg ${
                              isDarkMode ? 'text-white' : 'text-gray-900'
                            }`}>
                              {item.name}
                            </h3>
                            <p className={`text-sm font-medium ${
                              isDarkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                              {item.exam}
                            </p>
                            <div className="flex items-center mt-1">
                              {[...Array(item.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className={`text-sm leading-relaxed ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          "{item.feedback}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 scale-125'
                    : isDarkMode 
                      ? 'bg-gray-600 hover:bg-gray-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;