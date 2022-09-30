import {Box,Center,Text,Heading,Flex,Image,SimpleGrid} from  '@chakra-ui/react'

function FooterLoginDiv(){

return   <Center mb='100px'>
<Box w='60%' p='10px 30px' pb='20px' borderRadius='10px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
  <Box>
    <Center>
    <Heading mt='30px' fontSize='30px'>Ready to get covered?</Heading>

    </Center>
  </Box>
  <Box>
    <Center>
    <Text mt='20px'
    fontWeight='400'
     fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'>
      Join over a million developers in shipping healthier</Text>
  
    </Center>
  </Box>
  <Box>
    <Center>
    <Text
     fontWeight='400'
     fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"'>
      code today. Sign up with your code host below.</Text>

    </Center>
  </Box>
   <SimpleGrid mt='50px' columns='3' spacing='10px'>
    <Flex border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/github/github-icon.svg' />
      <Heading fontSize='16px'>
       Github

      </Heading>
    </Flex>
    <Flex border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/gitlab/gitlab-icon.svg' />
      <Heading fontSize='16px'>
       GitLab

      </Heading>
    </Flex>
    <Flex border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/bitbucket/bitbucket-icon.svg' />
      <Heading fontSize='16px'>
       Bitbucket

      </Heading>
    </Flex>
   </SimpleGrid>
</Box>
</Center>

}

export default FooterLoginDiv;