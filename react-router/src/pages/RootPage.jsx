import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'
 const RootPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-blend-normal bg-gradient-to-r from-sky-500 to-orange-400">
        <Header/>
        
        <main>
          <Outlet/>
        </main>
        <Footer/>
        
    </div>
  )
}
export default RootPage