import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 bg-gray-100 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      {
        products.map((product) => {
          console.log(product, 'product')
          const { id, title , price , description, category , image } = product;
          return(
            <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt="{title}" className="object-contain object-center w-full h-full block" src={image}/>
            </a>
            <div className="mt-4">
              <h3 className="text-xs tracking-widest title-font mb-1 uppercase text-blue-900">{category}</h3>
              <h2 className="text-blue-900 title-font text-lg font-medium">{title}</h2>
              <p className="mt-1 text-md font-semibold text-red-700">${price}</p>
            </div>
          </Link>
          )
        })
      }
   </div>
  </div>
</section>

  )
}
export default ProductCard
