'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const SignUpModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(`${name}: ${value}`); // Debug statement to check input updates
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Form Data on Submit:", formData); // Debug statement to check form data on submit

        // Ensure passwords match before submitting
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/v1/customer/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerFirstName: formData.firstName,
                    customerLastName: formData.lastName,
                    customerEmail: formData.email,
                    customerPhoneNumber: formData.phoneNumber,
                    password: formData.password
                })
            });

            if (response.ok) {
                // Handle successful response
                alert('Account created successfully');
                onClose(); // Close the modal
            } else {
                // Handle errors
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            alert('Error during sign up. Please try again later.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="relative w-1/2 h-full">
                    <Image
                        src="/images/login/createAcc.jpg" // Ensure this path is correct
                        alt="Sign Up Image"
                        width={1000}
                        height={1000}
                        objectFit="cover"
                    />
                </div>
                <div className="w-1/2 p-6">
                    <h2 className="mb-6 text-2xl font-semibold">Create Account</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-6">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="firstName"
                                className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6">
                                First Name
                            </label>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="lastName"
                                className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Last Name
                            </label>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email
                            </label>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="phoneNumber"
                                className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Phone Number
                            </label>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Password
                            </label>
                        </div>

                        <div className="relative mb-6">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Confirm Password
                            </label>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Sign Up
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
