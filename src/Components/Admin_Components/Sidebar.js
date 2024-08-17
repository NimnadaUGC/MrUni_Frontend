'use client';
import React from 'react';
import { FaTachometerAlt, FaClock, FaCheck, FaUserShield, FaUsers, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="fixed left-0 z-40 flex flex-col h-full bg-gray-800 shadow-md w-60">
            <div className="flex items-center justify-center h-20 bg-gray-900">
                <span className="text-xl font-bold text-white">Admin Panel</span>
            </div>
            <nav className="flex flex-col flex-1 p-4">
                <a href="#dashboard" className="flex items-center px-4 py-3 mb-2 text-white rounded hover:bg-gray-700">
                    <FaTachometerAlt className="mr-3" />
                    Dashboard
                </a>
                <a href="#pending-ads" className="flex items-center px-4 py-3 mb-2 text-white rounded hover:bg-gray-700">
                    <FaClock className="mr-3" />
                    Pending Ads
                </a>
                <a href="#published-ads" className="flex items-center px-4 py-3 mb-2 text-white rounded hover:bg-gray-700">
                    <FaCheck className="mr-3" />
                    Published Ads
                </a>
                <a href="#admin-accounts" className="flex items-center px-4 py-3 mb-2 text-white rounded hover:bg-gray-700">
                    <FaUserShield className="mr-3" />
                    Admin Accounts
                </a>
                <a href="#user-accounts" className="flex items-center px-4 py-3 mb-2 text-white rounded hover:bg-gray-700">
                    <FaUsers className="mr-3" />
                    User Accounts
                </a>
                <a href="#logout" className="flex items-center px-4 py-3 mt-auto text-white rounded hover:bg-gray-700">
                    <FaSignOutAlt className="mr-3" />
                    Log Out
                </a>
            </nav>
        </div>
    );
};

export default Sidebar;
