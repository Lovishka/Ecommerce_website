import React  from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
function EmptyCart()
{
return <div className="text-3xl font-bold flex flex-col text-red-500  items-center  p-[5px] bg-gray-100 ">
            <h1>Cart is Empty!</h1>
            <div className="">
               <Link to="/" className="self-start mt-5 flex font-bold text-xl  text-white p-[10px] rounded  bg-red-400 items-center" >
                     <HiArrowNarrowLeft className="text-2xl text-white bg-red-400"/>Back To Home
          </Link>
            </div>
            
     </div>
}
export default EmptyCart