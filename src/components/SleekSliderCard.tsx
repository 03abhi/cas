import React from 'react';

interface SleekSliderCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const SleekSliderCard: React.FC<SleekSliderCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  buttonText = "Learn More",
  onButtonClick,
  className = ""
}) => {
  return (
    <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group ${className}`}>
      {/* Subtle glowing gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/15 via-purple-400/15 to-cyan-400/15 p-[1px] group-hover:from-blue-400/25 group-hover:via-purple-400/25 group-hover:to-cyan-400/25 transition-all duration-500">
        <div className="w-full h-full bg-white rounded-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Image Section */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Text Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Bold heading */}
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm lg:text-base mb-4 leading-relaxed flex-1">
            {description}
          </p>
          
          {/* Modern blue button */}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium text-sm rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/40 w-full sm:w-auto"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SleekSliderCard;


