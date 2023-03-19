import React from 'react'
import logo from "/images/shared/desktop/logo.svg"
import faceBookLogo from "/images/shared/desktop/icon-facebook.svg"
const Footer = () => {
  return (
    <footer className='bg-paleBlack h-[300px] py-10 px-10'>
    <div>
    <img src={logo}  alt="audiophile logo" />
    <ul className='flex justify-between  text-sm my-8 font-bold'>
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
    </ul>
    </div>
    <p>
    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>
    <div className='flex justify-between mt-8'>
        <p>Copyright 2021. All Rights Reserved</p>
        <ul className='flex  '>
            <li><img src={faceBookLogo} alt="facebook logo" /></li>
            <li className='mx-4'><img src={faceBookLogo} alt="facebook logo" /></li>
            <li><img src={faceBookLogo} alt="facebook logo" /></li>
            
        </ul>
    </div>
    </footer>
  )
}

export default Footer