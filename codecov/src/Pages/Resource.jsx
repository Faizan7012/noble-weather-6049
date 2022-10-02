import BlogDiv from "../Components/BlogDiv";
import {useEffect,useState} from 'react';
import {Box,Flex, SimpleGrid,Button,Heading,Center} from '@chakra-ui/react'
import axios from 'axios'
import Pagination from "../Components/Pagination";
import {useSearchParams} from 'react-router-dom';

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

    useEffect(()=>{
        document.title = 'Codecov - Resources';
        let nav =  document.querySelector('nav')
        let footer =  document.querySelector('footer')
        let div =  document.querySelector('#slanted_div')
        let ad =  document.querySelector('.ad')
        nav.style.display = 'block'
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

      },[page,month])

    const handlePage = (val)=>{
        setPage(Number(val))
    }

  const handleCount = (val)=>{
 
    setPage(page+val)


  }

if(loading){

    return <h1>Loadin...</h1>
}

return <Box>
   <Center mb='100px'>
      <Heading>
        Resources
      </Heading>
   </Center>
   

<Flex w='80%' m='auto' justifyContent='space-between'>

<Box w='30%' ml='-50px' mb='100px'>
     <Box w='70%' m='auto'  position='sticky' top='120px'>
     <SimpleGrid columns='2' spacing='20px'>

{
months.map((ele)=>{

return <Button bg='white' _hover={{bg:'#e6d6f3'}} variant='outline' onClick={()=>setMonth(ele)}>{ele}</Button>


})
} 

</SimpleGrid>
     </Box>
  

</Box>


<Box w='70%' m='auto' mb='100px' ml='50px'>
<SimpleGrid columns='2' spacing='40px'>
{


data?.map((ele)=>{
return <BlogDiv data={ele} />
})

}
</SimpleGrid>

<Box>
<Pagination totalPage={totalPage} handlePage={handlePage} handleCount={handleCount} page={page}  />
</Box>
</Box>

 </Flex>
</Box>



}


export default Resource;