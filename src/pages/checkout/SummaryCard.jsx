import React, { useContext } from 'react'
import { AppContext } from '../../store/AppContext'

const SummaryCard = () => {
    const {addedItemsToCard}=useContext(AppContext)

  return (
    <Container className='bg-lightGray h-screen' >
     <h3 className='text-black mb-8 font-bold'>SUMMARY</h3>
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
         
    </Container>
  )
}

export default SummaryCard