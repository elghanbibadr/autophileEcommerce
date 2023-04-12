import { useParams } from 'react-router-dom';
import Container from './Container';
import Btn from './Btn';
import { products } from '../../data/Product';
function ProductDetails() {
   const { name } = useParams();
     const currentVisibleProduct = products.find(p => p.name === name);
    console.log(name)
    console.log(currentVisibleProduct)

  // Use the product ID to fetch the product data from your API or state
  // ...

  return (
    <Container className="p-6 bg-[#fafafa]">
      <div className='md:grid md:grid-cols-2 '>
         <img className='w-[80%]' src={currentVisibleProduct.image.mobile} />
        <div className='self-center'>
            <span className='text-orange  tracking-[0.62rem] font-light uppercase'> new product </span>
            <h3 className='text-black leading-[1.4] font-bold mt-4 mb-2'>{currentVisibleProduct.name}</h3>
            <p className='text-black mb-6'>{currentVisibleProduct.description}</p>
            <h5 className='text-black text-[1.2rem] my-8 font-bold'>${currentVisibleProduct.price}</h5>
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
      <div className='md:grid md:grid-cols-2 mt-20 '>
        <div >
          <h3 className='text-paleBlack mb-6 '>FEATURES</h3>
          <p className='text-black'>
            Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
          
          Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
          </p>
        </div>
        {/* in the box div */}
        <div className='justify-self-center mt-10 md:mt-0' >
          <h3 className='text-paleBlack mb-6'>IN THE BOX</h3>
          <ul className='text-black'>
            <li className='flex items-center my-2 ' ><strong className='text-orange mr-4'>2x</strong><p className='text-black '>Speaker Unit</p></li>
            <li className='flex items-center my-2 '><strong  className='text-orange mr-4'>2x</strong><p className='text-black '>Speaker Unit</p></li>
            <li className='flex items-center my-2 '><strong  className='text-orange mr-4'>2x</strong><p className='text-black '>Speaker Unit</p></li>
            <li className='flex items-center my-2 '><strong  className='text-orange mr-4'>2x</strong><p className='text-black '>Speaker Unit</p></li>
          </ul>
        </div>
      </div>

    </Container>
  );
}


export default ProductDetails