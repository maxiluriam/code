import connectMongo from "../../../util/connectMongo";
import Test from "../../../models/testModels";

export default async function getTest(req, res) {
  try {
    
    console.log("wwwwwwwwwwwwwwwwww");
    await connectMongo();

    console.log("f nikola");
   // console.log(req.body.id);

    const test = await Test.find({"_id" :req.body.id});

    console.log("f Werner");
    res.json({test});
  } catch (er) {
    console.log(er);
    res.json({ er });
  }
}
