import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero';
import Products from '../../Components/ProductCard';
import ProductCard from '../../Components/ProductCard';

import About from '../../Components/About';
import { Categories } from '../../Components/Categories';


  const Home = () =>{
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
      fetchProducts()
    },[])
  

  return (
    <>
   <Hero/>
   {/* <Categories/> */}
    <div className='flex flex-col text-center w-full mt-20'>
      <h2 className='text-xs text-indigo-500 tracjing-widest font-medium title-font mb-1'>PRODUCTS</h2>
      <h1 className='sm:text-3xl text-2xl font-medium title-font text-gray-900'>MOST POPULAR PRODUCTS</h1>
    </div>
    {
      products.length > 0 ?
      <ProductCard products={products} />
      :
      <div>Loading.....</div>
    }
    <Categories/>
    <Products/>
    <About/>
    
    
    </>
  )
}
export default Home;
