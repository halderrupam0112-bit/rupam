export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  category: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  description: string;
  address: string;
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}