import React from "react";

import "./ShoppingList.css";

const ShoppingList = ({ shoppingList, onRemoveFromShoppingList }) => {
  return (
    <ul>
      {shoppingList.map((item, index) => (
        <li
          key={index}
          onContextMenu={(e) => onRemoveFromShoppingList(e, index)}
        >
          {item.nazwa}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
