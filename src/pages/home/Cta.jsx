import React from 'react'
import zx9speakerimage from "../../../public/images/home/mobile/image-speaker-zx9.png"
import zx9speakerimageDesktop from "../../../public/images/home/desktop/image-speaker-zx9.png"
import Btn from "../../componenet/UI/Btn"
const Cta = () => {
  return (
        <div className='bg-orange my-14 cta rounded-md flex  flex-col items-center text-center justify-between p-6 lg:grid lg:grid-cols-2 lg:text-left lg:bg-left'>
            <img className='lg:hidden' src={zx9speakerimage} alt='zx9 speaker image' />
           <img className='hidden  lg:block w-full p-10 scale-90 ' src={zx9speakerimageDesktop} alt='zx9 speaker image' />
            <div className='my-8 '>
                <h2>ZX9 SPEAKER</h2>
                <p className='my-4 lg:w-1/2 '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <Btn className='bg-black text-white hover:bg-blackHover' text="see product" />
            </div>
    </div>
  )
}

export default Cta