import React, { useContext } from 'react'
import emptyCart from "../../../public/images/cart/empty-cart.png"
import ItemsInTheCard from './ItemsInTheCard'
import { AppContext } from '../../store/AppContext'
const Cart = () => {
  const {addedItemsToCard}=useContext(AppContext)
  return (
    <div className='bg-white  p-4 rounded-md  mt-[100px]  w-[340px]'>
   {addedItemsToCard.length===0 &&  <div className=' z-[9999] flex flex-col items-center justify-center'>
  <p className='text-paleBlack'>Your cart is empty</p>
   <img className='h-[80px] mx-auto mt-4' src={emptyCart} /> 
   </div>}
     { addedItemsToCard.length!==0 &&  <ItemsInTheCard/>}
    </div>
  )
}

export default Cart