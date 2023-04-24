import React from 'react'
import { Link,NavLink,useLocation } from 'react-router-dom'
const LinksList = (props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <ul className={`   items-center justify-between  text-[0.87rem] my-8 font-bold lg:text-md ${props.className} `}>
    <NavLink
    exact
     to="/"
     activeClassName={pathname === "/" ? "active" : ""}

     >
        <li className='hover:text-orange mb-6 xs2:mb-0 transition-colors duration-500'>HOME</li>
    </NavLink>
    <NavLink 
    exact
    to="/headphones"
    activeClassName={pathname === "/headphones" ? "active" : ""}
    >
        <li className='hover:text-orange  mb-6 xs2:mb-0 transition-colors xs2:mx-4 md:mx-8 duration-500'>HEADPHONES</li>
    </NavLink>
    <NavLink 
    exact
    to="/speakers"
    activeClassName={pathname === "/speakers" ? "active" : ""}
    >
      <li className='hover:text-orange mb-6 xs2:mb-0 transition-colors duration-500'>SPEAKERS</li>
    </NavLink>
    <NavLink
    exact
     to='/earphones'
     activeClassName={pathname === "/earphones" ? "active" : ""}

     >
      <li className='xs2:ml-6 hover:text-orange mb-6 xs2:mb-0 transition-colors duration-500'>EARPHONES</li>
    </NavLink>
</ul>
  )
}

export default LinksList