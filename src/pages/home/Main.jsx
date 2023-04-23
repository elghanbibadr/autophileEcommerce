import React from 'react'
import ProductsIntroGridContainer from '../../componenet/UI/ProductsIntroGridContainer'
import Cta from './Cta'
import { Article } from './Article'
  import  Callout  from '../../componenet/UI/Callout'
const Main = () => {
  return (
    <>
      <ProductsIntroGridContainer className='flex mt-[10rem]' />
    <Cta/>
    <Article />
    </>
  )
}

export default Main