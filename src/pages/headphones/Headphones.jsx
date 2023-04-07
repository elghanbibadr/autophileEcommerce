import React from 'react'

import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Footer from '../../componenet/UI/Footer'
import Callout from '../../componenet/UI/Callout'
import { products } from '../../data/Product'
import ProductDesc from '../../componenet/ProductDesc'
const Headphones = () => {
  const headphonesProduct=products.filter(product=>product.category==='headphones')
  console.log(headphonesProduct)
  return (
    <>
    <Container className='bg-paleBlack'>
     <RouteDescName routeName="Headphones"  />
</Container>
     <Container>
       {headphonesProduct.reverse().map(({id,description,categoryImage,name,new:isNewProduct},index)=>{
        return <ProductDesc key={id} id={index} description={description} name={name} new={isNewProduct} categoryImage={categoryImage} />
       })}
       <Callout />
     </Container>
       <Footer />
    </>
  )
}

export default Headphones