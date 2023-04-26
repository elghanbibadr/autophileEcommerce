import { Link } from 'react-router-dom'
import zx9speakerimage from "../../../public/images/home/mobile/image-speaker-zx9.png"
import zx9speakerimageDesktop from "../../../public/images/home/desktop/image-speaker-zx9.png"
import Btn from "../../componenet/UI/Btn"

const Cta = () => {
  return (
    <div className='bg-orange my-14 cta rounded-md flex-col-between text-center  p-6 lg:flex-row  lg:text-left lg:bg-left'>
      <img className='lg:hidden' src={zx9speakerimage} alt='zx9 speaker image' />
      <img className='hidden  lg:block w-[55%] p-10 scale-90 ' src={zx9speakerimageDesktop} alt='zx9 speaker image' />
      <div className='my-8 mx-auto'>
        <h2 className='font-bold leading-[1.3]'>ZX9 <br/> SPEAKER</h2>
        <p className='my-4 '>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to='speakers/zx9-speaker'>
          <Btn className='bg-black text-white  hover:bg-blackHover' text="see product" />
        </Link>
      </div>
    </div>
  )
}

export default Cta