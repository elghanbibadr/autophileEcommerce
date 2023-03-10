import  React,{useState} from 'react'
import hamburgerLogo from ".././../../public/images/shared/tablet/icon-hamburger.svg"
import logo from "../../../public/images/shared/desktop/logo.svg"
import cart from "../../../public/images/shared/desktop/icon-cart.svg"
import Overlay from '../../componenet/UI/Overlay'
import ProductIntroCard from "../../componenet/UI/ProductIntroCard"

const Nav = () => {
    const [backdropIsOpen,setBackdropIsOpen] = useState(false)

    const handleCardShopClicked=()=>{
        setBackdropIsOpen(true)
    }
  return (
      <nav className='flex-row-between w-full'>
      <div className='flex-row'>
          <img className='mr-8' src={hamburgerLogo} alt='hamburger logo icon' />
           <img src={logo}  alt='audiophile logo'  />
      </div>
      <img onClick={handleCardShopClicked} src={cart} alt='cart icon' />
      { backdropIsOpen &&  <Overlay setBackdropIsOpen={setBackdropIsOpen} >
         <ProductIntroCard/>
       </Overlay>  }
      </nav>

  )
}

export default Nav