import {Flex,Box,Heading,Image} from '@chakra-ui/react';
import PlansDiv from '../Components/PlanDiv';
import {useEffect} from 'react';
import LogoHeading from '../Components/Logo&Heading';
import Table from '../Components/Table';
import FaqDiv from '../Components/Faq';
import Navbar from '../Components/Navbar';
function Pricing(){

    useEffect(()=>{
        window.scroll({
            top:0,
            behavior:'smooth'
        })
         document.title = 'Pricing - Codecov';
        let body =  document.querySelector('body')
         body.style.backgroundImage = 'none';
         let footer =  document.querySelector('footer')
         let div =  document.querySelector('#slanted_div')
         let ad =  document.querySelector('.ad')
         document.body.style.backgroundImage='none'
   
   
   
         footer.style.display = 'block'
         div.style.display = 'block'
         ad.style.display = 'block'
   

    },[])

    return <><Navbar />
    <Box mt={['40px','40px','100px']}>

       <Flex display={['none','none','none','flex']} w={['100%','100%','100%','42%']} m='auto' ml='45%' justifyContent='space-between' mb='20px'>
           <Image maxW='100px' maxH='70px' src='https://about.codecov.io/wp-content/uploads/2022/05/umbrella.png' />
           <Image maxW='100px' maxH='70px' src='https://about.codecov.io/wp-content/uploads/2022/05/parasol.png' />
           <Image maxW='100px' maxH='70px' src='https://about.codecov.io/wp-content/uploads/2022/05/partytent.png' />
           <Image maxW='100px' maxH='70px' src='https://about.codecov.io/wp-content/uploads/2022/05/gazebo.png' />
       </Flex>
    
    <Box padding='20px 60px' w='100%' m='auto' position={['none','none','sticky']} top='0' bg='white' p='10px 10%'>
        <Flex justifyContent={['center','center','space-between']} flexDirection={['column','column','column','row']} alignItems='center' colGap='100px'>
            <Heading w={['100%','100%','100%','30%']} textAlign='center' mb={['40px','40px','40px','auto']}>Compare Plans</Heading>
            <Box w={['100%','100%','100%','60%']}>
                <Flex justifyContent='space-between'>
                <PlansDiv title='Open Source' price='Free' bt='Get Started' bc='#0e1b29'/>
                <PlansDiv title='Basic' price='Free' bt='Get Started' mt='7px' bc='#0e1b29'/>
                <PlansDiv title='Pro' price='$12/user/month' bt='Get Started' mt='17px' bc='#0e1b29'/>
                <PlansDiv title='Enterprise' price='Custom Pricing' bt='Contact Sales' mt='30px' bc='#f06' />
                </Flex>
            </Box>
        </Flex>
    </Box>


     <Box w='80%' m='auto' mb='60px' mt='100px'>


      <Box w='30%'>

      <LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-users.svg' title='Users' />

      </Box>

      <Box>
 
       <Table p1='Users' p2='ok' p3='ok' p4='ok' p5='ok' />

      </Box>
     </Box>


     <Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-hosting.svg' title='Hosting' />

</Box>

<Box>

 <Table p1='Codecov Cloud' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Self - Hosted' p2='no' p3='no' p4='no' p5='ok' />

</Box>

</Box>


<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-repositories.svg' title=' Repositories' />

</Box>

<Box>

 <Table p1='Public' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Private' p2='no' p3='ok' p4='ok' p5='ok' />

</Box>

</Box>





<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-private-repo.svg' title='Private Repo' />

</Box>

<Box>

 <Table p1='Private repo uploads' p2='no' p3='250' p4='ok' p5='ok' />

</Box>

</Box>




<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-features.svg' title='Features' />

</Box>

<Box>

 <Table p1='PR Comments' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Checks' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Flags' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Carryforward Flags' p2='ok' p3='no' p4='ok' p5='ok' />
 <Table p1='API Access' p2='no' p3='no' p4='no' p5='ok' />
 <Table p1='Impact Analysis' p2='no' p3='no' p4='no' p5='ok' />





</Box>

</Box>





<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-integrations.svg' title='Integrations' />

</Box>

<Box>

 <Table p1='Slack' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Gitter' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Teams' p2='no' p3='no' p4='no' p5='ok' />

</Box>

</Box>





<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-security.svg' title='Security' />

</Box>

<Box>

 <Table p1='SAML*' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='SOC2 Report' p2='no' p3='no' p4='ok' p5='ok' />
 <Table p1='SOC3' p2='ok' p3='ok' p4='ok' p5='ok' />

</Box>

</Box>







<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-support.svg' title='Support' />

</Box>

<Box>

 <Table p1='Community' p2='ok' p3='ok' p4='ok' p5='ok' />
 <Table p1='Email' p2='no' p3='no' p4='ok' p5='ok' />
 <Table p1='Service Level Agreement' p2='no' p3='no' p4='no' p5='ok' />
 <Table p1='Customer Success Manager' p2='no' p3='no' p4='no' p5='ok' />
 <Table p1='Sr. Solutions Architect' p2='no' p3='no' p4='no' p5='ok' />
 <Table p1='Dedicated Onboarding Support' p2='no' p3='no' p4='no' p5='ok' />
 <Table p1='Legal Attention' p2='no' p3='no' p4='no' p5='ok' />

</Box>

</Box>





<Box w='80%' m='auto' mb='60px' mt='100px'>


<Box w='30%'>

<LogoHeading img='https://about.codecov.io/wp-content/uploads/2022/05/icon-other.svg' title='Other' />

</Box>

<Box>

 <Table p1='Beta Access' p2='no' p3='no' p4='ok' p5='ok' />
 <Table p1='Customer Advisory Board' p2='no' p3='no' p4='ok' p5='ok' />
 <Table p1='Dedicated Account Team'p2='no' p3='no' p4='no' p5='ok' />

</Box>

</Box>



      <Box w={['80%','80%','50%']} m='auto' mb='200px' mt='200px'>


       <FaqDiv title ='Which plan is best for me?'
       desc='Pro - this plan is best for small sized teams looking for minimal support.'
       />

       <FaqDiv title='What defines a user?'
       desc='A "user" is anyone who authors a pull request or merge request on a private repo with Codecov coverage, or accesses advanced features on Codecov.io for a private repo.

       For example, anyone with access to your repos in Github/ Gitlab/ Bitbucket will be able to see Codecov data on the codehost if a user has authored a PR (an example from an open source project, scrapy, is here). Once you click through the Codecov comment you enter Codecov.io to see more robust metrics, historical trends, and coverage visualizations (example from the same PR here ).'
       />
        <FaqDiv title='Can I trial Codecov before subscribing to a plan?'
       desc='Yes, for the first 5 users in your organization, Codecov is totally free.

       Need more than 5 users? Reach out to us and we can help up your user count temporarily'
       />
        <FaqDiv title='Does Codecov support multiple languages and/or applications in a single repository (a "monorepo")?'
       desc='Like a pro! We combine the uploads from multiple languages into a single report while maintaining the original data for each specific language.

       For multiple applications, you can use our Flags feature to segment coverage in your repository. With Carryforward Flags , you can partially run your CI and Codecov will carryforward tests not run on that commit.'
       />
        <FaqDiv title='Does Codecov offer support?'
       desc='Our mission is to improve your development workflow and support is no exception. As a pro customer, we offer you email support 24/5. Our Enterprise plans offer more robust support - including an Enterprise-only SLA, access to a Sr. Solutions Architect for dedicated onboarding support, a Customer Success Manager, and legal attention, if required.'
       />
        <FaqDiv title='How does Codecov interact with my source code?'
       desc='Codecov does not store source code. Codecov will only retrieve source code from your repository for two functions: upon user request and for static analysis. Read more in our Security Docs.'
       />
        <FaqDiv title='Does Codecov offer plans for educational use?'
       desc='Yes! We have partnered with the GitHub Student Developer Pack or you can contact us at education@codecov.io to get more information about our education plans.'
       />
        <FaqDiv title='What defines a Private Repo Upload for the Basic Plan?'
       desc='A Private Repo Upload is one coverage report uploaded to Codecov on a closed source repository, most likely during your CI run process.

       Some CI build processes only have one coverage upload per commit, but some may have more than one upload, depending on things like if you are parallelizing your CI build and using Codecov to merge the reports and/or using Codecovs Flags feature.
       '
       />
           <FaqDiv title='*How is SAML supported?'
       desc='SAML is indirectly supported via your SSO Provider and GitHub/GitLab/Bitbucket'
       />


      </Box>


    </Box>
    </>

}


export default Pricing;