"use client";

export default function AdminLogin() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-[#111111] border border-yellow-600/20 p-8">
        <h1 className="text-2xl font-bold text-white mb-2">DJ Bunduki Admin</h1>
        <p className="text-gray-400 mb-6">Secure dashboard access</p>

        <form className="space-y-4">
          <input className="w-full rounded-lg bg-black border border-gray-700 p-3 text-white" placeholder="Email" />
          <input className="w-full rounded-lg bg-black border border-gray-700 p-3 text-white" placeholder="Password" type="password" />
          <button className="w-full rounded-lg bg-[#D4AF37] text-black font-semibold p-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
