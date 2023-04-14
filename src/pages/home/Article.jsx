import React from 'react'
import Btn from '../../componenet/UI/Btn'
import { Link } from 'react-router-dom'
import yx1EarphoneImg from "../../../public/images/home/mobile/image-earphones-yx1.jpg"
export const Article = () => {
  return (
    <div className='text-black grid gap-x-4 gap-y-4 grid-cols-2 lg:gap-x-8'>
    <div className='bg-zx7Speaker-tablet articleImg w-full md:bg-zx7Speaker-tablet lg:bg-zx7Speaker-desktop  rounded-md flex flex-col items-start col-span-2 pl-10 justify-center  bg-no-repeat h-[220px] lg:h-[300px]'>
        <h3 className='text-black mb-4'>ZX7 SPEAKER</h3>
        <Link to='/speakers/zx7-speaker'>
        <Btn className='text-black border-[1px] py-2 hover:bg-black hover:text-lightGray' text="see product" />
        </Link>
    </div>
    <img className='rounded-md lg:h-3/4 w-full' src={yx1EarphoneImg} />
    <div className='bg-lightGray p-4 lg:px-20 flex flex-col  justify-center  lg:h-3/4'>
        <h3 className='text-black'>YX1 EARPHONES</h3>
        <Link to='earphones/yx1-earphones'>
          <Btn className='text-black mt-4 w-fit  border-[1px] py-2 hover:bg-black hover:text-lightGray' text="see product" />
        </Link>
    </div>
    </div>
  )
}
