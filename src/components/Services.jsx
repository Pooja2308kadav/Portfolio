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
      description:
        "Building responsive and dynamic interfaces using React.js to ensure seamless user experiences across devices.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Creating robust RESTful APIs and handling server-side logic using Node.js and Express for scalable web applications.",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      description:
        "Designing efficient MongoDB schemas and integrating Mongoose for high-performance, flexible data storage solutions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deployment & Hosting",
      description:
        "Deploying full-stack applications using Vercel, Render, and cloud services, ensuring CI/CD and live monitoring.",
      color: "from-orange-500 to-red-500",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Quality Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer powerful and modern full-stack solutions using the MERN stack to turn your ideas into real-world web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
