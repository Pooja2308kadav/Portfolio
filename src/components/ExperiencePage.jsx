// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "framer-motion"
// import { useRef } from "react"

// const Experience = () => {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true })

//   const experiences = [
//     {
//       period: "Mar 2024 – Present",
//       title: "Support Engineer Intern",
//       company: "Terado Engineering Pvt. Ltd.",
//       description:
//         "Provided technical guidance to teams and explained complex topics in simple terms, often adopting a teacher-like role.",
//     },
//     {
//       period: "Jan 2025 – Apr 2025",
//       title: "Web Developer Intern",
//       company: "Codify Institute",
//       description:
//         "Taught web development using HTML, CSS, JavaScript, and React. Mentored peers in backend with Node.js and MongoDB.",
//     },
//     {
//       period: "2023 – 2024",
//       title: "MERN Stack Developer (Project-Based)",
//       company: "Personal & Academic Projects",
//       description:
//         "Built full-stack apps like GoRide Platform and Mauli LMS, used for mentoring peers and teaching concepts.",
//     },
//     {
//       period: "2020 – 2023",
//       title: "Workshop Instructor & Volunteer",
//       company: "Tuljabhavani Tech Awareness Camps",
//       description:
//         "Conducted computer basics and coding workshops for local students, with a focus on inclusive, hands-on teaching.",
//     },
//   ]

//   return (
//     <div ref={ref} className="py-8">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         className="text-2xl md:text-3xl font-bold mb-8"
//       >
//         My Experience
//       </motion.h2>

//       <div className="space-y-6">
//         {experiences.map((exp, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : {}}
//             transition={{ delay: index * 0.1 }}
//             className="relative pl-8 border-l-2 border-purple-500/30"
//           >
//             <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
//             <div className="text-purple-400 text-sm mb-1">{exp.period}</div>
//             <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
//             <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
//             <p className="text-gray-400 text-sm">{exp.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Experience

"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      period: "Mar 2024 - Present",
      title: "Support Engineer Intern",
      company: "Terado Engineering Pvt. Ltd., Virar",
      description: "Provided hands-on technical support and resolved client issues efficiently. Delivered software demo presentations and actively participated in technical initiatives.",
    },
    {
      period: "Jan 2025 - Apr 2025",
      title: "Web Developer Intern",
      company: "Codify Institute , Virar",
      description: "Designed and developed live client websites for e-commerce, education, and healthcare sectors. Built responsive front-end interfaces using HTML, CSS, JavaScript, and React. Developed RESTful APIs with Node.js and Express.js, managing data with MongoDB. Utilized React.js for efficient UI development and state management.",
    },
  ]

  return (
    <div ref={ref} className="py-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl md:text-3xl font-bold mb-8"
      >
        My Experience
      </motion.h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l-2 border-purple-500/30"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="text-purple-400 text-sm mb-1">{exp.period}</div>
            <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
            <div className="text-gray-400 text-sm mb-2">{exp.company}</div>
            <p className="text-gray-400 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Experience