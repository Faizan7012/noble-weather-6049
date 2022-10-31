import BlogDiv from "../Components/BlogDiv";
import {useEffect,useState} from 'react';
import {Box,Flex, SimpleGrid,Button,Heading,Center,Text} from '@chakra-ui/react'
import axios from 'axios'
import Pagination from "../Components/Pagination";
import {useSearchParams} from 'react-router-dom';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Navbar from "../Components/Navbar";


const months = ['January','Fabruary','March','April','May','June','July','August','September','October','November','December','All']
function getPageFromUrl(value) {
    if (value <= 0) {
      value = 1;
    }
    value = Number(value);
  
    return value;
  }

function Resource(){
    const [searchParams, setSearchParam] = useSearchParams();
    const value = getPageFromUrl(searchParams.get("page"));
     const [page, setPage] = useState(value);
    const [data,setData] = useState([])
    const [totalPage,setTotalPage] = useState(0);
    const value2 = searchParams.get("month")
    const [month,setMonth] = useState(value2);
    const [loading,setLoading] = useState(false);
    const [dis,setDis] = useState(false)

    useEffect(()=>{
        document.title = 'Codecov - Resources';
        let footer =  document.querySelector('footer')
        let div =  document.querySelector('#slanted_div')
        let ad =  document.querySelector('.ad')
        footer.style.display = 'block'
        div.style.display = 'block'
        ad.style.display = 'block'
        document.body.style.backgroundImage='none';
        setLoading(true)

      let url;
        if(month==''){
          url= `https://mock-server-yf9f.onrender.com/data?_page=${page}&_limit=6`;
        }
        else if(month === null || month==='All'){
                 setMonth('All')
            url= `https://mock-server-yf9f.onrender.com/data?_page=${page}&_limit=6`;
        }
        else{
            url=`https://mock-server-yf9f.onrender.com/data?_page=${page}&_limit=6&month=${month}`
        }
       axios.get(url)
       .then((res)=>{
          setData(res.data)
         setTotalPage(res.headers["x-total-count"])
       })
       .catch((err)=>{
        console.log(err)
       })
        setLoading(false);
        month===''?setSearchParam({page}):setSearchParam({page,month})

      },[page,month,dis])

    const handlePage = (val)=>{
        setPage(Number(val))
    }

  const handleCount = (val)=>{
 
    setPage(page+val)
  }

  function HandleSet(ele){
    setMonth(ele);
    setDis(!dis)
  }

if(loading){

    return <h1>Loadin...</h1>
}

return <Box>
  <Navbar />
   <Center mb={['20px','20px','100px']} mt={['0px','0px','80px']}>
      <Heading>
        Resources
      </Heading>
   </Center>
   <Box >
   <Heading onClick={()=>setDis(!dis)} color='#f06' fontSize='15px' ml='20px' textAlign='left' mb='40px' display={['block','block','none']}>
    Filter
   </Heading>
   </Box>

   

<Flex w='80%' m='auto' justifyContent={['center','center','space-between']}>

<Box w={['100%','100%','30%']} ml={['0px','0px','-50px']} padding={['0px 20px','0px 20px','10px']} borderRadius='10px' backgroundColor={['gray.200','gray.200','none']} position={['absolute','absolute','sticky']} transition='.3s ease all' left={[dis?'0':'-100%']}>
     <Box w='70%' m='auto' position='sticky' top='120px'>
     <SimpleGrid columns='2' spacing='20px'>

{
months.map((ele)=>{

return <Button bg='white' _hover={{bg:'#e6d6f3'}} variant='outline' onClick={()=>HandleSet(ele)}>{ele}</Button>


})
} 

</SimpleGrid>
     </Box>
  

</Box>


<Box w={['100%','100%','70%']} ml={['0px','0px','50px']}>
<SimpleGrid columns={['1','1','2']} spacing='40px'>
{


data?.map((ele)=>{
return <BlogDiv data={ele} />
})

}
</SimpleGrid>

</Box>

 </Flex>
 
<Center>
<Box>
<Pagination totalPage={totalPage} handlePage={handlePage} handleCount={handleCount} page={page}  />
</Box>
</Center>
</Box>



}


export default Resource;