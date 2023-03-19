import React from 'react'

const LinksList = (props) => {
  return (
    <ul className={`${props.className} flex justify-between  text-sm my-8 font-bold lg:text-md`}>
    <li className='hover:text-orange transition-colors duration-500'>HOME</li>
    <li className='mx-6 hover:text-orange transition-colors duration-500'>HEADPHONES</li>
    <li className='hover:text-orange transition-colors duration-500'>SPEAKERS</li>
    <li className='ml-6 hover:text-orange transition-colors duration-500'>EARPHONES</li>
</ul>
  )
}

export default LinksList