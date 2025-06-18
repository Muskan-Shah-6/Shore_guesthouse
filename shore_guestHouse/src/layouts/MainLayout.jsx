// src/layouts/MainLayout.jsx
import React from 'react'
import Navbar from '../components/navigation/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
