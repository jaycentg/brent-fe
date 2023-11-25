import { Box, Text } from "@chakra-ui/react";

interface documentCardProps {
    title: string; // this one could be document ID instead
    content: string;
}

const DocumentCard: React.FC<documentCardProps> = ({
    title, 
    content
}) => {
    return (
        <Box 
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden' 
            paddingX={5} 
            paddingY={2} 
            marginTop={4}
            onClick={() => {}}
            style={{ cursor: 'pointer' }}
            _hover={{ 
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease-in-out' 
            }}
        >
            <Text isTruncated fontWeight='bold' color='#545454' fontSize='20'>{title}</Text>
            <Text color='#545454' fontSize='15' noOfLines={3}>{content}</Text>
        </Box>
    )
}

export default DocumentCard;