import React, { createContext, useReducer } from "react";

export const ShoppingCartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "removeAll":
      return [];
    case "addItem": {
      const id = action.payload.id;
      const targetIndex = state.findIndex((obj) => obj.id == id);
      if (targetIndex !== -1) {
        const copy = [...state];
        copy[targetIndex] = {
          ...copy[targetIndex],
          quantity: copy[targetIndex].quantity + action.payload.quantity,
        };
        return copy;
      } else {
        return [...state, action.payload];
      }
    }
    case "removeItem": {
      const id = action.payload.id;
      const targetIndex = state.findIndex((obj) => obj.id == id);
      const copy = [...state];
      if (targetIndex !== -1) {
        if (copy[targetIndex].quantity - action.payload.quantity <= 0) {
          copy.splice(targetIndex, 1);
        } else {
          copy[targetIndex] = {
            ...copy[targetIndex],
            quantity: copy[targetIndex].quantity - action.payload.quantity,
          };
        }

        return copy;
      } else {
        return [...state, action.payload];
      }
    }
    default:
      throw new Error();
  }
}

// {
//     img:'',
//     cartName:'',
//     price:0,
//     quantity:0,
//     id:1
// }

export default function MyContext({ children }) {
  const [products, dispatch] = useReducer(reducer, []);
  return (
    <ShoppingCartContext.Provider value={{ products, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
