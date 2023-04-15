import React, { useContext, useState } from 'react'

const IncreaseQuantityBox = (props) => {
   const [itemQuantity, setItemQuantity] =useState(1)
  const handleIncreaseBtnClicked=()=>{
    setItemQuantity(prv => ++prv)
  }
  props.handleItemQuantityChanged(itemQuantity)
  const handleDecreaseBtnClicked=()=>{
    if (itemQuantity==1)return;
    setItemQuantity(prv => --prv)

  }
    return (
    <div className='bg-lightGray w-[90px] flex justify-between items-center px-4 py-1 '>
    <span onClick={handleIncreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange ' >+</span>
    <span className='text-black font-semibold text-xs'>{itemQuantity}</span>
    <span onClick={handleDecreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange'>-</span>
</div>
  )
}

export default IncreaseQuantityBox