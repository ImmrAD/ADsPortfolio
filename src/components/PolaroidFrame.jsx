// src/components/PolaroidFrame.jsx

import React from 'react';

const PolaroidFrame = ({ imageUrl, caption, alt = 'Polaroid image', rotation = 0 }) => {
  // We use an inline style here because the rotation value is dynamic
  // and changes based on the props. This is a standard practice with Tailwind.
  const dynamicStyle = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <div
      className="
        inline-block bg-[#F5FEFD] p-8 pb-17.5 m-10 shadow-lg 
        transition-transform duration-200 ease-in-out
      "
      style={dynamicStyle}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={alt}
          className="
            block w-60 h-75 object-cover border border-gray-100
          "
        />
        {caption && (
          <p className="
            absolute bottom-[-3.5rem] left-0 right-0 text-center 
            font-marker text-lg text-gray-800
          ">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default PolaroidFrame;