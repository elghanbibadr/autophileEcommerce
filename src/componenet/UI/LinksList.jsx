import React from 'react'
import { Link } from 'react-router-dom'
const LinksList = (props) => {
  return (
    <ul className={`${props.className} flex justify-between  text-sm my-8 font-bold lg:text-md`}>
    <Link to="/">
        <li className='hover:text-orange transition-colors duration-500'>HOME</li>
    </Link>
    <Link to="/headphones">
        <li className='hover:text-orange transition-colors mx-6 duration-500'>HEADPHONES</li>
    </Link>
    <Link to="speakers">
      <li className='hover:text-orange transition-colors duration-500'>SPEAKERS</li>
    </Link>
    <Link className='earphones'>
      <li className='ml-6 hover:text-orange transition-colors duration-500'>EARPHONES</li>
    </Link>
</ul>
  )
}

export default LinksList