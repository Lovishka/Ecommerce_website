import React from "react";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";
function NavBar({pcount})
{ 
    

    return <div className=' bg-white h-20 flex items-center justify-between  '>
    <img className="w-40  ml-20"
    src="https://static.vecteezy.com/system/resources/previews/014/018/563/non_2x/amazon-logo-on-transparent-background-free-vector.jpg"></img>
<div className=" w-70 h-20 wrap flex justify-between m-2 items-center">
    <div className="flex flex-col size-20 items-center  justify-center ">
    <Link to="/cart"><FiShoppingCart    className="text-3xl  text-red-400"/></Link>
    <span className=" text-red-400 " >
        {pcount}
    </span>
    </div>
    <span><Link to="/login" className="text-red-400 text-xl">Login/SignUp</Link></span>
</div>
 </div>
}
export default NavBar;