import { schema, model, models } from "mongoose"; // "1m (gzipped: 280.9k)"

const testSchema = new mongoose.schema({
  name: String,

  email: {
    type: String,

    reqiured: true,

    unique: true,
  },
});

const Test = model.test || model("Test", testSchema);

export default Test;
