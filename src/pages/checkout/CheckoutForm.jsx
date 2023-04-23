import { useState } from "react";

import cashOnDelliveryIcon from "../../../public/images/checkout/icon-cash-on-delivery.svg"

const CheckoutForm = () => {
  
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone ,setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [emoneypin, setEmoneyPin] = useState('');
  const [emoneyNumber, setEmoneyNumber] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
 const [formIsValid,setFormIsValid]=useState(false);
  const [formSubmited,setFormSubmited]=useState(false);
  const [isEmoneyPaymentMethod, setIsEmoneyPaymentMethod]=useState(true)


  const handlePaymentMethodeSelected=()=>setIsEmoneyPaymentMethod(prv => !prv)

  const validate = () => {
    if (!userName || !city || !country ) {
      setUserNameError('Field cannot be empty');
    } else setUserNameError('')
    if (!email) {
     setEmailError('Field cannot be empty');
   }
     else {
       setEmailError('');
     }
    
    if (!phone || !zipCode || !emoneyNumber || !emoneypin ) {
      setPhoneNumberError('Field cannot be empty');
    }
     else {
      setPhoneNumberError('');
    }
  }

  
  
  const handleUserNameChange=(e)=>setUserName(e.target.value);
  const handleEmailChange=(e)=>setEmail(e.target.value);
  const handlePhoneChange=(e)=>setPhone(e.target.value);
  const handleCityChange=(e)=>setCity(e.target.value);
  const handleCountryChange=(e)=>setCountry(e.target.value);
  const handleAddressChange=(e)=>setAddress(e.target.value);
  const handleZipCodeChange=(e)=>setZipCode(e.target.value);
  const handleEmoneyPinChange=(e)=>setEmoneyPin(e.target.value);
  const handleEmoneyNumberChange=(e)=>setEmoneyNumber(e.target.value);

  return (
     <div className='bg-white p-8 rounded-md my-8  lg:col-span-2'>
      <h3 className='text-black mb-8 font-bold'>CHECKOUT</h3>
        <h6 className='text-orange text-sm uppercase mb-8  font-semibold'>billing details</h6>
        <form />   
        <div className="grid grid-cols-2 gap-3">
          <div  >
            <div className='flex justify-between'>
              <label >Name</label>
              {!userName && <span className="error-msg text-[red]">{userNameError}</span>}
            </div>
            <input className={`${(formSubmited && !userName) ? "border-[red]":""}`}  value={userName} onChange={handleUserNameChange} type='text' placeholder='Alexei Ward' />

          </div>
          <div  >
            <div className="flex justify-between">
              <label >Email Address</label>
              {!email && <span className="error-msg text-[red]">{emailError}</span>}
            </div>
            <input className={`${(formSubmited && !email) ? "border-[red]":""}`}  value={email} onChange={handleEmailChange} type='email' placeholder='alexei@mail.com' />

          </div>
          <div  >
            <div className="flex justify-between">
              <label >Phone Number</label>
              {!phone && <span className="error-msg text-[red]">{phoneNumberError}</span>}
            </div>
            <input className={`${(formSubmited && !phone) ? "border-[red]":""}`}  value={phone} onChange={handlePhoneChange} type='text' placeholder='+1 202-555-0136' />
          </div>
        </div>
        <h6 className='text-orange text-sm uppercase mt-9 mb-5  font-bold'>shipping info</h6>
         
        <div className="grid grid-cols-2 gap-3">
          <div className='col-span-2 mb-2 ' >
            <div className="flex justify-between">
              <label >Your Adress</label>
              {!address && <span className="error-msg text-[red]">{userNameError}</span>}
            </div>
            <input className={`${(formSubmited && !address) ? "border-[red]":""}`}   value={address} onChange={handleAddressChange}  type='text' placeholder='1137 Williams Avenue' />

          </div>
          <div>
            <div className="flex justify-between">
              <label>ZIP code</label>
              {!zipCode && <span className="error-msg text-[red]">{phoneNumberError}</span>}
            </div>
            <input className={`${(formSubmited && !zipCode) ? "border-[red]":""}`}   value={zipCode} onChange={handleZipCodeChange}  type='number' placeholder='10001' />

          </div>
          <div>
            <div className="flex justify-between">
              <label >City</label>
              {!city && <span className="error-msg text-[red]">{userNameError}</span>}
            </div>
            <input className={`${(formSubmited && !city) ? "border-[red]":""}`}    value={city} onChange={handleCityChange}  type='text' placeholder='New York' />

          </div>
          <div>
            <div className="flex justify-between">
              <label >Country</label>
              {!country && <span className="error-msg text-[red]">{userNameError}</span>}
            </div>
            <input className={`${(formSubmited && !country) ? "border-[red]":""}`}   value={country} onChange={handleCountryChange}  type='text' placeholder='United States' />
          </div>
        </div>
       
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
              <div className="flex justify-between">
                <label >e-Money Number</label>
                {!emoneyNumber && <span className="error-msg text-[red]">{phoneNumberError}</span>}
              </div>
              <input className={`${(formSubmited && !emoneyNumber) ? "border-[red]":""}`}  value={emoneyNumber} onChange={handleEmoneyNumberChange} type='number' placeholder='238914892' />
            </div>
            <div>
              <div className="flex justify-between">
                <label >e-Money PIN</label>
                {!emoneypin && <span className="error-msg text-[red]">{phoneNumberError}</span>}
              </div>
              <input className={`${(formSubmited && !emoneypin) ? "border-[red]":""}`}  value={emoneypin} onChange={handleEmoneyPinChange}  type='number' placeholder='6891' />
            </div>
                 </div>}
                 {!isEmoneyPaymentMethod && <div className='mt-8 flex'>
                  <img className='self-start mr-5' src={cashOnDelliveryIcon} alt='cash on delivery icon' />
                  <p className='text-paleBlack'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                 </div>}
       <form />
   
          </div>
  )
}

export default CheckoutForm