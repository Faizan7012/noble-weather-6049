import { Box,Flex,Avatar,Tooltip,Heading,Divider,Text } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Footer(){


 return <footer>
        <Box>
            <Flex maxW='600px' justifyContent='space-between' alignItems='center' p='0px 120px'>
                <Box>
                <Avatar name='Codecov' src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/codecov/codecov-circle.svg' />
                </Box>
             <Box>
             <Tooltip label='LinkedIn' fontSize='md'>
             <i class="fa-brands fa-linkedin"></i>
             </Tooltip>
             </Box>
             <Box>
             <Tooltip label='Twitter' fontSize='md'>
             <i class="fa-brands fa-twitter"></i>
             </Tooltip>
             </Box>
             <Box>
             <Tooltip label='Github' fontSize='md'>
             <i class="fa-brands fa-github"></i>
             </Tooltip>
             </Box>
             <Box>
             <Tooltip label='YouTube' fontSize='md'>
             <i class="fa-brands fa-youtube"></i>
             </Tooltip>
             </Box>
             <Box>
             <Tooltip label='AngelList' fontSize='md'>
             <i class="fa-brands fa-angellist"></i>
             </Tooltip>
             </Box>
             <Box>
             <Tooltip label='Discourse' fontSize='md'>
             <i class="fa-brands fa-discourse"></i>
             </Tooltip>
             </Box>
             <Box>
             <Tooltip label='Instagram' fontSize='md'>
             <i class="fa-brands fa-instagram"></i>
             </Tooltip>
             </Box>
                
            </Flex>
        </Box>
        <Box p='0px 120px' mt='80px'>
            <Flex justifyContent='space-between'>


             <Flex direction='column' lineHeight='30px' color='#ffffff'>
                <Heading fontSize='17px' mb='20px' color='#fff'>PRODUCT</Heading>
                <Link to='/features'>Features</Link>
                <Link to='/integration'>Integration</Link>
                <Link>Documentation</Link>
                <Link>API</Link>
                <Link>Status</Link>
             </Flex>
             
             <Flex direction='column' lineHeight='30px' color='#ffffff'>
                <Heading fontSize='17px' mb='20px' color='#fff'>SOLUTION</Heading>
                <Link>Open Source</Link>
                <Link>Enterprice</Link>
                <Link>Startup</Link>
                <Link>Education</Link>
             </Flex>
             <Flex direction='column' lineHeight='30px' color='#ffffff'>
                <Heading fontSize='17px' mb='20px' color='#fff'>CUSTOMERS</Heading>
                <Link>Customers</Link>
                <Link>Case Studies</Link>
                <Link>Cummunity</Link>
             </Flex>
             <Flex direction='column' lineHeight='30px' color='#ffffff'>
                <Heading fontSize='17px' mb='20px' color='#fff'>RESOURCES</Heading>
                <Link>Webinar</Link>
                <Link>Blog</Link>
                <Link>Documentation</Link>
             </Flex>
             <Flex direction='column' lineHeight='30px' color='#ffffff'>
                <Heading fontSize='17px' mb='20px' color='#fff'>COMPANY</Heading>
                <Link>Team</Link>
                <Link>Press</Link>
                <Link>Carrier</Link>
                <Link>Write for us</Link>
             </Flex>
             <Flex direction='column' lineHeight='30px' color='#ffffff'>
                <Heading fontSize='17px' mb='20px' color='#fff'>CONTACT US</Heading>
                <Link to='/contact'>Contact</Link>
                <Link>Demo</Link>
                <Link>Support</Link>
             </Flex>
            </Flex>
        </Box>
        <Box mt='70px' bg='#0c1622' borderTop='1px solid #132234' p='20px 30px' color='#ffffff'>
            <Flex justifyContent='space-around'>
            <Text color='gray'>
            Terms & Conditions  Privacy     Security    EULA     GDPR
            </Text>
            <Text color='gray'>
            © Codecov 2022
            </Text>
            </Flex>
          
        </Box>
       </footer>


}

export default Footer;