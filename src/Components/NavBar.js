// components/NavBar.js
'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LoginButton from './LoginButton';

const NavBar = () => {
    const [logoWidth, setLogoWidth] = useState('w-28');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Adjust the scroll position as needed
                setLogoWidth('w-36');
            } else {
                setLogoWidth('w-28');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='fixed top-0 left-0 right-0 z-50 mb-2 bg-white'>
            <nav className={`0 border-b border-gray-200 shadow-md bg-white transition-colors duration-300 mx-36 rounded-3xl mt-1`}>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/">
                                <img className={`${logoWidth}`} src='/images/logo/logo.png' alt="Logo" />
                            </Link>
                        </div>
                        <div className="flex items-center space-x-6 md:space-x-12">
                            <Link href="/" className="hover:text-blue-700">Home</Link>
                            <Link href="/about" className="hover:text-blue-700">Eats</Link>
                            <Link href="/services" className="hover:text-blue-700">Meds</Link>
                            <Link href="/tech" className="hover:text-blue-700">Rides</Link>
                            <Link href="/stay" className="hover:text-blue-700">Stay</Link>
                            <LoginButton/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default NavBar;
