const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema(
  {
    chatName: {
      String,
    },
    isGroupChat: boolean,
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    lastestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamp: true,
  }
);

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
