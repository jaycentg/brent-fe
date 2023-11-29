"use client";

import { Flex, Spinner } from "@chakra-ui/react";
import axios from "axios";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DocumentPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true)
    const [doc, setDoc] = useState()

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const url = `${process.env.NEXT_PUBLIC_API_HOST}/doc/${params.id}`
                const resp = await axios.get(url)
                setDoc(resp.data)
            } catch(err) {
                console.log(err)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    const handleImageClick = () => {
        router.push("/");
    }

    const showContent = () => {
        if (loading || doc == undefined) {
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
        } else {
            return (
                <div className="px-5 w-full text-content-gray">
                    {doc['content']}
                </div>
            )
        }
    }

    return (
        <>
            <Flex
                as="nav"
                paddingX="5rem"
                paddingY="6"
                width="100%"
                boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
                className="justify-center"
            >
                <Image 
                    src="/brent_hires.png" 
                    alt="Logo" 
                    width={150} 
                    height={60} 
                    onClick={handleImageClick} 
                    style={{ cursor: 'pointer' }}
                />
            </Flex>
            <div className="font-bold w-full text-2xl p-5 flex justify-center text-content-gray">Document {params.id}</div>
            {showContent()}
        </>
    )
}

export default DocumentPage;