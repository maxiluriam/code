import { useState } from "react";

import Counter from "./Counter";

const Form = (props) => {
  const [people, setPeople] = useState(props.people);

  const [input, setInput] = useState("");

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

  function DeletePerson(id, people) {
    const NewPeople = people.filter((people) => people.id !== id);
    setPeople(NewPeople);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />

        <button className="add" type="submit">
          ADD
        </button>
      </form>

      <div className="container">
        {people.map((person) => (
          <div>
            <Counter person={person} />

            <button
              className="delete"
              onClick={() => {
                DeletePerson(person.id, people);
              }}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
