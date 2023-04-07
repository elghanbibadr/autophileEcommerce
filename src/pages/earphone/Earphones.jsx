import React from 'react'
import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Footer from '../../componenet/UI/Footer'
import { products } from '../../data/Product'
import Callout from '../../componenet/UI/Callout'
import ProductDesc from '../../componenet/ProductDesc'
import ProductsIntroGridContainer from "../../componenet/UI/ProductsIntroGridContainer"

const earphones = () => {
  const earphonesProduct =products.filter(product=>product.category=="earphones")

  return (
    <>
    <Container className='bg-paleBlack'>
     <RouteDescName routeName="Headphones"  />
</Container>
     <Container>
     {earphonesProduct.reverse().map(({id,description,categoryImage,name,new:isNewProduct},index)=>{
        return <ProductDesc key={id} id={index} description={description} name={name} new={isNewProduct} categoryImage={categoryImage} />
       })}
      <ProductsIntroGridContainer className='flex mt-[10rem]' />
         <Callout />
     </Container>
     <Footer />
    </>
  )
}

export default earphones