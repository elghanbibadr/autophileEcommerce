import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Btn from './Btn'
import { AppContext } from '../../store/AppContext'
const ItemsInTheCard = () => {
  const {addedItemsToCard,itemInCardNumber,setBackdropIsOpen,SetItemInCardNumber, setAddedItemsToCard}=useContext(AppContext)
  const total=addedItemsToCard.reduce((sum, item) => {
    return sum +  item.quantity* Number(item.price);
  }, 0);
  

  const handleCheckoutBtnClicked=() => setBackdropIsOpen(false);
  const handleRemoveAllClicked=()=>{
    SetItemInCardNumber(0)
    setAddedItemsToCard([])
  }
  
  return (
    <div className='px-' >
        <div className='flex  justify-between items-center'>
        <h4 className='text-black'>Cart ({itemInCardNumber})</h4>
        <p onClick={handleRemoveAllClicked} className='text-paleBlack cursor-pointer underline'>RemoveAll</p> 
        </div>
        {addedItemsToCard.map(({cartImage,id,quantity,price,shortName})=>{
        
       return  <div key={id} className='flex  justify-between items-center'>
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
          <p className='text-paleBlack font-semibold'>TOTAL</p>
          <h4 className='text-black'>${total}</h4>
        </div>
      
        <Link to="/checkout" onClick={handleCheckoutBtnClicked}>
          <Btn className='bg-orange w-full mt-10 text-white' text="CHECKOUT"/>
        </Link>

    </div>
  )
}

export default ItemsInTheCard