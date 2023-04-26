import { Link } from "react-router-dom"
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

 const {backdropIsOpen,setBackdropIsOpen,cartOpen,setCartOpen,ProductsIntroGridContainerOpen, setProductIntroGridContainerOpen} = useContext(AppContext)

    const {itemInCardNumber}=useContext(AppContext)
    const handleCardShopClicked=()=>{
        setBackdropIsOpen(true)
        setCartOpen(true)
    }

    const handleMenuHamburgerClicked=()=>{
    setProductIntroGridContainerOpen(true)
    
    }

  const handleCloseIconClicked=()=>{
   setProductIntroGridContainerOpen(false)
  }
  return (
      <nav className='flex-row-between px-6  max-w-[1440px] lg:mx-auto lg:px-20 relative  h-20 py-2  '>
      <div className='flex-row'>
         { !ProductsIntroGridContainerOpen &&  <img onClick={handleMenuHamburgerClicked} className='mr-8 lg:hidden' src={hamburgerLogo} alt='hamburger logo icon' /> }
        { ProductsIntroGridContainerOpen &&  <img onClick={handleCloseIconClicked} className='mr-8 lg:hidden' src={closeLogo} alt='close logo icon' />  }
           <Link to="/"><img src={logo}  alt='audiophile logo'  /></Link>
      </div>
           <LinksList className="hidden lg:flex" />
      <div>
          <img className='relative' onClick={handleCardShopClicked} src={cart} alt='cart icon' />
          {itemInCardNumber!==0 && <span className='absolute top-4  bg-orange h-[20px] text-xs font-bold w-[20px] rounded-full items-center justify-center inline-flex right-[18px] lg:right-[72px]'> {itemInCardNumber} </span>}
      </div>
      { backdropIsOpen &&   cartOpen && 
  <Overlay setBackdropIsOpen={setBackdropIsOpen} >
      <Cart/>
       </Overlay>  }
      </nav>

  )
}

export default Nav