import { useParams } from 'react-router-dom';
import Container from './Container';
import Btn from './Btn';
function ProductDetails() {
   const { id } = useParams();
//    const product = products.find(p => p.id === productId);

  // Use the product ID to fetch the product data from your API or state
  // ...

  return (
    <Container className="p-6 bg-[#fafafa]">
      <div className='md:grid md:grid-cols-2 '>
        <img className='my-10 w-[80%] mx-auto' src='/images/product-yx1-earphones/desktop/image-product.jpg'/>
        <div className='self-center'>
            <span className='text-orange  tracking-[0.62rem] font-light uppercase'> new product </span>
            <h3 className='text-black leading-[1.4] font-bold mt-4 mb-2'>YX1 WIRELESS EARPHONES</h3>
            <p className='text-black mb-6'>
            Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
            </p>
            <h5 className='text-black text-[1.2rem] my-8 font-bold'>$599</h5>
            <div className='flex items-center'>
                <div className='bg-lightGray w-[140px] flex justify-between items-center px-5 py-3 '>
                    <span className='text-paleBlack cursor-pointer hover:text-orange ' >+</span>
                    <span className='text-black'>1</span>
                    <span className='text-paleBlack cursor-pointer hover:text-orange'>-</span>
                </div>
                <Btn className='bg-orange mx-4 text-white' text="ADD TO CART" />
            </div>
        </div>
      </div>
    </Container>
  );
}


export default ProductDetails