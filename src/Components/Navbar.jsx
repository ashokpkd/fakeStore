import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaRegUserCircle } from 'react-icons/fa'

function Navbar() {
  const navigate =useNavigate()
  return (
    <div className='navbar' style={{display:"flex",backgroundColor:'darkslateblue',color:'white',justifyContent:'space-between'}}>
      <div className="name" style={{padding:'2vh'}}>FakeStore</div>
      <div className="nav-right" style={{display:"flex",gap:'5vh',padding:'2vh',cursor:'pointer'}}> 
      <div className="cart" onClick={()=>navigate('/')} >Home</div>
        <div className="cart" onClick={()=>navigate('/cart')} >Cart</div>
        <div className="favourites" onClick={()=>navigate('/favourites')} >Favourites</div>
        <div className="user"><FaRegUserCircle size={'1.5rem'} /></div>
      </div>
    </div>
  )
}

export default Navbar