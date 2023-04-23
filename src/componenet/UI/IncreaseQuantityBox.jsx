import React, { useContext, useState } from 'react'
import { AppContext } from '../../store/AppContext';

const IncreaseQuantityBox = ({itemNumber,handleItemQuantityChanged}) => {
  const [itemQuantity, setItemQuantity] = useState(() => {
    const initialItemNumber = typeof itemNumber === 'number' && !isNaN(itemNumber) ? itemNumber : 0;
    return initialItemNumber;
  });  const handleIncreaseBtnClicked=()=>{
    setItemQuantity(prv => prv + 1 )
  }

  handleItemQuantityChanged(itemQuantity)
  const handleDecreaseBtnClicked=()=>{
    if (itemQuantity==1)return;
    setItemQuantity(prv =>prv-1)

  }
    return (
    <div className='bg-lightGray w-[120px] flex justify-between  items-center self-stretch px-4 py-1 '>
    <span onClick={handleIncreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange ' >+</span>
    <span className='text-black font-semibold text-xs'>{itemQuantity}</span>
    <span onClick={handleDecreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange'>-</span>
</div>
  )
}

export default IncreaseQuantityBox