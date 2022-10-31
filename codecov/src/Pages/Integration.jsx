import {Box,Center,Heading,SimpleGrid} from '@chakra-ui/react'
import LanguageDiv from '../Components/LanguageDiv';
import FooterLoginDiv from '../Components/FooterLoginDiv';
import {language,hosts,ci,cp,ts,CTool,Uploaders,ChatIn} from '../Components/Data';
import {useEffect} from 'react';
import Navbar from '../Components/Navbar';
function Integration(){
  useEffect(()=>{
    document.title = 'Integration - Codecov';
    let footer =  document.querySelector('footer')
    let div =  document.querySelector('#slanted_div')
    let ad =  document.querySelector('.ad')
    document.body.style.backgroundImage='url("https://about.codecov.io/wp-content/themes/codecov/assets/backgrounds/bg-blobs-02.svg")';



    footer.style.display = 'block'
    div.style.display = 'block'
    ad.style.display = 'block'
  },[])
return <><Navbar />

<Box w='70%' m='auto'>
    <Center>
    <Heading mt={['0px','0px','80px']} mb='100px'>Integrate Codecov</Heading>

    </Center>
 <Box>
  <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
        LANGUAGE
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  language.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 SOURCE CODE HOSTING
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  hosts.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 CONTINUOUS INTEGRATION
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  ci.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 CLOUD PLATFORMS
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  cp.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 TEST SUITES
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  ts.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>
 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 COVERAGE TOOLS
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  CTool.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 UPLOADERS
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  Uploaders.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>

 
 <Box m='auto'  mt='70px'>
 <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 CHAT INTEGRATIONS
    </Heading>
    <SimpleGrid columns={['2','3','4']} spacing='20px' mt='30px'>

{
  ChatIn.map((ele)=>{
return <LanguageDiv img={ele.img} name={ele.name}/>

  })
}

</SimpleGrid>
 </Box>


 <Box mt='60px' mb='100px'>
    <Heading ml={['0px','0px','10px']} fontSize='12px' color='#6c757d' letterSpacing='1px' fontWeight='800'>
 OTHER INTEGRATIONS
    </Heading>
    <Box w='32%' mt='20px'>
    <LanguageDiv img='https://about.codecov.io/wp-content/uploads/2020/08/sourcegraph-icon.svg' name='Sourcegraph Browser Plugin'/>

    </Box>
 </Box>

</Box>
<FooterLoginDiv />
</>
}

export default Integration;