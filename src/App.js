import React, { useState } from "react";
import ProductsList from "./components/ProductsList/ProductsList";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import "./App.css";

const App = () => {
  const [shoppingList, setShoppingList] = useState([]);

  const handleAddToShoppingList = (product) => {
    setShoppingList([...shoppingList, product]);
  };

  const handleRemoveFromShoppingList = (event, index) => {
    event.preventDefault(); // Zapobiega domyślnemu zachowaniu menu kontekstowego
    const newShoppingList = [...shoppingList];
    newShoppingList.splice(index, 1);
    setShoppingList(newShoppingList);
  };

  return (
    <div>
      <div>
        <ProductsList onAddToShoppingList={handleAddToShoppingList} />
      </div>
      <div>
        <ShoppingList
          shoppingList={shoppingList}
          onRemoveFromShoppingList={handleRemoveFromShoppingList}
        />
      </div>
    </div>
  );
};

export default App;
