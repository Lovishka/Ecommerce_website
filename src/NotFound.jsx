import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi2";
function NotFound()
{  
   return( <div className="flex flex-col  w-full min-h-[calc(100vh-160px)] bg-gray-300 items-center justify-center">
         <p className="text-3xl  h-full font-bold p-5">Product Not Found!</p>
        <img src="https://unicorn-images.b-cdn.net/4d19f0b2-be24-448b-a89a-8bd477ad921a?optimizer=gif" alt="product not found"/>
        <Link to="/" className="text-xl  font-sans font-bold flex items-center rounded  bg-red-400 text-white p-[5px] m-2">
        <HiArrowLeft  />Back to Home</Link>
       
    </div>)

}

   
export default NotFound;