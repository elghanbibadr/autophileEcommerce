import React from 'react'

import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Footer from '../../componenet/UI/Footer'
import Callout from '../../componenet/UI/Callout'
import { products } from '../../data/Product'
import ProductDesc from '../../componenet/ProductDesc'
import ProductsIntroGridContainer from "../../componenet/UI/ProductsIntroGridContainer"
const Headphones = () => {
  const headphonesProduct=products.filter(product=>product.category==='headphones')
  console.log(headphonesProduct)
  return (
    <>
     <RouteDescName  routeName="Headphones"  />
    <Container className='bg-paleBlack'>
</Container>
     <Container>
       {headphonesProduct.reverse().map(({id,description,categoryImage,name,new:isNewProduct},index)=>{
        return <ProductDesc key={id} id={index} description={description} name={name} new={isNewProduct} categoryImage={categoryImage} />
       })}
      <ProductsIntroGridContainer className='flex mt-[8rem] ' />
       <Callout />
     </Container>
       <Footer />
    </>
  )
}

export default Headphones