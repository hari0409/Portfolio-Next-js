import React from 'react'
import { motion } from 'framer-motion'
const ExpCard = ({detail}) => {
  const cardVariant={
    hidden:{
      x:-750
    },
    visible:{
      x:0,
      transition:{
        duration:1
      }
    }
  }
    return (
        <motion.div className="relative experience-card border p-4 rounded-md shadow-xl  z-10 mx-4" variants={cardVariant} initial="hidden" animate="visible">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl  font-bold ">
        {detail.year}
      </h1>
      <h1 className="font-semibold text-xl">{detail.title}</h1>
      
      <h1>{detail.company}</h1>
      <p className="text-gray-600 dark:text-gray-400 my-2">{detail.desc}</p>
    </motion.div>
    )
}

export default ExpCard
