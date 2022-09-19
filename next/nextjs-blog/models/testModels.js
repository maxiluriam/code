import mongoose from "mongoose";
import { model } from "mongoose";

const testSchema = new mongoose.Schema({
  name: String,

  email: {
    type: String,

    reqiured: true,

    unique: true,
  },
});

const Test = model.test || model("Test", testSchema);

export default Test;
