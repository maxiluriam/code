import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getpass = async (email) => {
    console.log(email);
    const res = await fetch("/api/test/getserversideprops", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        email: `${email}`,
      }),
    });

    const data = await res.json();

    console.log(data);
    return data;
  };

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

    let test = await getpass(email);
    console.log(test.test.password);
    if (password === test.test.password) {
      console.log("www");
    }
  };

  return (
    <div>
      <h1>login in </h1>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={handleEmailChange} />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit"> login</button>
      </form>
    </div>
  );
};

export default Signin;
