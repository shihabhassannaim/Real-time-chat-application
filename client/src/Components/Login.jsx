import React from "react";

function Login() {
  return (
    <div class="bg-gradient-to-r from-blue-500 to-teal-500 h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 class="text-4xl font-semibold mb-6 text-gray-800">Login</h1>
        <div class="mb-4">
          <label for="email" class="block text-gray-600 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-600 text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <button class="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Login
        </button>
        <p class="mt-4 text-gray-600">
          Don't have an account?
          <a href="#" class="underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
