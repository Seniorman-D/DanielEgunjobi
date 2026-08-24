import React from 'react';

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="bg-gradient-to-br from-indigo-400 to-purple-500 p-10 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-center">MEDIA UPLOAD CLOUD</h1>
          <h2 className="text-4xl font-bold mt-10">Welcome Back!</h2>
          <p className="mt-5 text-lg">
            Upload, manage, and share your media files securely with lightning speed.
            Log in to access your personal cloud dashboard.
          </p>
        </div>

        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">User Login</h2>

          <input
            className="border rounded-xl p-4 mb-4"
            placeholder="Username or Email"
            type="text"
          />

          <input
            className="border rounded-xl p-4 mb-6"
            placeholder="Password"
            type="password"
          />

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl">
            Login Now
          </button>

          <button className="text-indigo-600 mt-5">
            Forgot Password?
          </button>

          <div className="flex items-center my-6">
            <div className="flex-1 border-t"></div>
            <span className="px-3 text-gray-400">OR</span>
            <div className="flex-1 border-t"></div>
          </div>

          <button className="border rounded-xl py-3 flex items-center justify-center gap-3">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
