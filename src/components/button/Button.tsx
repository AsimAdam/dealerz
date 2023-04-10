import React from "react";
import "./Button.css";
import { Image } from "@chakra-ui/react";



const Button = ({ num, click }) => {
  return (
    
    <button className="ui-change-btn" onClick={() => click(true)}>
      
      <Image src="https://i.postimg.cc/VvgJ7H2k/Vector.png" alt="" w={20} h={20} style={{float: "right"}} mt="5px" />
      <span>{num}</span>
    </button>
  );
};

export default Button;
