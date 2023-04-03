import React from 'react'
import { Home } from './pages/home/Home'
import Headphones from './pages/headphones/Headphones'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {path: '/' ,element:<Home/>},
  {path: '/headphones' ,element:<Headphones/>}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

  export default App