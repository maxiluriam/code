import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

export default async function addTest(req, res) {
  try {
    const { name, videoList } = req.body;
    console.log("wwwwwwwwwwwwwwwwww");
    await connectMongo();

    console.log("f nikola");

    const test = await Test.create(req.body);

    console.log("f Werner");

    res.json({ test });
  } catch (er) {
    console.log(er);
    res.json({ er });
  }
}
