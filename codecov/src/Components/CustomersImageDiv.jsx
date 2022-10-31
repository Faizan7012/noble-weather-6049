import {Box,Avatar,Text,Heading,Flex} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'

function CIDiv({img,title,desc}){


return <Box>
        <Avatar position='none' src={img}/>
        <Heading fontSize={['20px','20px','25px']} mt='10px'>
            {title}
        </Heading>
        <Text lineHeight='20px' mt='20px'>
            {desc}
        </Text>
        <Flex mt='30px'>
        <Flex>
  
         <Text color='#f06'>
            Get Started <ArrowForwardIcon />
         </Text>
         <Text ml='10px'>
            Learn More <ArrowForwardIcon />
         </Text>
         </Flex>

        </Flex>
     
      </Box>

}


export default CIDiv;