import { Flex  } from "@chakra-ui/react";
import FeaturedProducts from "./cards/FeaturedProducts";
import Categories from "./Categories";
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
          <FeaturedProducts />
          </Flex>
    );

};



export default Sidebar;