import React from 'react'
import Overlay from '../../componenet/UI/Overlay'
import { useContext } from 'react'
import checkMark from "../../../public/images/shared/desktop/icon-check-mark.svg"
import { AppContext } from '../../store/AppContext'
const ThankYou = (props) => {
    const {backdropIsOpen,setBackdropIsOpen,addedItemsToCard} = useContext(AppContext)


  return (
    <Overlay setBackdropIsOpen={setBackdropIsOpen} >
        <div className='bg-white h-[90%] self-center p-10 text-black mx-auto'>
          <img className='my-6' src={checkMark} alt='check mark icon' />
        <h3 className='text-black'>THANK YOUFOR YOUR ORDER</h3>
       <p className='text-paleBlack my-4'>You will receive an email confirmation shortly.</p>
       <div className='flex justify-between rounded-md mt-6 overflow-hidden '>
         <div className='w-1/2 bg-lightGray p-6 ' >
         {addedItemsToCard.map(({cartImage,id,quantity,price,shortName})=>{
         
          return  <div key={id} className='flex  justify-between items-center'>
             <div className='flex items-center '>
               <img className='h-[70px] rounded-md mr-3' src={cartImage} />
               <div >
                 <h6 className='text-black font-semibold'>{shortName}</h6>
                 <p className='text-paleBlack font-semibold'>${price}</p>
               </div>
             </div>
          
              <div className='bg-lightGray  flex justify-between items-center px-4 py-2 '>
              <span className='text-paleBlack font-semibold text-xs'>x {quantity}</span>
          </div>
           </div>
           })}
         </div>
        <div className='bg-black w-1/2  p-6 pt-10 '>
          <p className='my-4'>GRAND TOTAL</p>
          <h5 className='text-white font-bold'>$  {props.totalPrice}</h5>
        </div>
       </div>
        </div>
    </Overlay>
  )
}

export default ThankYou