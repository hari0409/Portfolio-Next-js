import { Box, Button, Flex, Heading, Link, Spacer ,Text} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FiExternalLink} from 'react-icons/fi';
import {DiGithubFull} from "react-icons/di";
import data from "../../Data/data";
import RepoUnit from '../Additional/RepoUnit';
import Loader from '../Additional/Loader';

const Latest = () => {
    const [repos, setRepos] = useState([]);
    const url=`https://api.github.com/search/repositories?q=user:${data.githubUsername}+sort:author-date-desc`
    const getRepo=async()=>{
        const responce=await fetch(url,{
            Method:"GET"
        })
        const res=await responce.json()
        setRepos(res?.items);
    }
    useEffect(() => {
        getRepo();
        }, [])
    return (
        <Box>
            <Flex position={"relative"} p={2} display={{base:"none",md:"flex"}}  justifyContent="space-around" alignItems="center">
                    <Heading fontSize={"xxx-large"} className='select-none cursor-pointer'>Latest Projects: 
                    <Loader wrd={"Latest Projects"} cons={22} col={"red"}/>
                    </Heading>
                    <Link href="https://github.com/hari0409" target="_blank">
                        <Button alignContent="center" size={"lg"} className='hover:rotate-12'>
                            <FiExternalLink size="1.25em" color="black"/>
                            <Text paddingLeft={"1"}><DiGithubFull size="3.25em" /></Text>
                        </Button>                    
                    </Link>
            </Flex>
            <br/>
            <br/>
            <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20 select-none cursor-pointer">
            {repos?.map((r)=>(
                        <RepoUnit r={r}/>            
                    ))}
            </Box>          
        </Box>
    )
}

export default Latest
