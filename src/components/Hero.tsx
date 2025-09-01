import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover the best food & drinks
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
            Order from your favorite restaurants and get it delivered fresh to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Order Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-200 transform hover:scale-105">
              Explore Restaurants
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero;