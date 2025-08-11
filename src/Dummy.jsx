
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export function getProduct(id)
{
  return axios.get("https://dummyjson.com/products/"+ id);
} 

export function GetProductList() {
    return axios.get("https://dummyjson.com/products");
}
      



