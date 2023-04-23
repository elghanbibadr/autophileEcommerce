import React,{useState} from 'react'
import { Home } from './pages/home/Home'
import { Route,Routes } from 'react-router-dom'
import Headphones from './pages/headphones/Headphones'
import Nav from './pages/home/Nav'
import Earphones from './pages/earphone/Earphones'
import Speakers from './pages/speakers/Speakers'
import ProductDetails from './componenet/UI/ProductDetails'
import ProductsIntroGridContainer from './componenet/UI/ProductsIntroGridContainer'
import Checkout from './pages/checkout/Checkout'
import Callout from './componenet/UI/Callout'
import Footer from './componenet/UI/Footer'

const App = () => {
  const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)

  return (
  
  <>
       <div className='bg-paleBlack'>
         <Nav ProductsIntroGridContainerOpen={ProductsIntroGridContainerOpen} setProductIntroGridContainerOpen={setProductIntroGridContainerOpen} />
          {ProductsIntroGridContainerOpen &&  
            <div className=''>
              <ProductsIntroGridContainer className=' absolute  inset-x-0 lg:hidden' />
            </div>
          }
            </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/headphones" element={<Headphones />}/>
    <Route path="/headphones/:slug" element={<ProductDetails />}/>
     <Route path="/speakers" element={<Speakers />} />
     <Route path="/speakers/:slug" element={<ProductDetails />}/>
    <Route path="/earphones" element={<Earphones />} /> 
    <Route path="/earphones/:slug" element={<ProductDetails />}/>
    <Route path="/checkout" element={<Checkout />}/>
  </Routes>
  <Callout />
  <Footer />

  </>
  )
}

  export default App