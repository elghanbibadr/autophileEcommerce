import  React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import hamburgerLogo from ".././../../public/images/shared/tablet/icon-hamburger.svg"
import closeLogo from ".././../../public/images/shared/tablet/icon-close-menu.svg"
import logo from "../../../public/images/shared/desktop/logo.svg"
import cart from "../../../public/images/shared/desktop/icon-cart.svg"
import Overlay from '../../componenet/UI/Overlay'
import LinksList from '../../componenet/UI/LinksList'
import Cart from '../../componenet/UI/Cart'
import { useContext } from 'react'
import { AppContext } from '../../store/AppContext'

const Nav = (props) => {
    const location = useLocation();
    console.log(location.pathname); // prints the current route path

 const {backdropIsOpen,setBackdropIsOpen} = useContext(AppContext)

    const {itemInCardNumber}=useContext(AppContext)
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
      <div>
          <img className='relative' onClick={handleCardShopClicked} src={cart} alt='cart icon' />
          {itemInCardNumber!==0 && <span className='absolute top-4  bg-orange h-[20px] text-xs font-bold w-[20px] rounded-full items-center justify-center inline-flex right-[18px] lg:right-[72px]'> {itemInCardNumber} </span>}
      </div>
      { backdropIsOpen &&   location.pathname!=="/checkout" && 
  <Overlay setBackdropIsOpen={setBackdropIsOpen} >
      <div className=" mt-10 "><Cart/></div>
       </Overlay>  }
      </nav>

  )
}

export default Nav