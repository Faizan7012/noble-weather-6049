import {Box,Flex,Heading,SimpleGrid,Image,Center,Tooltip} from '@chakra-ui/react';
import CIDiv from '../Components/CustomersImageDiv';
import { SlideImage,customers,slide, language} from '../Components/Data';
import {useState,useEffect} from 'react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Navbar from '../Components/Navbar';
function Customers(){
const [index,setIndex] = useState(0)
let arr = SlideImage[index]
let brr = slide[index]

useEffect(()=>{
  document.title = 'Customers - Codecov';
  let footer =  document.querySelector('footer')
  let div =  document.querySelector('#slanted_div')
  let ad =  document.querySelector('.ad')
  document.body.style.backgroundImage='url("https://about.codecov.io/wp-content/themes/codecov/assets/backgrounds/bg-blobs-02.svg")';
   


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
      <Navbar />
      <Center>
      <Heading mt={['20px','20px','80px']}>Our Customers</Heading>
      </Center>



      <Flex  w='70%' m='auto' gap={['40px','40px','130px']} justifyContent={['center','center','space-between']} flexDirection={['column-reverse','row','row']} mb={['0px','10px','100px']} mt='100px' alignItems='center'>
  <Box>
  <Image 
   maxW={['300px','400px','500px']}
  src='https://images.mgid.com/MGID_Pixel_Cloudflare_App_1_min_8af3f058bc.png'
  alt='image-1'
  borderRadius='10px' />
  </Box>
   <Box>
    <CIDiv img='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/enterprise.svg'
    title='Enterprise'
    desc='Over 29k enterprises across the globe rely on Codecovs code coverage insights to ensure the code they are producing meets quality standards.'/>
   </Box>

      </Flex>

      <Box w='80%' m='auto' mt={['0px','10px','100px']} mb='50px' position='none'>

<div className='slider'>

 <div className='slider-track'>

 {
   language.map((ele)=>{
     return <div className='slide'>

<Tooltip label={ele.name} fontSize='md'>

<img className='slide_img1' src={ele.img}/>

</Tooltip>
         
     </div>
   })
 }


 </div>

</div>

</Box>


    
    <Flex  w='70%' m='auto' gap={['40px','40px','130px']} justifyContent={['center','center','space-between']} flexDirection={['column-reverse','row','row']} mb={['0px','10px','100px']} mt={['0px','10px','100px']} alignItems='center'>
   <Box>
    <CIDiv img='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/open-source.svg'
    title='Open Source'
    desc='Codecov believes in supporting the open source community. That is why Codecov will always be free for open source projects.'/>
   </Box>
   <Box>
  <Image 
   maxW={['300px','400px','500px']}
  src='https://images.mgid.com/DES_23739_Banner_615afe5ad7.png'
  alt='image-1'
  borderRadius='10px' />
  </Box>
      </Flex>

     <Box w='80%' m='auto' mt={['0px','10px','100px']} mb={['20px','30px','100px']} position='none'>

         <div className='slider'>

          <div className='slider-track'>
  
          {
            customers.map((ele)=>{
              return <div className='slide'>
                  
                  <img className='slide_img' src={ele}/>

              </div>
            })
          }


          </div>

         </div>

     </Box>


      <Flex  w='70%' m='auto' gap={['40px','40px','130px']} justifyContent={['center','center','space-between']} flexDirection={['column','row','row']} mb='150px' mt={['0px','10px','100px']}  alignItems='center'>
      <Box>
  <Image
  maxW={['300px','400px','500px']}
   src='https://panticore.com/wp-content/uploads/2022/07/Programmatic-Advertising1.png'
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
       <Flex justifyContent='space-between' gap={['10px','20px','40px']}>
       {
  brr.map((ele)=>{
    return <Image maxW={['30px','40px','100px']} h={['50px','50px','50px']} src={ele} alt='image-ele'/>
  })
  }
       </Flex>

   </Box>

<ArrowForwardIcon color='#f06' onClick={()=>handleIndex(1)}/>

 

</Flex>

</Box>




      <Box>

      <Center>
        <Heading mb='60px' fontSize={['20px','20px','30px']}>Explore our Customers</Heading>
      </Center>

      <SimpleGrid w='80%' m='auto' columns={['2','2','4']} spacing='25px' mb='50px'>

       {
        customers.map((ele)=>{
          return  <Flex alignItems='center' justifyContent='center' borderRadius='10px' boxShadow='0 .5rem 1rem rgba(0,0,0,.15)' p='20px 10px' h={['100px','120px','200px']}>
            <Image maxW={['80px','100px','150px']} maxH='100px' src={ele} alt='ele'/>
            </Flex>
               })
       }

      </SimpleGrid>

      </Box>

</Box>

}

export default Customers;