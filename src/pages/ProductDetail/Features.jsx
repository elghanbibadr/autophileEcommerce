import React from 'react'

const Features = ({currentVisibleProduct}) => {
    return (
        <div >
            <h3 className='text-paleBlack mb-6 '>FEATURES</h3>
            <p className='text-black'>{currentVisibleProduct.description}</p>
        </div>
    )
}

export default Features