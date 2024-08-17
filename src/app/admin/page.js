'use client';
import React from 'react';
import Image from 'next/image';

const AdminLogin = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo/logo.png" // Replace with your logo path
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-700">Admin Login</h2>
        <form className="mt-8 space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={() => alert('Forgot Password functionality not implemented yet.')}
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
