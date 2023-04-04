
import Hero from './Hero'
import Main from './Main'
import Container from '../../componenet/UI/Container'
import Footer from '../../componenet/UI/Footer'
export const Home = () => {

   return (
      <>
  <header >
   <Container className='bg-paleBlack'>
        <Hero />
   </Container>
    </header>
    <Container>
       <main >
        <Main/>
       </main>
    </Container>
    <Footer />
      </>
   )
   
}
