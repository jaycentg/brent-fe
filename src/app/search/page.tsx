"use client";

import DocumentCard from "@/components/docCard";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box, Text } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");

    return (
        <main className="flex min-h-screen flex-col">
            <Navbar currQuery={query!}/>
            <Box paddingY={5} paddingX={10}>
                <Text color='#545454'>
                    <Text as='span' fontWeight='bold'>1000</Text> {' '}
                    document(s) retrieved for the query you entered.
                </Text>
                <DocumentCard title={"halo"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra erat ac dignissim sodales. Cras malesuada, felis vitae pellentesque vehicula, ex velit pretium orci, eget dapibus ligula lacus ut ex. In dignissim, turpis in dapibus finibus, diam arcu vulputate augue, quis elementum nibh justo id sem. Sed semper purus in magna rhoncus, a feugiat sem accumsan. Sed tincidunt quis neque id ullamcorper. Mauris nec justo eu odio maximus pellentesque eget ut mauris. Ut commodo, ante in maximus porta, nisl nibh aliquam justo, eu feugiat magna dui vel augue. Praesent id nunc quis ligula convallis dictum sit amet non ante. Nulla tempor fermentum lacus et ultricies. Donec hendrerit orci eget aliquam hendrerit. Nunc quis felis sit amet sem posuere pharetra in sed metus. Nunc augue tellus, ultrices nec velit eu, pretium placerat mi. Ut pulvinar massa bibendum est euismod, ut tempor nunc tristique. Integer laoreet, est vel aliquet aliquet, eros orci bibendum ligula, at elementum dolor orci id ante."} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
                <DocumentCard title={"halo"} content={"dasdadsa"} />
            </Box>
            <Box height='4rem'></Box>
            <Footer />       
        </main>
    )
}