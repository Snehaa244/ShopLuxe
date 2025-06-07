import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <>
    <Carousel fade className='mt-0'>
      <Carousel.Item interval={5000}>
        <div className="relative">
        <video width="1600" height="100" controls loop>
        <source src="Orange Yellow Modern Food Instagram Post.mp4" type="video/mp4" />
        </video>
          <div className=" flex flex-col items-center justify-center">
            <div className='text-center text-white mt-10'>
              <h3 className='text-6xl font-bold text-orange-900 mb-4'>Explore our curated collection</h3>
              <p className='text-3xl font-serif text-orange-700'>Find your perfect style, and enjoy seamless shopping with exclusive deals and exceptional service</p>
            </div>
          </div>
        </div>
      </Carousel.Item>
      
    </Carousel>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap md:-m-2 -m-1">
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="Orange Yellow Modern Food Instagram Post (1).jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="Orange Yellow Modern Food Instagram Post (2).jpg"/>
        </div>
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="b3.jpg"/>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="md:p-2 p-1 w-full">
          <img alt="gallery" class="w-full h-full object-cover object-center block" src="b2.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="b1.jpg"/>
        </div>
        <div class="md:p-2 p-1 w-1/2">
          <img alt="gallery" class="w-full object-cover h-full object-center block" src="Orange Yellow Modern Food Instagram Post.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  );
}

export default Hero;

