"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const AnimatedNumber = ({ target, isInView }) => {
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 100, damping: 20 })
  const rounded = useTransform(spring, v => Math.floor(v))
  const [value, setValue] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on("change", v => setValue(v))
    return () => unsubscribe()
  }, [rounded])

  useEffect(() => {
    if (isInView) {
      count.set(0) // reset to 0
      setTimeout(() => {
        count.set(target)
      }, 100) // small delay to retrigger
    }
  }, [isInView, target])

  return <>{value}</>
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5 }) // not "once"

  const stats = [
    { number: 1, label: "Years Experience", suffix: "+" },
    { number: 10, label: "Project Completed", suffix: "+" },
    { number: 10, label: "Happy Clients", suffix: "+" },
    { number: 5, label: "Awards Winner", suffix: "+" },
  ]

  return (
    <section ref={ref} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedNumber target={stat.number} isInView={isInView} />
                <span className="text-purple-400">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
