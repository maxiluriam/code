import { useState } from "react";

import Signin from "./signin";

import AddVideo from "./addVideo";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState("");

  if (typeof window !== "undefined") {
    Storage.prototype.setObj = function (key, obj) {
      return this.setItem(key, JSON.stringify(obj));
    };
  }

  const getpass = async (email, password) => {
    console.log(email);
    const res = await fetch("/api/test/getthings", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      }),
    });

    const data = await res.json();

    console.log(data);
    return data;
  };

  async function getUser(id) {
    const res = await fetch("/api/test/get", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        id: id,
      }),
    });

    const data = await res.json();
    console.log(res, "ee");

    return data;
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  const handleSubmit = async function (e) {
    e.preventDefault();

    let email = e.target[0].value;
    let password = e.target[1].value;

    let test = await getpass(email, password);

    if (test.Boolean === "true") {
      let user = await getUser(test.id);

      console.log("true");
      setUser(user);
      setLoggedin(true);
    }
  };

  if (loggedin === false) {
    return (
      <div>
        <Signin></Signin>

        <div>
          <form onSubmit={handleSubmit} className="signInDiv">
            <h1>login</h1>

            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <button type="submit" className="FormButton">
              login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loggedin === true) {
    return (
      <div>
        <AddVideo prop={user.test[0]}></AddVideo>
      </div>
    );
  }
};

export default login;
