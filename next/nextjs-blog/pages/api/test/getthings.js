import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

import bcrypt from "bcrypt";

export default async function removeTest(req, res) {
  try {
    const { _id } = req.body;
    console.log(_id);
    console.log("wwwwwwwwwwwwwwwwww");
    await connectMongo();

    console.log("f nikola");
    console.log(req.body.email, "ee");

    const test = await Test.findOne({ email: req.body.email });

    console.log("f Werner");

    const pass = await bcrypt.compare(req.body.password, test.password);

    if (pass) {
      res.json({ Boolean: "true", id: test.id });
    } else {
      res.json({ Boolean: "false" });
    }
  } catch (er) {
    console.log(er);
    res.json({ er });
  }
}
