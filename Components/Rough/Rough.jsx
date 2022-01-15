import React from 'react'
import {RoughNotationGroup} from "react-rough-notation";
import Stripe from '../Additional/Stripe';
import {BsArrow90DegUp} from "react-icons/bs"
import data from '../../Data/data';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Rough = () => {
    const colors = ["#FFAB4C","#FF5F7E","#B000B9","#E2703A"]
    const shuffled = colors.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 3);
    const imgVariant={
        hidden:{
            x:-1000
        },
        visible:{
            x:0,
            transition:{
                duration:1,
                ease:"easeOut"
            },
        },
        
    }
    return (
        <Box className="flex flex-row justify-center items-start overflow-hidden select-none">
            <Box className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
                <RoughNotationGroup show={true}>
                    <Stripe color={selected[0]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-black-700  my-2">
                            Webdev.
                        </h1>
                    </Stripe>
                    <Stripe color={selected[2]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-black-700  my-2">
                            Programmer.
                        </h1>
                    </Stripe>
                    <Stripe color={selected[1]}>
                        <h1 className="text-4xl md:text-8xl font-bold text-black-700  my-2">
                            AI/ML.
                        </h1>
                    </Stripe>
                </RoughNotationGroup>
            </Box>
            <Box className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
                <Box className="w-3/4 ">
                    <motion.img src={data.avatarUrl} alt="avatar" className='rounded-md' variants={imgVariant} animate="visible" initial="hidden"/>
                    <Box className="flex flex-row justify-between mt-4 mx-6">
                        <Box className="flex flex-row space-x-4">
                            <BsArrow90DegUp/>
                            <p className="font-mono">So far my life</p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Rough;