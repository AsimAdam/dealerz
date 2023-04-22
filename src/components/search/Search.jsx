import React from "react";
import "./Search.css";
import { Input, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";



const Search = ({ value, onChangeData }) => {
  return (

    <div>
    
     <InputGroup>
      <Input
        w="573px" h="56px"
        borderColor=""
        placeholder="Search what you need"
        border="none"
        />
      <span className="search__icon"><SearchIcon color="gray.700" /></span>
      </InputGroup>
    </div>
    
  );
};

export default Search;
