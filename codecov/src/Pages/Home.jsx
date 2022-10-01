import {Box,Flex,Heading,Text,Button,Image,Center,SimpleGrid,Tooltip} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import BrandsLogo from '../Components/BrandsLogo';
import {ArrowForwardIcon} from '@chakra-ui/icons';
import ResourceDiv from '../Components/ResourceDiv';
import FooterLoginDiv from '../Components/FooterLoginDiv';
import {useEffect} from 'react';
function Home(){

  useEffect(()=>{
    document.title = 'Codecov - The Leading Code Coverage Solution';
    let nav =  document.querySelector('nav')
    let footer =  document.querySelector('footer')
    let div =  document.querySelector('#slanted_div')
    let ad =  document.querySelector('.ad')



    nav.style.display = 'block'
    footer.style.display = 'block'
    div.style.display = 'block'
    ad.style.display = 'block'
  },[])

return <Box fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol'>

       <Box>
        <Flex w='70%' m='auto' gap='40px' justifyContent='space-between'>
            <Box lineHeight='30px'>
                <Heading fontSize='60px' mt='20px'>Ship healthier code faster with less risk.</Heading>
                <Text mt='20px'>Join 1M+ developers worldwide in shipping healthier code with code coverage from Codecov.</Text>
                <Link to='/login'>
                <Button mt='30px' bg='#f07' color='#fff' fontWeight='600' _hover={{bg:'pink.500'}} p='0.8rem 1.4rem' borderRadius='6px'>Get Started</Button>
                </Link>
            </Box>
   
     <Image maxW='400px'
      src="https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/pull-request-comments.svg"
       alt="image-1" />
            <Box>

            </Box>
        </Flex>
       </Box>

         <Box mt='50px'>
            <Box>
                <Center>
                <Text fontWeight='600' color='#6c757d'>29,000+ ORGANIZATIONS ARE ALREADY USING CODECOV</Text>
                </Center>
            </Box>
            <Flex w='700px' m='auto' justifyContent='space-between'  mt='40px'>
           
            <BrandsLogo img='https://about.codecov.io/wp-content/uploads/2021/06/hitachi.svg'/>
            <BrandsLogo img='https://about.codecov.io/wp-content/uploads/2020/08/the-washington-post.svg'/>
            <BrandsLogo img='https://about.codecov.io/wp-content/uploads/2021/07/wework-logo.svg'/>
            <BrandsLogo img='https://about.codecov.io/wp-content/uploads/2021/06/gatspy.svg'/>
            <BrandsLogo img='https://about.codecov.io/wp-content/uploads/2020/08/grab.svg'/>
            <BrandsLogo img='https://about.codecov.io/wp-content/uploads/2020/10/lyft.svg'/>


       
            </Flex>
         </Box>

         <Box  w='550px' m='auto' textAlign='center' mt='120px'>
            <Text w='550px' fontSize='1.6rem' fontWeight='700' >
            Development cycles are spinning faster than ever...
            </Text>
       
         </Box>

         <Box w='80%' m='auto' mt='40px' mb='150px'>
             <Flex  justifyContent='space-between' >
                <Box >
                </Box>
              <Image maxW='400px'
               src='https://about.codecov.io/wp-content/themes/codecov/assets/templates/home/devops.svg'
                alt='image-2'/>

                <Box w='40%' lineHeight='30px' fontWeight='500' fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol'>
                    <Box>
                        <Text>With everything from doorbells to rockets running on code, it's more important than ever to ensure quality code is being delivered with every release.</Text>
                    </Box>
                    <Box mt='20px'>
                        <Text>
                        Code coverage is one of the most important metrics companies rely on to ship healthier code, faster, and with less risk.
                        </Text>
                    </Box>
                    <Box mt='20px'>
                        <Text>
                        Codecov gives companies actionable coverage insights when and where they need them to ensure they are shipping quality code.
                        </Text>
                    </Box>
                </Box>
             </Flex>
         </Box>

         <Box>
         <Box  w='550px' m='auto' textAlign='center' mt='120px'>
            <Text w='550px' fontSize='1.6rem' fontWeight='700' >
            How Codecov helps...
            </Text>
          </Box>

          <Box w='80%' m='auto' mt='40px' mb='200px'>
            <Flex justifyContent='space-between'>
         
             <SimpleGrid columns='1' spacing='10px'>
                <Flex borderRadius='50px' _hover={{bg:'#e6d6f3'}} w='400px' justifyContent='space-between' alignItems='center' p='15px 30px'>
               <Image  maxW='50px'
               src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/flexible.svg'
               alt='image-3' />
               <Heading  fontSize='20px' fontWeight='700'>Flexible / Unified Reporting</Heading>
                </Flex>
                <Flex  borderRadius='50px' _hover={{bg:'#e6d6f3'}} w='400px' justifyContent='space-between' alignItems='center' p='15px 30px'>
               <Image  maxW='50px'
               src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/seamless.svg'
               alt='image-4' />
               <Heading  fontSize='20px' fontWeight='700'>Seamless Coverage Insights</Heading>
                </Flex>
                <Flex  borderRadius='50px' _hover={{bg:'#e6d6f3'}} w='400px' justifyContent='space-between' alignItems='center' p='15px 30px'>
               <Image  maxW='50px'
               src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/icons/solutions/robust.svg'
               alt='image-5' />
               <Heading mr='13px' fontSize='20px' fontWeight='700'>Robust Coverage Controls</Heading>
                </Flex>
             </SimpleGrid>
              <Box p='30px' borderRadius='10px' w='55%' lineHeight='30px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'  fontWeight='500' fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol'>
               
                <Text fontWeight='bold'>As long as your code has tests and your coverage tool can output coverage results in a <span className='span'> compatible format </span>, you can use Codecov.</Text>
                
              <SimpleGrid columns='1' spacing='10px'>
               
                <Flex>
                <i class="fa-solid fa-check"></i>
              <Text color='#f06' ml='20px' fontSize='15px'>Source Code Coverage</Text>
                </Flex>
                <Flex>
                <i class="fa-solid fa-check"></i>

              <Text color='#f06' ml='20px' fontSize='15px'>20+ Languages and CI/CD Agnostic</Text>
                </Flex>
                <Flex>
                <i class="fa-solid fa-check"></i>
              <Text color='#f06' ml='20px' fontSize='15px'>Report Merging</Text>
                </Flex>
                <Flex>
                <i class="fa-solid fa-check"></i>

              <Text color='#f06' ml='20px' fontSize='15px'>Coverage Isolation</Text>
                </Flex>

              </SimpleGrid>
              
              </Box>
            </Flex>
          </Box>
         </Box>


        <Box mb='40px'>
            <Center>
            <Heading fontSize='30px' mb='20px'>Code Coverage For Any Tech Stack</Heading>
            </Center>
            <Center>
            <h6>Codecov provides highly integrated tools for developers and engineering leaders to gain</h6>
            </Center>
            <Center>
            <h6>actionable visibility into their code coverage.</h6>

            </Center>
        </Box>
        <Box w='80%' m='auto' mt='40px' mb='150px'>
             <SimpleGrid columns='2' spacing='30px' justifyContent='space-between' >
                <Box >
                <Image
                 maxW='600px'
               src='https://about.codecov.io/wp-content/themes/codecov/assets/brand/features/multi.svg'
                alt='image-6'
                mt='100px'
                />
                </Box>
                <Box>
                  <SimpleGrid columns='2' spacing='20px'>
                    <Box>
                      <Heading fontSize='17px' color='#6c757d' mb='20px'>LANGUAGE</Heading>
                       <SimpleGrid columns='3' spacing='10px'>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Java</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a' >JS</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Python</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Ruby</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>React</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>C</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>c++</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Scala</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Apex</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>C#</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Go</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>PHP</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Clojure</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Julia</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Lua</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Perl</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Bash</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Kotlin</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Dart</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Rust</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>D</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Erlang</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>F#</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Elixir</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Groovy</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Fortran</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>R</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Swift</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Haskell</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Powershell</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Objective-C</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>TypeScript</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Vala</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Xcode</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Xtend</Button>
                      </SimpleGrid>
                      </Box>
                      <Box>
                      <Heading fontSize='17px' color='#6c757d' mb='20px'>CI PLATFORM</Heading>
                     <SimpleGrid columns='2' spacing='10px'>
                        <Button  fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Github Action</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Travish CI</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Circle CI</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>BitRise</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>GitLab CI</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Jenkins</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Bamboo</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Codefresh</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Drone</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>BuildKite</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Shippable</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>TeamCity CI</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Bitbucket Pipelines</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Warsker</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Semaphore</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Buildbot</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Azure Pipelines</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Shippable</Button>
                        <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>AppVeyor</Button>




                        </SimpleGrid>
                      </Box>
                     <Box>
                     <Heading fontSize='17px' color='#6c757d' mb='20px'>CODE HOSTS</Heading>
                       <SimpleGrid columns='2' spacing='10px'>
                       <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Github</Button>
                       <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Gitlab</Button>
                       <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Bitbucket</Button>
                       <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Github Enterice</Button>
                       <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>GitLab CE / EE</Button>
                       <Button fontSize='12px'  h='20px' bg='#deeef6' color='#0e7b8a'>Bitbucket Server</Button>
                       </SimpleGrid>
                     </Box>
                     <Box>
                     <Heading fontSize='17px' color='#6c757d' mb='20px'>CLOUD PLATFORM</Heading>
                      <SimpleGrid columns='1' spacing='10px'>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Google Cloud Platform</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Amazon Web Services</Button>
                        <Button fontSize='12px' h='20px' bg='#deeef6' color='#0e7b8a'>Microsoft Azure</Button>
                      </SimpleGrid>
                     </Box>
                  </SimpleGrid>
                </Box>
                </SimpleGrid>
                </Box>
             {/* Middle Part */}
               <Center position='relative' mt='300px'>
               <Box>
                <Box mb='20px'>
                <Center>
               <Heading fontSize='30px'>Who else is covered?</Heading>
                </Center>
                </Box>
              <Box>
              <Center>
            <Text mb='10px'  fontSize='16px'
             fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",
             "Segoe UI Symbol"' fontWeight='400' >Over 29K organizations and 1M+ developers trust</Text>
               </Center>
            </Box>

            <Box>
              <Center>
              <Text  mb='20px'  fontSize='16px' fontFamily='"poppins",-apple-system,BlinkMacSystemFont,Roboto,"Arial",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"' fontWeight='400' >Codecov to gain visibility into their code coverage.</Text>
              </Center>
            </Box>
            <Box>
              <Center>
              <Link to='/customers'>
           <Button bg='#f06' color='white' padding='15px 20px' _hover={{bg:'pink.600'}}>View Customers</Button>

          </Link>
              </Center>
          
            </Box>
                </Box>
          
                </Center>
              
       <Box position='relative' mt='-360px' mb='150px'>
        <Center mb='20px'>
        <Tooltip label='Tile' fontSize='md'>
        <Image maxW='80px'  src='https://upload.wikimedia.org/wikipedia/commons/0/04/Tile_logo.png' alt='tile' />

        </Tooltip>

        </Center>
         <Center>
         <Flex w='530px' justifyContent='space-between' mb='20px'>
          <Tooltip label='Washington Posts' fontSize='md'>
            <Image maxW='50px' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAD19fWsrKzv7+/m5uZmZmZ4eHjCwsIzMzPy8vLg4OAHBwc4ODgZGRlsbGyOjo5ycnITExOgoKC7u7uCgoIlJSVhYWEqKipERETJyclcXFwfHx/T09O2trbc3NyWlpY+Pj5MTExVVVV+fn6enp6JiYnFCRdHAAAKVUlEQVR4nO2da4OyLBCGA7XNajta2cHO9f9/4iuaCjKD+CS5+XJ/3FjlUhiGAcZez8rKysrKysrKysrKysrKysrKysrKysrK6svkra5u23UwKBpsCSHTtqthStRbhoRM9kfadk3MiJ7O6/j9bZcd5eudzr8xH9lEbVfElJwb4yN7r+2KGFI0PSSAYVetqBOSVB0FdOcvPnJsuypmFN0ywLCbVjS6ZoDk3HZdjKh4g4Ts2q6MCY0uBeD41HZtTIh7gyQctV0bA7pzgMTvIOFxTbr9DumUBySL7vXD40QgJJ1zuuldBCSzro340W+J8NA1woCU9Wy7Sg3rIRGSQdt1alTuj0x46NSA4fVlQhJ2acQACcm1Q4jFxFfQBonU6NrZP2SP6QwkJKshWHqpFwAYPGpEQqKZfuCrTtlMR5gQjmUsF4tApx4hmYFPCJJ3I33d5zG66pfNtQthwrX8sOgydvDCasToEru3uq6RxxYQbnrPg7KytddT6Ap5iXOpqJMa2ipEBkh0HQeaesVrrWqnL2NSFzFAXiIpP1fn9fexo7zeLnMD9xpv0Ttkd9MInvhZ2bqTgydCeBaLDfIflIhcTGtTiegWhcsdnJb/me7zsoeaAc/TBSbciqW4X9b4HUb8+LqqaE8uX9gXFrui2TkQGId8bwqdesMRZk75MpEQCFhjb9ETp9NqxNJYLFR7SciU/+fhbCGUrbk2tieguOb+sh65JjAiLXlI47ti+KJlZ2N9Ln6MO/0PR1gCjBvqrBahCxMWFGVABJFuysXGP/hblJ/rYoURzsbylWsh3qSbMZ1zwPIsmT1EABFqC+gILT00pj1MuITK1lqFP0FXINkT5QPG3EOUEBEXF+4xSM/IEAVCeZauujIoCryk+Bbpj4nXoYGIuQ43oCKlAB+P6EqEO6zsTd9JpcA8OPNqvCv0m4SIufAEaqjDcviL0+ZUItxN0LI3/bEfiGW8COEJ5Esc4llRbFp61sOVZDj427oC4Q5sXy9dtdeRwCGREXpw58q01AGMEYW4CFUCpnPTnDAGxN9h7JbozHWYwL48h8M4ghwdwPhS/FtkHfayRsv2ecLRNm6KiCFIFGrGzRDCxFWagrb6pUnyFlkj95dohyVC0IBdcx1RLcLhllyinqtEfIuQWY8tMhxlesS/jxNv2PMVxe6ZRWX92o8txPCiQeiTKzMmQ8mVKLR4g3DGeueN/ewsoN9fWjrxFChkzvhQ8aw32WQsbvfbxATCBpwjHMYTwmtqLRW2afIGIesq0/TRHw9QgUJhOtugsHNEigvFOu9fBnA4A21IRnh2N+SS2Ur6wOzNO4TkZbl7vWL6Cyuf3LkoYkHYy4dH+oTaRkb4nI0nnBlZIu3oPcJ+YR+wKVZyk2K+eEK8MZ6w0A7quRnhQlxfoMhDfotwzzsj+Ftc82PSCXmL9QkJKY11A6Dwe4RXsVLoWzwLxU7woAESDlBCRiNFEqKmCe+lQhjiWay8d2mAMB6nVtJ/UMhWv0MoxRMDuLOXQ6MeZNnrEbJGepcddshFbZSwdwQjj80TJvMlOTzwAUIgmgAQjt4jnA9jQL8tQgcadxsmvAe/5Om0RQgOuw0T+iG50V2XCZPoRKffIbl6UjSxW4RbFhDoNOGPGKfpIKEQxbCElrBtQnnFp0uEwyg4PqGYohlCcHJpkNCb4XE5A4Su66ExbyOEI8WyRfOEbuRsfHjeZ4owUK1ENE4Y/OCrAoYIHeWqRcOE7koVBzVDiAUujRDK6+7mCT1sg5IRQnQh1iBhxT2bJaxcEjNAiG0UNEI4Uq2GmSLEFvuNEOIL7+YIXXXPb5ZwhK0wmCTcXT5IGFQMS0YIq1bpGiUEt1+YJqwa7ZskRDbpGyZUrpc3TIgsEX2McL3v9/tX1Qrpu4QRvt3DPKE/S2sP7iNpjLAS0Eg/ZP8/zjcQGY1iZITrLRM4HzVhS1nLKar+AcLbI4iYwCVsE+NhXMffYnOAWUI2Mj2z5gJucDRA6O2F7X5GCU9x6XletY9FoubCBnmjhKMbIUVz+RhhtFpyJY0SDlfkyYVOPkUoymxE+Ohzu087SUj5LZ+dJBRkCS2hJbSEltASWkJLaAktoSXsBmG/84TPv0gInAcHCR+lQhDhCjyy2zbhXi4HEu5LOUJkwjGSrqZtQiBdAHy86iaWkwnPUBP9A4SEbMp5zZADZAuhDUqEyx6i9glfZyErCcVTZmVCPNmLkvD5EUISisfBUUI+T4ZIuEbfIHISPSM8bJ7ByOM7sBHC0gky/Ljs4ZH3NYHwV5Ethzrq03mxtqtjlEMaIiQP7jE+8APBRe4rnvCGpwRwgxW4hU8gjOXfj66C8J2TzpmKsSxSLhz/UInwhifvc/rIroUyYfyapmn+IZCQoHcQpDoDW+QLUGaQIHmOj4Lwiqbm8OZoa5AJ487842GEim7OC00f8qp6UtPKBAvk4gmE+EcWBopz7RBh3J93MKF2KtKdell/HL1yUc3Um5oOO47wgt5NeTIcJmSHceUkMzXyt1R0MUICyjbgxK7qVLklhqUBSwnHG+xWVL2VByMkq2Gpjgd5yFQiVmw5Y000Sb81U24vPCzTM6QTcDKRqGJPJEpIZuI58Wvd71SMKrtZmr4DHsVyjZc0NiITzBWt3jWEE4qa18/L7WLZ9166Zl5qoEQ83BdkcUZzPVYYNW3Cei30JSxtQSq/eGaREjGWImGcKhOLPuEhwO+glGrDopDCQY2o6CDVW2h1CK//njkez8pUqjWexUQ5RkX6u6AVumvnf4WqgFRdyuIH5iVh8lVplqt3RFYTqpx5HZ1A1wyK2cBOwlYFqEzcpUn4Rgt9yQW6yhRoFvQIdUaFr93T2FteSTiGY1r1RKURawpbZmDX9l6Zz72U2uW2gaYXSkK/oU/eOeKdUe9vVDb9FV9s4ydp/mznDVRz/P1TtkqK6WZNCWP6BW94JU+xInWwW5zKCx2XVmTgebpu2YGFs4z/m7gYkTKFt5DisV9x0VN+0eewfBeZkMXaxKSN5dDzeyq6jDr1c++cOwkrdcHcYRtvskZRHU2k5/z0YNj0t7ayJLiV6Wxf39xT+NqZUgv2WxgLnXhpcElbEmLt3lIypmskHh+wOqyrjdwwadG8sdCKCCdjqI+78u9oGeplVo9nzweN/NMuexJ93mzpxbyj2ISZ+hqc86M3vI62OvEgL24TfWG81IzqO/0GRnlYVLdpeDrj8Ch+F+LAo7tu8S1f1YykZZCaKzN/X6ey69A5QkmW8PtlCb9flvD7ZQm/X5bw+/U/JZx3nnDTecIkZthtQhZX7jBhuD8QsnXBLLtfKJlwHbgsxNd/dJZwl619jbtJOEmChm66HaWLhPleCKejhNzq8bGThMKm8sGke4SlD3vt1iaWYj4ujnBaXh4Pqr7x+RUqCIH9B10ALAjNrJ39AWWEDW2w+IN6EVaso3+zEsLFm5u4/rQYoeLzyR1QTHjR/UTjdypYX0wt0P8RHfW/I/qlco3tQLCysrKysrKysrKysrKysrKysrKyqtB/8uS+GhebNggAAAAASUVORK5CYII=' alt='wp'/>
          </Tooltip>
          <Tooltip label='Routable' fontSize='md'>
            <Image maxW='70px' src='https://s3-us-west-2.amazonaws.com/routable/logo/logo-navy.svg' alt='routable'/>
          </Tooltip>
        </Flex>

         </Center>
         <Center mt='60px'>
         <Flex w='800px' justifyContent='space-between'>
          <Tooltip label='Grab' fontSize='md'>
          <Image maxW='70px' src='https://about.codecov.io/wp-content/uploads/2020/08/grab.svg' alt='routable'/>
          </Tooltip>
          <Tooltip label='Good Rx' fontSize='md'>
            <Image maxW='70px' src='https://images.ctfassets.net/4f3rgqwzdznj/69gWpZPltpARadZPdhvjpr/df0bc54461dc86b2834407875d449dca/GoodRx_logo.svg' alt='routable'/>
          </Tooltip>
        </Flex>
         </Center>

            <Center mt='70px'>
            <Flex w='900px' justifyContent='space-between'>
          <Tooltip label='SheildPay' fontSize='md'>
            <Image maxW='70px' src='https://website.shieldpay.com/hubfs/shieldpay-logo-charcoal.svg' alt='routable'/>
          </Tooltip>
          <Tooltip label='AfterPay' fontSize='md'>
            <Image maxW='70px' src='https://portal.afterpay.com/au/image/logo.svg' alt='routable'/>
          </Tooltip>
          </Flex>
            </Center>
            <Center mt='70px'>
            <Flex w='800px' justifyContent='space-between'>
          <Tooltip label='Ujet' fontSize='md'>
            <Image maxW='70px' src='https://ujet.cx/_next/static/media/ujet-logo.ebf9b2e5.svg' alt='routable'/>
          </Tooltip>
          <Tooltip label='HPE' fontSize='md'>
            <Image maxW='70px' src='https://1000logos.net/wp-content/uploads/2021/09/HPE-Logo.png' alt='routable'/>
          </Tooltip>
          </Flex>
            </Center>

            <Center mt='60px'>
            <Flex w='500px' justifyContent='space-between'>
          <Tooltip label='Ring' fontSize='md'>
            <Image maxW='70px' src='https://site-nav.ring.com/media/ring-logo.svg' alt='routable'/>
          </Tooltip>
          <Tooltip label='Hitachi' fontSize='md'>
            <Image maxW='70px' src='https://about.codecov.io/wp-content/uploads/2021/06/hitachi.svg' alt='routable'/>
          </Tooltip>
          </Flex>
            </Center>

            <Center mt='20px'>
            <Tooltip label='WeWork' fontSize='md'>
            <Image maxW='100px' src='https://wework-email-logo.s3.amazonaws.com/WeWork-Logo_240x69.png' alt='routable'/>
          </Tooltip>
            </Center>
        

       </Box>


       <Box textAlign='center'>
          <Heading fontSize='30px' mb='20px'>
          Resources
          </Heading>
            <h6 className='resource-home-tag'>Want to learn more about code coverage? View our library of</h6>
            <h6 className='resource-home-tag'>resources to start building a culture of coverage at your company.</h6>
            <Link to='/resources'>
            <Text mt='20px' mb='50px' color='#f06'>
            View Resources <ArrowForwardIcon />
            </Text>
            </Link>
         
       </Box>
       <Center mb='100px'>
       <SimpleGrid  w='80%' columns='3' spacing='20px'>
       <ResourceDiv img='https://about.codecov.io/wp-content/uploads/2021/02/6-Most-Popular-Languages-using-Codecov.jpg'
           type='PAGE' title='What should my code coverage goal is gonna be?' forward='Learn More'/>
          <ResourceDiv img='https://about.codecov.io/wp-content/uploads/2021/02/8-factors-Influencing.png'
           type='BLOG POST'
           title='8 Factors Influencing Your Approach to Code Coverage'
           forward='Read Blog Post ' />
           <ResourceDiv img='https://about.codecov.io/wp-content/uploads/2021/02/featured-100-percent-repos.jpg'
           type='INFOGRAPHIC' title='2020 State of Open Source Code Coverage' forward='View Infographic'/>
        </SimpleGrid>
       </Center>
       
        <FooterLoginDiv />

       </Box>
  
}

export default Home;