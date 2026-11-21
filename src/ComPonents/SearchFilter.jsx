import { Search } from 'lucide-react';
import React from 'react'


const SearchFilter = () => {
  return (
    <>
    <div className="bg-gray-900  p-5 mb-5  rounded-xl border-y-gray-900 shadow-xl border ">
      <div className=" focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800 flex items-center border border-gray-700 rounded-xl overflow-hidden  ">
      <Search className=" text-gray-700 w-5 h-5 ml-4 "/>
      <input type="text" placeholder="enter the input " className=" outline-none p-3 text-base font-medium w-full text-white bg-gray-800 "
      />
      </div>
    </div>
    </>
  )
}

export default SearchFilter