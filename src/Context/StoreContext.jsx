import { createContext, useState } from "react";

import { food_list } from "../assets/assets";
// import FoodItem from "../Components/FoodItem/FoodItem";

const StoreContext = createContext({
  foodList: [],
  CartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  setCartItems: () => {},
  deleteItemFromCart: () => {},
});

export function StoreContextProvider({ children }) {
  const [CartItems, setCartItems] = useState([]);

  console.log(CartItems);

  function addItemToCart(getId) {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === getId
      );
      const existingItem = prevItems[existingItemIndex];

      if (!existingItem) {
        const findItem = food_list.find((item) => item._id === getId);
        const { _id, name, price, image } = findItem;
        const updatedItem = {
          id: _id,
          name: name,
          price: price,
          quantity: 1,
          image: image,
        };
        const updatedItems = [...prevItems, updatedItem];
        return updatedItems;
      } else {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        return updatedItems;
      }
    });
  }

  function removeItemFromCart(getId) {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === getId
      );
      const existingItem = prevItems[existingItemIndex];

      if (existingItem.quantity === 1) {
        return prevItems.filter((item) => item.id !== getId);
      } else {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };

        return updatedItems;
      }
    });
  }

  function deleteItemFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const contextVal = {
    foodList: food_list,
    CartItems,
    addItemToCart,
    removeItemFromCart,
    setCartItems,
    deleteItemFromCart,
  };

  return (
    <StoreContext.Provider value={contextVal}>{children}</StoreContext.Provider>
  );
}

export default StoreContext;
