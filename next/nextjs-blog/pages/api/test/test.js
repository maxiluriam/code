import bcrypt from "bcrypt";

import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

export default async function register(req, res) {
  try {
    console.log("www");
    await connectMongo();
    console.log("eee");

    const hashedPass = await bcrypt.hash(req.body.password, 10);

    const test = await Test.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      videoList: req.body.videoList,
    });

    res.json({ test });
  } catch (er) {
    console.log(er);
    res.json({ er });
  }
}
