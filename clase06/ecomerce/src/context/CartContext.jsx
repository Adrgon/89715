import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

const addItem = (product, quantity = 1) => {
  if (!product || quantity <= 0) {
    return;
  }

  setItems((prevItems) => {
    const existing = prevItems.find((item) => item.id === product.id);
    if (!existing) {
      return [...prevItems, { ...product, quantity }];
    }

    return prevItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
        : item,
    );
  });
};

    const removeItem = (productId) => {
        setItems( (prevItems) => prevItems.filter((item)=> item.id !== productId))
    }

    const clearCart = () => {
        setItems([]);
    }

    // explicar y usar useMemo para optimizar el cálculo de totalAmount y itemCount

    const itemCount = useMemo( () => items.reduce((total, item) => total + item.quantity, 0), [items])

    const totalAmount = useMemo( () => items.reduce((total, item) => total + item.price * item.quantity, 0), [items])


    const value = {
        items,
        addItem,
        removeItem,
        clearCart,
        itemCount,
        totalAmount
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider")
    }
    return context;
}
