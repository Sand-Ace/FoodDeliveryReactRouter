import { createContext, useState } from "react";

import { food_list } from "../assets/assets";

const StoreContext = createContext({
  foodList: [],
  CartItems: {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  setCartItems: () => {},
});

export function StoreContextProvider({ children }) {
  const [CartItems, setCartItems] = useState({});

  console.log(CartItems);

  function addItemToCart(getId) {
    setCartItems((prevItems) => {
      if (!prevItems[getId]) {
        // Use computed property name [getId]
        return { ...prevItems, [getId]: 1 };
      } else {
        // Increment the existing item count
        return { ...prevItems, [getId]: prevItems[getId] + 1 };
      }
    });
  }

  function removeItemFromCart(getId) {
    setCartItems((prevItems) => {
      if (prevItems[getId] > 1) {
        // Decrement the item count if it's greater than 1
        return { ...prevItems, [getId]: prevItems[getId] - 1 };
      } else {
        // If the count is 1, remove the item from the cart
        const updatedItems = { ...prevItems };
        delete updatedItems[getId];
        return updatedItems;
      }
    });
  }

  const contextVal = {
    foodList: food_list,
    CartItems,
    addItemToCart,
    removeItemFromCart,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextVal}>{children}</StoreContext.Provider>
  );
}

export default StoreContext;
