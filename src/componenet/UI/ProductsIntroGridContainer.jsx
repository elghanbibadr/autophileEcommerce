import React from 'react'
import headphoneImg from "../../../public/images/shared/desktop/image-headphones.png"
import ProductIntroCard from './ProductIntroCard'
// image-earphones
const ProductsIntroGridContainer = () => {
    const data=[
        {
        id:1,
        name:"headphones",
        img:headphoneImg
    },
        {
        id:2,
        name:"speakers",
        img:headphoneImg
    },
        {
        id:3,
        name:"earphones",
        img:headphoneImg
    },
]
  return (
    <ul className='flex items-center   bg-white  mt-6  h-[250px] px-4 gap-x-4 lg:gap-x-10' >
    {data.map(({id,name,img})=>{
     return <ProductIntroCard key={id} name={name} img={img} />
    })}  
    </ul>
  )
}

export default ProductsIntroGridContainer