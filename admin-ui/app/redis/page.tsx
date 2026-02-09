"use client";

import { useEffect, useState } from "react";

type RedisStats = {
  redis: {
    connected: boolean;
    memory: string;
    clients: number;
    uptime: string;
  };
};

export default function RedisPage() {
  const [data, setData] = useState<RedisStats | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/redis/stats`, {
      credentials: "include",
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="p-6">Loading…</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Redis Stats</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Stat title="Connected" value={data.redis.connected ? "Yes" : "No"} />
        <Stat title="Memory" value={data.redis.memory} />
        <Stat title="Clients" value={String(data.redis.clients)} />
        <Stat title="Uptime" value={data.redis.uptime} />
      </div>

      <pre className="bg-black text-green-400 p-4 rounded text-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white border rounded p-4 shadow">
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
