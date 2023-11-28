"use client";

import { Flex } from "@chakra-ui/react";
import Image from 'next/image';
import { useRouter } from "next/navigation";

const DocumentPage = ({ params }: { params: { id: string } }) => {
    const router = useRouter();
    const handleImageClick = () => {
        router.push("/");
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
            <div className="px-5 w-full text-content-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra erat ac dignissim sodales. Cras malesuada, felis vitae pellentesque vehicula, ex velit pretium orci, eget dapibus ligula lacus ut ex. In dignissim, turpis in dapibus finibus, diam arcu vulputate augue, quis elementum nibh justo id sem. Sed semper purus in magna rhoncus, a feugiat sem accumsan. Sed tincidunt quis neque id ullamcorper. Mauris nec justo eu odio maximus pellentesque eget ut mauris. Ut commodo, ante in maximus porta, nisl nibh aliquam justo, eu feugiat magna dui vel augue. Praesent id nunc quis ligula convallis dictum sit amet non ante. Nulla tempor fermentum lacus et ultricies. Donec hendrerit orci eget aliquam hendrerit. Nunc quis felis sit amet sem posuere pharetra in sed metus. Nunc augue tellus, ultrices nec velit eu, pretium placerat mi. Ut pulvinar massa bibendum est euismod, ut tempor nunc tristique. Integer laoreet, est vel aliquet aliquet, eros orci bibendum ligula, at elementum dolor orci id ante.
            </div>
        </>
    )
}

export default DocumentPage;