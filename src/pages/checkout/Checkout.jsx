import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import Container from '../../componenet/UI/Container'
import { AppContext } from '../../store/AppContext';

import CheckoutForm from './CheckoutForm';
import ThankYou from './ThankYou';
import PurchaseSummary from './PurchaseSummary';
const Checkout = () => {
  const [formIsValid,setFormIsValid]=useState(false);
  const [formSubmited,setFormSubmited]=useState(false);
  const {addedItemsToCard,setAddedItemsToCard,backdropIsOpen,setBackdropIsOpen}=useContext(AppContext)
  const total=addedItemsToCard.reduce((sum, item) => {
    return sum +  item.quantity* Number(item.price);
  }, 0);

  const totalPrice = (total + total *0.01  + 50 + total*0.001).toFixed(2)

  
  
 const handleFormSubmited=(e)=>{
     e.preventDefault();
     if (addedItemsToCard.length===0)return;
    setFormSubmited(true)
     validate();
     if(userName && email &&  phone && country && city && zipCode && address ) {
      if (isEmoneyPaymentMethod){
        if (emoneypin && emoneyNumber){
          setFormIsValid(true)
          setBackdropIsOpen(true)
        }else setFormIsValid(false)
      }else{
        setFormIsValid(true)
        setBackdropIsOpen(true)

      }
     }
     
 }

 



  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };



  return (
    <div className='bg-lightGray' >
      <Container  >
       <Link onClick={handleBackClick} className='text-lightBlack relative top-2 '>Go Back</Link>
     
       <div className='lg:grid lg:grid-cols-3 lg:gap-6'>
              <CheckoutForm />
              <PurchaseSummary handleFormSubmited={handleFormSubmited} />
       </div>
      </Container>
     { backdropIsOpen &&  <ThankYou totalPrice={totalPrice} />}
    </div>
  )
}

export default Checkout