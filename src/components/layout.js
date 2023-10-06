import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer'
import Header from './header'

const layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default layout