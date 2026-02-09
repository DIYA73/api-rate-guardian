export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold">Users</h2>
          <p className="text-2xl mt-2">—</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold">API Requests</h2>
          <p className="text-2xl mt-2">—</p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-semibold">Rate Limits</h2>
          <p className="text-2xl mt-2">—</p>
        </div>
      </div>

      <a
        href="/redis"
        className="inline-block mt-8 text-blue-600 underline"
      >
        View Redis Stats →
      </a>
    </div>
  );
}
