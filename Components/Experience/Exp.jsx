import React from 'react'
import data from '../../Data/data';
import ExpCard from '../Additional/ExpCard';
import { motion } from 'framer-motion';
import Loader from "../Additional/Loader";
import { Heading } from '@chakra-ui/react';

const Exp = () => {
  const expVariant={
    hidden:{
      y:-750
    },
    visible:{
      y:0,
      transition:{
        duration:1,
        delay:1
      }
    }
  }
    return (
        <section className="">
      <div className="max-w-6xl mx-auto h-48 ">
      <Heading className=" text-6xl md:text-9xl font-bold py-20 text-center md:text-left">
            Experiences
            <Loader wrd={"Experiences"} cons={16} col={"#FFC900"}/>
          </Heading>
      </div>
      <div className=" -mt-4">
        <div className="grid grid-cols-1  max-w-xl mx-auto pt-20">
          {data.exp.map((exp, idx) => (
            <>
              <ExpCard detail={exp}/>
              {idx === data.exp.length - 1 ? null : (
                <motion.div className="divider-container flex flex-col items-center -mt-2" variants={expVariant} initial="hidden" animate="visible">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
    )
}

export default Exp