"use client";

import { useEffect, useState } from "react";

type RedisStats = {
  status: string;
  redis: {
    connected: boolean;
    memory: string;
    clients: string;
    uptime: string;
  };
};

export default function Dashboard() {
  const [data, setData] = useState<RedisStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/admin/redis/stats", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  function logout() {
    localStorage.removeItem("token");
    location.href = "/";
  }

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {loading && <p>Loading...</p>}

      {data && (
        <pre className="bg-black text-green-400 p-4 rounded mb-4">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}

      <button
        onClick={logout}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Logout
      </button>
    </main>
  );
}
