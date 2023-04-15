import React from 'react'
import earphoneImg from "../../../public/images/cart/image-yx1-earphones.jpg"
import IncreaseQuantityBox from './IncreaseQuantityBox'
import Btn from './Btn'
const ItemsInTheCard = () => {
  return (
    <div className='px-' >
        <div className='flex  justify-between items-center'>
        <h4 className='text-black'>Cart (1)</h4>
        <p className='text-paleBlack underline'>RemoveAll</p> 
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
        <div className='flex justify-between'>
          <p className='text-paleBlack font-semibold'>TOTAL</p>
          <h4 className='text-black'>$3,594</h4>
        </div>
        <Btn className='bg-orange w-full mt-10 text-white' text="CHECKOUT"/>

    </div>
  )
}

export default ItemsInTheCard