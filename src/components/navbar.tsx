import { SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NavbarProps {
    currQuery: string
}

const Navbar: React.FC<NavbarProps> = ({ currQuery }) => {
    const [query, setQuery] = useState(currQuery);
    const router = useRouter();
    const handleImageClick = () => {
        router.push("/");
    }
    
    return (
        <Flex
            as="nav"
            align="center"
            paddingX="5rem"
            paddingY="6"
            width="100%"
            boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
        >
            <Image 
                src="/brent_hires.png" 
                alt="Logo" 
                width={150} 
                height={60} 
                onClick={handleImageClick} 
                style={{ cursor: 'pointer' }}
            />

            <InputGroup size='md' width="60%" className="mx-7">
                <Input
                    value={query}
                    onChange={(e) => {setQuery(e.currentTarget.value)}}
                    placeholder="What do you want to search?"
                    variant="outline"
                    size="md"
                    color="#545454"
                    onKeyDown={(e) => {
                        if (e.key == 'Enter'){
                          router.push("search?q=" + query)
                        }
                    }}
                />
                <InputRightElement marginX={2}>
                    <IconButton 
                        aria-label='search-query' 
                        icon={<SearchIcon color='#545454'/>} 
                        isRound={true} 
                        _hover={{ 
                            transform: 'scale(1.2)',
                            transition: 'transform 0.3s ease-in-out' 
                        }}
                        onClick={(_) => {
                            router.push("search?q=" + query)
                          }}
                    />
                </InputRightElement>
            </InputGroup>

        </Flex>
    )
}

export default Navbar;