import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import { app } from "./app";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }
  try {
    await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");
    console.log("Connected to DB");
  } catch (err) {
    console.error(err);
  }

  app.listen(2000, () => {
    console.log("Listening on port 2000 g");
  });
};

start();
