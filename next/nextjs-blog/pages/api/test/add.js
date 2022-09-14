import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

export default async function addTest(req, res) {
  const { name, email } = req.body;
  console.log("wwwwwwwwwwwwwwwwww");
  await connectMongo();

  console.log("f nikola");

  const test = await Test.create(req.body);

  console.log("f Werner");

  res.json({ test });
}
