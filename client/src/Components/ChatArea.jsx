import React from "react";
import OthersMessage from "./OthersMessage";
import SelfMessage from "./SelfMessage";

function ChatArea() {
  return (
    <div className="w-9/12 flex flex-col">
      <div className="bg-gray-500">
        <div class="p-4 bg-gray-200 border-b border-gray-300 flex">
          <img
            src="user-avatar.jpg"
            alt="User Avatar"
            class="w-8 h-8 rounded-full mr-2"
          />
          <div class="flex flex-col flex-1">
            <p class="font-bold text-gray-800">John Doe</p>
            <p class="text-sm text-gray-600">Online</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-scroll">
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
        <SelfMessage />
        <OthersMessage />
      </div>
      <div class="flex items-center justify-between p-4 bg-gray-200">
        <input
          type="text"
          placeholder="Type your message..."
          class="flex-1 px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
        />
        <button class="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatArea;
