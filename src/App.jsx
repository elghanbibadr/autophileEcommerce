import React,{useState} from 'react'
import { Home } from './pages/home/Home'
import { Route,Routes } from 'react-router-dom'
import RootLayout from './RootLayout'
import Headphones from './pages/headphones/Headphones'
import Nav from './pages/home/Nav'
import ProductsIntroGridContainer from './componenet/UI/ProductsIntroGridContainer'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<RootLayout/>,
//     children:[
//        {path: '/home' ,element:<Home/>},
//       {path: '/headphones' ,element:<Headphones/>}
//     ],
//   }
// ])

const App = () => {
  const [ProductsIntroGridContainerOpen,setProductIntroGridContainerOpen] = useState(false)

  return (
  
  <>
       <Nav ProductsIntroGridContainerOpen={ProductsIntroGridContainerOpen} setProductIntroGridContainerOpen={setProductIntroGridContainerOpen} /> 
        {ProductsIntroGridContainerOpen &&  <ProductsIntroGridContainer />}
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/headphones" element={<Headphones />} />
    {/* <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  </>
  )
}

  export default App