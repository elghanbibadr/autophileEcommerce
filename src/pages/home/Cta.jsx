import React from 'react'
import zx9speakerimage from "../../../public/images/home/mobile/image-speaker-zx9.png"
import Btn from "../../componenet/UI/Btn"
const Cta = () => {
  return (
    <div className='bg-orange rounded-md flex p-6  flex-col  items-center justify-center lg:flex-row'>
        <img className='h-60' src={zx9speakerimage} alt='zx9 speaker image' />
        <div className='my-8 text-center lg:text-left '>
            <h2>ZX9 SPEAKER</h2>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Btn className='bg-black text-white hover:bg-blackHover' text="see product" /> 
        </div>
    </div>
  )
}

export default Cta