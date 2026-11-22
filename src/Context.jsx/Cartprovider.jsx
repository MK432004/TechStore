
import React from 'react'
import {createContext, useContext } from "react"
import { initialProducts } from '../Data/Productdtata';
import Cart from '../Pages/Cart';

const Cartcontext = createContext()
  export const Cartprovider  = (props) => { 
    const productdata = initialProducts 

  return (
    <><Cartcontext.Provider value={{productdata}}>
      {props.children}
    </Cartcontext.Provider>
    </>
  )
}

export  const useCart = () => useContext(Cartcontext);