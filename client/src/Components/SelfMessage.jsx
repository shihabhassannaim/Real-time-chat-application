import React from "react";

function SelfMessage() {
  return (
    <div class="flex items-end justify-end">
      <div class="mr-3">
        <div class="bg-gray-300 p-3 rounded-md">
          <p>Hi there! I have a question about your services.</p>
        </div>
      </div>
      <div class="flex-shrink-0">
        <img
          src="receiver-avatar.jpg"
          alt="Receiver Avatar"
          class="w-6 h-6 rounded-full"
        />
      </div>
    </div>
  );
}

export default SelfMessage;
