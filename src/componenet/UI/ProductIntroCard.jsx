import React from 'react'
import img from "../../../public/images/shared/desktop/image-headphones.png"
import arrowRight from "../../../public/images/shared/desktop/icon-arrow-right.svg"

const ProductIntroCard = (props) => {
  return (
    <li className='bg-lightGray relative h-32 flex justify-center flex-col items-center w-full'>
        <img className='h-32 absolute  bottom-14 ' src={props.img} />
        <div className='mt-10 text-center  uppercase'>
          <h4 className='text-black mb-2 font-semibold'>{props.name}</h4>
          <div className='flex  items-center justify-center'>
            <a className='text-paleBlack text-[0.8rem] font-medium mr-2  '>shop</a>
            <img src={arrowRight} />
          </div>
        </div>
    </li>
  )
}

export default ProductIntroCard