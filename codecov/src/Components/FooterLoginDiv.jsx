import {Box,Center,Text,Heading,Flex,Image,SimpleGrid} from  '@chakra-ui/react'
import {signInWithPopup,FacebookAuthProvider, GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth'
import {authentication} from './firebase-config'
import { AuthContext } from '../Context/AuthContext';
import { useContext} from 'react';

function FooterLoginDiv(){
  const {isAuth,toggleAuth} = useContext(AuthContext);
  function signIn(){
    const provider = new FacebookAuthProvider();
    isAuth?alert('You Have Already Logged In'):
     signInWithPopup(authentication,provider)
     .then((res)=>{
        toggleAuth()
     })
     .catch((err)=>{
      alert('try again')
     })
   }
   function signIn2(){
     const provider = new GoogleAuthProvider();
    isAuth?alert('You Have Already Logged In'):
      signInWithPopup(authentication,provider)
      .then((res)=>{
        toggleAuth()
      })
      .catch((err)=>{
        alert('try again')
      })
    }

    function signIn3(){
      const provider = new GithubAuthProvider();
    isAuth?alert('You Have Already Logged In'):
       signInWithPopup(authentication,provider)
       .then((res)=>{
         toggleAuth()
       })
       .catch((err)=>{
         alert('try again')
       })
     }


return <Center mb='100px'>
<Box w={['80%','80%','50%']} p='10px 30px' pb='20px' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
  <Box>
    <Center>
    <Heading textAlign='center' mt='30px' fontSize='30px'>Ready to get covered?</Heading>

    </Center>
  </Box>
  <Box>
    <Center>
    <Text mt='20px'
    fontWeight='400'
    textAlign='center'
     fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'>
      Join over a million developers in shipping healthier. Code today. Sign up with your code host below.</Text>
  
    </Center>
  </Box>
  <Box>
  </Box>
   <SimpleGrid mt='50px' columns={['1','1','3']} spacing='10px'>
    <Flex onClick={signIn3} border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/github/github-icon.svg' />
      <Heading fontSize='16px'>
       Github

      </Heading>
    </Flex>
    <Flex onClick={signIn2} border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://img.icons8.com/color/2x/google-logo.png' />
      <Heading fontSize='16px' >
       Google

      </Heading>
    </Flex>
    <Flex onClick={signIn} border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://img.icons8.com/color/2x/facebook-new.png' />
      <Heading fontSize='16px' >
       Facebook
      </Heading>
    </Flex>
   </SimpleGrid>
</Box>
</Center>

}

export default FooterLoginDiv;