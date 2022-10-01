import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Box,
    Text,
    Heading
  } from '@chakra-ui/react';
  import {AddIcon,MinusIcon} from '@chakra-ui/icons';
  import {useState} from 'react';
  
function FaqDiv({title,desc}){
const [flag,setFlag] = useState(false)

return   <Box h='auto' p='10px 20px' border={flag?'1px solid red':'1px solid #abb8c3'} borderRadius='10px' mb='20px'>
<Accordion allowMultiple  border='white'>
<AccordionItem>
  {({ isExpanded }) => (
    <>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            <Heading fontSize='15px' lineHeight='1.6rem'>
            {title}
            </Heading>
          </Box>
          {isExpanded ? (
            <MinusIcon onClick={()=>setFlag(false)} fontSize='12px' color='#0693e3' />
          ) : (
            <AddIcon onClick={()=>setFlag(true)} fontSize='12px' color='#0693e3' />
          )}
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
         <Text lineHeight='1.6rem' fontWeight='400' color='#212529' fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'>
            {desc}
         </Text>
      </AccordionPanel>
    </>
  )}
</AccordionItem>
</Accordion>

</Box>

}

export default FaqDiv;