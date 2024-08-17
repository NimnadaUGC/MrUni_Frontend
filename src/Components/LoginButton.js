import React, { useState } from 'react';
import LoginModal from './LoginModel';

const LoginButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <button
                onClick={openModal}
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
                Login
            </button>
            <LoginModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default LoginButton;
