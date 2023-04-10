import './Banner.css';
import { Flex, Image } from '@chakra-ui/react';





const Banner = () => {

    return (
        
      <Flex 
        w="1490px" 
        h="512" 
        bg="white" 
        mb="50px" >


             <Image 
              src="https://i.postimg.cc/VL42PFW3/Ellipse-153.png" 
              alt="" 
              w="100" 
              h="100"
              ml={30}
              mt={50}
              mr={200}
              />

              <Image src="https://i.postimg.cc/QNcBXfCY/Ellipse-156.png" alt="" w="39" h="39"
              ml="350px"
              mt="50px"

              />

             <Flex flexDirection="column" justifyContent="center" gap={40}>
             <Image src="https://i.postimg.cc/d3D746sG/Home-Shopping-Your-Choice.png" alt="" w="493" h="100" 
              marginRight={200}
              mt={120}
              marginLeft={10}
              />


              <Image src="https://i.postimg.cc/MZrtxrQ2/lorem.png" alt="" w={500} h={40} mr={150}/>
           
              </Flex>

              <Image src="https://i.postimg.cc/J0DHG2JG/rot.png" alt="" w="59px" h="59px" 
              mt="20px"
              />

             </Flex>
           


  );

};


export default Banner;