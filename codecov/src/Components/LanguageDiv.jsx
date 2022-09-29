import {Flex,Image,Heading} from '@chakra-ui/react'
function LanguageDiv({img,name}){

return <Flex alignItems='center' gap='10px' boxShadow='0 4px 15px rgb(79 75 147 / 15%)' borderRadius='10px' p='10px 20px'>

        <Image w='38px' h='38px' src={img}/>
        <Heading fontSize='16px' color='#6c757d'>{name}</Heading>

      </Flex>



}


export default LanguageDiv;

//box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
//box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;