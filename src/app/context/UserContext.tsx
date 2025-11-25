"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { User } from "@/types/Types"


type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
  refreshUser: () => Promise<void>; // fetch full vendor info
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Fetch full user info from API
  const refreshUser = async () => {
    if (!user?.username || user.role === "admin") return;

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
