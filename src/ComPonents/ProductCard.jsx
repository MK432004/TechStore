import React from 'react'
import { useCart } from '../Context.jsx/Cartprovider';


const ProductCard = () => {

  const {  productdata } = useCart();
 

  return (
    <div className=" grid grid-cols-1 bg-gray-950 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">

      { productdata?.map((item) => (
        <div key={item.id} className=" text-white shadow-md rounded-xl p-4 border border-gray-700 ">

          <img
            src={item.image}
            alt={item.name}
            
        
            className=" w-full h-48 object-contain "
            
          />
            <p className="text-gray-600 mt-2">
            ₹{item.price}
          </p>

          <h2 className="text-lg font-semibold mt-3">
            {item.name}
          </h2>


          <button className="bg-orange-400 text-white px-4 py-2 rounded-lg w-full mt-4">
            Add To Cart
          </button>

        </div>
      ))}

    </div>
  )
}

export default ProductCard;