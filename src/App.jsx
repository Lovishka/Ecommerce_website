import React, { useState }  from 'react';
import ProductInfo from './ProductInfo';
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import Footer from './Footer';
import NavBar from './Navbar';
import NotFound from './NotFound';
import MyCart from './MyCart';


function App() {
  
   
const savedStringCart=localStorage.getItem("my-cart") || "{}";
const savedCart=JSON.parse(savedStringCart);

  const[Cart,setCart]=useState(savedCart);
 
  function handleAddToCart(productId,count){
    const oldCount=Cart[productId] || 0 ;
    const newCart={...Cart,[productId]:oldCount + count}
  
    setCart(newCart);
    const cartString=JSON.stringify(newCart);
    localStorage.setItem("my-cart",cartString);

  }
  
  let totalCount= Object.keys(Cart).reduce(function(previous,current)
{
 return  previous + Cart[current];
},0);

  return( <div>
   
  <NavBar pcount={totalCount} ></NavBar>
 <div className="grow">
 <Routes>
      <Route index element={<Home />} />
      <Route path="/product/:id" element={<ProductInfo  onAddToCart={handleAddToCart}/>} />
      <Route path="/cart" element={<MyCart props={Cart}setCart={setCart} ></MyCart>}/>
      <Route path="*" element={<NotFound />}/>  
</Routes>


 </div>

<Footer></Footer>
    
    </div>
  );
}

export default App;
