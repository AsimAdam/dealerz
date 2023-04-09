import { Flex, Image } from "@chakra-ui/react";



const Icons = () => {
   
    return ( 
    
      <Flex gap={50}>
        
        <a href="#">
        <Image src="https://i.postimg.cc/Ssg6MNqg/Vector-3.png" alt="" w={20} h={20} style={{float: "right"}} ml="20px" />
        </a>

        <a href="#">
        <Image src="https://i.postimg.cc/RFz3ZWYk/Group.png" alt="" w={20} h={20} style={{float: "right"}} />
        </a>

        <a href="#">
        <Image src="https://i.postimg.cc/k4JNGtrV/Vector-5.png" alt="" w={20} h={20} style={{float: "right"}} />
        </a>
    </Flex>
    );
};


export default Icons;