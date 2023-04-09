import './Banner.css';
import { Flex, Image } from '@chakra-ui/react';


const Banner = () => {

    return (
        <div className="container">
           
          <Flex
           gap={5}
           flexDirection="column"
           justifyContent="center"
           marginLeft="auto"
           marginBottom="10px"
          > 

             <Image src="https://i.postimg.cc/VL42PFW3/Ellipse-153.png" alt="" w="40px" ml="500px" mb="30px"/> 
             
             <Image src="https://i.postimg.cc/d3D746sG/Home-Shopping-Your-Choice.png" alt="" />
             
             <Image src="https://i.postimg.cc/MZrtxrQ2/lorem.png" alt="" />

             </Flex>
           

           <Flex
           flexDirection="column"
           justifyContent="left"
           >

           <Image src="https://i.postimg.cc/QNcBXfCY/Ellipse-156.png" alt=""  />
           
           <Image src="https://i.postimg.cc/VL42PFW3/Ellipse-153.png" alt=""  />
           <Image src="https://i.postimg.cc/VL42PFW3/Ellipse-153.png" alt=""  />
           
           <Image src="" alt=""  />

           </Flex>


            </div>
    );

};


export default Banner;