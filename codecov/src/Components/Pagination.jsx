import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {Box,Button,Flex} from '@chakra-ui/react'

function Pagination({totalPage,handlePage,handleCount,page}){

    let n = Math.ceil(totalPage/6)

 const arr = [];

  for(let i=1;i<=n;i++){
    arr.push(i)
  }

 return <Box w='43%' m='auto' mt='50px'>
            <Flex justifyContent='space-around' alignItems='center'>
              <ArrowBackIcon _disabled={page===1} onClick={()=>handleCount(-1)} color='#f06'/>
              {

                 arr.map((ele)=>{


                     return <Button position='none' color='#f06' onClick={()=>handlePage(ele)}>{ele}</Button>

                 })

              }

              <ArrowForwardIcon _disabled={page===totalPage} onClick={()=>handleCount(1)} color='#f06'/>

            </Flex>
        </Box>

}

export default Pagination;