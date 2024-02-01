import React, { useState, useEffect } from "react";
import "./ProductsList.css";
import produkty from "../../common/consts/produkty";

const ProductsList = ({ onAddToShoppingList }) => {
  const [products, setProducts] = useState<
    {
      nazwa: string;
      kategoria: string;
      produktSpozywczy: boolean;
    }[]
  >([]);

  useEffect(() => {
    setProducts(produkty);
  }, []);

  return (
    <ul>
      {products.map((product, index) => (
        <li key={index} onClick={() => onAddToShoppingList(product)}>
          {product.nazwa}
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
