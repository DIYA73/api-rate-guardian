"use client";

export default function DashboardPage() {
  async function logout() {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    // redirect after cookie cleared
    window.location.href = "/login";
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
