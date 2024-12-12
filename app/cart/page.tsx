'use client'

import Image from 'next/image'
import { useState } from 'react'
import { CartItem } from '../../types'

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: 'Classic White T-Shirt', price: 19.99, quantity: 2, image: '/product-1.jpg', description: '' },
    { id: 2, name: 'Slim Fit Jeans', price: 49.99, quantity: 1, image: '/product-2.jpg', description: '' },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="rounded-md mr-4"
                />
                <div className="flex-grow">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300">
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 transition duration-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Total: ${total.toFixed(2)}</h2>
            <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}

