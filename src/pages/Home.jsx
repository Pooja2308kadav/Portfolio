"use client"

import { motion } from "framer-motion"
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Services from "../components/Services"
import RecentWorks from "../components/RecentWorks"
import Experience from "../components/ExperiencePage"
import Skills from "../components/Skills"
import Testimonials from "../components/Testimonials"
import RecentBlogs from "../components/RecentBlogs"

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <Stats />
      <Services />
      <RecentWorks />
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-16">
        <Experience />
        <div>
          <Skills />
        </div>
      </div>
      <Testimonials />
      <RecentBlogs />
    </motion.div>
  )
}

export default Home
