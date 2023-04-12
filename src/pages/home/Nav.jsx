import  React,{useState} from 'react'
import hamburgerLogo from ".././../../public/images/shared/tablet/icon-hamburger.svg"
import closeLogo from ".././../../public/images/shared/tablet/icon-close-menu.svg"
import logo from "../../../public/images/shared/desktop/logo.svg"
import cart from "../../../public/images/shared/desktop/icon-cart.svg"
import Overlay from '../../componenet/UI/Overlay'
import LinksList from '../../componenet/UI/LinksList'
import Cart from '../../componenet/UI/Cart'

const Nav = (props) => {
    const [backdropIsOpen,setBackdropIsOpen] = useState(false)
    const handleCardShopClicked=()=>{
        setBackdropIsOpen(true)
    }

    const handleMenuHamburgerClicked=()=>{
    props.setProductIntroGridContainerOpen(true)
    
    }

  const handleCloseIconClicked=()=>{
   props.setProductIntroGridContainerOpen(false)
  }
  return (
      <nav className='flex-row-between px-6  max-w-[1440px] lg:mx-auto lg:px-20 relative  h-20 py-2  '>
      <div className='flex-row'>
         { !props.ProductsIntroGridContainerOpen &&  <img onClick={handleMenuHamburgerClicked} className='mr-8 lg:hidden' src={hamburgerLogo} alt='hamburger logo icon' /> }
        { props.ProductsIntroGridContainerOpen &&  <img onClick={handleCloseIconClicked} className='mr-8 lg:hidden' src={closeLogo} alt='close logo icon' />  }
           <img src={logo}  alt='audiophile logo'  />
      </div>
           <LinksList className="hidden lg:flex" />
      <img onClick={handleCardShopClicked} src={cart} alt='cart icon' />
      { backdropIsOpen &&  <Overlay setBackdropIsOpen={setBackdropIsOpen} >
       </Overlay>  }
      </nav>

  )
}

export default Nav