import Head from 'next/head'
 
import { Inter } from '@next/font/google'
import {Box,Grid,GridItem, Flex, Button} from "@chakra-ui/react"
import Card from '@/components/Card'
import { useState } from 'react'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })
 

export default function Home({ props=[], count }) {
 // const [currentPage, setCurrentPage] = useState(count)
  return (
    <>   
      <Head>
        <title>Github Repos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
        {props.map((ai) => (
          <GridItem key={ai.id}>
             <Card
             img={ai.owner.avatar_url}
             des={ai.name}
             title={ai.language}
             stars={ai.stargazers_count}
             fork={ai.forks_count}
             />
       <Link href={`/${ai.id}`}>see more</Link>

          </GridItem>
        ))}
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
    </>
  )
}

export async function getServerSideProps({ query  }) {
  let response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:all&per_page=10&page=${query.count}`)
  let data= await response.json()

  return {
      props: {
          props: data.items,
          count: query.count || 1,
      }
  }
}
 