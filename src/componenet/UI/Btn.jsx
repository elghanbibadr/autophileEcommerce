import React from 'react'

 const Btn = (props) => {
  return (
    <button className={`font-bold text-sm tracking-wider  px-5 py-3 cursor-pointer uppercase transition-[background-color] duration-500 ${props.className}`}>{props.text}</button>
  )
}

export default Btn