import React from "react";
import "./Search.css";
import { InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";



const Search = ({ value, onChangeData }) => {
  return (

    <div>
    
     <InputGroup>
      <InputLeftElement
        pointerEvents="none"
       
      />
    
      <input
        className="search__input"
        type="text"
        placeholder="Search what you need"
        value={value}
        onChange={onChangeData}
      />
      <span className="search__icon"><SearchIcon color="gray.700" /></span>
      </InputGroup>
    </div>
    
  );
};

export default Search;
