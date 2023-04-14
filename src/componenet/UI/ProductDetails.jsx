import { useParams,Link } from 'react-router-dom';
import { useEffect } from 'react';
import Container from './Container';
import Btn from './Btn';
import { products } from '../../data/Product';
import IncreaseQuantityBox from './IncreaseQuantityBox';
import { useState } from 'react';
import Callout from './Callout';
import ProductsIntroGridContainer from './ProductsIntroGridContainer';
import Footer from './Footer';
function ProductDetails() {
   const { slug} = useParams();
     const currentVisibleProduct = products.find(p => p.slug === slug);
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
     useEffect(() => {
       const handleResize = () => {
         setWindowWidth(window.innerWidth);
       };
   
       window.addEventListener('resize', handleResize);
       return () => {
         window.removeEventListener('resize', handleResize);
       };
     }, []);

   
  console.log(currentVisibleProduct)
  return (
    <>
    <Container className="p-6 ">
      <div className='md:grid md:grid-cols-2 '>
         <img className='w-[80%] mx-auto mb-10' src={currentVisibleProduct.image.mobile} />
        <div className='self-center'>




            
        {currentVisibleProduct.new &&   <span className='text-orange tracking-[0.62rem] font-light uppercase'> new product </span> }
            <h3 className='text-black leading-[1.4] font-bold mt-4 mb-2'>{currentVisibleProduct.name}</h3>
            <p className='text-black mb-6'>{currentVisibleProduct.description}</p>
            <h5 className='text-black text-[1.2rem] my-8 font-bold'>${currentVisibleProduct.price}</h5>
            <div className='flex items-center'>
                 <IncreaseQuantityBox/>
                <Btn className='bg-orange mx-4 text-white' text="ADD TO CART" />
            </div>
        </div>
      </div>
      <div className='md:grid md:grid-cols-2 mt-20 max-w-[1000px] mx-auto '>
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
                {currentVisibleProduct.includedItems.map(({quantity,item},index)=>{
              return   <li key={index} className='flex items-center my-2 ' ><strong className='text-orange mr-4'>{quantity}x</strong><p className='text-black '>{item}</p></li>
          })}
            
          </ul>
        </div>
      </div>
        {/* gallery */}
        <div className='mt-36 xs2:grid xs2:grid-cols-2 max-w-[1000px] mx-auto  xs2:gap-6'>
          <img className='rounded-md ' src={windowWidth <460 ? currentVisibleProduct.gallery.first.mobile :windowWidth <1024 ? currentVisibleProduct.gallery.first.tablet:currentVisibleProduct.gallery.first.desktop} />
          <img className='rounded-md ' my-2  src={windowWidth <460 ? currentVisibleProduct.gallery.second.mobile :windowWidth <1024 ? currentVisibleProduct.gallery.second.tablet:currentVisibleProduct.gallery.second.desktop} />
          <img className='row-start-1 mx-auto   row-span-2 col-start-2 w-full h-full object-cover rounded-md' src={windowWidth <460 ? currentVisibleProduct.gallery.third.mobile :windowWidth <1024 ? currentVisibleProduct.gallery.third.tablet:currentVisibleProduct.gallery.third.desktop} />
        </div>
         {/*others products  */}
         <div className='mt-40 max-w-[1000px] mx-auto'>
           <h3 className='text-paleBlack text-center'>YOU MAY ALSO LIKE</h3>
           <div className=' lg:grid lg:grid-cols-3 lg:gap-10'>
              {currentVisibleProduct.others.map(({image,name,slug,category})=>{
           
             return <div className='text-center my-10'> <img className='' src={ windowWidth < 960 ? image.mobile : image.desktop} alt="other category product image"  />
                  <h3 className='text-paleBlack leading-[1.4] font-bold my-8 text-3xl'>{name}</h3>
                  {/* ${name} */}
                  <Link to={`/${slug}`}>
                    {console.log(category)}
            <Btn className='bg-orange text-white' text="see product"/>
                   </Link>                   </div>
              })}
           </div>
         </div>
        <ProductsIntroGridContainer className='flex mt-[8rem] ' />
       <Callout />
    </Container>
       <Footer />
    </>
  );
  }


export default ProductDetails