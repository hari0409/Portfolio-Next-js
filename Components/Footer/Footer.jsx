import { Box } from '@chakra-ui/react'
import React from 'react'
import data from '../../Data/data'
import {GrInstagram,GrGithub,GrLinkedin} from "react-icons/gr";

const Footer = () => {
  return (
    <Box className='select-none cursor-pointer'>
      <Box className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
        <Box className="h-0.5 w-full bg-white dark:bg-gray-700"></Box>
        <Box className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <Box>
            <p>&copy; {data.name} All Rights "not" Reserved 🙃.</p>
          </Box>
          <Box className="space-x-4 flex flex-row items-center" >
            <a href={data.instaLink} target="_blank" className='transform hover:scale-125 transition duration-2000 ease-out'>
                <GrInstagram size={"1.5em"}/>
            </a>
            <a href={data.githubLink} target="_blank" className='transform hover:scale-125 transition duration-2000 ease-out'>
              <GrGithub size={"1.5em"}/>
            </a>
            <a href={data.linkedInLink} target="_blank" className='transform hover:scale-125 transition duration-2000 ease-out'>
              <GrLinkedin size={"1.5em"}/>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )    
}

export default Footer
