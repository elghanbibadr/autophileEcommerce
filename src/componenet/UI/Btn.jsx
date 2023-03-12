import React from 'react'

 const Btn = (props) => {
  return (
    <button className={`font-bold text-sm tracking-wider bg-orange px-5 py-3 cursor-pointer uppercase hover:bg-orangePale transition-[background-color] duration-500 ${props.className}`}>{props.text}</button>
  )
}

export default Btn