import {Flex,Box,Heading,  FormControl,
    FormLabel,
   Center,Button,Input} from '@chakra-ui/react';
    import {useState} from 'react';
    import { Navigate,} from 'react-router-dom';
    import { AuthContext } from '../Context/AuthContext';
    import { useContext,useEffect } from 'react';

    const initialState = {
        name:'',
        email:'',
        password:''
    }

    const initialState2 = {
        email:'',
        password:''
    }

function Login(){
    const [info,setInfo] = useState(initialState);
    const [info2,setInfo2] = useState(initialState2);
    const {isAuth,toggleAuth} = useContext(AuthContext);
    const [users,setUsers] = useState([])

    useEffect(()=>{
      document.title = 'Login - Codecov';
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

const handleInputChange = (e)=>{
    const {value,name} = e.target;
    setInfo({...info,[name]:value});

}

const handleInputChange2 = (e)=>{
    const {value,name} = e.target;
    setInfo2({...info2,[name]:value});
}

const handleAdd = (e)=>{
   e.preventDefault();
 
   if(info.name=='' || info.email=='' || info.password==''){
    alert('All Input Feild is Required')
   }
   else{
    alert('Sign Up Successfull')
    setUsers([...users,info]);
    setInfo(initialState)
   }

}

const handleLogin = (e)=>{
 e.preventDefault();
    let ans = false;
    for(let i=0;i<users.length;i++){
        let ele = users[i];
        if(info2.email==ele.email && info2.password==ele.password){
            ans = true;
            break;
        }
    }


    ans?toggleAuth():alert('Wrong Details');

}

if(isAuth){
    return <Navigate to='/' />
}

return <Flex w='100%' mb='100px' h='100vh' position='absolute' top='0' textAlign='center'>

        <Box w='50%' bg='#0f1b29' pt='100px'  >
        <Heading fontSize='20px' color='white'>Login</Heading>

        <Box w='60%' p='10%' m='auto'  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mt='30px' borderRadius='10px'>
     <FormControl>
         <FormLabel color='white'>Email</FormLabel>
      <Input
        name='email'
        type='email'
        value={info2.email}
        onChange={handleInputChange2}
        mb='10px'
        border='2px'
        borderColor='#f06'
        color='white'

      />
        <FormLabel color='white'>Password</FormLabel>
        <Input
        name='password'
        type='password'
        value={info2.password}
        onChange={handleInputChange2}
        mb='10px'
        border='2px'
        borderColor='#f06'
        color='white'

      />
    </FormControl>

    <Center><Button bg='#f06'  mt='30px' color='white' _hover={{bg:'#f06'}} onClick={(e)=>handleLogin(e)}>Login</Button></Center>
         </Box>
        </Box>
        <Box w='50%' pt='60px'>
        <Heading fontSize='20px' color='#f06'>Sign Up</Heading>
         <Box w='60%' p='10%' m='auto'  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mt='30px' borderRadius='10px'>
     <FormControl>
      <FormLabel color='#f06'>Name</FormLabel>
      <Input
        name='name'
        type='text'
        value={info.name}
        onChange={handleInputChange}
        mb='10px'
        border='2px'
        borderColor='#f06'
      />
         <FormLabel color='#f06'>Email</FormLabel>
      <Input
        name='email'
        type='email'
        value={info.email}
        onChange={handleInputChange}
        mb='10px'
        border='2px'
        borderColor='#f06'

      />
        <FormLabel color='#f06'>Password</FormLabel>
        <Input
        name='password'
        type='password'
        value={info.password}
        onChange={handleInputChange}
        mb='10px'
        border='2px'
        borderColor='#f06'

      />
    </FormControl>

    <Center><Button bg='#f06'  mt='30px' color='white' _hover={{bg:'#f06'}} onClick={(e)=>handleAdd(e)}>Sign Up</Button></Center>
         </Box>
        </Box>
         
       </Flex>

}

export default Login;