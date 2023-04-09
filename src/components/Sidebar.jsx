import { Flex  } from "@chakra-ui/react";
import Categories from "./Ctegories";
import PriceSlider from "./PriceSlider";
import SearhBar from "./SearchBar";




const Sidebar = () => {
    
    return (
          <Flex
          flexDirection="column"
          align="flex-start"
          float="left"
          mr="250px"
          >
          
          <SearhBar />
          <PriceSlider />
          <Categories />
          </Flex>
    );

};



export default Sidebar;