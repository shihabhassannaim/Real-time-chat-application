const express = require("express");
const UserModel = require("../models/UserModel");
const generateToken = require("../Config/GenerateToken");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  const { name, password } = req.body;
  const user = await UserModel.findOne({ name });
  if (user && (await user.matchPassword(password))) {
    const response = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    };
    res.send("success");

    res.json(response);
  } else {
    throw new Error("Invalid UserName or Password");
  }
};

const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.send(400);
    throw new Error("All fields are required 2");
  }
  const userExist = await UserModel.findOne({ email });
  
  if (userExist) {
    throw new Error("User already exists");
  }
  const userNameExist = await UserModel.findOne({ name });
  if (userNameExist) {
    res.send(403);
    throw new Error("User name already exists");
  }

  const user = await UserModel.create({ name, email, password });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(403);
    throw new Error("registration failed");
  }
};
const fetchAllUsersController = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};
  const users = await UserModel.find(keyword).find({
    _id: { $ne: req.user._id },
  });
  res.send(users);
};

module.exports = { loginController, registerController };
