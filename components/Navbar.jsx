import React from 'react'
import {Box, Flex, Heading,Text,Button,useColorMode } from "@chakra-ui/react"
import Link from 'next/link'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex gap={"20px"}   p={4} bg={"blue.400"}>
        <Flex margin={"auto"} gap={"20px"}>
              <Button bg={"red.500"}>
     <Heading color={"white"}>
      <Link href="/">ALL</Link>
    </Heading>
    </Button>
    <Button>
     <Text fontSize={"20px"}>
   <Link href="/html">HTML</Link>
    </Text>
    </Button>
    <Button>
     <Text fontSize={"20px"}>

     <Link href="/css">CSS</Link>
</Text>
    </Button>
   <Button>
    <Text fontSize={"20px"}>
     <Link href="/javascript">JAVASCRIPT</Link>
    </Text>
    </Button>
        </Flex>
  
        <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
    </Flex>
  )
}

export default Navbar