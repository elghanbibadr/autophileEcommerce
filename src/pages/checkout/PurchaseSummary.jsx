import { useContext } from 'react';
import { AppContext } from '../../store/AppContext';
import Btn from '../../componenet/UI/Btn';

const PurchaseSummary = (props) => {
  const {addedItemsToCard,backdropIsOpen,setBackdropIsOpen}=useContext(AppContext)

  const handleFormSubmited=props.handleFormSubmited
  const total=addedItemsToCard.reduce((sum, item) => {
    return sum +  item.quantity* Number(item.price);
  }, 0);
  const vatPrice=(total *0.01).toFixed(2)
  const totalPrice = (total + total *0.01  + 50 + total*0.001).toFixed(2)
  const shippingCost=(50 +  total*0.001).toFixed(2)
  
  return (
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
              <h4 className='text-black font-bold '>$ {shippingCost}</h4>
            </div>
            <div className='flex justify-between'>
              <p className='text-paleBlack '>VAT (INCLUDED)</p>
              <h4 className='text-black font-bold'>${vatPrice} </h4>
            </div>
            <div className='flex justify-between mt-6'>
              <p className='text-paleBlack '>GRAND TOTAL</p>
              <h4 className='text-orange font-bold '>${totalPrice}</h4>
            </div>
            <div onClick={handleFormSubmited}>
                      <Btn  className={`${addedItemsToCard.length===0 ? "  bg-opacity-40 cursor-not-allowed":"bg-opacity-100 "} bg-orange cursor-not-allowed  text-white w-full mt-6`}    text="CONTINUE & PAY"/>
                    </div>
              </div>
  )
}

export default PurchaseSummary