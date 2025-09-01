import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Truck, Leaf, Flame } from 'lucide-react';
import { Restaurant, MenuItem } from '../types';

interface RestaurantDetailProps {
  restaurant: Restaurant;
  onBack: () => void;
  onAddToCart: (item: Omit<import('../types').CartItem, 'quantity'>) => void;
}

const RestaurantDetail: React.FC<RestaurantDetailProps> = ({ restaurant, onBack, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const menuCategories = ['all', ...Array.from(new Set(restaurant.menu.map(item => item.category)))];
  
  const filteredMenu = selectedCategory === 'all' 
    ? restaurant.menu 
    : restaurant.menu.filter(item => item.category === selectedCategory);

  const handleAddToCart = (menuItem: MenuItem) => {
    onAddToCart({
      ...menuItem,
      restaurantId: restaurant.id,
      restaurantName: restaurant.name
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm p-2 rounded-full hover:bg-opacity-100 transition-all duration-200"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800" />
        </button>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg text-gray-200 mb-4">{restaurant.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center space-x-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center space-x-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
              <Truck className="h-4 w-4" />
              <span>${restaurant.deliveryFee} delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="bg-white border-b sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide py-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap pb-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {category === 'all' ? 'All Items' : category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-6">
          {filteredMenu.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                        {item.isVegetarian && (
                          <Leaf className="h-5 w-5 text-green-500" title="Vegetarian" />
                        )}
                        {item.isSpicy && (
                          <Flame className="h-5 w-5 text-red-500" title="Spicy" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-orange-600">${item.price}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-md"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;