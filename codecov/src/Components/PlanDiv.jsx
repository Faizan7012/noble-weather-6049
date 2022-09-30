import {Box,Image,Heading,Text,Button,Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

function PlansDiv({img,title,price,bt,bc}){

return <Box mr='20px'>
    <Flex direction='column' justifyContent='space-between' alignItems='center' rowGap='20px'>
    <Flex direction='column' justifyContent='space-between' alignItems='center' rowGap='20px'>
    <Heading fontSize='13px' color='#f06'>{title}</Heading>
    <Heading fontSize='14px'>{price}</Heading>
    <Link to='/login'>
    <Button bg={bc} color='white' _hover={{bg:{bc}}}>{bt}</Button>
    </Link>
    </Flex>
    </Flex>
           
       </Box>

}

export default PlansDiv;