import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getProductById } from '../../../lib/products'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <button className="bg-black text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-800 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

