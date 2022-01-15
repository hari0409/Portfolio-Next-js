import { motion } from "framer-motion";
import React from "react";
import { Box } from "@chakra-ui/react";

const Loader = ({wrd,cons,col}) => {
  const l=Math.floor(wrd.length*cons);
  const loaderVariant = {
    animateTwo: {
      x: [0, l],
      y: 0,
      transition: {
        x: {
          yoyo: Infinity,
          ease:"easeOut",
          duration:wrd.length/10
        },
      },
    },
  };
  return (
    <>
    <motion.div
    variants={loaderVariant}
    animate="animateTwo"
    >
    <Box
        className="rounded-full w-4 h-4"
        bgColor={col}
      ></Box>
    </motion.div>
    </>       
  );
};

export default Loader;
