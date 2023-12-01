"use client";

import DocumentCard from "@/components/docCard";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SearchPage(props: any) {
    const query = props["searchParams"]["q"]
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0)
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const url = `${process.env.NEXT_PUBLIC_API_HOST}/search?q=${query}`
                const resp = await axios.get(url)
                setResult(resp.data)
                setTotal(resp.data.length)
            } catch (err) {
                const errorMessage = (err as { message: string }).message;
                toast.error(errorMessage)
            }
            setLoading(false)
        }
        fetchData();
    }, [query])
    
    const showContent = () => {
        if(loading || result == undefined) {
            return (
                <div className="flex justify-center items-center h-[70vh]">
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
            if (total != 0) {
                return (
                    <>
                        <Text color='#545454'>
                            <Text as='span' fontWeight='bold'>{total}</Text> {' '}
                            Document(s) Found
                        </Text>
                        {result?.map((doc: any) => (
                            <DocumentCard 
                                title={doc.doc_id} 
                                content={doc.content} 
                                key={doc.doc_id}
                            />
                        ))}
                    </>
                )
            } else {
                return (
                    <div className="flex justify-center items-center">
                        <Text color='#545454'>There is no matching document</Text>
                    </div>
                )
            }
        }
    }
    return (
        <>
        <Head>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>
        <main className="flex min-h-screen flex-col bg-white">
            <Navbar currQuery={query}/>
            <Box paddingY={5} paddingX={10}>
                {showContent()}
            </Box>
            <Box height='4rem'></Box>
            <Footer />       
        </main>
        </>
    )
}