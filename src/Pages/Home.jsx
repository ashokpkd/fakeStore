import React, { useContext } from 'react'
import useProducts from '../hooks/useProducts'
import ItemCard from '../Components/ItemCard'
import Navbar from '../Components/Navbar'
import { CartContext } from '../Store/Store'
import './Home.css'
function Home() {
  const { addToCart, addToFav } = useContext(CartContext)
  const { products } = useProducts()
if (products === null) { return <div className='loading'> <span className="loader" ></span></div> }

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '16px', gap: '15px' }}>
        {products.map((product) => (
          <ItemCard product={product}
            key={product.id}
            onAddToCart={() => addToCart(product)}
            onAddToFav={() => addToFav(product)}
          />
        ))}
      </div>
    </>
  )
}

export default Home