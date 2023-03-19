import React from 'react'
import logo from "/images/shared/desktop/logo.svg"
import faceBookLogo from "/images/shared/desktop/icon-facebook.svg"
import twitterLogo from "/images/shared/desktop/icon-twitter.svg"
import instagramLogo from "/images/shared/desktop/icon-instagram.svg"
import LinksList from '../../componenet/UI/LinksList'
const Footer = () => {
  return (
    <footer className='bg-paleBlack mt-40 py-10 px-10'>
    <div className='md:flex justify-between items-center'>
    <img src={logo}  alt="audiophile logo" />
     <LinksList />
    </div>
    <p className='lg:w-1/2'>
    Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
    </p>
    <div className='flex justify-between mt-8'>
        <p>Copyright 2021. All Rights <br/> Reserved</p>
        <ul className='flex  '>
            <li><img src={faceBookLogo} alt="facebook logo" /></li>
            <li className='mx-4'><img src={twitterLogo} alt="facebook logo" /></li>
            <li><img src={instagramLogo} alt="facebook logo" /></li>
            
        </ul>
    </div>
    </footer>
  )
}

export default Footer