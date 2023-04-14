import React from 'react'

 const Btn = (props) => {
  return (
    <button className={`font-bold text-xs tracking-wider lg:text-sm  px-6 py-3 cursor-pointer uppercase transition-[background-color] duration-500 ${props.className}`}>{props.text}</button>
  )
}

export default Btn