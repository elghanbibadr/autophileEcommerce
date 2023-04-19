import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';
import Container from '../../componenet/UI/Container'
const Checkout = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container className='bg-lightGray h-screen' >
     <Link onClick={handleBackClick} className='text-lightBlack  font-semibold'>Go Back</Link>
    {/* checkkout info */}
     <div className='bg-white h-screen p-8 rounded-md mt-8 '>
      <h3 className='text-black mb-8 font-bold'>CHECKOUT</h3>
      <h6 className='text-orange uppercase mb-8 text-[1rem] font-semibold'>billing details</h6>
      <div  >
        <label >Name</label>
        <input   type='text' placeholder='Alexei Ward' />
      </div>
     </div>
    </Container>
  )
}

export default Checkout