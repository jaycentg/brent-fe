import { Text } from "@chakra-ui/react";

export default function Footer(){
    return (
        <div style={{ position: "absolute", bottom: 0, width:"100%" }} className="bg-gray-100 mt-20">
        <div className="bg-gray-100 container mx-auto py-3 px-5 text-center">
            <Text color="#545454">Created by {' '}
                <Text as='span' fontWeight='bold'>Bryan</Text> Tjandra and{' '}
                <Text as='span' fontWeight='bold'>Jaycent</Text> Gunawan Ongris (2023)
            </Text>
        </div>
      </div>
    )
}