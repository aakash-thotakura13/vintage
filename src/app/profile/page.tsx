"use client";

import { useUser } from "../context/UserContext";
import Login from "../components/Login";


export default function ProfilePage() {

  const { user } = useUser();

  if (!user) return <Login />;

  return (
    <div>
      {/* <h2>Welcome to your profile dashboard!</h2> */}
    </div>
  );

}