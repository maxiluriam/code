import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

export default async function removeTest(req, res) {
  try {
    const { _id } = req.body;
    console.log(_id);
    console.log("wwwwwwwwwwwwwwwwww");
    await connectMongo();

    console.log("f nikola");

    const test = await Test.findByIdAndUpdate(req.body._id, req.body);

    console.log("f Werner");

    res.json({ test });
  } catch (er) {
    console.log(er);
    res.json({ er });
  }
}
