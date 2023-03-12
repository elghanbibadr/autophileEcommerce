import React from 'react'
import Btn from './componenet/UI/Btn'
const App = () => {
  return (
    <div >
      <h1>hello world</h1>
      <Btn className='bg-orange hover:bg-orangePale' text="see product" />
      <Btn className='bg-black text-white hover:bg-blackHover' text="see product" />
      <Btn className='text-black border-[1px] py-2 hover:bg-blackHover hover:text-textWhite' text="see product" />
    </div>
  )
}

  export default App