import { useState } from "react";

const AddPersonForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createTest = async (name, email, password) => {
    const res = await fetch("/api/test/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
        videoList: ["https://www.youtube.com/embed/VBlFHuCzPgY"],
      }),
    });

    const data = await res.json();

    //   console.log(data);
    // return data;
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log(e.target[1].value);

    let name = e.target[0].value;
    let email = e.target[1].value;
    let password = e.target[2].value;

    if (name.length > 2) {
      createTest(name, email, password);
    }
  };

  function handleNameChange(e) {
    if (e.target.value.length < 10) {
      setName(e.target.value);
    } else {
      alert("maximum 10 chars");
    }
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h1> create account</h1>
      <form onSubmit={handleSubmit} className="signInDiv">
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={handleEmailChange}
        />
        <input
          type="text"
          value={password}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button className="FormButton" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddPersonForm;
