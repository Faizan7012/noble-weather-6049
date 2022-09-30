import {Box,Flex,Heading,SimpleGrid,Image,Center, Badge} from '@chakra-ui/react';
import CIDiv from '../Components/CustomersImageDiv';
import { SlideImage,customers,slide ,language} from '../Components/Data';
import {useState,useEffect} from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
function Customers(){
const [index,setIndex] = useState(0)
let arr = SlideImage[index]
let brr = slide[index]

useEffect(()=>{
  document.title = 'Customers - Codecov';
  let nav =  document.querySelector('nav')
  let footer =  document.querySelector('footer')
  let div =  document.querySelector('#slanted_div')
  let ad =  document.querySelector('.ad')



  nav.style.display = 'block'
  footer.style.display = 'block'
  div.style.display = 'block'
  ad.style.display = 'block'
},[])


const handleIndex = (val)=>{

if(index === 1 && val==1){
   setIndex(0)
    return;
}

else if(index===0 && val===-1){
      setIndex(1)
      return;
}

else{
    setIndex(index+val)
}

}

return <Box>
      <Center>
      <Heading>Our Customers</Heading>
      </Center>



      <Flex  w='70%' m='auto' gap='130px' justify='space-between' mb='150px' mt='100px' alignItems='center'>
  <Box>
  <Image 
   maxW='500px'
  src='https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/309960652_620277152981181_1251100015772163961_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=JmskpDfC-1YAX8wfnMH&_nc_ht=scontent.fagr1-4.fna&oh=00_AT_MtTsvi0OcTAATYGTIMnsWxXMFm1M3xDxglaKbj47hvw&oe=633A3C75'
  alt='image-1'
  borderRadius='10px' />
  </Box>
   <Box>
    <CIDiv img='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/enterprise.svg'
    title='Enterprise'
    desc='Over 29k enterprises across the globe rely on Codecovs code coverage insights to ensure the code they are producing meets quality standards.'/>
   </Box>

      </Flex>

    <Box w='70%' m='auto' mb='100px'>

     <Flex justifyContent='space-between' alignItems='center'>

    <ArrowBackIcon  color='#f06' onClick={()=>handleIndex(-1)}/>


        <Box >
            <Flex justifyContent='space-between' gap='40px'>
            {
       arr.map((ele)=>{
         return <Image w='80px' h='40px' src={ele} alt='image-ele' />
       })
       }
            </Flex>

        </Box>
     
    <ArrowForwardIcon color='#f06' onClick={()=>handleIndex(1)}/>

      

     </Flex>

    </Box>


    
    <Flex  w='70%' m='auto' gap='130px' justify='space-between' mb='150px' mt='100px' alignItems='center'>
   <Box>
    <CIDiv img='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/open-source.svg'
    title='Open Source'
    desc='Codecov believes in supporting the open source community. That is why Codecov will always be free for open source projects.'/>
   </Box>
   <Box>
  <Image 
   maxW='500px'
  src='https://scontent.fagr1-1.fna.fbcdn.net/v/t39.30808-6/309678000_620277329647830_2163660437404117889_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=_N74yR5IU5cAX8y4-gl&_nc_ht=scontent.fagr1-1.fna&oh=00_AT9z2hX92lvDs_y8S3YcyCjxWy79wi1FlU8BpxY-7AqtCA&oe=633975C1'
  alt='image-1'
  borderRadius='10px' />
  </Box>
      </Flex>
      <Flex  w='70%' m='auto' gap='130px' justify='space-between' mb='150px' mt='100px' alignItems='center'>
      <Box>
  <Image
  maxW='500px'
   src='https://scontent.fagr1-4.fna.fbcdn.net/v/t39.30808-6/309548805_620273932981503_2290699329899839967_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=iGE7kk-P_aQAX9kibde&_nc_ht=scontent.fagr1-4.fna&oh=00_AT9WW7xsMF0P3-P-TRDFjL293pdWaEKH53WtJGkzV5ctig&oe=6339C649'
  alt='image-1'
  borderRadius='10px' />
  </Box>
   <Box>
    <CIDiv img='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/startups.svg'
    title='Startups'
    desc='Moving fast is critical, but the velocity at which you ship code shouldn t have an inverse relationship with code quality. Codecov is perfect for startups that want to move fast, and avoid breaking things.'/>
   </Box>
      </Flex>



      <Box w='70%' m='auto' mb='100px'>

<Flex justifyContent='space-between' alignItems='center'>

<ArrowBackIcon  color='#f06' onClick={()=>handleIndex(-1)}/>


   <Box >
       <Flex justifyContent='space-between' gap='40px'>
       {
  brr.map((ele)=>{
    return <Image w='100px' h='50px' src={ele} alt='image-ele' />
  })
  }
       </Flex>

   </Box>

<ArrowForwardIcon color='#f06' onClick={()=>handleIndex(1)}/>

 

</Flex>

</Box>




      <Box>

      <Center>
        <Heading mb='60px' fontSize='30px'>Explore our Customers</Heading>
      </Center>

      <SimpleGrid w='80%' m='auto' columns='4' spacing='25px' mb='50px'>

       {
        customers.map((ele)=>{
          return  <Flex alignItems='center' justifyContent='center' borderRadius='10px' boxShadow='0 .5rem 1rem rgba(0,0,0,.15)' p='20px' h='200px'>
            <Image maxW='150px' maxH='100px' src={ele} alt='ele'/>
            </Flex>
               })
       }

      </SimpleGrid>

      </Box>

</Box>

}

export default Customers;