import React from 'react'
import { BrowserRouter  , Routes, Route  } from 'react-router-dom';
import Orderconformation from './Pages/Orderconformation'
import Cart from './Pages/Cart'
import Chekout from './Pages/Chekout'
import ProductDetail from './Pages/ProductDetail'
import Navbar from './ComPonents/Navbar'
import Footur from './ComPonents/Footur'
const App = () => {
  return (
  <>
    <BrowserRouter>

    <div className=" bg-gray-950 h-full ">
     <Navbar/>
    
    <Routes>
      <Route path="/" element={<ProductDetail/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/chekout" element={<Chekout/>}/>
    <Route path="/orderconformation" element={<Orderconformation/>}/>
    
     </Routes>
     <Footur/>
    
    </div>
   </BrowserRouter>  
  </>
 
  
  )
}

export default App