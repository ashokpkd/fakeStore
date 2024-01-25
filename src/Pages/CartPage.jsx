import React, { useContext, useState } from 'react'
import './CartPage.css'
import Navbar from '../Components/Navbar'
import { CartContext } from '../Store/Store'

function CartPage() {
  const { cart, removeCart } = useContext(CartContext)
  const[count,setCount] =useState(1)
  const incrementCounter = ()=>{
    setCount((prev)=>prev+1)
  }
  const decrementCounter =()=>{
    count<2 ? setCount(1) :setCount((prev)=>prev-1)
  }
  const handleRemoveItem = (itemId) => {
    removeCart(itemId)
  }
  return (
    <>
      <Navbar />
      <div className='cart-container d-flex align-items-center justify-content-center mt-3'>
{cart.length ===0 ? (
  <p>cart is empty</p>
) :
<ul>
{cart.map((item) => (
  <div key={item.id} className='cart-items d-flex align-items-center' style={{width:'60vw'}}>
    <div className="cartImg"><img src={item.image} alt="" /></div>
    <div className="cartItem" style={{width:'30vw'}}>
      <div>{item.title}</div>
      <div>${item.price}</div>
      <div className='d-flex justify-content-around w-25'>
        <button className='border border-info' onClick={decrementCounter}>-</button>{count}<button className='border border-info' onClick={incrementCounter}>+</button>
        </div>
    </div>
    <button className='buy-btn'>Buy Now</button>
    <button className='remove-btn' onClick={() => handleRemoveItem(item.id)} >Remove</button>
  </div>
))}
</ul> 
}
      </div>

    </>
  )
}

export default CartPage