import React from 'react';
import { Search, ShoppingCart, MapPin } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  cartItemCount, 
  onCartClick 
}) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">Zomato</h1>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center space-x-2 text-gray-600">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">New York, NY</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for restaurants or cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
              />
            </div>
          </div>

          {/* Cart */}
          <button
            onClick={onCartClick}
            className="relative p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-all duration-200 transform hover:scale-105"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;