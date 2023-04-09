import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Link, Spacer } from "@chakra-ui/react";
 



const Categories = () => {
    return (
        <Box p={4}>

          <Text fontWeight="bold" mt="30px">Product Categories</Text>
          
            <Accordion>
              <AccordionItem>
                <h2>
                <AccordionButton
                    sx={{
                    fontSize: "16px", 
                    borderBottom: "none",
        
                  }}
                >
                    <Box as="span" flex='1' textAlign='left'>
                    Coat & Jackets
                    </Box>
                    <Spacer />
                    <AccordionIcon ml="20px"/>
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}
                   w="100px"
                   sx={{
                    padding: "16px", 
                    borderBottom: "none",
                  }}
                >
                 ####
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                <AccordionButton
                     sx={{
                        fontSize: "16px", 
                        borderBottom: "none",
                      }}
                >
                    <Box as="span" flex='1' textAlign='left'>
                     <Text> Dresses </Text>
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}
                      sx={{
                        padding: "16px",
                        borderBottom: "none",
                      }}
                
                >
                  ####
                </AccordionPanel>
            </AccordionItem>


    {/* start  */}   <AccordionItem>
                <h2>
                <AccordionButton
                     sx={{
                        fontSize: "16px", 
                        borderBottom: "none",
                      }}
                >
                    <Box as="span" flex='1' textAlign='left'>
                    Playsuit
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}
                      sx={{
                        padding: "16px",
                        borderBottom: "none",
                      }}
                
                >
                  <Link>Accessories</Link>
                </AccordionPanel>
                </AccordionItem>
  
            <AccordionItem>
  <h2>
                <AccordionButton
                     sx={{
                        fontSize: "16px", 
                        borderBottom: "none",
                      }}
                >
                    <Box as="span" flex='1' textAlign='left'>
                    Short
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}
                      sx={{
                        padding: "16px",
                        borderBottom: "none",
                      }}
                
                >
                  <Link>Accessories</Link>
                </AccordionPanel>
                </AccordionItem>


    {/* start  */}   <AccordionItem>
    <h2>
                <AccordionButton
                     sx={{
                        fontSize: "16px", 
                        borderBottom: "none",
                      }}
                >
                    <Box as="span" flex='1' textAlign='left'>
                    Bottoms
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel pb={4}
                      sx={{
                        padding: "16px",
                        borderBottom: "none",
                      }}
                
                >
                  <Link>Accessories</Link>
                </AccordionPanel>
                </AccordionItem>
 
         
            </Accordion>
        </Box>
      )
    }



export default Categories;