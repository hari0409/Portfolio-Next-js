import { Box, Heading, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import data from "../../Data/data";
import Loader from "../Additional/Loader";

const Info = () => {
  const imgVariant = {
    hover: {
      scale: [1, 1.25, 1, 1.25, 1, 1.25, 1],
      transition: {
        yoyo: Infinity,
        duration: 2.2,
      },
    },
    hidden: {
      x: -500,
    },
    visible: {
      x: 0,     
    },
  };
  return (
    <section>
      <Box className="max-w-6xl mx-auto h-48">
        <h1 className=" text-3xl md:text-7xl font-bold py-20 text-center md:text-left">
          About Me.
          <Loader wrd={"About Me"} cons={42} col={"orange"} />
        </h1>
      </Box>
      <br />
      <div className="-mt-32">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-xl md:text-2xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {data.about.title}
          </p>
        </div>
      </div>
      <Box>
        <Box className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <Box className="inline-flex flex-col">
            <Box className="mt-8">
              <h1 className="text-xl font-semibold ">
                {data.op} Opportunities
              </h1>
              <p className="text-lg ">
                I'm looking for an {data.op} currently, If you see me as a good
                fit, check my{" "}
                <Link
                  href={data.resume}
                  target="__blank"
                  className="border-b-2 border-gray-800 font-bold"
                >
                  CV
                </Link>{" "}
                and I'd love to work & learn with you.
              </p>
            </Box>
          </Box>
          <Box className="col-span-1 md:col-span-2">
            {data.about.desc?.map((desc, idx) => (
              <p key={idx} className="text-xl  ">
                {desc}
              </p>
            ))}
            <br />
            <Heading
              className="text-3xl rounded-md px-2 py-1 inline-block font-bold"
              bg={"teal.400"}
            >
              Worked With:
            </Heading>
            <Box className="flex flex-row flex-wrap mt-8">
              {data.known.map((i) => (
                <a href={i.url} target="_blank" className="cursor-pointer">
                  <motion.img
                    src={i.src}
                    className="h-20 w-20 mx-4 my-4"
                    variants={imgVariant}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                  />
                </a>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Info;
