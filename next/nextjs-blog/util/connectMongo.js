import mongoose from "mongoose";
import bcrypt from "bcrypt";

export const connectMongo = async () =>
  mongoose.connect(`${process.env.MONGODB_URI}`);

export default connectMongo;
