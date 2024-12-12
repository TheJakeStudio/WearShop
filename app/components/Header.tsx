import Link from 'next/link'
import { ShoppingCart, Search, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">LOGO</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-gray-600 transition duration-300">Home</Link></li>
            <li><Link href="/category" className="hover:text-gray-600 transition duration-300">Category</Link></li>
            <li><Link href="#" className="hover:text-gray-600 transition duration-300">About</Link></li>
            <li><Link href="#" className="hover:text-gray-600 transition duration-300">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <button className="hover:text-gray-600 transition duration-300"><Search className="w-6 h-6" /></button>
          <Link href="/cart" className="hover:text-gray-600 transition duration-300"><ShoppingCart className="w-6 h-6" /></Link>
          <button className="hover:text-gray-600 transition duration-300"><User className="w-6 h-6" /></button>
        </div>
      </div>
    </header>
  )
}

export default Header

