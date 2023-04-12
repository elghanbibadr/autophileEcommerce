import React, { useState } from 'react'

const IncreaseQuantityBox = () => {
    const [itemQuantity, setItemQuantity] =useState(1)
  const handleIncreaseBtnClicked=()=>setItemQuantity(prv => ++prv)
  const handleDecreaseBtnClicked=()=>{
    if (itemQuantity==1)return;
    setItemQuantity(prv => --prv)
  }
    return (
    <div className='bg-lightGray w-[140px] flex justify-between items-center px-5 py-3 '>
    <span onClick={handleIncreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange ' >+</span>
    <span className='text-black'>{itemQuantity}</span>
    <span onClick={handleDecreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange'>-</span>
</div>
  )
}

export default IncreaseQuantityBox