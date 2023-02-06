import React from 'react'
import Header from '../components/Header'
import Introduce from '../components/Introduce'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Introduce />
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
