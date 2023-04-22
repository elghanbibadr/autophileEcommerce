import React from 'react'
import Overlay from '../../componenet/UI/Overlay'
import { useContext } from 'react'
import { AppContext } from '../../store/AppContext'
const ThankYou = () => {
    const {backdropIsOpen,setBackdropIsOpen} = useContext(AppContext)

    
  return (
    <Overlay setBackdropIsOpen={setBackdropIsOpen} >
        <div className='bg-white text-black'>ThankYou</div>
    </Overlay>
  )
}

export default ThankYou