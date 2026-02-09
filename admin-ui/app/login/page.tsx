"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 🔥 REQUIRED FOR COOKIES
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      alert("Login failed");
      return;
    }

    // ❌ DO NOT read token
    // ❌ DO NOT set document.cookie

    router.push("/dashboard");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>

        <input
          className="w-full border p-2 mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
