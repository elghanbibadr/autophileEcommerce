import React from 'react'
import bestGearMobile from "/images/shared/mobile/image-best-gear.jpg"
import bestGearTablet from "/images/shared/tablet/image-best-gear.jpg"
import bestGearDestkop from "/images/shared/desktop/image-best-gear.jpg"
import { useEffect ,useState } from 'react';


 const Callout = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


  return (
    <div className='mt-20   gap-x-6 lg:grid lg:grid-cols-2 justify-center items-center'>
    <img className='rounded-md  lg:col-start-2  ' src={windowWidth < 700 ? bestGearMobile : windowWidth < 1024 ? bestGearTablet:bestGearDestkop } /> 
    <div className='text-center lg:row-start-1 lg:text-left p-4'>
        <h2 className='text-black leading-[1.4] font-bold my-6'>BRINGING YOU THE <strong className='text-orange'>BEST</strong> AUDIO GEAR</h2>
        <p className='text-black'>
        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
    </div>
    </div>
  )
}

export default  Callout
