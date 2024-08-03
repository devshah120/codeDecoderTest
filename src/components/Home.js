import React from 'react';

const Home = () => {
  return (
    <div className="home bg-gray-100">
      <section className="hero bg-white text-gray-800 text-center py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="text-left md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">The future of web design, today</h1>
            <p className="text-xl mb-6">The future of web design, today</p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg">Call to action</button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="w-64 h-64 bg-gray-400 mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="mission py-16 bg-white container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">What we do</h2>
        <p className="mb-6 max-w-2xl mx-auto">Our mission is very important to the planet: we plant as many trees as possible.</p>
        <ul className="list-disc list-inside space-y-4 text-left max-w-2xl mx-auto">
          <li>We recycle everything we see</li>
          <li>We teach people how to reuse their stuff</li>
          <li>We believe in human being as problem solver</li>
        </ul>
      </section>

      <section className="featured bg-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Featured things</h2>
          <p className="mb-6 max-w-2xl mx-auto">Our mission is very important to the planet: we plant as many trees as possible. Can you figure out?</p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">Call to action</button>
        </div>
      </section>

      {/* New Section with Image Boxes */}
      <section className="image-boxes py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">The future of web design, today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="w-full h-40 bg-gray-400 mb-4"></div>
              <p className="text-lg font-semibold mb-4">The future of web design, today</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Call to action</button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="w-full h-40 bg-gray-400 mb-4"></div>
              <p className="text-lg font-semibold mb-4">The future of web design, today</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Call to action</button>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg">
              <div className="w-full h-40 bg-gray-400 mb-4"></div>
              <p className="text-lg font-semibold mb-4">The future of web design, today</p>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Call to action</button>
            </div>
          </div>
        </div>
      </section>

      <section className="download py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Our mission is very important to the planet: we plant as many
        trees as possible. Can you figure out?</h2>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg">Call to action</button>
      </section>
    </div>
  );
};

export default Home;
