'use client';
import React from 'react';
import Image from 'next/image';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';

const AdminNavBar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full bg-white rounded-md shadow-lg">
            <div className="container flex items-center justify-between p-4 mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/images/logo/logo.png" // Update with the correct logo path
                        alt="Logo"
                        width={100}
                        height={40}
                        className="mr-3"
                    />
                    <span className="text-xl font-bold">Admin Dashboard</span>
                </div>

                {/* Icons and Profile */}
                <div className="flex items-center space-x-4">
                    {/* Notification Button */}
                    <div className="relative">
                        <button className="p-2 text-gray-700 rounded-full hover:bg-gray-200">
                            <IoMdNotificationsOutline className="w-6 h-6" />
                        </button>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-red-600 rounded-full" />
                    </div>

                    {/* My Profile */}
                    <div className="relative">
                        <button className="flex items-center p-2 text-gray-700 rounded-full hover:bg-gray-200">
                            <FaUserCircle className="w-6 h-6" />
                            <span className="ml-2">My Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AdminNavBar;
