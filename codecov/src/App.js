import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import {Box,Text,Center} from '@chakra-ui/react';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Box className='ad' bg='#0f1b29' p='10px'>
        <Center>
        <Text color='gray' fontWeight='400' >Coming Soon! Need automated test selection powered by code coverage data? Learn more.</Text>
        </Center>
      </Box>
     <Navbar />
     <AllRoutes />
     <Footer />
    </div>
  );
}

export default App;
