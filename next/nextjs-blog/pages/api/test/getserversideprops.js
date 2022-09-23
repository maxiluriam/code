import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

export default async function removeTest(req, res) {
  try {
    const { _id } = req.body;
    console.log(_id);
    console.log("wwwwwwwwwwwwwwwwww");
    await connectMongo();

    console.log("f nikola");
    console.log(req.body.email);

    const test = await Test.findOne({ email: { $lte: req.body.email } });

    console.log("f Werner");

    console.log(test);
    res.json({ test });
  } catch (er) {
    console.log(er);
    res.json({ er });
  }
}
