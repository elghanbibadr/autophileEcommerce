import Btn from '../../componenet/UI/Btn'
import { Link } from 'react-router-dom'
import yx1EarphoneImg from "../../../public/images/home/mobile/image-earphones-yx1.jpg"

export const Article = () => {
  return (
    <div className='text-black grid gap-x-4 gap-y-4 grid-row-1 lg:gap-x-8'>
      <div className='bg-zx7Speaker-tablet  bg-cover bg-right w-full md:bg-zx7Speaker-tablet lg:bg-zx7Speaker-desktop  rounded-md flex flex-col items-start xs2:col-span-2 pl-10 justify-center  bg-no-repeat h-[220px] lg:h-[300px]'>
        <h3 className='text-black font-bold mb-4'>ZX7 SPEAKER</h3>
        <Link to='/speakers/zx7-speaker'>
          <Btn className='text-black border-[black] border-[1px] py-2 hover:bg-black hover:text-lightGray' text="see product" />
        </Link>
      </div>
        <img className='rounded-md  lg:h-3/4 w-full' src={yx1EarphoneImg} alt='earphone image' />
        <div className='bg-lightGray px-4 py-10 lg:px-20 flex flex-col  justify-center rounded-md  lg:h-3/4'>
          <h3 className='text-black font-bold'>YX1 EARPHONES</h3>
          <Link to='earphones/yx1-earphones'>
            <Btn className='text-black mt-4 w-fit  border-[1px] py-2 hover:bg-black hover:text-lightGray' text="see product" />
          </Link>
        </div>
    </div>
  )
}
