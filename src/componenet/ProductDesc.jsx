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
    <div className='mt-20 gap-x-[8rem] lg:grid lg:grid-cols-2 lg:mb-[10rem] '>
    <div >
      <img className='rounded-md '  src={windowWidth < 400 ? props.categoryImage.mobile : windowWidth < 1024 ? props.categoryImage.tablet:props.categoryImage.desktop}  />
       </div>
    <div className={`text-center ${props.id==1 ? 'lg:row-start-1':''}  lg:text-left lg:self-center p-4`}>
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