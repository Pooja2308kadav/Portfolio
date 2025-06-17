"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaReact, FaServer, FaDatabase, FaCloudUploadAlt } from "react-icons/fa"

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description: "Crafting responsive and dynamic user interfaces using React.js, ensuring seamless experiences across all devices.",
      features: ["Responsive Design", "React Component Architecture", "State Management", "Cross-Browser Compatibility"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Developing robust RESTful APIs and server-side logic with Node.js and Express.js for scalable web applications.",
      features: ["RESTful APIs", "Server-Side Logic", "Authentication Systems", "Scalable Architecture"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      description: "Designing efficient MongoDB schemas with Mongoose for high-performance and flexible data storage solutions.",
      features: ["Schema Design", "Query Optimization", "Data Security", "Mongoose Integration"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deployment & Hosting",
      description: "Deploying full-stack MERN applications using Vercel and Render, with CI/CD pipelines and live monitoring.",
      features: ["CI/CD Pipelines", "Cloud Hosting", "Live Monitoring", "Scalable Deployment"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const processSteps = [
    { step: "01", title: "Discovery", description: "Understanding project goals and requirements through collaboration." },
    { step: "02", title: "Planning", description: "Creating a detailed roadmap with timelines and milestones." },
    { step: "03", title: "Development", description: "Building solutions using MERN stack with best practices." },
    { step: "04", title: "Delivery", description: "Testing, deploying, and providing ongoing support for success." },
  ]

  return (
    <motion.section 
      ref={ref} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="pt-16 px-4 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-purple-400">Services</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Offering modern full-stack solutions with the MERN stack to transform your ideas into powerful web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-gray-800/60 backdrop-blur-md p-6 rounded-2xl hover:bg-gray-800/80 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/20"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
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
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-white">My Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-center p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto shadow-md">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{process.title}</h3>
                <p className="text-gray-400 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services