import {Box,Image,Heading,Text,Button,Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom'

function PlansDiv({img,title,price,bt,bc}){

return <Box mr={['0px','0px','20px']}>
    <Flex direction='column' justifyContent='space-between' alignItems='center' rowGap='20px'>
    <Flex direction='column' justifyContent='space-between' alignItems='center' rowGap='20px'>
    <Heading fontSize={['8px','12px','13px']} color='#f06'>{title}</Heading>
    <Heading fontSize={['7px','12px','14px']}>{price}</Heading>
    <Link to='/login'>
    <Button position='none' fontSize={['7px','10px','auto']} bg={bc} color='white' _hover={{bg:{bc}}}>{bt}</Button>
    </Link>
    </Flex>
    </Flex>
           
       </Box>

}

export default PlansDiv;