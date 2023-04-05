import React from 'react'
// windowWidth < 700 ? bestGearMobile : windowWidth < 1024 ? bestGearTablet:bestGearDestkop 

const ProductDesc = (props) => {
  return (
    <div className='mt-20   gap-x-6 lg:grid lg:grid-cols-2 justify-center items-center'>
    <img className='rounded-md  lg:col-start-2  ' src={props.image} /> 
    <div className='text-center lg:row-start-1 lg:text-left p-4'>
        <h3 className='text-black leading-[1.4] font-bold my-6'>{props.name}</h3>
        <p className='text-black'>
            {props.description}
        </p>
    </div>
    </div>
  )
}

export default ProductDesc