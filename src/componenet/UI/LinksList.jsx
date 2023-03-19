import React from 'react'

const LinksList = (props) => {
  return (
    <ul className={`${props.className} flex justify-between  text-sm my-8 font-bold`}>
    <li>HOME</li>
    <li className='mx-6'>HEADPHONES</li>
    <li>SPEAKERS</li>
    <li className='ml-6'>EARPHONES</li>
</ul>
  )
}

export default LinksList