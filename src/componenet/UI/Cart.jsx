import React from 'react'
import emptyCart from "../../../public/images/cart/empty-cart.png"
const Cart = () => {
  return (
    <div className='bg-white p-4 z-[9999] flex flex-col items-center justify-center mt-[100px] h-[200px] w-[400px]'>
    <p className='text-paleBlack'>Your cart is empty</p>
    <img className='h-[80px] mx-auto mt-4' src={emptyCart} />
    </div>
  )
}

export default Cart