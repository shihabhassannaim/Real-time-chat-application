import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [laoading, setLaoading] = useState(false);

  const [loginStatus, setLoginStatus] = React.useState("");
  const [signInStatus, setSignInStatus] = React.useState("");

  const navigate = useNavigate();
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const loginHandler = async (e) => {
    setLaoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post("http://localhost:5000/user/login/", {
        data,
        config,
      });
      console.log("login :", response);
      setLoginStatus({ msg: "Success", key: Math.random() });
      setLaoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      setLoginStatus({
        msg: "invalid UserName Or Password",
        key: Math.random(),
      });
    }
    setLaoading(false);
  };
  const registerHandler = async () => {
    setLaoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        "http://localhost:5000/user/register/",
        {
          data,
          config,
        }
      );
      console.log(response);
      setSignInStatus({ msg: "Success", key: Math.random() });
      setLaoading(false);
      localStorage.setItem("userData", JSON.stringify(response));
      navigate("/app/welcome");
    } catch (error) {
      console.log(error);
      setLaoading(false);
    }
  };
  return (
    <div class="bg-gradient-to-r from-blue-500 to-teal-500 h-screen flex items-center justify-center">
      {showLogin && (
        <div class="bg-white p-8 rounded-lg shadow-md w-96 text-center">
          <h1 class="text-4xl font-semibold mb-6 text-gray-800">Login</h1>
          <div class="mb-4">
            <label for="email" class="block text-gray-600 text-sm mb-2">
              Name
            </label>
            <input
              onChange={changeHandler}
              type="name"
              id="name"
              name="name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block text-gray-600 text-sm mb-2">
              Password
            </label>
            <input
              onChange={changeHandler}
              type="password"
              id="password"
              name="password"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            class="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={loginHandler}
          >
            Login
          </button>
          <p class="mt-4 text-gray-600">
            Don't have an account?
            <button class="underline" onClick={() => setShowLogin(false)}>
              Register Here
            </button>
          </p>
        </div>
      )}
      {console.log(showLogin)}
      {!showLogin && (
        <>
          <div class="bg-white p-8 rounded-lg shadow-md w-96 text-center">
            <h1 class="text-4xl font-semibold mb-6 text-gray-800">
              Registration
            </h1>
            <div class="mb-4">
              <label for="name" class="block text-gray-600 text-sm mb-2">
                Name
              </label>
              <input
                onChange={changeHandler}
                type="name"
                id="name"
                name="name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-600 text-sm mb-2">
                Email
              </label>
              <input
                onChange={changeHandler}
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
                onChange={changeHandler}
                type="password"
                id="password"
                name="password"
                class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              class="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              onClick={registerHandler}
            >
              Sign Up
            </button>
            <p class="mt-4 text-gray-600">
              Have an account?
              <a href="#" class="underline" onClick={() => setShowLogin(true)}>
                Login Here
              </a>
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
