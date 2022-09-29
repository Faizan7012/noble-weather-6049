import {Box,Heading,Text} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons';

function FeaturesDiv({title,desc,forw}){

  return <Box>
          <Box>
            <Heading fontSize='25px'>
                {title}
            </Heading>
          </Box>
          <Box>
            <Text  lineHeight='30px' mt='30px'>
                {desc}
            </Text>
          </Box>
          <Box>
            <Text mt='10px' color='#f06'>
                {forw} <ArrowForwardIcon />
            </Text>
          </Box>
         </Box>


}

export default FeaturesDiv;