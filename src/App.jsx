import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'
import Skills from './Pages/Skills'
import Achievement from './Pages/Achievement'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar/Navbar'
import Cursor from './Components/Cursor'
import PageTransition from './Components/PageTransition'
import Video from './Components/Home/Video'

const App = () => {
  const location = useLocation();

  return (
    <div className='text-white bg-[#111] min-h-screen relative overflow-x-hidden'>
      {/* Global Cursor */}
      <Cursor />

      {/* Global Background Video */}
      <div className="fixed inset-0 -z-20">
        <Video />
      </div>
      {/* Dark blur overlay — keeps all pages dark like the home page */}
      <div className="fixed inset-0 -z-10 bg-black/70 backdrop-blur-[2px]" />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Transitions wrap the routes */}
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Project />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
    </div>
  )
}

export default App
