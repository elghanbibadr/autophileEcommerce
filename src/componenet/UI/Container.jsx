import React from 'react'

const Container = (props) => {
  return (
    <div className='container mx-auto lg:px-10'>{props.children}</div>
  )
}

export default Container