"use client"

import { motion } from "framer-motion"
import { FaCode, FaMobile, FaPalette, FaRocket, FaDatabase, FaSearch } from "react-icons/fa"

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Full-stack web development using modern technologies like React, Node.js, and MongoDB.",
      features: ["Responsive Design", "API Development", "Database Integration", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaMobile />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and modern mobile technologies.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Deployment"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "User-centered design approach creating intuitive and engaging digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      description: "Optimize your applications for speed, performance, and better user experience.",
      features: ["Code Optimization", "Bundle Analysis", "Caching Strategies", "SEO Optimization"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Efficient database architecture and optimization for scalable applications.",
      features: ["Schema Design", "Query Optimization", "Data Migration", "Backup Solutions"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <FaSearch />,
      title: "SEO & Analytics",
      description: "Improve your online visibility and track performance with advanced analytics.",
      features: ["SEO Optimization", "Google Analytics", "Performance Tracking", "Conversion Optimization"],
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-20 px-4">
      <div className="max-w-7xl mx-auto py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-purple-400">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive development and design services to bring your digital ideas to life with cutting-edge
            technologies and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-16">My Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and project requirements" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services
