import {Image,Heading,Flex} from '@chakra-ui/react'

function LogoHeading({img,title}){

 return <Flex align='center' gap='30px' justifyContent='left' mb='40px'>
            <Image maxW='50px' maxH='50px' src={img} />
            <Heading fontSize='25px'>{title}</Heading>
        </Flex>

}
export default LogoHeading;