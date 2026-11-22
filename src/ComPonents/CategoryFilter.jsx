import React from 'react'
import {initialProducts} from "../Data/Productdtata"

import {Phone, Tag} from "lucide-react"



const avblablecoetegries = [
  "All",...new Set(initialProducts.map(p=>p.category))
]


const CategoryFilter = () => {
  const selectcategory = "Phone"
  return (
    <> 
    <div className=" flex flex-wrap gap-3 border-b text-white  border-gray-800 pb-6"> 
      <Tag className=" w-5 h-5 text-orange-400 mt-2 mr-2 hidden sm:block "/>
      {avblablecoetegries.map((category)=>(
          <button key={category} className={` px-5 py-2 text-bold text-sm rounded-full transition duration-200
          shadow-md ${ selectcategory === category ? " bg-orange-600  text-white shadow-orange-800/50"
          : " bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-orange-400 border border-gray-700  "
          } `}>{category}</button>
      ))}
      </div></>
  )
}

export default CategoryFilter