"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function login() {
    setLoading(true);

    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "admin",
        password: "admin123",
      }),
    });

    const data = await res.json();
    localStorage.setItem("token", data.token);

    router.push("/dashboard");
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

      <button
        onClick={login}
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </main>
  );
}
