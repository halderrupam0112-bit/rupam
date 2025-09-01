import React from 'react';

interface CategoriesProps {
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All', emoji: '🍽️' },
  { id: 'italian', name: 'Italian', emoji: '🍝' },
  { id: 'indian', name: 'Indian', emoji: '🍛' },
  { id: 'chinese', name: 'Chinese', emoji: '🥡' },
  { id: 'american', name: 'American', emoji: '🍔' },
  { id: 'japanese', name: 'Japanese', emoji: '🍣' },
  { id: 'mexican', name: 'Mexican', emoji: '🌮' }
];

const Categories: React.FC<CategoriesProps> = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What's on your mind?</h2>
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex-shrink-0 flex flex-col items-center p-4 rounded-xl transition-all duration-200 transform hover:scale-105 ${
              selectedCategory === category.id
                ? 'bg-orange-100 border-2 border-orange-500 shadow-lg'
                : 'bg-white border-2 border-gray-200 hover:border-orange-300 shadow-md hover:shadow-lg'
            }`}
          >
            <span className="text-3xl mb-2">{category.emoji}</span>
            <span className={`text-sm font-medium ${
              selectedCategory === category.id ? 'text-orange-600' : 'text-gray-700'
            }`}>
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;