import React from 'react'
import { Link,NavLink,useLocation } from 'react-router-dom'
const LinksList = (props) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <ul className={`${props.className} flex justify-between  text-[0.87rem] my-8 font-bold lg:text-md`}>
    <NavLink
    exact
     to="/"
     activeClassName={pathname === "/" ? "active" : ""}

     >
        <li className='hover:text-orange transition-colors duration-500'>HOME</li>
    </NavLink>
    <NavLink 
    exact
    to="/headphones"
    activeClassName={pathname === "/headphones" ? "active" : ""}
    >
        <li className='hover:text-orange transition-colors mx-8 duration-500'>HEADPHONES</li>
    </NavLink>
    <NavLink 
    exact
    to="speakers"
    activeClassName={pathname === "/speakers" ? "active" : ""}
    >
      <li className='hover:text-orange transition-colors duration-500'>SPEAKERS</li>
    </NavLink>
    <NavLink
    exact
     to='earphones'
     activeClassName={pathname === "/earphones" ? "active" : ""}

     >
      <li className='ml-6 hover:text-orange transition-colors duration-500'>EARPHONES</li>
    </NavLink>
</ul>
  )
}

export default LinksList