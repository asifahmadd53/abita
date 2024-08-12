import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About/About'
import Products from './components/Products/Products'
import Blog from './components/Blog/Blog'
import ContactSection14 from './components/contact/contact'
import Cart from './components/cart/Cart'
import Details from './Details/Details'
import Favourites from './Favourite/Favourites'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Hero/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='shop' element={<Products/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<ContactSection14/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='/:slug' element={<Details/>}/>
      <Route path='shop/:slug' element={<Details />} />
      <Route path='favourites' element={< Favourites/>}/>
      <Route path='favourites/:slug' element={< Details/>}/>
    </Route>
  )
)




const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App