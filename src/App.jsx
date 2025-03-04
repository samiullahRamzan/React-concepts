import { useRef, useState, useEffect } from "react";
import "./App.css";
import Counts from "./Components/Counts";

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Sami", city: "Lahore" });
  const renderCount = useRef(0); // Stores the number of re-renders

  // Increment the render count on every render
  useEffect(() => {
    renderCount.current += 1;
    alert("render after component ... useEffect:  " + renderCount.current);
  });

  return (
    <div>
      <h2>Here is user value: {JSON.stringify(user)}</h2>
      <p>Component re-rendered {renderCount.current} times</p>
      {/* <button onClick={() => setCount(count + 1)} className="button">
        Increment
      </button> */}
      <button
        onClick={() =>
          setUser((prevState) => ({
            ...prevState,
            city: "sargodgha".split("").reverse().join(""),
          }))
        }
        className="button"
      >
        update User
      </button>
      {/* <Counts user={user} /> */}
    </div>
  );
}

export default App;
