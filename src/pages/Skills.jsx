"use client"

import { motion } from "framer-motion"
import { Code, Database, Palette, Globe, Smartphone, Zap } from "lucide-react"

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 70 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "GraphQL", level: 70 },
        { name: "Redis", level: 65 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 60 },
        { name: "iOS Development", level: 55 },
        { name: "Android Development", level: 55 },
      ],
    },
    {
      icon: Globe,
      title: "DevOps & Tools",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
        { name: "Linux", level: 80 },
        { name: "Nginx", level: 65 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "Illustrator", level: 70 },
        { name: "Framer Motion", level: 80 },
      ],
    },
    {
      icon: Zap,
      title: "Other Technologies",
      skills: [
        { name: "Python", level: 70 },
        { name: "Java", level: 65 },
        { name: "PHP", level: 60 },
        { name: "Firebase", level: 75 },
        { name: "Socket.io", level: 70 },
      ],
    },
  ]

  const tools = [
    "VS Code",
    "Postman",
    "Figma",
    "Git",
    "Docker",
    "Webpack",
    "Vite",
    "Jest",
    "Cypress",
    "MongoDB Compass",
    "Slack",
    "Jira",
    "Trello",
    "Notion",
  ]

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">My Skills</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various technologies and tools.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 p-8 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-purple-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AWS Certified Developer",
                issuer: "Amazon Web Services",
                year: "2023",
                icon: "☁️",
              },
              {
                title: "MongoDB Certified Developer",
                issuer: "MongoDB University",
                year: "2022",
                icon: "🍃",
              },
              {
                title: "React Developer Certification",
                issuer: "Meta",
                year: "2021",
                icon: "⚛️",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-purple-500/20 p-6 text-center hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
