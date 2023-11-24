'use client';

import Footer from '@/components/footer';
import { Search2Icon } from '@chakra-ui/icons'
import { Button, Container, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function Home() {
  const [query, setQuery] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
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
          />
        </InputGroup>
      </Container>

      <Button 
        variant='outline' 
        _hover={{ bg: "#f3f4f6" }} 
        color="#545454"
        onClick={(_) => {
          // proses query 
          const textShown = `Success, q: ${query}`
          toast.success(textShown)}} 
      >
        Search
      </Button>

      <Footer />
    </main>
  )
}
