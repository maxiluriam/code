import { useState } from "react";

import Form from "./Form";

export default function App() {
  const [people, setPeople] = useState([{ name: "max", number: 0, id: 1 }]);

  return (
    <div className="container">
      <Form people={people} />
    </div>
  );
}
