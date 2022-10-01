import {useEffect,useState} from 'react';
import {Flex,Box,Image,Heading,Input,FormControl,FormLabel,Button,Grid,Select, GridItem, Textarea} from '@chakra-ui/react'
import {customers} from '../Components/Data';

const initialState = {

    fname:'',
    lname:'',
    email:'',
    phone:'',
    reason:'',
    massage:''

}

function Contact(){
const [reply,setReply] = useState(initialState);

    useEffect(()=>{
        document.title = 'Contact - Codecov';
        let body =  document.querySelector('body')
        body.style.backgroundImage = 'none';
        let nav =  document.querySelector('nav')
        let footer =  document.querySelector('footer')
        let div =  document.querySelector('#slanted_div')
        let ad =  document.querySelector('.ad')
        nav.style.display = 'none'
        footer.style.display = 'none'
        div.style.display = 'none'
        ad.style.display = 'none'
  
  
  
      },[])

      const handleChange =(e)=>{
        const {value,name} = e.target;
       
        setReply({...reply,[name]:value})

      }


      const handleReply=()=>{


       alert(`${reply.fname} ${reply.lname} Your Massage Recieved`)
       setReply(initialState)

      }



return <Flex h='100vh'>

    <Box h='100vh' w='50%' bg='#0f1b29' p='20px 60px'>

    <Image maxW='200px' src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg'/>
    <Box mt='100px' p='20px' color='white' pr='100px' ml='50px'>
       <Heading fontSize='30px'>Get In Touch.</Heading>
       <Heading mb='20px' mt='30px' fontSize='15px' fontFamily='"poppins","Roboto","Arial",Arial,sans-serif' lineHeight='1.6rem'>
       Fill in the form to the right to get in touch with someone on our team, and we will reach out shortly.
       </Heading>
       <Heading mb='30px' fontSize='15px' fontFamily='"poppins","Roboto","Arial",Arial,sans-serif' lineHeight='1.6rem'>
       If you are seeking support please visit our <span className='span'>support portal</span> before reaching out directly.
       </Heading>
    </Box>

    <Box w='80%' m='auto' mt='-30px'>

         <div className='slider'>

          <div className='slider-track'>
  
          {
            customers.map((ele)=>{
              return <div className='slide'>
                  
                  <img className='slide_img3' src={ele}/>

              </div>
            })
          }


          </div>

         </div>

     </Box>
    </Box>
    <Box h='100vh' w='50%'>


       <Box h='70vh' w='60%' m='auto' mt='70px'>


      <Grid   templateColumns='repeat(2, 1fr)' gap='10px' rowGap='20px'>

       
  <GridItem>
  <FormControl isRequired>
     <FormLabel fontSize='13px'>First name</FormLabel>
    <Input fontSize='13px' name='fname' type='text' value={reply.fname} onChange={(e)=>handleChange(e)}/>
   </FormControl>
  </GridItem>


<GridItem>
<FormControl isRequired>
     <FormLabel fontSize='13px'>Last name</FormLabel>
    <Input fontSize='13px' name='lname' type='text' value={reply.lname} onChange={(e)=>handleChange(e)} />
   </FormControl>
</GridItem>

 <GridItem>
 <FormControl isRequired>
     <FormLabel fontSize='13px'>Email Address</FormLabel>
    <Input fontSize='13px' name='email' type='email' value={reply.email} onChange={(e)=>handleChange(e)}/>
   </FormControl>
 </GridItem>


   <GridItem>
   <FormControl isRequired>
     <FormLabel fontSize='13px'>Phone Number</FormLabel>
    <Input fontSize='13px' name='phone' type='number' value={reply.phone} onChange={(e)=>handleChange(e)}/>
   </FormControl>
   </GridItem>

  <GridItem colSpan={2}>
  <FormControl>
  <FormLabel fontSize='13px'>Contact Reason <span style={{color:'red'}}>*</span></FormLabel>
  <Select fontSize='13px' name='reason' value={reply.reason} onChange={(e)=>handleChange(e)}>
    <option></option>
    <option value='General Inquiry'>General Inquiry</option>
    <option value='Become A Partner'>Become A Partner</option>
    <option value='Help And Support'>Help And Support</option>
  </Select>
</FormControl>
  </GridItem>


  <GridItem colSpan={2}>
   <FormControl isRequired>
     <FormLabel fontSize='13px'>Massage</FormLabel>
    <Textarea fontSize='13px' resize='none' name='massage' type='text' value={reply.massage} onChange={(e)=>handleChange(e)} h='120px'/>
   </FormControl>
   </GridItem>
      </Grid>
      <Button onClick={handleReply} bg='#f06' _hover={{bg:'#f06'}} h='45px' color='#fff' mt='20px' w='400px'>Submit</Button>


       </Box>
     


    </Box>
</Flex>
   


}

export default Contact;