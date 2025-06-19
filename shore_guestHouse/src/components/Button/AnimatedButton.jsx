import React from 'react';

const AnimatedButton = ({ children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden group px-6 py-3 font-semibold text-amber-900 bg-[#E5CBAD] rounded-md cursor-pointer transition-all duration-300 ease-in-out ${className}`}
    >
      {/* Background animation layer */}
      <span
        className="absolute top-0 left-0 w-0 h-0 bg-[#d1aa80] group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out z-0"
        style={{ transformOrigin: 'top left' }}
      ></span>

      {/* Button Text */}
      <span className="relative z-10 group-hover:text-amber-950">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
