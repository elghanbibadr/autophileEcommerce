import React from 'react'
import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Callout from '../../componenet/UI/Callout'
import ProductDesc from '../../componenet/ProductDesc'
import Footer from '../../componenet/UI/Footer'
import { products } from '../../data/Product'
import ProductsIntroGridContainer from "../../componenet/UI/ProductsIntroGridContainer"

const  Speakers = () => {
  const speakersProduct =products.filter(product=>product.category=="speakers")

  return (
    <>
     <RouteDescName routeName="speaker"  />
    <Container className='bg-paleBlack'>
</Container>
     <Container>
     {speakersProduct.reverse().map(({id,description,categoryImage,name,slug,new:isNewProduct},index)=>{
        return <ProductDesc key={id} id={index} description={description} slug={slug} name={name} new={isNewProduct} categoryImage={categoryImage} />
       })}
        <ProductsIntroGridContainer className='flex mt-[8rem] ' />
        <Callout />

     </Container>
     <Footer />
    </>

  )
}

export default Speakers