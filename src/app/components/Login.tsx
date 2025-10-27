"use client";
import { useState } from "react";
import Description from "./Description";

import { useUser } from "../context/UserContext";
import { useRouter } from "next/navigation";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch("/api/vendor/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.message || "Invalid credentials.");
        return;
      }

      // ✅ Login successful — store basic user first
      setUser(data.user);

      // ✅ Fetch full vendor info using username
      const fullRes = await fetch(`/api/vendor/${data.user.username}`);
      const fullData = await fullRes.json();

      if (fullRes.ok && fullData.success) {
        setUser(fullData.vendor);
      }

      router.push("/profile/orders");
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }
  };


  return (
    <section style={{ width: "25%", minWidth: "350px", margin: "2em auto", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", padding: "1em", borderRadius: "1em", }}>

      <p className="text-2xl pb-2 text-center">Login to Your Account</p>
      <Description title="Enter your details to access your Vendor dashboard." />

      <form onSubmit={handleSubmit}>

        <div style={{ display: "grid", margin: "1em 0em" }}>
          <label htmlFor="username">Username *</label>
          <input
            type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter City"
            style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em" }}
          />
        </div>

        <div style={{ display: "grid", margin: "1em 0em" }}>
          <label htmlFor="password">Password *</label>
          <input
            type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter State"
            style={{ border: "1px solid lightgrey", borderRadius: "0.5em", padding: "0.25em 0.5em", margin: "0.2em 0em" }}
          />
        </div>

        <button type="submit" className=" px-4 py-2 rounded-xl border-2 border-yellow-600 hover:bg-yellow-600 hover:cursor-pointer">Login</button>

      </form>

    </section>
  )
};