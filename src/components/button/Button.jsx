import React from "react";
import "./Button.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Button = ({ num, click }) => {
  return (
    
    <button className="ui-change-btn" onClick={() => click(true)}>
      <ShoppingCartIcon />
      <span>{num}</span>
    </button>
  );
};

export default Button;
