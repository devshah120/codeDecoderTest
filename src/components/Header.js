import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6">
          <li className="hover:text-gray-500">Home</li>
          <li className="hover:text-gray-500">About Us</li>
          <li className="hover:text-gray-500">Shop</li>
          <li className="hover:text-gray-500">Contact</li>
        </ul>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-lg">Call to Action</button>
      </nav>
    </header>
  );
};

export default Header;
