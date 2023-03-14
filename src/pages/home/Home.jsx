import Nav from './Nav'
import { useState } from 'react'
import ProductsIntroGridContainer from '../../componenet/UI/ProductsIntroGridContainer'
export const Home = () => {
   const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)

   return (
  <header >
        <Nav ProductsIntroGridContainerOpen={ProductsIntroGridContainerOpen} setProductIntroGridContainerOpen={setProductIntroGridContainerOpen} />
        {ProductsIntroGridContainerOpen &&  <ProductsIntroGridContainer />}
    </header>
   )
   
}
