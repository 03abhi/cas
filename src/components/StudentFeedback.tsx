import React from 'react';
import { Star } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

const StudentFeedback: React.FC = () => {
  const { isDarkMode } = useDarkMode();

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
          {/* Auto-scrolling Container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="flex gap-6 animate-scroll">
              {/* Duplicate the testimonials for seamless loop */}
              {[...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={`rounded-2xl p-6 shadow-xl border transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 flex-shrink-0 w-80 ${
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
        </div>
      </div>
    </section>
  );
};

export default StudentFeedback;
