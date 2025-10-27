"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type CartItem = {
  count: number;
  id: number;
  name: string;
  price: number;
  units: string;
  description: string;
  image: string;
};

type ProductWithCount = CartItem & { count: number };

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCountsMap: () => Record<number, ProductWithCount>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (item: CartItem) => {
    const index = cartItems.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const getCountsMap = () => {
    return cartItems.reduce((acc, item) => {
      if (acc[item.id]) {
        acc[item.id].count += 1;
      } else {
        acc[item.id] = { ...item, count: 1 };
      }
      return acc;
    }, {} as Record<number, ProductWithCount>);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCountsMap }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
