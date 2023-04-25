import ProductsIntroGridContainer from '../../componenet/UI/ProductsIntroGridContainer'
import Cta from './Cta'
import { Article } from './Article'

const Main = () => {
  return (
    <>
      <ProductsIntroGridContainer className='flex mt-[8rem]' />
      <Cta />
      <Article />
    </>
  )
}

export default Main