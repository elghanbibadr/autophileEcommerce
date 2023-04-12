import React from 'react'

const IncreaseQuantityBox = () => {
  return (
    <div className='bg-lightGray w-[140px] flex justify-between items-center px-5 py-3 '>
    <span className='text-paleBlack cursor-pointer hover:text-orange ' >+</span>
    <span className='text-black'>1</span>
    <span className='text-paleBlack cursor-pointer hover:text-orange'>-</span>
</div>
  )
}

export default IncreaseQuantityBox