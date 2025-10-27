"use client";

import { ReactNode } from "react";
import { UserProvider, useUser } from "../context/UserContext";
import VendorDashboard from "../components/VendorDashboard";
import Login from "../components/Login";
import { CartProvider } from "../context/CartContext";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const { user } = useUser();

  if (!user) return <Login />;

  return (
    <CartProvider>
      <VendorDashboard />
      <hr style={{ borderBottom: "2px solid goldenrod", }} />
      {children}
    </CartProvider>
  );
}
