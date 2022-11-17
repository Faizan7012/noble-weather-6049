
  import { Navigate,} from 'react-router-dom';
    import { AuthContext } from '../Context/AuthContext';
    import {useEffect,useState,useContext} from 'react';
    import {Flex,Box,Image,Heading,SimpleGrid} from '@chakra-ui/react'
    import {customers} from '../Components/Data';
    import {signInWithPopup,FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth'
    import {authentication} from '../Components/firebase-config';
    function Login(){
    const {isAuth,toggleAuth} = useContext(AuthContext);
    useEffect(()=>{
      document.title = 'Login - Codecov';
      let body =  document.querySelector('body')
      body.style.backgroundImage = 'none';
      let footer =  document.querySelector('footer')
      let div =  document.querySelector('#slanted_div')
      let ad =  document.querySelector('.ad')
      footer.style.display = 'none'
      div.style.display = 'none'
      ad.style.display = 'none'



    },[])

    function signIn(){
      const provider = new FacebookAuthProvider();
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
         signInWithPopup(authentication,provider)
         .then((res)=>{
           toggleAuth()
         })
         .catch((err)=>{
           alert('try again')
         })
       }


if(isAuth){
    return <Navigate to='/' />
}

 return <Flex h='100vh'>

 <Box h='100vh' w='50%' bg='#0f1b29' p='20px 60px' display={['none','none','block']}>

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
 <Box h='100vh' w={['100%','100%','50%']}>

      <Box>
        <Flex justifyContent='center' mt='30px' display={['flex','flex','none']}>
        <Image maxW='200px' src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg'/>
        </Flex>
        <Heading display={['block','block','none']} color='#f06' textAlign='center' mt='60px' fontSize='20px'>Login</Heading>


      <SimpleGrid w={['100%','100%','80%','60%']} m='auto' mt={['30px','30px','200px']} columns='1' spacing='10px'>
    <Flex onClick={signIn3} border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://about.codecov.io/wp-content/themes/codecov/assets/logos/ci/github/github-icon.svg' />
      <Heading fontSize='16px'>
      Login With Github

      </Heading>
    </Flex>
    <Flex onClick={signIn2} border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://img.icons8.com/color/2x/google-logo.png' />
      <Heading fontSize='16px' >
      Login With Google

      </Heading>
    </Flex>
    <Flex onClick={signIn} border='1px solid #e3e3e3' justifyContent='space-around' alignItems='center' _hover={{border:'1px solid gray'}} p='15px 40px' borderRadius='10px'>
      <Image maxW='20px' src='https://img.icons8.com/color/2x/facebook-new.png' />
      <Heading fontSize='16px' >
      Login With Facebook
      </Heading>
    </Flex>
   </SimpleGrid>

      </Box>


 </Box>
</Flex>


}
export default Login;