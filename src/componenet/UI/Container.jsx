import React from 'react'

const Container = (props) => {
  return (
    <div className='container px-6 mx-auto lg:px-10'>{props.children}</div>
  )
}

export default Container