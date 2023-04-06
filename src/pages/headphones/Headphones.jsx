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
  console.log('hi')
  return (
    <>
    <Container className='bg-paleBlack'>
     <RouteDescName routeName="Headphones"  />
</Container>
     <Container>
       {headphonesProduct.map(({id,description,image,name})=>{
        return <ProductDesc key={id} description={description} name={name} image={image} />
       })}
       <Callout />
     </Container>
       <Footer />
    </>
  )
}

export default Headphones