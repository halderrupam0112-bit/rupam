import React from 'react';
import RestaurantCard from './RestaurantCard';
import { Restaurant } from '../types';

interface RestaurantListProps {
  restaurants: Restaurant[];
  onRestaurantSelect: (restaurantId: string) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants, onRestaurantSelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Restaurants near you</h2>
        <span className="text-gray-600">{restaurants.length} restaurants found</span>
      </div>
      
      {restaurants.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No restaurants found</h3>
          <p className="text-gray-500">Try adjusting your search or browse different categories</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={() => onRestaurantSelect(restaurant.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;