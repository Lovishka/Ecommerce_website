import React , { useState, useEffect } from "react";
import ProductList from './ProductList';
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import {GetProductList} from "./Dummy";
import Loading from "./Loading";
function Home()
{
 const [productList, setProductList]=useState([]);
 const[loading,setLoading]=useState(true);


useEffect(function (){
  const p=GetProductList();
  p.then(function(response){
    
   setProductList(response.data.products);
   setLoading(false);
   });
},[]);



const [query,updateQuery]=useState("");
const [sort,setSort]=useState("default");

let data=productList.filter(function(item){
  return(item.title.toLowerCase().indexOf(query.toLowerCase()) !=-1)});

function handleSort(event)
{
  setSort(event.target.value);
 }
 function handleQuery(event){
  updateQuery(event.target.value);
}


 if(sort === "price")
 {
    data.sort(function(x,y){
    return x.price-y.price;
  })
 }
 else if(sort==="title")
 {
  data.sort(function(x,y){
    return x.title>y.title ? 1 :-1;
  })
 }
 else if(sort==="price H-L"){
  data.sort(function(x,y){
    return y.price - x.price;
  })
 }
 if(loading)
 {
  return <Loading />
 }
  if(data.length==0 ) return <NotFound />

  return (
    <div className='bg-gray-300 overflow-auto'>
    
  <div className='flex flex-col m-20   flex-wrap bg-white'>
    
    <div className='flex justify-between  m-10 mb-5 gap-4'>
      <input onChange={handleQuery}  placeholder="search" className="border-1 w-70">
    </input> 
      <select onChange={handleSort} value={sort} className='border-1'>
        <option value="default">
          Default Sorting
        </option>
        <option value='title'>
          Sort By Title
        </option>
        <option value='price'>
          Sort by price: low to high
        </option>
        <option value='price H-L'>
         Sort by price: high to low
        </option>
      </select>
    </div>
    <div className='flex flex-col gap-y-20   gap-x-10 justify-center items-center'>
    
    

    <div className='w-300' >
    
     {data.length>0 && <ProductList products={data}></ProductList> }
     
    </div>
    
  
    <div   className="flex ml-45 mb-20 self-start gap-1">
      <button className="py-[10px] px-[15px] bg-red-400 text-white border-1 border-red-400">1</button>
      <button className="p-[10px] text-red-400 bg-white  border-1 border-red-400 ">2</button>
      <button className="p-[10px] text-red-400 bg-white  border-1 border-red-400 "> →</button>
    </div>

    </div>
    </div>
     
    </div>
    )
}
export default Home;