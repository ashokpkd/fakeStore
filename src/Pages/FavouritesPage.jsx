import React, { useContext } from 'react'
import { CartContext } from '../Store/Store'
import Navbar from '../Components/Navbar'
import './CartPage.css'

function FavouritesPage() {
const {fav,removeFav}=useContext(CartContext)
const handleRemoveFav=(itemId)=>{
  removeFav(itemId)
}
  return (
    <>
   <Navbar/>
   <div className='cart-container d-flex align-items-center justify-content-center mt-3'>
     {fav.length===0 ? (
      <p>favourites is empty</p>
     ) :
     <ul>
          {fav.map((item) => (
            <div key={item.id} className='cart-items d-flex align-items-center' style={{width:'70vw'}}>
              <div className="cartImg"><img src={item.image} alt="" /></div>
              <div className="cartItem">
                <div>{item.title}</div>
                <div>${item.price}</div>
              </div>
              <button className='remove-btn' onClick={() => handleRemoveFav(item.id)} >Remove</button>
            </div>
          ))}
        </ul>
     }
      </div>
    </>
  )
}

export default FavouritesPage