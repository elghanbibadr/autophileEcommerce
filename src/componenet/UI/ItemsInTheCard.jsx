import React from 'react'
import earphoneImg from "../../../public/images/cart/image-yx1-earphones.jpg"
import IncreaseQuantityBox from './IncreaseQuantityBox'
const ItemsInTheCard = () => {
  return (
    <div className='px-' >
        <div className='flex  justify-between items-center'>
        <h4 className='text-black'>Cart (1)</h4>
        <p className='text-paleBlack'>RemoveAll</p> 
        </div>
        <div className='flex  justify-between items-center'>
          <div className='flex items-center  my-6'>
            <img className='h-[70px] rounded-md mr-3' src={earphoneImg} />
            <div >
              <h6 className='text-black font-semibold'>YX1</h6>
              <p className='text-paleBlack font-semibold'>$599</p>
            </div>
          </div>
          <IncreaseQuantityBox/>
        </div>
    </div>
  )
}

export default ItemsInTheCard