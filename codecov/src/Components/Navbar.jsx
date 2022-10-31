import {Link} from 'react-router-dom';
import { Flex, Spacer,Box,ButtonGroup,Button,Image,  Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } from '@chakra-ui/react';
    import { AuthContext } from '../Context/AuthContext';
import { useContext,useState } from 'react';
const Navbar = ()=>{
  const {isAuth,toggleAuth} = useContext(AuthContext);
  const [isOpen,setIsOpen] = useState(false)

  const handleLogout=()=>{
     toggleAuth();
    setIsOpen(!isOpen)
  }

  return(<>
       <Box padding='0px 100px' marginTop='30px' display={['none','none','block']}>
       <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Link to='/'>
     <Image src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg' maxW='200px' />

    </Link>
  </Box>
  <Spacer />
  <ButtonGroup gap='10'>
  <Menu >
  <MenuButton as={Button} border='none' bg='none'>
    <Link>
    Product
    </Link>
  </MenuButton>
  <MenuList>
    <MenuItem>
    <Link to='/features'>Features</Link>
    </MenuItem>
    <MenuItem>
    <Link to='/integration'>Integration</Link>
    </MenuItem>
  </MenuList>
</Menu>
   <Link to='/customers'>
    <Button border='none' bg='none'>Customers</Button>
   </Link>
   <Link to='/resources'>
   <Button border='none' bg='none'>Recources</Button>
   </Link>
   <Link to='/pricing'>
   <Button border='none' bg='none'>Pricing</Button>
   </Link>
   <Link to='/contact'>
   <Button border='none' bg='none'>Contact-Us</Button>
   </Link>
   <Link to='/login'>
    {
      isAuth?<Button bg='black' color='#fff' _hover={{bg:'black'}} onClick={handleLogout}>Logout</Button>:
   <Button bg='black' color='#fff' _hover={{bg:'black'}}>Login</Button>
    }
   </Link>
  </ButtonGroup>
</Flex>
       </Box>

{/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

    <Box mb='80px' display={['block','block','none']} bg='gray.200' padding='10px 0px'  position='sticky' top='0'>
        <Flex w='100%' m='auto' justifyContent='space-between' padding='0px 30px' alignItems='center'>
        <Box>
          <Link to='/'>
        <Image src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/logos/codecov.svg' maxW='120px' maxH='80px' />

          </Link>
        </Box>
        <Box color='#f06'  onClick={()=>setIsOpen(!isOpen)}>
        {

            isOpen?<i class="fa-solid fa-xmark" />: <i class="fa-solid fa-bars" />
        }
        </Box>
        </Flex>
      
  <Flex bg='gray.200' h='100vh' padding='10px 40px' flexDirection='column' position='absolute' left={isOpen?'0px':'-1000px'} top='40px' transition='.3s all ease'>

    <Link to='/features'>
    <Button onClick={()=>setIsOpen(!isOpen)} border='none' bg='none'>Features</Button>
    </Link>
    <Link to='/integration'>
    <Button border='none' bg='none'>Integration</Button>
    
    </Link>
   <Link to='/customers'>
    <Button onClick={()=>setIsOpen(!isOpen)} border='none' bg='none'>Customers</Button>
   </Link>
   <Link to='/resources'>
   <Button onClick={()=>setIsOpen(!isOpen)} border='none' bg='none'>Recources</Button>
   </Link>
   <Link to='/pricing'>
   <Button onClick={()=>setIsOpen(!isOpen)} border='none' bg='none'>Pricing</Button>
   </Link>
   <Link to='/contact'>
   <Button onClick={()=>setIsOpen(!isOpen)} border='none' bg='none'>Contact-Us</Button>
   </Link>
   <Link to='/login'>
    {
      isAuth?<Button bg='none' onClick={handleLogout}>Logout</Button>:
   <Button onClick={()=>setIsOpen(!isOpen)} bg='none' >Login</Button>
    }
   </Link>
  </Flex>
       
    </Box>
    

       </>
  )


}

export default Navbar;