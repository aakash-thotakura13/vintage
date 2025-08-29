"use client";

import { ReactNode } from "react";
import { useUser } from "../context/UserContext";
import VendorDashboard from "../components/VendorDashboard";
import Login from "../components/Login";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const { user } = useUser();

  if (!user) return <Login />;

  return (
    <div>
      <VendorDashboard />
      <main>
        {children}
      </main>
    </div>
  );
}
