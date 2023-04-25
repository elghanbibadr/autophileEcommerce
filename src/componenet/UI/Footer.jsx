import logo from "/images/shared/desktop/logo.svg"
import faceBookLogo from "/images/shared/desktop/icon-facebook.svg"
import twitterLogo from "/images/shared/desktop/icon-twitter.svg"
import instagramLogo from "/images/shared/desktop/icon-instagram.svg"
import LinksList from './LinksList'
import Container from "./Container"

const Footer = () => {

  const socialMediaLinks=[
    {
      id:1,
      img:faceBookLogo,
      href:"https://www.facebook.com/",
      alt:"facebook logo",
    },
    {
      id:2,
      img:twitterLogo,
      href:"https://twitter.com/GhanbiBadr",
      alt:"twitter logo",
    },
    {
      id:3,
      img:instagramLogo,
      href:"https://www.instagram.com/ba.dr9691/",
      alt:"instagram logo",
    },
  ]


  return (
    <footer className='bg-paleBlack py-10 mt-40 '>
      <Container>
        <div className='flex  flex-col xs2:flex-row justify-between items-center'>
          <img src={logo} alt="audiophile logo" />
          <LinksList className='flex-col  flex xs2:flex-row' />
        </div>
        <p className='lg:w-1/2'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
        </p>
        <div className='flex  justify-between  mt-8'>
          <p>Copyright 2021. All Rights <br /> Reserved</p>
          <ul className='flex items-center  '>
            {socialMediaLinks.map(({id,img,alt,href}) =>{
              return <li key={id} className={`${id===2 ? "mx-4":""}`}> <a href={href}><img src={img} alt={alt} /> </a> </li>
            })}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer