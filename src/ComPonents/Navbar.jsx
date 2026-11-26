import React from 'react'
import { Link } from 'react-router-dom';
import { Home,ShoppingCart} from 'lucide-react';
const Navbar = () => {
  return (
    <>
    <header className="sticky top-0 flex bg-gray-900 justify-between px-5 py-2 text-orange-400  border-b ">
      <Link className="flex  gap-1 ">
      <Home className="text-orange-400 "/>
      <h1 className="text-white ">Tech <span className="text-orange-400  gap-1 ">Store </span></h1>
      </Link>

      <Link to="/cart" className=" border-orange-400 border shadow-lg  rounded ">
      <ShoppingCart className="text-orange-400" />

      </Link>

    </header>
    
      
      

    </>
  )
}

export default Navbar