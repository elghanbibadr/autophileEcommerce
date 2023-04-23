import Hero from './Hero'
import Main from './Main'
import Container from '../../componenet/UI/Container'


export const Home = () => {

   return (
      <>
         <header className='bg-paleBlack'>
            <Container >
               <Hero />
            </Container>
         </header>
         <Container>
            <main >
               <Main />
            </main>
         </Container>
      </>
   )

}
