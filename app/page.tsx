import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className="relative h-screen">
        <Image
          src="/hero-image.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Summer Collection</h1>
            <p className="text-xl mb-8">Discover the latest trends in fashion</p>
            <Link href="/category" className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/product-${product}.jpg`}
                  alt={`Product ${product}`}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <p className="text-gray-600 mb-2">$99.99</p>
                  <Link href={`/product/${product}`} className="bg-black text-white px-4 py-2 rounded-md inline-block hover:bg-gray-800 transition duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Men', 'Women', 'Kids'].map((category) => (
              <div key={category} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={`/${category.toLowerCase()}-category.jpg`}
                  alt={category}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Link href={`/category?type=${category.toLowerCase()}`} className="text-white text-2xl font-semibold hover:underline transition duration-300">
                    {category}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

