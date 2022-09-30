import FeaturesDiv from "../Components/FeaturesDiv";
import FeaturesImage from "../Components/FeaturesImage";
import {Flex,Box,Heading,Center} from '@chakra-ui/react';
import FooterLoginDiv from "../Components/FooterLoginDiv";

function Features(){

  return <Box>
            <Box mb='100px'>
                <Center>
                <Heading>Features</Heading>

                </Center>
            </Box>
            <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
             <FeaturesDiv title='Impact Analysis' desc='Impact Analysis takes runtime information from an application’s production environment and provides this information contextually in the Codecov dashboard and in the Codecov pull request comment. Now, in any pull …'
            forw='Read More ' />
            <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2022/06/0622_ProjectInsights.jpg' />
             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
                <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Source-Code-Coverage-1.png'/>
                <FeaturesDiv title='Source Code Coverag' desc='Codecov makes it easy to see absolute coverage and coverage changes overlayed with your source code, making it even easier to identify needed test areas.'
                 forw='Learn More'/>
             </Flex>

            


             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px'>


            <FeaturesDiv title='Multi Language, Multi CI/CD'
            desc='Regardless of what languages or CI/CDs you use, we can process your code coverage uploads against your entire project. Codecov just works out of the box.'
            forw='Learn More' />
            <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/CD.png' />

             </Flex>




             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>

                <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Pull-request-comments.png' />
                <FeaturesDiv title='Pull Request Comments' desc='Get a summary of coverage information directly in your workflow so that you can add and update tests quickly and effectively.'
                forw='Learn More' />

             </Flex>



             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
          
             <FeaturesDiv title='Status Checks' desc='Block underperforming pull requests from being merged with status checks. No more indecision if a code change has enough test coverage.'
             forw='Learn More' />
             <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Status-Checks-1.png' />

             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
             
             <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Gthub-Badges.png' />
             <FeaturesDiv title='Badges'
             desc='A Codecov badge is a live icon that is displayed within your code host that gives you a glance into the status of your project’s percentage of code coverage. It’s …'
             forw='Learn More' />

             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
            
              <FeaturesDiv title='Report Merging' desc='Do you generate multiple coverage reports? Codecov can handle merging them seamlessly, whether you upload multiple reports at once or across different CI/CDs'
              forw='Learn More' />
              <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Report-Merging.png' />

             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
            
              <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Flags.png' />
              <FeaturesDiv title='Flags' desc='Do you split your testing between your frontend and backend? Maybe collect coverage by project in a monorepository? You can isolate coverage information based on groupings using Codecov Flags.'
              forw='Learn More' />

             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
             
             <FeaturesDiv 
              title='YAML'
              desc='Customize Codecov’s behavior with a developer friendly YAML file that can conform to even the most complex codebases and workflows.'
              forw='Learn More'
             />
             <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/YAML.png' />
             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
            <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Carryforward-flags.png' />
            <FeaturesDiv 
              title='Carryforward Flags'
              desc='Don’t run your entire test suite on every commit? Use Carryforward Flags to get consistent coverage metrics, even when you don’t upload all coverage reports.'
              forw='Learn More'
            />

             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
            <FeaturesDiv 
              title='GitHub Checks'
              desc='Want to see uncovered lines directly on a GitHub pull request? Our GitHub Checks feature shows you line-by-line coverage so you can stay in your workflow.'
              forw='Learn More'
            />
             <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Checks-passed.png' />


             </Flex>
             <Flex w='70%' m='auto' gap='130px' justify='space-between' mb='150px' alignItems='center'>
             <FeaturesImage img='https://about.codecov.io/wp-content/uploads/2020/10/Notifications.png' />
            <FeaturesDiv 
              title='Notifications'
              desc='Get notified of coverage changes on Slack, Gitter, or any other IRC-compatible service.'
              forw='Learn More'
            />

             </Flex>

              <FooterLoginDiv />

         </Box>
}

export default Features;