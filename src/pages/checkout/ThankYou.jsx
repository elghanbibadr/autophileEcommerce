import React from 'react'
import Overlay from '../../componenet/UI/Overlay'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Btn from '../../componenet/UI/Btn'
import checkMark from "../../../public/images/shared/desktop/icon-check-mark.svg"
import { AppContext } from '../../store/AppContext'
const ThankYou = (props) => {
    const {setBackdropIsOpen,addedItemsToCard,setAddedItemsToCard,SetItemInCardNumber} = useContext(AppContext)
const handleOnBackHomeClicked=()=>{
  setBackdropIsOpen(false)
  setAddedItemsToCard([])
  SetItemInCardNumber(0)
}


  return (
    <Overlay setBackdropIsOpen={setBackdropIsOpen} >
        <div className='bg-white  self-center p-10 lg:p-16 text-black mx-auto'>
          <img className='my-6' src={checkMark} alt='check mark icon' />
        <h3 className='text-black'>THANK YOU FOR YOUR ORDER</h3>
       <p className='text-paleBlack my-4'>You will receive an email confirmation shortly.</p>
       <div className='flex flex-col lg:flex-row lg:items-stretch  justify-between  rounded-md mt-6 overflow-hidden '>
         <div className='lg:w-1/2  bg-lightGray p-6 ' >
         {addedItemsToCard.map(({cartImage,id,quantity,price,shortName})=>{
         
          return  <div key={id} className='flex  justify-between items-center '>
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
        <div className='bg-black lg:w-1/2  p-6  '>
          <p className='my-4'>GRAND TOTAL</p>
          <h5 className='text-white font-bold'>$  {props.totalPrice}</h5>
        </div>
       </div>
       <Link to="/" onClick={handleOnBackHomeClicked}>
         <Btn  className='bg-orange  text-white w-full mt-6'    text="BACK TO HOME"/>
       </Link>

        </div>
    </Overlay>
  )
}

export default ThankYou