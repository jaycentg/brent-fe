'use client';

import Footer from '@/components/footer';
import { Search2Icon } from '@chakra-ui/icons'
import { Button, Container, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Head from 'next/head';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  return (
    <>
    <Head>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
    </Head>
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <Image
        src="/brent_hires.png"
        width={500}
        height={200}
        alt='logo'
      />
      <Container className='m-2 mb-5'>
        <InputGroup>
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color="#545454"/>
          </InputLeftElement>
          <Input
            value={query} 
            placeholder='What do you want to search?'
            color="#545454"
            onChange={(e) => {setQuery(e.currentTarget.value)}}
            onKeyDown={(e) => {
              if (e.key == 'Enter'){
                router.push("search?q=" + query)
              }
            }}
          />
        </InputGroup>
      </Container>

      <Button 
        variant='outline' 
        _hover={{ bg: "#f3f4f6" }} 
        color="#545454"
        onClick={(_) => {
          router.push("search?q=" + query)
        }} 
      >
        Search
      </Button>

      <Footer />
    </main>
    </>
  )
}
