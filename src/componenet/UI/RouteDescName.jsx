import React from 'react'

const RouteDescName = (props) => {
  return (
    <div className='h-[200px] flex justify-center items-center'>
    <h2 className='text-white uppercase'>{props.routeName}</h2>
  </div>
    )
}

export default RouteDescName