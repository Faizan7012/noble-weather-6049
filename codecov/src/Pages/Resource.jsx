import BlogDiv from "../Components/BlogDiv";
import {useEffect,useState} from 'react';
import {Box,Flex, SimpleGrid,Button,Heading,Center, Skeleton, Text} from '@chakra-ui/react'
import axios from 'axios'
import {useSearchParams} from 'react-router-dom';
import Navbar from "../Components/Navbar";
import PAgination from "../Components/Pagination";


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
      window.scroll({
        top:0,
        behavior:'smooth'
    })
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
          console.log(data)
         setTotalPage(res.headers["x-total-count"])
        setLoading(false);
       })
       .catch((err)=>{
        console.log(err)
       })
        month===''?setSearchParam({page}):setSearchParam({page,month})

      },[page,month,dis])

    const handlePage = (val)=>{
        setPage(Number(val))
    }
  function HandleSet(ele){
    setMonth(ele);
    setDis(!dis)
  }

return <Box>
  <Navbar />
   <Center mb={['20px','20px','100px']} mt={['0px','0px','80px']}>
      <Heading>
        Resources
      </Heading>
   </Center>

<Flex w='80%' m='auto' justifyContent={['center','center','center','space-between']} flexDirection={['column','column','column','row']}>

<Box w={['100%','100%','100%','30%']} padding='10px' borderRadius='10px' >
     <Box w='70%' m='auto' position={['none','none','none','sticky']} top='120px'>
     <SimpleGrid columns={['2','3','4','2']} spacing='20px'>

{
   months.map((ele)=>{

return <Button bg='white' _hover={{bg:'#e6d6f3'}} position='none' variant='outline' onClick={()=>HandleSet(ele)}>{ele}</Button>

})
} 

</SimpleGrid>
     </Box>
  

</Box>
<Box w={['100%','100%','100%','70%']} ml={['0px','0px','0px','50px']}>{
loading?<Box m='auto' mt='60px' mb='50px'>
 <Flex w='100%' m='auto' gap='20px' justifyContent='center' flexDirection={['column','column','row','row']}>
 <Skeleton m='auto' w={['90%','90%','100%','100%']} height='200px' />
 <Skeleton m='auto' w={['90%','90%','100%','100%']} height='200px' />
 <Skeleton display={['block','block','none','none']} m='auto' w={['90%','90%','90%','100%']} height='250px' />
 </Flex>
</Box>:
<SimpleGrid columns={['1','1','2','2']} spacing='40px'>
{


    data?.map((ele)=>{
  return <BlogDiv data={ele} />
  })

}
</SimpleGrid>
}

</Box>

 </Flex>
 
<Center>
<Box>
<PAgination totalPage={totalPage} handlePage={handlePage} page={page}  />
</Box>
</Center>
</Box>



}


export default Resource;