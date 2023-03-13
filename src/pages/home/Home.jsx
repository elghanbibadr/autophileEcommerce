import React from 'react'
import hamburgerLogo from ".././../../public/images/shared/tablet/icon-hamburger.svg"
import logo from "../../../public/images/shared/desktop/logo.svg"
import cart from "../../../public/images/shared/desktop/icon-cart.svg"
export const Home = () => {
  return (
    <header className='bg-black flex h-20 py-2 px-6 '>
      <nav className='flex-row-between w-full'>
      <div className='flex-row'>
          <img className='mr-8' src={hamburgerLogo} alt='hamburger logo icon' />
           <img src={logo}  alt='audiophile logo'  />
      </div>
      <img src={cart} alt='cart icon' />
      </nav>
    </header>
  )
}
