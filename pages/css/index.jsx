import React from 'react'
import {Box,Grid,GridItem, Flex, Button} from "@chakra-ui/react"
import Card from '@/components/Card'
import Link from 'next/link';
import { getServerSideProps } from 'next'
const Page = ({props=[], count}) => {
  return (
    <div>
         <Grid 
        w={"95%"}
        m="auto"
        templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }} 
          gap={6}
      >
   {
   props.map((ai) => (
      <GridItem key={ai.id}>
         <Card
         img={ai.owner.avatar_url}
         des={ai.name}
         title={ai.language}
         stars={ai.stargazers_count}
         fork={ai.forks_count}
         />
      </GridItem>
      
    ))
  }

      </Grid>
      <Flex p={4}  gap={2} justifyContent="center">
        <Link href={{pathname: '/', query: {count: count - 1}}}>
            <Button disabled={count === 1}>PREV</Button>
        </Link>
        <Button>{count}</Button>
        <Link href={{pathname: '/', query: {count: count + 1}}}>
            <Button>NEXT</Button>
        </Link>
    </Flex>
    </div>
  )
}

export async function getServerSideProps({ query  }) {
  let response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:css&per_page=10&page=${query.count}`)
  let data= await response.json()

  return {
      props: {
          props: data.items,
          count: query.count || 1,
      }
  }
}

export default Page