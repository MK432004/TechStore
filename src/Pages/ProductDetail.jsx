import React from 'react'
import SearchFilter from '../ComPonents/SearchFilter';
import CategoryFilter from '../ComPonents/CategoryFilter';

import ProductCard from '../ComPonents/ProductCard';
import { useCart } from '../Context.jsx/Cartprovider';
const ProductDetail = () => {
  const {productdata} = useCart() 
    
  
  return (
    <>
    <div className=" container mx-auto px-8 md:px-8 pt-8 ">

      <SearchFilter/>
      <CategoryFilter/>
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center  text-white  "> 
      
      {productdata.map((elem,index) => (
       <ProductCard key={index}  product={elem}/>
     ))}

    </div>
    
      
    </div>
   
    
    </>
  )
}

export default ProductDetail