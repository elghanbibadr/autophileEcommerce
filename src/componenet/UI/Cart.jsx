import React, { useContext } from 'react'
import emptyCart from "../../../public/images/cart/empty-cart.png"
import ItemsInTheCard from './ItemsInTheCard'
import { AppContext } from '../../store/AppContext'
const Cart = () => {
  const {addedItemsToCard}=useContext(AppContext)

  return (
    <div className='bg-white h-fit  mx-auto lg:mx-2 lg:absolute lg:right-20    p-8 py-5 rounded-md  mt-[90px] w-[320px] lg:w-[360px]'>
   {addedItemsToCard.length===0 &&  <div className=' z-[9999] flex flex-col items-center justify-center'>
  <p className='text-paleBlack text-lg font-bold'>Your cart is empty</p>
   <img className='h-[80px]  mx-auto my-6' src={emptyCart} alt="empty panel logo" /> 
   </div>}
     { addedItemsToCard.length!==0 &&  <ItemsInTheCard/>}
    </div>
  )
}

export default Cart