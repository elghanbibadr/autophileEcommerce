import React, { useContext } from 'react'
import earphoneImg from "../../../public/images/cart/image-yx1-earphones.jpg"
import IncreaseQuantityBox from './IncreaseQuantityBox'
import Btn from './Btn'
import { AppContext } from '../../store/AppContext'
const ItemsInTheCard = () => {
  const {addedItemsToCard}=useContext(AppContext)
  const handleIncreaseBtnClicked=()=>{
    setItemQuantity(prv => ++prv)
  }
  // props.handleItemQuantityChanged(itemQuantity)
  const handleDecreaseBtnClicked=()=>{
    if (itemQuantity==1)return;
    setItemQuantity(prv => --prv)

  }
  return (
    <div className='px-' >
        <div className='flex  justify-between items-center'>
        <h4 className='text-black'>Cart (1)</h4>
        <p className='text-paleBlack underline'>RemoveAll</p> 
        </div>
        {addedItemsToCard.map(({cartImage,id,quantity,price,shortName})=>{
        
       return  <div className='flex  justify-between items-center'>
          <div className='flex items-center  my-6'>
            <img className='h-[70px] rounded-md mr-3' src={cartImage} />
            <div >
              <h6 className='text-black font-semibold'>{shortName}</h6>
              <p className='text-paleBlack font-semibold'>${price}</p>
            </div>
          </div>
          {/* increase box  */}

    <div className='bg-lightGray w-[90px] flex justify-between items-center px-4 py-1 '>
    <span onClick={handleIncreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange ' >+</span>
    <span className='text-black font-semibold text-xs'>{quantity}</span>
    <span onClick={handleDecreaseBtnClicked} className='text-paleBlack cursor-pointer hover:text-orange'>-</span>
</div>
          {/* increase box  */}
        </div>
        })}
        
        <div className='flex justify-between'>
          <p className='text-paleBlack font-semibold'>TOTAL</p>
          <h4 className='text-black'>$3,594</h4>
        </div>
        <Btn className='bg-orange w-full mt-10 text-white' text="CHECKOUT"/>

    </div>
  )
}

export default ItemsInTheCard