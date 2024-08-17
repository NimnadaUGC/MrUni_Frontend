// components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ imageSrc, heading, paragraph }) => {
  return (
    <div className="flex overflow-hidden bg-white rounded-lg shadow-md hover:scale-110 hover:cursor-pointer">
      <div className="relative w-1/3 h-48 md:h-auto">
        <video
          src={imageSrc}
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="w-2/3 p-6">
        <h2 className="mb-2 text-xl font-bold">{heading}</h2>
        <p className="text-gray-700">{paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
