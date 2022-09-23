import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  name: {
    type: String,

    reqiured: true,
    unique: false,
  },
  email: {
    type: String,

    reqiured: true,
    unique: true,
  },
  password: {
    type: String,

    reqiured: true,
    unique: false,
  },
  videoList: {
    type: Array,

    reqiured: true,
    unique: false,
  },
});

const Test = models.Test || model("Test", testSchema);
export default Test;
