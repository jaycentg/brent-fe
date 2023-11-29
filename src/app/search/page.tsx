"use client";

import DocumentCard from "@/components/docCard";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SearchPage(props: any) {
    const query = props["searchParams"]["q"]
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const resp = await axios.get('https://api.sampleapis.com/wines/reds')
                setResult(resp.data)
            } catch (err) {
                console.log(err)
            }
            setLoading(false)
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (result != undefined) {
            console.log(result[0]['winery'])
        }
    }, [result])
    
    const showContent = () => {
        if(loading || result == undefined) {
            return (
                <div className="flex justify-center items-center w-screen h-[70vh]">
                  <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='teal'
                    size='xl'
                  />
                </div>
              )
        } else{
            return (
                <>
                    <Text color='#545454'>
                        <Text as='span' fontWeight='bold'>1000</Text> {' '}
                        {result[0]['winery']}
                    </Text>
                    <DocumentCard title={"15"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra erat ac dignissim sodales. Cras malesuada, felis vitae pellentesque vehicula, ex velit pretium orci, eget dapibus ligula lacus ut ex. In dignissim, turpis in dapibus finibus, diam arcu vulputate augue, quis elementum nibh justo id sem. Sed semper purus in magna rhoncus, a feugiat sem accumsan. Sed tincidunt quis neque id ullamcorper. Mauris nec justo eu odio maximus pellentesque eget ut mauris. Ut commodo, ante in maximus porta, nisl nibh aliquam justo, eu feugiat magna dui vel augue. Praesent id nunc quis ligula convallis dictum sit amet non ante. Nulla tempor fermentum lacus et ultricies. Donec hendrerit orci eget aliquam hendrerit. Nunc quis felis sit amet sem posuere pharetra in sed metus. Nunc augue tellus, ultrices nec velit eu, pretium placerat mi. Ut pulvinar massa bibendum est euismod, ut tempor nunc tristique. Integer laoreet, est vel aliquet aliquet, eros orci bibendum ligula, at elementum dolor orci id ante."} />
                </>
            )
        }
    }
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar currQuery={query}/>
            <Box paddingY={5} paddingX={10}>
                {showContent()}
            </Box>
            <Box height='4rem'></Box>
            <Footer />       
        </main>
    )
}