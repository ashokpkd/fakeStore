import { createContext, useState } from "react";

export const CartContext =createContext({
    cart: [],
    addToCart: () => {},
    removeCart: ()=>{},
    fav:[],
    addToFav:()=>{},
    removeFav:()=>{}
})

export const CartProvider = ({children}) =>{
const[cart,setCart]=useState([])
const[fav,setFav]=useState([])
//cart 
const addToCart = (product)=>{
setCart([...cart,product])
}
const removeCart=(itemId)=>{
  const updatedCart = cart.filter((item)=>item.id !==itemId)
  setCart(updatedCart)
}
//fav
const addToFav=(product)=>{
    setFav([...fav,product])
}
const removeFav=(itemId)=>{
    const updatedFav=fav.filter((item)=>item.id !==itemId)
    setFav(updatedFav)
}

return(
    <CartContext.Provider value={{cart,addToCart,removeCart,fav,addToFav,removeFav}}>
        {children}
    </CartContext.Provider>
)
}
