import React from 'react'
import Container from '../../componenet/UI/Container'
import RouteDescName from '../../componenet/UI/RouteDescName'
import Callout from '../../componenet/UI/Callout'
import Footer from '../../componenet/UI/Footer'
const Speakers = () => {
  return (
    <>
    <Container className='bg-paleBlack'>
     <RouteDescName routeName="speaker"  />
</Container>
     <Container>
         <Callout />
     </Container>
     <Footer />
    </>

  )
}

export default Speakers