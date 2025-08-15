import React,  {  useState,useEffect} from "react";
import { getProduct } from "./Dummy";
import EmptyCart from "./EmptyCart";
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft , HiPlusSm, HiOutlineMinusSm } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";
function MyCart({props, setCart})
{

const [products, setProducts] = useState([]);
 const [update,SetUpdate]=useState(false);
  useEffect(() => {
       var entries = Object.entries(props); 

    Promise.all(
      entries.map(function (pair) {
        var id = pair[0];
        var qty = pair[1];
        return getProduct(id).then(function (res) {
          
          return { ...res.data, quantity: qty };
        });
      })
    ).then(function (data) {
      setProducts(data);
    });
  }); 
  let total = products.reduce(function (sum, product) {
  return sum + product.price * product.quantity;
}, 0);
  total = total.toFixed(2);

function handleUpdate() 
{ 
  const filtered = products.filter(p => p.quantity > 0); 
  setProducts(filtered);

  const updatedCart = {};
  filtered.forEach(item => {
    updatedCart[item.id] = item.quantity;
  });

  setCart(updatedCart); 
  localStorage.setItem("my-cart", JSON.stringify(updatedCart));
  SetUpdate(true);
 
 
}
function deleteItem(index)
{
console.log(index);
 const updated = [...products];
  updated[index].quantity=0;
   
     handleUpdate() 
     localStorage.setItem("my-cart", JSON.stringify(updated));
     updated.splice(index, 1);
     
    setProducts(updated);
}
function AddItem(index) {
  const updated = [...products];
  updated[index].quantity++;
   setProducts(updated);
}

function RemoveItem(index)
{   
  
  const updated = [...products];
  updated[index].quantity--;
   if (updated[index].quantity <= 0) {
     handleUpdate() 
     localStorage.setItem("my-cart", JSON.stringify(updated));
     updated.splice(index, 1);
     }
    setProducts(updated);
}
  function blur()
  {
    SetUpdate(false)
  }
  
  return   <div className=" min-h-[calc(100vh-160px)] bg-gray-100 ">
    {products.length!=0 && <Link to="/" className="self-start mt-5 flex font-bold  text-red-400 items-center" >
         <HiArrowNarrowLeft className="text-4xl text-red-400"/>  HOME
    </Link>}
    <div className="flex flex-col justify-center m-auto items-center  max-w-250">
    <div className=" flex flex-col min-w-250  bg-white text-wrap   ">
        {products.length!=0 && <div className="border-1  border-gray-300 font-bold bg-gray-200 h-10 items-center text-gray-500 text-center grid grid-cols-5">
            <p>Product</p>
            <p>Description</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
        </div> }
        {products.length==0 && <EmptyCart></EmptyCart>}
         {products.map(function (product, index) {
        return (
           <div key={index} className="border-1 border-gray-300 items-center text-center  grid grid-cols-5 ">
          <div className="flex  items-center ">
            <RiDeleteBin5Line  className="w-5 mr-7" onClick={() => deleteItem(index)}/>
           <img className="w-20" src={product.thumbnail}></img>
           </div>
            <h2 className="text-s font-bold text-red-500">{product.title}</h2>
            <p>{product.price}</p>
            <> <div className="border-1 border-gray-400 rounded-full flex justify-between w-20 ml-15">
              <p className="border-1 rounded-full  border-gray-400 py-[2px]" ><HiOutlineMinusSm onClick={() => RemoveItem(index)} /></p>
              <p>{product.quantity}</p>
              <p className="border-1 rounded-full  border-gray-400 py-[2px]">
               <HiPlusSm onClick={() => AddItem(index)}/>
              </p>
            </div></>
           
            <p>{(product.price * product.quantity).toFixed(2)}</p>
          </div>
         
        );}
       
      )}
    </div>
    {products.length!=0 && <div className="border-1 flex  bg-white border-gray-300 min-w-250 text-wrap  h-15 items-center   justify-between"> 
        <div className="ml-4"> 
        <input placeholder="Coupon code" className="border-1 h-8 w-40 "></input>
        <button className="bg-red-400 rounded text-white m-1 py-[5px] px-[25px]">Apply Coupon</button>
        </div>
        <div className="items-center flex flex-col m-10">
          <button  className="bg-red-400 rounded text-white mt-2 py-[5px] px-[25px]" onClick={handleUpdate} onBlur={blur}>Update Cart</button>
          {update && <div className="text-red-400 text-l ">Update Successfull!</div> }
    </div>
    </div>}
   
    {products.length!=0 && <div className="border-1 border-gray-300 flex flex-col  min-w-125 mb-5 self-end mt-5 text-wrap"> 
        
            <p className="text-2xl h-10 bg-gray-200 font-bold text-center text-gray-600">
                Cart Totals</p>
            <p className="text-xl font-semibold  font-sans h-15 mt-5 mr-5 self-end justify-center">TOTAL : {total}</p>
            <button className="bg-red-400 rounded text-white  py-[5px] px-[25px] m-2">Proceed To Checkout</button>
    </div>}
    </div>
  </div>
}

export default MyCart;
