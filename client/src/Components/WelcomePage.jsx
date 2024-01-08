import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    nav("/");
  }
  return (
    <div class="flex items-center justify-center">
      <div class="text-sky-500 text-justify">
        <h1 class="text-5xl font-semibold mb-6">Welcome to Chat Website</h1>
        <p class="text-lg mb-8">
          Connect with people and start chatting in real-time.
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
