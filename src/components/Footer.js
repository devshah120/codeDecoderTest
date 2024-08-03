import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-10 px-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        {/* Left Side Content */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-left">
          <p className="mb-4">
            Our mission is very important to the planet: we plant as many trees as possible. Can you figure out?
          </p>
        </div>

        {/* Center Content */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-center">
          <p className="mb-4">
            <a href="#" className="text-white underline">More information</a>
          </p>
          <div className="flex flex-col items-center">
            <a href="#" className="text-white mb-2">Home</a>
            <a href="#" className="text-white mb-2">About us</a>
            <a href="#" className="text-white mb-2">Shop</a>
            <a href="#" className="text-white">Contact</a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end">
          <p className="mb-4">Subscribe now to the newsletter</p>
          <form action="#" method="post" className="flex flex-col items-center md:items-end w-full max-w-sm">
            <input type="text" name="name" placeholder="Your name" className="mb-2 p-2 rounded bg-gray-800 text-white" />
            <input type="email" name="email" placeholder="Your email" className="mb-2 p-2 rounded bg-gray-800 text-white" />
            <div className="flex items-center mb-2">
              <input type="checkbox" name="privacy" required className="mr-2" />
              <label htmlFor="privacy" className="text-white">I consent to the privacy policy</label>
            </div>
            <button type="submit" className="bg-gray-700 text-white p-2 rounded">Subscribe!</button>
          </form>
        </div>
      </div>

      <p className="mt-8 text-sm text-center">
        Basic Components © 2022. All rights reserved. <a href="#" className="text-white underline">Privacy Policy</a> | <a href="#" className="text-white underline">Cookies</a> | <a href="#" className="text-white underline">Legal Advice</a> | <a href="#" className="text-white underline">FAQ</a>
      </p>
    </footer>
  );
};

export default Footer;
