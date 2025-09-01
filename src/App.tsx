import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';
import Cart from './components/Cart';
import { restaurants } from './data/restaurants';
import { CartItem } from './types';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesCategory = selectedCategory === 'all' || restaurant.category === selectedCategory;
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const updateCartItemQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  if (selectedRestaurant) {
    const restaurant = restaurants.find(r => r.id === selectedRestaurant);
    if (restaurant) {
      return (
        <div className="min-h-screen bg-gray-50">
          <Header 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            cartItemCount={getTotalItems()}
            onCartClick={() => setIsCartOpen(true)}
          />
          <RestaurantDetail 
            restaurant={restaurant}
            onBack={() => setSelectedRestaurant(null)}
            onAddToCart={addToCart}
          />
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            items={cartItems}
            onUpdateQuantity={updateCartItemQuantity}
            totalPrice={getTotalPrice()}
          />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartItemCount={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <Categories 
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <RestaurantList 
        restaurants={filteredRestaurants}
        onRestaurantSelect={setSelectedRestaurant}
      />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        totalPrice={getTotalPrice()}
      />
    </div>
  );
}

export default App;