// components/Service.js
import Image from 'next/image';

const Service = ({ imageSrc, heading, paragraph, imageOnLeft = true }) => {
    return (
        
        <div className={`flex flex-col h-[70vh] md:flex-row ${imageOnLeft ? '' : 'md:flex-row-reverse h-[80vh]'} bg-white shadow-lg rounded-lg overflow-hidden my-36`}>
            <div className="relative md:w-1/2">
                <Image
                    src={imageSrc}
                    alt={heading}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out hover:scale-105"
                />
            </div>
            <div className="px-6 py-0 md:px-12 md:w-1/2">
                <h2 className="mt-0 mb-4 text-3xl font-semibold text-gray-900">{heading}</h2>
                <p className="mb-6 text-lg text-gray-700">{paragraph}</p>
                <div className="flex justify-left">
                    <button className="p-2 w-40 bg-[#ffffff] text-black rounded-lg shadow-md hover:bg-[#1E90FF] transition duration-300 ease-in-out hover:text-white border-black border-2 hover:border-blue-400">
                        Go
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Service;
