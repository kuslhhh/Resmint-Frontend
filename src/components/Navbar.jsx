import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ["Home", "Create", "Saved"]

  return (
    <nav className="text-[#fa9977] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/arc.png" alt="" className="w-11 h-11 mx-2" />
            <h1 className="font-bold text-4xl">Resmint</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="relative inline-block text-[#fa9977]
                           after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[1px]
                           after:bg-[#fa9977] after:transition-all after:duration-500 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex font-medium gap-4">
            <Link to="/register" className="rounded-full bg-[#F94C03] text-[#2a2d34] p-2 px-5 py-3">
              Sign up
            </Link>
            <Link to="/login" className="text-[#fa9977] mx-2 flex items-center">
              Login
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#fa9977] transition-transform duration-300 ease-in-out"
              style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-[#2a2d34] transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="block text-[#fa9977] px-3 py-2 text-base font-medium"
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-[#fa9977]">
          <div className="flex items-center px-5">
            <Link
              to="/register"
              className="rounded-full bg-[#F94C03] text-[#2a2d34] p-2 px-5 py-3 mr-4"
              onClick={toggleMenu}
            >
              Sign up
            </Link>
            <Link to="/login" className="text-[#fa9977]" onClick={toggleMenu}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
