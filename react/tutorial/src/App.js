import { useState } from "react";

import Form from "./Form";

export default function App() {
  function handleSubmit(e) {
    e.preventDefault();
    if (people.length < 5) {
      const newPeople = [
        ...people,
        { name: input, number: 0, id: people.length + 1 },
      ];

      console.log(newPeople);
      setPeople(newPeople);
    } else {
      alert("too fing many");
    }
  }

  function handleChange(e) {
    if (e.target.value.length < 10) {
      setInput(e.target.value);
    } else {
      alert("maximum 10 chars");
    }
  }

  return (
    <div className="container">
      <Form people={people} />
    </div>
  );
}
