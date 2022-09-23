import { useState } from "react";
import connectMongo from "../util/connectMongo";
import Test from "../models/testModels";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = function (e) {
    e.preventDefault();
  };

  const getPass = async (email) => {
    try {
      console.log("connecting");
      await connectMongo();

      console.log("connceted");

      const tests = await Test.findOne({ email: email });

      console.log("fetched");
      console.log("F_Werner_/_F_Nikola");

      return {
        props: {
          tests: JSON.parse(JSON.stringify(tests.password)),
        },
      };
    } catch (er) {
      console.log(er);
      return {
        props: {
          notFound: true,
        },
      };
    }
  };

  function handleEmailChange(e) {
    setemail(e.target.value);
    console.log(e);
  }
  function handlePasswordChange(e) {
    setpassword(e.target.value);
  }

  return (
    <div>
      <h1>Sign in </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={handleEmailChange}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default Signin;
