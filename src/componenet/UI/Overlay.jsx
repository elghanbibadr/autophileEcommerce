import React from 'react'

const Overlay = (props) => {
    const hanldeOverlayClicked=(e)=>{
        console.log(e.target.classList.contains('backdrop'))
    }
  return (
    <div onClick={hanldeOverlayClicked} className='bg-lightBlack absolute backdrop inset-0 grid grid-cols-1 px-20  justify-center items-center'>
        {props.children}
    </div>
  )
}

export default Overlay