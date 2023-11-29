import { Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

interface documentCardProps {
    title: string; // this one could be document ID instead
    content: string;
}

const DocumentCard: React.FC<documentCardProps> = ({
    title, 
    content
}) => {
    const router = useRouter();
    return (
        <Box 
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden' 
            paddingX={5} 
            paddingY={2} 
            marginTop={4}
            onClick={() => {router.push("/doc/" + title)}}
            style={{ cursor: 'pointer' }}
            _hover={{ 
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out' 
            }}
        >
            <Text isTruncated fontWeight='bold' color='#545454' fontSize='20'>Document {title}</Text>
            <Text color='#545454' fontSize='15' noOfLines={2}>{content}</Text>
        </Box>
    )
}

export default DocumentCard;