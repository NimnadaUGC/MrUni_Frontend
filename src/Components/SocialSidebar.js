import React from 'react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const SocialSidebar = () => {
    return (
        <div className="fixed left-0 flex flex-col p-2 space-y-4 text-white transform -translate-y-1/2 bg-blue-500 shadow-lg rounded-r-3xl top-1/2">
            <a href="tel:+1234567890" className="p-2 rounded hover:bg-blue-700">
                <FaTiktok className="w-6 h-6 hover:w-10"/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-blue-700">
            <FaFacebook className="w-6 h-6 hover:w-10"/>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded hover:bg-blue-700">
            <FaWhatsapp className="w-6 h-6 hover:w-10"/>
            </a>
        </div>
    );
};

export default SocialSidebar;
