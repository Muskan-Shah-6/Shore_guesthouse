import React from 'react'
import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Information from './pages/Information'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/info" element={<Information />} />
      </Route>
    </Routes>
  )
}

export default App
