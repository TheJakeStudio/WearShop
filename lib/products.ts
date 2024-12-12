import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 19.99,
    image: '/white tshirt.jpg',
    description: 'A comfortable and versatile white t-shirt made from 100% cotton.',
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 49.99,
    image: '/slim fit jeans.png',
    description: 'Stylish slim fit jeans in a classic blue wash.',
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 199.99,
    image: '/leather jacket.jpg',
    description: 'A timeless leather jacket that adds edge to any outfit.',
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 79.99,
    image: '/running shoes.jpg',
    description: 'Lightweight and comfortable running shoes for your daily jog.',
  },
  {
    id: 5,
    name: 'Summer Dress',
    price: 39.99,
    image: '/summer dress.jpg',
    description: 'A breezy summer dress perfect for warm days.',
  },
  {
    id: 6,
    name: 'Wool Sweater',
    price: 69.99,
    image: '/wool sweater.jpg',
    description: 'A cozy wool sweater to keep you warm during colder months.',
  },
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

