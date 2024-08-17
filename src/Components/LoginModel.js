import React, { useState } from 'react';
import SignUpModal from './SignUpModal';
import Image from 'next/image';

const LoginModal = ({ isOpen, onClose }) => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openSignUp = () => {
        setIsSignUpOpen(true);
        onClose(); // Close the login modal
    };

    const closeSignUp = () => {
        setIsSignUpOpen(false);
    };

    if (!isOpen && !isSignUpOpen) return null;

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex w-full max-w-4xl overflow-hidden bg-white rounded-lg shadow-lg">
                        <div className="relative w-1/2">
                            <Image
                                src="/images/login/login.jpg" // Ensure this path is correct
                                alt="Login Image"
                                width={1000}
                                height={1000}
                                objectFit="cover"
                            />
                        </div>
                        <div className="w-1/2 p-6">
                            <h2 className="mb-6 text-2xl font-semibold">Login</h2>
                            <form>
                                {["Email", "Password"].map((label, idx) => (
                                    <div className="relative mb-6" key={idx}>
                                        <input
                                            type={label.toLowerCase()}
                                            id={label.toLowerCase()}
                                            className="w-full px-3 py-3 leading-tight text-gray-700 border rounded shadow appearance-none peer focus:outline-none focus:border-blue-500"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            htmlFor={label.toLowerCase()}
                                            className="absolute text-gray-500 transition-all duration-300 transform -translate-y-6 scale-75 top-3 left-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:top-1 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                            {label}
                                        </label>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between">
                                    <button
                                        type="submit"
                                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    >
                                        Login
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
                            <button
                                type="button"
                                onClick={openSignUp}
                                className="mt-4 text-blue-500 hover:text-blue-700"
                            >
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <SignUpModal isOpen={isSignUpOpen} onClose={closeSignUp} />
        </>
    );
};

export default LoginModal;
