import {Image,Box,Heading,Flex} from '@chakra-ui/react'

function NotFound(){


    return <Box>
   
           <Box w='70%' m='auto' textAlign='center'>

               <Heading mt='50px'>
                404 Page Not Found
               </Heading>
               <Heading fontSize='20px' mt='20px'>
               How to Successfully Apply the 32-hour Work Week at Your own Workplace
               </Heading>
               <Flex justifyContent='center' mb='200px'>
               <Image mt='100px' maxW='100%' src='https://about.codecov.io/wp-content/themes/codecov/assets/backgrounds/404.svg' />

               </Flex>
           </Box>

           </Box>
}


export default NotFound;