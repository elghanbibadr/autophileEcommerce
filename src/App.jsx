import React,{useState,lazy,Suspense, useContext} from 'react'
import { Home } from './pages/home/Home'
import { Route,Routes,useLocation } from 'react-router-dom'
import Nav from './pages/home/Nav'
import ProductsIntroGridContainer from './componenet/UI/ProductsIntroGridContainer'
import Callout from './componenet/UI/Callout'
import Footer from './componenet/UI/Footer'
import Overlay from './componenet/UI/Overlay'
import { AppContext } from './store/AppContext'

const Headphones=lazy(()=>import ('./pages/headphones/Headphones'));
const Speakers=lazy(()=>import ('./pages/speakers/Speakers'));
const Earphones=lazy(()=>import ('./pages/earphone/Earphones'));
const Checkout=lazy(()=>import ('./pages/checkout/Checkout'));
const ProductDetails=lazy(()=>import ('./componenet/UI/ProductDetails'));


const App = () => {
  const {ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen} = useContext(AppContext)
  const location = useLocation();
  const isCheckoutRoute = location.pathname === '/checkout';

  return (
  <>
       <div className='bg-paleBlack'>
         <Nav ProductsIntroGridContainerOpen={ProductsIntroGridContainerOpen} setProductIntroGridContainerOpen={setProductIntroGridContainerOpen} />
          {ProductsIntroGridContainerOpen &&  
            // <Overlay  >
              <ProductsIntroGridContainer className='  inset-x-0 lg:hidden' />
            // </Overlay>
          }
            </div>
    <Suspense >
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
    </Suspense>
    {!isCheckoutRoute && <Callout />}
      {!isCheckoutRoute && <Footer />}

  </>
  )
}

  export default App