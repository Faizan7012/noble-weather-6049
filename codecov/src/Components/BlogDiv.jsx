import {Box,Image,Heading,Flex,Text,Badge} from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'
import Author from './Author';


function BlogDiv({data}){
 const {img,logo,title,author,link} = data;
 return  <Box boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' borderRadius='10px'>
            <Box>
                <Image h='200px' borderRadius='10px 10px 0px 0px' src={img} />
            </Box>
            <Box>
            <Box p='10px 10px'>
            <Badge bg='#e6d6f3' p='4px 10px' borderRadius='20px' fontSize='10px' color='#f06'>BLOG POST</Badge>

            </Box>
            <Box>
                <Heading fontSize='15px' mt='10px' lineHeight='1.6rem' ml='10px'>
                    {title}
                </Heading>
            </Box>
            <Box mt='70px' p='10px' ml='6px'>
                <Flex alignItems='center' justifyContent='space-between'>
     
                  <Author logo={logo} author={author}/>

                    <a href={link}>
                    <Heading fontSize='12px' color='#f06' mt='3px'>
                    Read Blog Post  <ArrowForwardIcon ml='2px' mb='3px' fontSize='15px'/>
                    </Heading>
                    </a>
                </Flex>
            </Box>
            </Box>
             </Box> 

}

export default BlogDiv;