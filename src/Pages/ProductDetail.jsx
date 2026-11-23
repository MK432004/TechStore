import React from 'react'
import SearchFilter from '../ComPonents/SearchFilter';
import CategoryFilter from '../ComPonents/CategoryFilter';

import ProductCard from '../ComPonents/ProductCard';
const ProductDetail = () => {
   
  
  return (
    <>
    <div className=" container mx-auto px-8 md:px-8 pt-8 ">

      <SearchFilter/>
      <CategoryFilter/>
      <ProductCard/>
    
      
    </div>
   
    
    </>
  )
}

export default ProductDetail