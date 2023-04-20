import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import cashOnDelliveryIcon from "../../../public/images/checkout/icon-cash-on-delivery.svg"
import Container from '../../componenet/UI/Container'
import { AppContext } from '../../store/AppContext';
import Btn from '../../componenet/UI/Btn';
const Checkout = () => {
  const {addedItemsToCard}=useContext(AppContext)
  const total=addedItemsToCard.reduce((sum, item) => {
    return sum +  item.quantity* Number(item.price);
  }, 0);
  
  const [isEmoneyPaymentMethod, setIsEmoneyPaymentMethod]=useState(true)
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePaymentMethodeSelected=()=>setIsEmoneyPaymentMethod(prv => !prv)

  return (
    <div className='bg-lightGray' >
      <Container  >
       <Link onClick={handleBackClick} className='text-lightBlack  '>Go Back</Link>
      {/* checkkout info */}
       <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
         <div className='bg-white p-8 rounded-md my-8  lg:col-span-2'>
          <h3 className='text-black mb-8 font-bold'>CHECKOUT</h3>
          <h6 className='text-orange text-sm uppercase mb-8  font-semibold'>billing details</h6>
            {/* billing details grid*/}
          <div className="grid grid-cols-2 gap-3">
            <div  >
              <label >Name</label>
              <input type='text' placeholder='Alexei Ward' />
            </div>
            <div  >
              <label >Email Address</label>
              <input type='email' placeholder='alexei@mail.com' />
            </div>
            <div  >
              <label >Phone Number</label>
              <input type='text' placeholder='+1 202-555-0136' />
            </div>
          </div>
          <h6 className='text-orange text-sm uppercase mt-9 mb-5  font-bold'>shipping info</h6>
            {/*  shipping info grid*/}
          <div className="grid grid-cols-2 gap-3">
            <div className='col-span-2 mb-2 ' >
              <label >Your Adress</label>
              <input type='text' placeholder='1137 Williams Avenue' />
            </div>
            <div>
              <label>ZIP code</label>
              <input type='number' placeholder='10001' />
            </div>
            <div>
              <label >City</label>
              <input type='text' placeholder='New York' />
            </div>
            <div>
              <label >Country</label>
              <input type='text' placeholder='United States' />
            </div>
          </div>
            {/*  shipping info grid*/}
            <h6 className='text-orange text-sm uppercase mt-9 mb-5  font-bold'>PAYMENT DETAILS</h6>
            <div className="grid grid-cols-2 gap-3">
              <h5 className='text-paleBlack  font-bold text-xs row-span-2'>Payment Method</h5>
      
              <div onClick={handlePaymentMethodeSelected} className='flex cursor-pointer items-center py-4 rounded-lg px-2 border-lightGray border-[1px]'>
              <div className='custom-radio'>
                <span className={`orange-circle ${!isEmoneyPaymentMethod ? 'hidden':"block"} bg-orange`}></span>
              </div>
              <h5 className='text-paleBlack  font-bold text-sm ml-3'>e-money</h5>
              </div>
              {/* this compnenet need to be refactored */}
              <div onClick={handlePaymentMethodeSelected} className='flex cursor-pointer items-center py-4 rounded-lg px-2 border-lightGray border-[1px]'>
              <div className='custom-radio'>
              <span  className={`orange-circle ${isEmoneyPaymentMethod ? 'hidden':"block"} bg-orange`}></span>
              </div>
              <h5 className='text-paleBlack  font-bold text-sm  ml-3'>Cash on Delivery</h5>
              </div>
            </div>
            {/*  */}
           { isEmoneyPaymentMethod && <div className="grid grid-cols-2 gap-3  mt-8 items-center">
              <div >
                <label >e-Money Number</label>
                <input type='number' placeholder='238914892' />
              </div>
              <div>
                <label >e-Money PIN</label>
                <input type='number' placeholder='6891' />
              </div>
                   </div>}
                   {!isEmoneyPaymentMethod && <div className='mt-8 flex'>
                    <img className='self-start mr-5' src={cashOnDelliveryIcon} alt='cash on delivery icon' />
                    <p className='text-paleBlack'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                   </div>}
            </div>
            {/* checkout summary */}
      
              <div className='bg-white  p-8 rounded-md mt-8 h-fit'>
                <h3 className='text-black mb-8 font-bold'>SUMMARY</h3>
                { addedItemsToCard.length===0 &&  <p className='text-paleBlack font-bold text-center mb-6'>No Items in cart</p>}
                     { addedItemsToCard.length!==0 && addedItemsToCard.map(({cartImage,id,quantity,price,shortName})=>{
      
                return  <div key={id} className='flex justify-between items-center'>
                   <div className='flex items-center  my-6'>
                     <img className='h-[70px] rounded-md mr-3' src={cartImage} />
                     <div >
                       <h6 className='text-black font-semibold'>{shortName}</h6>
                       <p className='text-paleBlack font-semibold'>${price}</p>
                     </div>
                   </div>
      
                     <div className='bg-lightGray  flex justify-between items-center px-4 py-2 '>
                     <span className='text-black font-semibold text-xs'>x {quantity}</span>
                 </div>
                 </div>
                       })}
                        <div className='flex justify-between'>
              <p className='text-paleBlack  '>TOTAL</p>
              <h4 className='text-black font-bold'>$ {total}</h4>
            </div>
            <div className='flex justify-between   my-2 '>
              <p className='text-paleBlack '>SHIPPING</p>
              <h4 className='text-black font-bold '>$ {50 +  total*0.001}</h4>
            </div>
            <div className='flex justify-between'>
              <p className='text-paleBlack '>VAT (INCLUDED)</p>
              <h4 className='text-black font-bold'>$ {total *0.01}</h4>
            </div>
            <div className='flex justify-between mt-6'>
              <p className='text-paleBlack '>GRAND TOTAL</p>
              <h4 className='text-orange font-bold '>$ {total + total *0.01+50 + total*0.001}</h4>
            </div>
                    <Btn  className={`${addedItemsToCard.length===0 ? "  bg-opacity-40 cursor-not-allowed":"bg-opacity-100 "} bg-orange disabled text-white w-full mt-6`}    text="CONTINUE & PAY"/>
              </div>
       </div>
      </Container>
    </div>
  )
}

export default Checkout