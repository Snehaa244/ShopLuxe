import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard'


 const Products = () => {
        const [products, setProducts] = useState([])
        useEffect(() => {
            const fetchProducts = async () => {
              const response = await fetch('https://fakestoreapi.com/products')
              const data = await response.json()
              console.log(data, 'data')
              setProducts(data)
            }
            fetchProducts()
          },[])
  
  return (
    <div>
        {/* <Categories/> */}
        <div className='flex flex-col text-center w-full mt-20'>
      <h2 className='text-sm text-orange-800 tracjing-widest font-medium title-font mb-1'>All PRODUCTS</h2>
      <h1 className='sm:text-3xl font-medium title-font text-orange-500'>MOST POPULAR PRODUCTS</h1>
      </div>
        {
            products.length > 0 ?
            <ProductCard products={products}/>
            :
            <div>Loading......</div>
        }
        
       
    </div>
  )
}
export default Products