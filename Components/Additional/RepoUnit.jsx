import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const RepoUnit = ({r}) => {
    return (
      <a
        href={r?.clone_url}
        target="_blank"
        className="font-semibold group flex flex-row space-x-2 w-full items-center"
      >
        <Box className=" transform hover:scale-125 cursor-pointer transition duration-2000 ease-out">
          <h1 className="font-semibold text-xl">
            {r?.name}
          </h1>
          <Text className="text-base font-normal my-4 ">
            {r?.description}
          </Text>
          <Text className="transform  group-hover:translate-x-2 transition duration-300">View Repository &rarr;</Text>
        </Box>
    </a>

    )
}

export default RepoUnit
