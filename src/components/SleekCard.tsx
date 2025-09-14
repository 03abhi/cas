import React from 'react';

interface SleekCardProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const SleekCard: React.FC<SleekCardProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  className = ""
}) => {
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}>
      {/* Subtle glowing gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 p-[1px] group-hover:from-blue-400/30 group-hover:via-purple-400/30 group-hover:to-blue-400/30 transition-all duration-300">
        <div className="w-full h-full bg-white rounded-2xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Bold heading */}
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h3>
        
        {/* Supporting text */}
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          {subtitle}
        </p>
        
        {/* Modern blue button */}
        <button
          onClick={onButtonClick}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SleekCard;


