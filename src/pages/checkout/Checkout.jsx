import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import Container from '../../componenet/UI/Container'
const Checkout = () => {
  const [isEmoneyPaymentMethod, setIsEmoneyPaymentMethod]=useState(true)
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handlePaymentMethodeSelected=()=>setIsEmoneyPaymentMethod(prv => !prv)

  return (
    <Container className='bg-lightGray h-screen' >
     <Link onClick={handleBackClick} className='text-lightBlack  font-semibold'>Go Back</Link>
    {/* checkkout info */}
     <div className='bg-white h-screen p-8 rounded-md mt-8 '>
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
     </div>
    </Container>
  )
}

export default Checkout