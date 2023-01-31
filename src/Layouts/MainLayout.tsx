import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from './../components/Footer'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
