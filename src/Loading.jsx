import React from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Loading()
{ 
    
    return (
    
<div>

    <div className="flex flex-col items-center gap-2 justify-center  min-h-[calc(100vh-170px)]">
       <p className="text-4xl font-bold">Loading....</p>
       <AiOutlineLoading3Quarters className="animate-spin text-4xl"/>
    </div>
   
</div>
)

}
export default Loading;