import React from "react";

function OthersMessage() {
  return (
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <img
          src="user-avatar.jpg"
          alt="User Avatar"
          class="w-6 h-6 rounded-full"
        />
      </div>
      <div class="ml-3">
        <div class="bg-blue-500 text-white p-3 rounded-md">
          <p>Hello! How can I help you?</p>
        </div>
      </div>
    </div>
  );
}

export default OthersMessage;
