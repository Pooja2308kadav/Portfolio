"use client"

import { motion } from "framer-motion"
import { FaCalendar, FaUser, FaArrowRight, FaSearch } from "react-icons/fa"

const Blog = () => {
  const blogs = [
    {
      title: "Getting Started with MERN Stack Development",
      date: "Dec 15, 2023",
      author: "Gerold",
      image: "/placeholder.svg?height=250&width=400",
      excerpt: "Learn the fundamentals of MERN stack development and build your first full-stack application.",
      category: "Development",
      readTime: "5 min read",
    },
    {
      title: "Modern UI/UX Design Principles",
      date: "Dec 12, 2023",
      author: "Gerold",
      image: "/placeholder.svg?height=250&width=400",
      excerpt: "Explore the latest trends and principles in UI/UX design that create exceptional user experiences.",
      category: "Design",
      readTime: "7 min read",
    },
    {
      title: "React Performance Optimization Tips",
      date: "Dec 10, 2023",
      author: "Gerold",
      image: "/placeholder.svg?height=250&width=400",
      excerpt: "Discover advanced techniques to optimize your React applications for better performance.",
      category: "React",
      readTime: "6 min read",
    },
    {
      title: "Building Responsive Web Applications",
      date: "Dec 8, 2023",
      author: "Gerold",
      image: "/placeholder.svg?height=250&width=400",
      excerpt: "Learn how to create responsive web applications that work seamlessly across all devices.",
      category: "Web Development",
      readTime: "8 min read",
    },
    {
      title: "Node.js Best Practices for 2024",
      date: "Dec 5, 2023",
      author: "Gerold",
      image: "/placeholder.svg?height=250&width=400",
      excerpt: "Stay updated with the latest Node.js best practices and patterns for building scalable applications.",
      category: "Node.js",
      readTime: "10 min read",
    },
    {
      title: "The Future of Web Development",
      date: "Dec 3, 2023",
      author: "Gerold",
      image: "/placeholder.svg?height=250&width=400",
      excerpt: "Explore emerging technologies and trends that will shape the future of web development.",
      category: "Technology",
      readTime: "12 min read",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 px-4">
      <div className="max-w-7xl mx-auto py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-purple-400">Blog</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing my thoughts, experiences, and insights about web development, design, and technology trends.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </motion.div>

        {/* Featured Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid md: grid-cols-2 gap-8 bg-gray-800/50 rounded-2xl overflow-hidden">
            <div className="aspect-video md:aspect-auto">
              <img
                src={blogs[0].image || "/placeholder.svg"}
                alt={blogs[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">Featured</span>
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {blogs[0].date}
                </div>
                <span>{blogs[0].readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogs[0].title}</h2>
              <p className="text-gray-400 mb-6">{blogs[0].excerpt}</p>
              <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </motion.article>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(1).map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
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
                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded">{blog.category}</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{blog.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-400">
                    <FaUser className="mr-2" />
                    {blog.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <FaCalendar className="mr-2" />
                    {blog.date}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter to get the latest articles and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Blog
