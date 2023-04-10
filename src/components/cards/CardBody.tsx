import React from "react";
import Card from "./Card";
import "./CardBody.css";
import { productType, CardProps } from "../../types";


interface CardBodyProps {
    
  products: productType[]; 
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  addedItems: number[];
  isAdded: boolean,
}


const CardBody = ({ products, addItem, removeItem, addedItems }: CardBodyProps & CardProps ) => {
  products.map((product) => (product.isAdded = true));
  return (
    <div className="card__body">
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardBody;
