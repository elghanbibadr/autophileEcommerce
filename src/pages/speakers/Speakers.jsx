import React from 'react'
import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Callout from '../../componenet/UI/Callout'
import ProductDesc from '../../componenet/ProductDesc'
import Footer from '../../componenet/UI/Footer'
import { products } from '../../data/Product'
const  Speakers = () => {
  const speakersProduct =products.filter(product=>product.category=="speakers")
   console.log(speakersProduct)
  return (
    <>
    <Container className='bg-paleBlack'>
     <RouteDescName routeName="speaker"  />
</Container>
     <Container>
     {speakersProduct.reverse().map(({id,description,categoryImage,name,new:isNewProduct},index)=>{
        return <ProductDesc key={id} id={index} description={description} name={name} new={isNewProduct} categoryImage={categoryImage} />
       })}
         <Callout />

     </Container>
     <Footer />
    </>

  )
}

export default Speakers