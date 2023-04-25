import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../../componenet/UI/Btn'
const OtherProducts = ({ currentVisibleProduct, windowWidth }) => {

    return (
        <div className='mt-40 max-w-[1000px] mx-auto'>
            <h3 className='text-paleBlack text-center'>YOU MAY ALSO LIKE</h3>
            <div className=' lg:grid lg:grid-cols-3 lg:gap-10'>
                {currentVisibleProduct.others.map(({ image, name, slug }) => {
                    return <div className='text-center my-10'> <img className='mx-auto' src={windowWidth < 960 ? image.mobile : image.desktop} alt="other category product image" />
                        <h3 className='text-paleBlack leading-[1.4] font-bold my-8 text-3xl'>{name}</h3>
                        <Link to={`/${slug}`}>
                            <Btn className='bg-orange text-white' text="see product" />
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}

export default OtherProducts