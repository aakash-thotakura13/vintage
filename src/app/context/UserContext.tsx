"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Vendor = {
  _id: string;
  username: string;
  businessName: string;
  emailAddress: string;
  contactPersonName?: string;
  businessAddress?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  businessType?: string;
  businessDescription?: string;
  orders?: string[];
  // any other fields in Vendor schema
};

type UserContextType = {
  user: Vendor | null;
  setUser: (user: Vendor) => void;
  refreshUser: () => Promise<void>; // fetch full vendor info
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Vendor | null>(null);

  // Fetch full user info from API
  const refreshUser = async () => {
    if (!user?.username) return;
    try {
      const res = await fetch(`/api/vendor/${user.username}`);
      const data = await res.json();
      if (data.success) {
        setUser(data.vendor);
      }
    } catch (error) {
      console.error("Failed to refresh user:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
