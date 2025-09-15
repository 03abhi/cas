import React, { useState, useEffect } from 'react';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Proven Results",
      description: "Join thousands of successful students who achieved their goals with us",
      image: "/success/toppers.png",
      bgColor: "from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "Top Performers",
      description: "Celebrating our outstanding students and their remarkable achievements",
      image: "/10toppers.jpg",
      bgColor: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      title: "CAS Success Stories",
      description: "Real results from our dedicated students who excelled in their exams",
      image: "/casresult.jpg",
      bgColor: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Academic Excellence",
      description: "Our students consistently achieve top ranks and outstanding results",
      image: "/Toppers (12).png",
      bgColor: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Outstanding Achievements",
      description: "Witness the success stories of our high-achieving students",
      image: "/Toppers (11).png",
      bgColor: "from-red-500 to-red-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container-custom py-10">
        <div className="text-center mb-6 sm:mb-7">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-5">
            Success Stories from Our Students
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Our toppers who made us proud
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white dark:bg-gray-800">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="w-full flex-shrink-0 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]"
                >
                  <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>
                  <div className="relative z-10 flex items-center min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                    <div className="container-custom">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-center">
                        <div className="text-gray-900 dark:text-white text-center lg:text-left order-2 lg:order-1">
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight">
                            {slide.title}
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed mb-4 sm:mb-7 text-gray-600 dark:text-gray-300">
                            {slide.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                              href="#contact"
                              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-4 bg-primary-600 dark:bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                            >
                              Request a Call Back
                            </a>
                          </div>
                        </div>
                        <div className="relative order-1 lg:order-2">
                          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                              src={slide.image}
                              alt={slide.title}
                              className={`w-full object-cover ${
                                slide.id === 2 || slide.id === 3 
                                  ? 'h-[200px] sm:h-[300px] lg:h-auto' 
                                  : slide.id === 1
                                  ? 'h-[200px] sm:h-[300px] lg:h-[450px] xl:h-[500px]'
                                  : slide.id === 4
                                  ? 'h-[200px] sm:h-[300px] lg:h-[450px] xl:h-[500px]'
                                  : slide.id === 5
                                  ? 'h-[200px] sm:h-[300px] lg:h-[460px] xl:h-[510px]'
                                  : 'h-[200px] sm:h-[300px] lg:h-[420px] xl:h-[470px]'
                              }`}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary-600 dark:bg-primary-400 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
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

export default Slider;