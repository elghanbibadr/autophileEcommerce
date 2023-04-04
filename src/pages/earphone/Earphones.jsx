import React from 'react'
import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Footer from '../../componenet/UI/Footer'
import Callout from '../../componenet/UI/Callout'
const earphones = () => {
  return (

    <>
    
    <Container className='bg-paleBlack'>
     <RouteDescName routeName="Headphones"  />
</Container>
     <Container>
         <Callout />
     </Container>
     <Footer />
    </>
  )
}

export default earphones