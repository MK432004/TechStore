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
          <div  className=" absolute bg-orange-500 px-5 py-2 text-white text-xl font-extrabold rounded-tr-xl shadow-lg  bottom-0  left-0 ">
            <p>{product.price}</p>
          </div>
        </Link>
        <div className="flex flex-col p-5  grow ">
          <Link to="/product">
          <h3 className=" text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-orange-400 transition
          duration-200 line-clamp-1 ">{product.name}</h3>
          </Link>
          <p className=" caret-lime-3 ">{product.description}</p>
          <div className=" items-center flex mb-4 ">
            <span className="border  px-3 py-1  ">{product. category}</span>
          </div>
        </div>
       
       
      
      </div> 
    </>
  )
}

export default ProductCard