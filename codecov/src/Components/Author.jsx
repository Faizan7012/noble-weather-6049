import {Avatar,Heading,Flex,Box} from '@chakra-ui/react';


 function Author({logo,author}){


    return <Box>
               <Flex justifyContent='space-between' alignItems='center'>
   
               <Avatar position='none' w='30px' h='30px' src={logo} />
               <Heading fontSize='10px' ml='20px' color='#f06'>
                {author}
               </Heading>

               </Flex>
            </Box>
  

 }

 export default Author;