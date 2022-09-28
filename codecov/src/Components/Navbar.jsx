import {Link} from 'react-router-dom';
import { Flex, Spacer,Box,ButtonGroup,Button,Image,  Menu,
    MenuButton,
    MenuList,
    MenuItem,
    } from '@chakra-ui/react';
const Navbar = ()=>{


  return(
       <nav style={{padding:'0px 100px',marginTop:'30px'}}>
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
    <Link to='/features'>features</Link>
    </MenuItem>
    <MenuItem>
    <Link to='/integration'>integration</Link>
    </MenuItem>
  </MenuList>
</Menu>
   <Link to='/customers'>
    <Button border='none' bg='none'>Customers</Button>
   </Link>
   <Link to='/recources'>
   <Button border='none' bg='none'>Recources</Button>
   </Link>
   <Link to='/pricing'>
   <Button border='none' bg='none'>Pricing</Button>
   </Link>
   <Link to='/contact'>
   <Button border='none' bg='none'>Contact-Us</Button>
   </Link>
   <Link to='/login'>
   <Button border='none' bg='none'>Login</Button>
   </Link>
  </ButtonGroup>
</Flex>
       </nav>
  )


}

export default Navbar;