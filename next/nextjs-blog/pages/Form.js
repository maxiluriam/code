import { useState } from "react";

const AddPersonForm = () => {
  const [name, setname] = useState("");

  const createTest = async (name) => {
    const randomNum = Math.floor(Math.random() * 10000);

    const res = await fetch("/api/test/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        name: `${name}`,
        videoList: ["https://youtu.be/VBlFHuCzPgY"],
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

  function handleChange(e) {
    if (e.target.value.length < 10) {
      setname(e.target.value);
    } else {
      alert("maximum 10 chars");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>

      <input type="text" value={name} onChange={handleChange} />
    </form>
  );
};

export default AddPersonForm;
