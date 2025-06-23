"use client"

import {  Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/Scroll"
import "./App.css"

function App() {
  return (
    <>
    <ScrollToTop/>
   
      <div className="bg-gray-900 min-h-screen text-white overflow-x-hidden">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
   
    </>
  )
}

export default App
