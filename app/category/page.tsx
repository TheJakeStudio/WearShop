import Image from 'next/image'
import Link from 'next/link'
import { products } from '../../lib/products'

export default function Category() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
              <Link href={`/product/${product.id}`} className="bg-black text-white px-4 py-2 rounded-md inline-block hover:bg-gray-800 transition duration-300">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

