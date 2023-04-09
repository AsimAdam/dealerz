import { useState, useEffect } from "react";
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text, Image, Flex, Spacer } from "@chakra-ui/react";
import axios from "axios";



const PriceSlider = () => {

  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(response => {
        const minPrice = Math.min(...response.data.map(product => product.price));
        const maxPrice = Math.max(...response.data.map(product => product.price));
        setPriceRange([minPrice, maxPrice]);
      })
      .catch(error => {
        console.log(error);
          });
      }, []);

      return (
        <Box p={4}>
      
      <Slider
        aria-label="Price range slider"
        defaultValue={priceRange}
        min={priceRange[0]}
        max={priceRange[1]}
        onChange={values => setPriceRange(values)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
        </Slider>
    
      <Flex flexDirection="column" mt="30px">

       <Flex alignItems="center">
        <Text fontWeight="bold">Price</Text>
        <Spacer />
        <Image ml="80px" src="https://i.postimg.cc/htGRgXwj/Filter.png" alt="" />
        </Flex>

        
        <Flex alignItems="center" mt="30px">

        <Text>Range</Text>
        <Spacer />
        
        <Box ml="155px">${priceRange[0]}</Box>
        <Text ml="5px" mr="5px">to</Text>
        <Box>${priceRange[1]}</Box>
        </Flex>


      </Flex>
    </Box>
  );
}



export default PriceSlider;