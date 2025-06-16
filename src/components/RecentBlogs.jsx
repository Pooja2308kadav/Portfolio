"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaCalendar, FaArrowRight } from "react-icons/fa"

const RecentBlogs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const blogs = [
    {
      title: "How to make web templates",
      date: "Dec 10, 2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Learn the best practices for creating modern web templates that are both beautiful and functional.",
    },
    {
      title: "Make Business card",
      date: "Dec 8, 2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Design professional business cards that make a lasting impression on your clients and partners.",
    },
    {
      title: "How to make flyer design",
      date: "Dec 5, 2023",
      image: "/placeholder.svg?height=200&width=300",
      excerpt: "Create eye-catching flyer designs that effectively communicate your message and attract attention.",
    },
  ]

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Blogs</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your
            customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-purple-400 text-sm mb-3">
                  <FaCalendar className="mr-2" />
                  {blog.date}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-purple-400 text-sm font-medium">
                  Read More <FaArrowRight className="ml-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentBlogs
