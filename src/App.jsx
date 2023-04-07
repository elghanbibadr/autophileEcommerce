import React,{useState} from 'react'
import { Home } from './pages/home/Home'
import { Route,Routes } from 'react-router-dom'
import Headphones from './pages/headphones/Headphones'
import Nav from './pages/home/Nav'
import Earphones from './pages/earphone/Earphones'
import Speakers from './pages/speakers/Speakers'
import ProductsIntroGridContainer from './componenet/UI/ProductsIntroGridContainer'


const App = () => {
  const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)

  return (
  
  <>
       <div className='bg-paleBlack'>
         <Nav ProductsIntroGridContainerOpen={ProductsIntroGridContainerOpen} setProductIntroGridContainerOpen={setProductIntroGridContainerOpen} />
          {ProductsIntroGridContainerOpen &&  <ProductsIntroGridContainer className='absolute inset-x-0 lg:hidden' />}
       </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/headphones" element={<Headphones />} />
     <Route path="/speakers" element={<Speakers />} />
    <Route path="/earphones" element={<Earphones />} /> 
  </Routes>
  </>
  )
}

  export default App