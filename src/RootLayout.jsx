import React,{useState} from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './pages/home/Nav'
import ProductsIntroGridContainer from './componenet/UI/ProductsIntroGridContainer'

const RootLayout = () => {
    const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)
  return (
    <>
    <h1 className='text-black'>RootLayout</h1>
       <Nav ProductsIntroGridContainerOpen={ProductsIntroGridContainerOpen} setProductIntroGridContainerOpen={setProductIntroGridContainerOpen} /> 
        {ProductsIntroGridContainerOpen &&  <ProductsIntroGridContainer />}
         <Outlet/>
    </>
    
  )
}

export default RootLayout