import React from 'react'
import arrowRight from "../../../public/images/shared/desktop/icon-arrow-right.svg"

const ProductIntroCard = (props) => {
  return (
    <li className='bg-lightGray rounded-md relative h-40 flex justify-center  flex-col items-center w-full'>
        <img className='h-32 absolute  bottom-14 ' src={props.img} />
        <div className='mt-20 text-center  uppercase'>
          <h4 className='text-black mb-2 font-semibold'>{props.name}</h4>
          <div className='flex  items-center justify-center'>
            <a className='text-paleBlack text-[0.8rem] font-medium mr-2  '>shop</a>
            <img src={arrowRight} alt='arrow right icon' />
          </div>
        </div>
    </li>
  )
}

export default ProductIntroCard