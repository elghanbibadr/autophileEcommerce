import React from 'react'

const Container = (props) => {
  return (
    <div className={` ${props.className} max-w-[1440px] px-6 lg:mx-auto lg:px-16`}>{props.children}</div>
  )
}

export default Container