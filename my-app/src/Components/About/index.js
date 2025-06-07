import React from 'react'

export default function About() {
  return (
    <section class="text-gray-600 bg-gray-50 body-font mb-5">
        <div className='text-center text-white mt-10'>
              <h3 className='text-6xl font-bold text-orange-900 mb-4'>About Us</h3>
              
            </div>
    <div class="container px-5 py-2 mx-auto flex flex-wrap space-y-3">
  
      <div class="lg:w-1/2 w-full mb-10 lg:mb-4 rounded-lg overflow-hidden">
      <video width="1600" height="100" controls loop>
        <source src="About.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="flex flex-col flex-wrap lg:py-2 -mb-15 lg:w-1/2 lg:pl-12 lg:text-left text-center space-y-2">
        <div class="flex flex-col mb-2 lg:items-center items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full mb-2">
          <img  src='fast-delivery.png'/>
          </div>
            <h2 class="text-gray-900 text-lg title-font font-medium mt-0 mb-0">Maximum Discounts</h2>
            <p class="leading-relaxed text-base">Enjoy unparalleled savings with ShopLuxe. We strive to offer the best prices on a wide range of products, ensuring you get maximum value for every purchase. Our frequent discounts and special offers make luxury affordable.</p>
            
          
        </div>
        <div class="flex flex-col mb-4 lg:items-center items-center space-y-2">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full  mb-2">
          <img src="trust.png"/>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">100% Trustworthy</h2>
            <p class="leading-relaxed text-base">At ShopLuxe, trust is our cornerstone. We ensure every transaction is secure and every product meets the highest standards of quality. Our commitment to transparency and customer satisfaction makes us a brand you can rely on.</p>
            
          </div>
        </div>
        <div class="flex flex-col mb-4 lg:items-center items-center">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full mb-2">
           <img src=" cart.png"/>
          </div>
          <div class="flex-grow">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Free Delivery</h2>
            <p class="leading-relaxed text-base">Convenience is key. ShopLuxe provides free delivery on all orders, ensuring your shopping experience is seamless from start to finish. Enjoy the luxury of doorstep delivery without any additional costs.</p>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
