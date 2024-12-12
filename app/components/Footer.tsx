import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">About Us</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Contact</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Shipping</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Returns</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Sizing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Store</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Men</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Women</Link></li>
              <li><Link href="#" className="hover:text-gray-600 transition duration-300">Kids</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-black" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition duration-300">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 E-commerce Clothing Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

