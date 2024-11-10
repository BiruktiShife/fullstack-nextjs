import mongoose from "mongoose";
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    return new Error("connection faild");
  }
};

export default connect;
