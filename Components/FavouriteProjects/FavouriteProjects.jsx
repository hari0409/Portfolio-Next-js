import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import {HiOutlineLink} from "react-icons/hi";
import Loader from '../Additional/Loader';
const FavouriteProjects = () => {
   
    return (
        <>
            <Box>
                <Flex position={"relative"} p={2} display={{base:"none",md:"flex"}}  justifyContent="space-around" alignItems="center">
                    <Heading fontSize={"xxx-large"} className='select-none cursor-pointer'>Favourite Projects: 
                    <Loader wrd={"Favourite Projects:"} cons={21} col={"yellow"}/>                    
                    </Heading>
                    <Link href="/projects">
                        <Button alignContent="center" background="lightgray" padding="2.5" size="lg" className="hover:rotate-12">
                            <HiOutlineLink size="1.25em" color="black"/>
                            <Text color="black" fontSize="xl" padding="1.5">
                                View All
                            </Text>
                        </Button>                    
                    </Link>
                </Flex>
                <Box className="mt-40" >
                    <Box className="max-w-6xl mx-auto">
                        <Box className="grid md:grid-cols-3 gap-4 lg:-mt-8 pb-40">
                            <a href="https://github.com/hari0409/To-Do-List-App" target="_blank" className="w-full block col-span-3 shadow-2xl border-4 border-yellow-500">
                            <Box className="relative overflow-hidden">
                                <Image
                                    src="/portfolio.jpg"
                                    alt="portfolio"
                                    className="transform hover:scale-125 transition duration-2000 ease-out"
                                />
                                <h1 className="absolute bottom-10 right-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">To-Do List Application</h1>
                            </Box>
                            </a>
                            <a href="https://knight-313b8.web.app/" className="w-full block col-span-3  sm:col-span-2 shashadow-2xl border-4 border-yellow-500" target="_blank">
                                <Box className="relative overflow-hidden">
                                    <Image
                                        src="/k.jpg"
                                        alt="portfolio"
                                        className="transform hover:scale-125 transition duration-2000 ease-out"
                                    />
                                    <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-l bg-red-500 rounded-md px-2">Online Streaming Platform</h1>
                                </Box>
                            </a>
                            <a href="https://github.com/hari0409/Blog-App" className="w-full block col-span-3 sm:col-span-1  object-cover border-4 border-yellow-500" target="_blank">
                                <Box className="relative overflow-hidden shadow-2xl">
                                    <Image
                                        src="/blog.jpg"
                                        alt="portfolio"
                                        className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
                                    />
                                    <h1 className="absolute bottom-1 right-5 text-gray-50 font-bold text-md bg-red-500 rounded-md px-2">Blog App</h1>
                                </Box>
                            </a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default FavouriteProjects
