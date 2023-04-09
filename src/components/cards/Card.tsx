import React, { useEffect } from "react";
import "./Card.css";
// import { AddRemoveBtn } from "../addremoveBtn/AddRemoveBtn";
import { useState } from "react";
import { productType, addItemType, CardProps } from "../../types";

const Card = (props: CardProps) => {
  const { product, addItem, removeItem, addedItems } = props;
  const [isAdded, setIsAdded] = useState(true);

  useEffect(() => {
    const item = addedItems.filter((addedItem) => addedItem.id === product.id);
    item.length === 0 ? setIsAdded(true) : setIsAdded(false);
  }, [product, addedItems]);

  return (
    <div className="card">
      <img className="card__img" src={product.image} alt="" />
      <div>
        <h2>{product.category}</h2>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      <div className="card-price-add">
        <span>Price : ${product.price}</span>
        <button
          className={isAdded ? "add-item-btn" : "remove-item-btn"}
          onClick={() => {
            isAdded ? addItem(product) : removeItem(product);
            setIsAdded(!isAdded);
          }}
        >
          {isAdded ? "Add " : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default Card;
