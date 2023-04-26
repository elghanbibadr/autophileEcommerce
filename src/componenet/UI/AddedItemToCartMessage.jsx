import React, { useState, useEffect,useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import checkMark from "../../../public/images/shared/desktop/icon-check-mark.svg"
function AddedItemToCartMessage({ItemName}) {
   const {newItemAddedToCart,setNewItemAddedToCart}=useContext(AppContext)

  useEffect(() => {
      const timeout = setTimeout(() => {
          setNewItemAddedToCart(false)
      }
      , 2000);
      return () => clearTimeout(timeout);
    
  }, [newItemAddedToCart]);

  return (
    <div className={`cart-message flex items-center flex-nowrap px-2 py-[8px] xs:px-[20px]  lg:px-[30px] ${newItemAddedToCart ? 'show' : ''}`}>
<svg className='h-[20px] w-[20px] mr-3' viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#FFFFFF"/>
<path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="#48BB78" stroke-width="4"/>
</svg>
        <span className="message-text text-[1rem] md:text-[1.2rem]">{ItemName} was added to cart</span>
    </div>
  );
}

export default AddedItemToCartMessage;
