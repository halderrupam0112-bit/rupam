import React from 'react';
import { Star, Clock, Truck } from 'lucide-react';
import { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold text-gray-800">{restaurant.rating}</span>
        </div>
        {restaurant.deliveryFee === 0 && (
          <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            FREE DELIVERY
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
            {restaurant.name}
          </h3>
        </div>
        
        <p className="text-gray-600 mb-3 line-clamp-2">{restaurant.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>${restaurant.deliveryFee}</span>
            </div>
          </div>
          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
            {restaurant.cuisine}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;