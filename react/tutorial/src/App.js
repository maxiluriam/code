import { useState } from "react";
import Counter from "./Counter";

export default function App() {
  const people = [
    { name: "max", number: 0 },
    { name: "erin", number: 3 },
    { name: "adam", number: 3 },
  ];

  return (
    <div>
      <div className="container">
        {people.map((person) => (
          <Counter person={person} />
        ))}
      </div>
    </div>
  );
}
