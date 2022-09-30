import {Box,Image,Text,Heading,Button} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';
import {Link} from 'react-router-dom'

function ResourceDiv({img,type,title,forward}){

return <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px' pb='20px'>
        <Image h='200px' borderRadius='10px 10px 0px 0px' w='100%' src={img} alt='img'/>
        <Button mt='20px' ml='20px' fontWeight='600' bg='#ffe6f1' letterSpacing='.75px' fontSize='.65rem' h='25px' borderRadius='8px' color='#f06' >{type}</Button>
        <Heading mt='30px' fontSize='16px' ml='20px' lineHeight='30px' mb='50px'>
            {title}
        </Heading>
        <Link to='resources'>
        <Text textAlign='right' fontSize='12px' fontWeight='600' color='#f06' mr='10px'>
            {forward } <ArrowForwardIcon ml='10px' fontSize='15px'/>
        </Text>
        </Link>
      
      </Box>


}

export default ResourceDiv;