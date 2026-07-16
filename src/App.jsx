import React from 'react'
import {Route, Routes,Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Skills from './Pages/Skills'
import Achievement from './Pages/Achievement'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar/Navbar'


const App = () => {
  return (
    <div className='text-white'>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
