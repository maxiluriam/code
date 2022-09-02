import { useState } from "react";
const Counter = (props) => {
  const person = props.person;
  const [count, setCount] = useState(person.number);

  return (
    <div className="blog-list">
      <h1>{person.name}</h1>
      <h1>{count}</h1>

      <button
        onClick={() => {
          setCount((count) => count - 5);
        }}
      >
        - 5
      </button>

      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        - 1
      </button>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        + 1
      </button>

      <button
        onClick={() => {
          setCount((count) => count + 5);
        }}
      >
        + 5
      </button>
    </div>
  );
};

export default Counter;
