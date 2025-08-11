import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { HiArrowNarrowLeft ,  HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { getProduct } from './Dummy';
import Loading from "./Loading"
import NotFound from './NotFound';
import { IoHandLeft } from 'react-icons/io5';

function ProductInfo({onAddToCart})
{
 

   const id= +(useParams().id);
   const[product, setProduct] =useState();
   const[count,setCount]=useState(1);

 function HandleCountChange(event)
 {
     setCount(+event.target.value);
 }
   useEffect(function(){
     const p= getProduct(id);
     p.then(function(response)
   {
      setProduct(response.data);
   });
   },[id]);
    if(!product)
    { 
      return <Loading></Loading>
    }
    function HandleButtonClick()
    {

       onAddToCart(id,count);
      
       
   }
   function CountHandle(){
       setCount(1);
   }


    return (

      <div>
          <div className=' justify-center    bg-gray-300 flex flex-col items-center '>
         <Link to="/" className="self-start mt-5 flex font-bold  text-red-400 items-center" >
       <HiArrowNarrowLeft className="text-4xl text-red-400"/>HOME
       </Link>
        <div className="flex bg-white m-8  mb-0 w-240 min-h-110 ">
            <img src={product.thumbnail} className="w-2/5 m-10"/>
            <div className="m-10 ml-3">
                 <h1 className="font-semibold font-sans text-4xl">
                    {product.title}
                 </h1>
                 <h2 className="font-sans font-semibold text-2xl m-3 ml-0">
                    ${product.price}.00
                 </h2>
                 <p className="font-sans  text-l  m-3 ml-0">
                    {product.description}
                 </p>
                 <div className='gap-1'>
                  <input value={count} onChange={HandleCountChange} min={1} type="number" placeholder="1" className="font-sans  w-20 border-1 m-3 py-1 ml-0"></input>
                 <button onClick={HandleButtonClick} className="font-sans font-semibold text-xl m-3 ml-0 border-2 bg-red-400 text-white px-10 py-1">
                    Add To Cart
                 </button>
                 </div>
               </div> 
              
      
         </div> 
         <div className='flex  m-2  justify-between w-240 '>
            
               <div> 
                  {id>1 && (
                  <Link to={"/product/" + (id-1)} className="self-start mt-5 flex  px-[2px] py-[1px] rounded bg-red-400 text-white font-bold items-center" >
                      <HiArrowNarrowLeft onClick={CountHandle} className="text-4xl text-white"/>Previous
                  </Link>
                  )}
               </div>
             
         <div> 
             <Link to={"/product/" + (id+1)}  className="self-end mt-5 flex px-[2px] py-[1px] bg-red-400 rounded text-white font-bold items-center" >
             <HiArrowNarrowRight onClick={CountHandle} className="text-4xl text-white"/>Next
             </Link>
         </div>
       </div>
             
             </div> 
         
      
      </div>
    )
}

export default ProductInfo