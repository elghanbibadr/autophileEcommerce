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
    <div className='mt-20    gap-x-6 lg:grid lg:grid-cols-2 justify-center items-center'>
    <div className=' lg:col-start-2'><img className='rounded-md     '  src={windowWidth < 500 ? "/images/category-headphones/mobile/image-xx99-mark-one.jpg": windowWidth < 1024 ? "/images/category-headphones/tablet/image-xx99-mark-one.jpg":"/images/category-headphones/desktop/image-xx99-mark-one.jpg" } /> </div>
    <div className='text-center lg:row-start-1 lg:text-left p-4'>
        <h3 className='text-black leading-[1.4] font-bold my-6'>XX99 MARK II HEADPHONES</h3>
        <p className='text-black mb-6'>
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
        </p>
        <Btn className='bg-orange text-white' text="see product"/>
    </div>
    </div>
  )
}

export default ProductDesc