import React from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  totalPrice: number;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, totalPrice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
              <span>Your Order</span>
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add some delicious food to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-gray-50 rounded-xl p-4 transition-all duration-200 hover:bg-gray-100">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.restaurantName}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-orange-600">${item.price}</span>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-orange-100 rounded-full transition-colors duration-200"
                            >
                              <Minus className="h-4 w-4 text-orange-600" />
                            </button>
                            <span className="w-8 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-orange-100 rounded-full transition-colors duration-200"
                            >
                              <Plus className="h-4 w-4 text-orange-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-orange-600">${totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-orange-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
                Proceed to Checkout
              </button>
              <p className="text-xs text-gray-500 text-center mt-2">
                Delivery fees and taxes will be calculated at checkout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;