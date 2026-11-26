import React from 'react'
import ProductDetail from '../Pages/ProductDetail';
import  { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
 
 
  return (
    <>
     <div className=" bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition
      duration-500 transform border border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40 ">
       <Link to="/product"  className=" relative cursor-pointer overflow-hidden " >
        <img src={product.image} alt={product.name} className=" w-full h-56 object-center  object-cover   transition duration-500 group-hover:scale-110 group-hover:opacity-90  ">
          </img>
         
    {/* Product Price */}
    <p className="bg-orange-600 text-white font-bold text-lg py-2 px-5 shadow-lg">
      ₹{product.price.toFixed(2)}
    </p>

    {/* Product Name */}
    <h3 className="text-white text-lg font-semibold p-4 hover:text-orange-400 transition duration-300">
      {product.name}
    </h3>
        </Link>
       
       
      
      </div> 
    </>
  )
}

export default ProductCard