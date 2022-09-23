import { useState } from "react";

const AddPersonForm = () => {
<<<<<<< Updated upstream
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
=======
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
>>>>>>> Stashed changes

  const createTest = async (name, email, password) => {
    const randomNum = Math.floor(Math.random() * 10000);

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
<<<<<<< Updated upstream
    setemail(e.target.value);
  }

  function handlePasswordChange(e) {
    setpassword(e.target.value);
  }

  return (
    <div>
      <h1> create account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={handleNameChange}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={handleEmailChange}
        />
        <input
          type="text"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
=======
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <h1>sign in</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">sign in</button>
>>>>>>> Stashed changes
      </form>
    </div>
  );
};

export default AddPersonForm;
