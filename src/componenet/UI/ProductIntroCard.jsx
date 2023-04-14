import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import arrowRight from "../../../public/images/shared/desktop/icon-arrow-right.svg"

const ProductIntroCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseOver = () => {
    setIsHovered(true);
  }

  const handleMouseOut = () => {
    setIsHovered(false);
  }

  return (
    <Link to={`/${props.name}`}   onMouseOver={handleMouseOver}   onMouseOut={handleMouseOut}  className='bg-lightGray rounded-md relative h-40 flex my-10 justify-center  flex-col items-center w-full'>
        <img className='h-32 absolute  bottom-16 ' src={props.img} />
        <div className='mt-20 text-center  uppercase'>
          <h4 className='text-black  tracking-[0.1rem]  mb-4  font-semibold'>{props.name}</h4>
          <div className='flex  items-center justify-center mb-4'>
            <a className={`text-[0.8rem] font-medium mr-2 ${isHovered ? "text-orange":"text-[#00000080]"}`}>shop</a>
            <img src={arrowRight} alt='arrow right icon' />
          </div>
        </div>
    </Link>
  )
}

export default ProductIntroCard