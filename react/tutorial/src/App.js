import { useState } from "react";
import "./App.css";

function App() {
  let [people, setPeople] = useState([["max", 0]]);

  let list = [];

  for (let i = 0; i < people.length; i++) {
    list.push(
      <div>
        <button
          onClick={() => {
            people[0][1] = people[0][1] + 1;
            setPeople(people);

            console.log(list);
          }}
        >
          +1
        </button>
        <p>{people[i][0]}</p>
        <p>{people[i][1]}</p>
      </div>
    );
  }

  let [i, seti] = useState(0);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            people[1] = people[1] + 1;
            setPeople(people);

            console.log(list);
          }}
        >
          +1
        </button>
        <p>{people[0]}</p>
        <p>{people[1]}</p>
      </div>

      <div className="App">
        <div>{list}</div>
      </div>
      <div>
        <h1>{i}</h1>
        <button
          onClick={() => {
            i = i + 1;
            seti(i);
          }}
        >
          {i}
        </button>
      </div>
    </div>
  );
}

export default App;
