import  { useEffect, useState } from 'react'

function useProducts() {
const [products,setProducts]=useState(null)

useEffect(() => {
   const getProducts = async () => {
     try {
       const response = await fetch('https://fakestoreapi.com/products');
       const result = await response.json();
       setProducts(result);
     } catch (error) {
       console.error('fetching error', error);
     }
   };
   getProducts();
 }, []);
 
return {products}
}

export default useProducts