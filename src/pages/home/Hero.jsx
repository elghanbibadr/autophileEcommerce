import React from 'react'
import Btn from "../../componenet/UI/Btn"
const Hero = () => {
  return (
    <div  className=' lg:text-left hero h-screen flex flex-col text-center justify-center  bg-hero-mobile bg-center  bg-no-repeat sm:bg-hero-tablet lg:bg-hero-desktop  '  >
              <div className='  lg:w-1/2'>
                  <h5 className='text-white opacity-50'>NEW PRODUCT</h5>
                  <h1  className=''>XX99 MARK II HEADPHONES</h1>
                  <p className=' my-4 lg:w-2/3'>
                  Experience natural, lifelike audio and exceptional build quality made for the passionate music
                  </p>
                  <Btn className='bg-orange hover:bg-orangePale' text="see product" />
              </div>
    </div>
  )
}

export default Hero