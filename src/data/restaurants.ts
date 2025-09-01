import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bella Vista Italian',
    cuisine: 'Italian',
    category: 'italian',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Authentic Italian cuisine with fresh ingredients and traditional recipes.',
    address: '123 Main Street, Downtown',
    menu: [
      {
        id: '1-1',
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh mozzarella, tomatoes, and basil',
        price: 16.99,
        image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Pizza',
        isVegetarian: true
      },
      {
        id: '1-2',
        name: 'Chicken Alfredo',
        description: 'Grilled chicken with creamy alfredo sauce over fettuccine',
        price: 19.99,
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Pasta'
      },
      {
        id: '1-3',
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce with caesar dressing and parmesan',
        price: 12.99,
        image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Salads',
        isVegetarian: true
      }
    ]
  },
  {
    id: '2',
    name: 'Spice Palace',
    cuisine: 'Indian',
    category: 'indian',
    rating: 4.6,
    deliveryTime: '30-40 min',
    deliveryFee: 3.49,
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Aromatic Indian dishes with authentic spices and flavors.',
    address: '456 Curry Lane, Spice District',
    menu: [
      {
        id: '2-1',
        name: 'Butter Chicken',
        description: 'Tender chicken in rich tomato and cream sauce',
        price: 18.99,
        image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course',
        isSpicy: true
      },
      {
        id: '2-2',
        name: 'Vegetable Biryani',
        description: 'Fragrant basmati rice with mixed vegetables and spices',
        price: 16.99,
        image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Rice',
        isVegetarian: true,
        isSpicy: true
      },
      {
        id: '2-3',
        name: 'Garlic Naan',
        description: 'Fresh baked bread with garlic and herbs',
        price: 4.99,
        image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Bread',
        isVegetarian: true
      }
    ]
  },
  {
    id: '3',
    name: 'Dragon Palace',
    cuisine: 'Chinese',
    category: 'chinese',
    rating: 4.7,
    deliveryTime: '20-30 min',
    deliveryFee: 2.49,
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional Chinese cuisine with modern presentation.',
    address: '789 Bamboo Street, Chinatown',
    menu: [
      {
        id: '3-1',
        name: 'Sweet & Sour Chicken',
        description: 'Crispy chicken with bell peppers in tangy sauce',
        price: 17.99,
        image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course'
      },
      {
        id: '3-2',
        name: 'Vegetable Fried Rice',
        description: 'Wok-fried rice with fresh vegetables and soy sauce',
        price: 13.99,
        image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Rice',
        isVegetarian: true
      }
    ]
  },
  {
    id: '4',
    name: 'Burger Junction',
    cuisine: 'American',
    category: 'american',
    rating: 4.5,
    deliveryTime: '15-25 min',
    deliveryFee: 1.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Gourmet burgers and classic American comfort food.',
    address: '321 Burger Ave, Food Court',
    menu: [
      {
        id: '4-1',
        name: 'Classic Cheeseburger',
        description: 'Beef patty with cheese, lettuce, tomato, and special sauce',
        price: 14.99,
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Burgers'
      },
      {
        id: '4-2',
        name: 'Crispy Chicken Wings',
        description: 'Buffalo wings with ranch dipping sauce',
        price: 12.99,
        image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Appetizers'
      }
    ]
  },
  {
    id: '5',
    name: 'Sakura Sushi',
    cuisine: 'Japanese',
    category: 'japanese',
    rating: 4.9,
    deliveryTime: '35-45 min',
    deliveryFee: 3.99,
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fresh sushi and traditional Japanese cuisine.',
    address: '567 Sushi Street, Little Tokyo',
    menu: [
      {
        id: '5-1',
        name: 'Salmon Nigiri Set',
        description: 'Fresh salmon nigiri with wasabi and ginger',
        price: 22.99,
        image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Sushi'
      },
      {
        id: '5-2',
        name: 'Chicken Teriyaki',
        description: 'Grilled chicken with teriyaki sauce and steamed rice',
        price: 18.99,
        image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Main Course'
      }
    ]
  },
  {
    id: '6',
    name: 'Taco Fiesta',
    cuisine: 'Mexican',
    category: 'mexican',
    rating: 4.4,
    deliveryTime: '20-30 min',
    deliveryFee: 2.99,
    image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Authentic Mexican flavors with fresh ingredients.',
    address: '890 Fiesta Boulevard, Mexico Quarter',
    menu: [
      {
        id: '6-1',
        name: 'Beef Tacos',
        description: 'Three soft tacos with seasoned beef, lettuce, and cheese',
        price: 13.99,
        image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Tacos'
      },
      {
        id: '6-2',
        name: 'Guacamole & Chips',
        description: 'Fresh guacamole with crispy tortilla chips',
        price: 8.99,
        image: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=400',
        category: 'Appetizers',
        isVegetarian: true
      }
    ]
  }
];