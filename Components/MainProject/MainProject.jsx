import { Heading, Image, Text, Link, Box } from "@chakra-ui/react";
import React from "react";
import data from "../../Data/data";
import Loader from "../Additional/Loader"
const MainProject = () => {
  return (
    <>
      <section>
        <Box className="max-w-6xl mx-auto h-48 ">
          <Heading className=" text-6xl md:text-9xl font-bold py-20 text-center md:text-left">
            Projects
            <Loader wrd={"Projects"} cons={16} col={"#EA99D5"}/>
          </Heading>
        </Box>
        <Box className="">
          <Box className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
            {data.mainProjects.map((i) => (
              <a
                href={i.url}
                className="w-full block shadow-2xl"
                target="_blank"
              >
                <Box className="relative overflow-hidden">
                  <Box className="h-72 object-cover">
                    <Image
                      src={i.img}
                      alt="portfolio"
                      className="transform hover:scale-125 hover:rounded-md transition duration-2000 ease-out object-cover h-full w-full"
                      borderRadius={"md"}
                    />
                  </Box>
                  <h3 className="absolute top-10 left-10 text-gray-50 font-bold text-base bg-red-500 rounded-md px-2">
                    {i.title}
                  </h3>
                </Box>
              </a>
            ))}
          </Box>
        </Box>
      </section>
    </>
  );
};

export default MainProject;
