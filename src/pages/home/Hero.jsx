import React from 'react'
import Btn from "../../componenet/UI/Btn"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div  className=' lg:text-left   py-20   flex flex-col text-center justify-center  bg-hero-mobile  bg-bottom bg-cover xs:bg-center xs:bg-cover xs:h-[60vh] md:h-[80vh] lg:h-fit lg:py-40   xs2:bg-center  bg-no-repeat xs2:bg-hero-tablet lg:bg-hero-desktop  '  >
              <div className=' lg:w-1/2'>
                  <h5 className='text-white font-semibold tracking-[0.3rem] mb-2 opacity-50'>NEW PRODUCT</h5>
                  <h1>XX99 MARK II HEADPHONES</h1>
                  <p className=' my-4 lg:w-2/3'>
                  Experience natural, lifelike audio and exceptional build quality made for the passionate music
                  </p>
                  <Link to='headphones/xx99-mark-two-headphones'>
                    <Btn className='bg-orange hover:bg-orangePale' text="see product" />
                  </Link>
              </div>
    </div>
  )
}

export default Hero