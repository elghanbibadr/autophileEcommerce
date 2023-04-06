import React ,{useEffect,useState} from 'react'
import Btn from './UI/Btn'
const ProductDesc = (props) => {
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

  return (
    <div className='mt-20 gap-x-6 lg:grid lg:grid-cols-2 '>
    <div className='lg:col-start-2'>
      <img className='rounded-md '  src="/images/product-xx99-mark-one-headphones/tablet/image-product.jpg" />
       </div>
    <div className='text-center lg:row-start-1 lg:text-left p-4'>
        <h3 className='text-black leading-[1.4] font-bold my-6'>{props.name}</h3>
        <p className='text-black mb-6'>
        {props.description}
        </p>
        <Btn className='bg-orange text-white' text="see product"/>
    </div>
    </div>
  )
}

export default ProductDesc