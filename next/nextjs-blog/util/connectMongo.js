import mongoose from "mongoose";

export const connectMongo = async () =>
  mongoose.connect(
    "mongodb+srv://maxiluriam:Tigger77@cluster0.h3n66ef.mongodb.net/?retryWrites=true&w=majority"
  );

export default connectMongo;
