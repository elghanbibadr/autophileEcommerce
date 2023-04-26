import ProductsIntroGridContainer from '../../componenet/UI/ProductsIntroGridContainer'
import Cta from './Cta'
import { Article } from './Article'

const Main = () => {
  return (
    <>
      <ProductsIntroGridContainer className='flex mt-[2rem]' />
      <Cta />
      <Article />
    </>
  )
}

export default Main