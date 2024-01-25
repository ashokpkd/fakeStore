import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../Components/ProductDetails'
import Navbar from '../Components/Navbar'
import './Home.css'
const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.error('fetching error', error)
      }
    }
    fetchSingleProduct()
  }
    , [id])

  return (
    <>
    <Navbar/>
      {
        product ? (<ProductDetails product={product} />) : (<div className='loading'> <span className="loader" ></span></div>)
      }

    </>
  )
}

export default ProductPage