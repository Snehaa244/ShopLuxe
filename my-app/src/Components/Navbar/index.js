import React from 'react'
import { Link } from 'react-router-dom'

const navigations = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Products',
    path: '/products'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Categories',
    path: '/categories'
  }
]

const Navbar = () => {
  return (
    <header className="text-black font-serif font-semibold  bg-[#b5a891] sticky top-0 z-50 body-font ">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <Link to={'/'} className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-2 md:mb-0">
          <img  className="mt-2" src="SHOPLUXE.png " width={"140px"} height={"140px"}/>
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
          {
            navigations.map((navigation) => {
              return (
                <Link to={navigation.path} className="mr-5 hover:text-gray-900">{navigation.name}</Link>
              )
            })
          }
        </nav>
        <Link to={'/cart'} className="text-white bg-gradient-to-br from-orange-800 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-600 font-medium rounded-lg text-sm mr-2 px-4 py-1.5 text-center mb-2">Login
        </Link>
        <Link to={'/cart'} className="text-white bg-gradient-to-br from-orange-800 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-600 font-medium rounded-lg text-sm px-4 mr-2 py-1.5 text-center mb-2">SignUp
        </Link>
        <Link to={'/cart'} className="text-white bg-gradient-to-br from-orange-800 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-600 font-medium rounded-lg text-sm px-4 mr-2 py-1.5 text-center mb-2">Your Cart
        </Link>
      </div>
    </header>
  )
}

export default Navbar;