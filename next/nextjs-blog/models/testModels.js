import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  name: String,

  email: {
    type: String,

    reqiured: true,

    unique: true,
  },
});

const Test = models.Test || model("Test", testSchema);
export default Test;
