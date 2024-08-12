import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Footer from './components/Footer'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop/>
    <Outlet/>
    <Menu/>
    <Footer/>
    </>
  )
}

export default Layout