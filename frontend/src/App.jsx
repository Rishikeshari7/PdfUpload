import { useState,useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import FormPage from './components/FormPage'
import AllUserData from './components/AllUserData'


function App() {
  return (
    <>
    <div className=' w-[100vw]  min-w-[350px] min-h-[100vh] bg-bgLight dark:bg-bgDark'>
      <Navbar/>
      <Routes>
        <Route path="/upload" element={<FormPage/>} />
        <Route path="/" element={<AllUserData FormPage />} />
      </Routes>
    </div>

    </>
  )
}

export default App
