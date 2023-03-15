import React from 'react'

const Container = (props) => {
  return (
    <div className='container px-6 lg:mx-auto lg:px-16'>{props.children}</div>
  )
}

export default Container