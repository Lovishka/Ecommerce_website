import React from 'react';
import Product from './product';
function ProductList( { products } )
{
  return(
    <div className=' justify-center grid grid-cols-3 gap-2 '>
         {products.map( function (item){
            return(
                <Product 
                category={item.category}
                 title={item.title} 
                 price={item.price} 
                 thumbnail={item.thumbnail}
                 id={item.id}>

                 </Product>
            );
         })}
    </div>
  );
}
export default ProductList