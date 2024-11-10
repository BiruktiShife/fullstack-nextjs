import User from "@/model/user";
// import connect from "@/utils/db";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  const uri = process.env.MONGODB_URI;

  await mongoose.connect(uri);
  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return alert("user registered successfully");
  } catch (error) {
    return NextResponse(error, { status: 500 });
  }
};
