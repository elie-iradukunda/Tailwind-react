import React from 'react';
import '../app.css';

const Navbar = () => {
  return (
    <nav className="bg-gray-400 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Elie Logo</h2>
        <ul className="flex gap-6 items-center">
          <li className="text-white hover:text-blue-200 transition cursor-pointer">Home</li>
          <li className="text-white hover:text-blue-200 transition cursor-pointer">About</li>
          <li className="text-white hover:text-blue-200 transition cursor-pointer">Privacy</li>
          <li className="text-white hover:text-blue-200 transition cursor-pointer">Policy</li>
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 rounded-md transition">
            Sign Up
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
