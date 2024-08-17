import React from 'react';
import Image from 'next/image';

const StayCard = ({ imageSrc, heading, line1, line2, line3, price }) => {
    return (
        <div className="flex overflow-hidden bg-white border rounded-lg shadow-lg hover:cursor-pointer hover:border-blue-500">
            <div className="relative w-1/3">
                <Image 
                    src={imageSrc} 
                    alt={heading} 
                    layout="fill" 
                    objectFit="cover" 
                    className="w-full h-full" 
                />
            </div>
            <div className="w-2/3 p-4">
                <h2 className="mb-2 text-xl font-bold">{heading}</h2>
                <p className="mb-1 text-gray-700">{line1}</p>
                <p className="mb-1 text-gray-700">{line2}</p>
                <p className="mb-1 text-gray-700">{line3}</p>
                <p className="mt-4 text-lg font-semibold text-green-600">{price}</p>
            </div>
        </div>
    );
};

export default StayCard;
