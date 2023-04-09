import './SearchBar.css';
import { InputGroup, InputLeftElement, Input} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';




const SearhBar = () => {
  
    return (
         
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
      />
      <Input
        className="search__input"
        type="text"
        placeholder="Search products"
        
      />

      <span className="search__icon"><SearchIcon color="gray.700" /></span>
      </InputGroup>
    );

};



export default SearhBar;