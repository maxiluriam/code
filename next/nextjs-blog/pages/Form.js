import { useState } from "react";

const AddPersonForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const createTest = async (name) => {
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

    let name = e.target[1].value;

    if (name.length > 2) {
      createTest(name);
    }
  };

  function handleNameChange(e) {
    if (e.target.value.length < 10) {
      setname(e.target.value);
    } else {
      alert("maximum 10 chars");
    }
  }
  function handleEmailChange(e) {
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
      </form>
    </div>
  );
};

export default AddPersonForm;
