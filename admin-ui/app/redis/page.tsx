"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RedisPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/admin/redis/stats", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading Redis stats…</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Redis Stats</h1>

      <pre className="bg-black text-green-400 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>

    
<Image
  src="/screenshots/login.png"
  alt="Login preview"
  width={400}
  height={250}
  className="mt-4 rounded border"
/>

    </div>
  );
}
