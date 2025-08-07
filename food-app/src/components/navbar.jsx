import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';
import Landingpage from './Landingpage';

const Navbar = () => {

  return (
    <>
    {/* <nav className="bg-gray-400 w-full shadow-2xs fixed animate-pulse">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">
        <h2 className="text-2xl font-bold text-white">Elie Logo</h2>
        <ul className="flex gap-6 items-center">
          <li className="text-white hover:text-blue-200 transition cursor-pointer">Home</li>
          <li className="text-white hover:text-blue-200 transition cursor-pointer">About</li>
          <li className="text-white hover:text-blue-200 transition cursor-pointer">Privacy</li>
          <li className="text-white hover:text-blue-200 transition cursor-pointer">Policy</li>
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-1 rounded-xl transition cursor-pointer">
            Sign Up
          </button>
          <div class="dark:bg-gray-800 bg-white">Dark Mode</div>
        </ul>
      </div>

      
    </nav> */}
    <Landingpage/>
    </>
  );
};

export default Navbar;
