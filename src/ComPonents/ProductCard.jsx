import React from 'react'
import ProductDetail from '../Pages/ProductDetail';
import  { Link } from 'react-router-dom'


const ProductCard = ({product}) => {
  console.log("maydata" , product)
 
  return (
    <>
     <div className=" bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition
      duration-500 transform border border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40 ">
       <Link to="/product"  className=" relative cursor-pointer overflow-hidden " >
        <img src={product.image} alt={} className=" w-full h-56 object-center  object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90  "/>
        <img src={product.image} alt={} className=" w-full h-56 object-center  object-cover transition duration-500 group-hover:scale-110 group-hover:opacity-90  "/>
        
        </Link>
       
       
      
      </div> 
    </>
  )
}

export default ProductCard