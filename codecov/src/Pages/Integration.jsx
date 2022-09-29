import {Box,Center,Heading,SimpleGrid} from '@chakra-ui/react'
import LanguageDiv from '../Components/LanguageDiv';
import FooterLoginDiv from '../Components/FooterLoginDiv';
import {language,hosts,ci,cp,ts,CTool,Uploaders,ChatIn} from '../Components/Data'
function Integration(){

return <Box w='70%' m='auto'>
    <Center>
    <Heading mb='100px'>Integrate Codecov</Heading>

    </Center>
 <Box>
    <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
        LANGUAGE
    </Heading>
    <SimpleGrid columns='4' spacing='20px' mt='30px'>

{
  language.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 SOURCE CODE HOSTING
    </Heading>
    <SimpleGrid columns='3' spacing='20px' mt='30px'>

{
  hosts.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 CONTINUOUS INTEGRATION
    </Heading>
    <SimpleGrid columns='3' spacing='20px' mt='30px'>

{
  ci.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 CLOUD PLATFORMS
    </Heading>
    <SimpleGrid columns='3' spacing='20px' mt='30px'>

{
  cp.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 TEST SUITES
    </Heading>
    <SimpleGrid columns='4' spacing='20px' mt='30px'>

{
  ts.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>
 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 COVERAGE TOOLS
    </Heading>
    <SimpleGrid columns='4' spacing='20px' mt='30px'>

{
  CTool.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 UPLOADERS
    </Heading>
    <SimpleGrid columns='3' spacing='20px' mt='30px'>

{
  Uploaders.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 
 <Box m='auto'  mt='70px'>
 <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 CHAT INTEGRATIONS
    </Heading>
    <SimpleGrid columns='3' spacing='20px' mt='30px'>

{
  ChatIn.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>


 <Box mt='60px' mb='100px'>
    <Heading ml='10px' fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 OTHER INTEGRATIONS
    </Heading>
    <Box w='32%' mt='20px'>
    <LanguageDiv img='https://about.codecov.io/wp-content/uploads/2020/08/sourcegraph-icon.svg' name='Sourcegraph Browser Plugin'/>

    </Box>
 </Box>


   <FooterLoginDiv />

</Box>

}

export default Integration;