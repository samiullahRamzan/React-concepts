import { useRef, useState, useEffect } from "react";
import "./App.css";
import Counts from "./Components/Counts";
import Users from "./Components/Users";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "Sami", city: "Lahore" });
  const renderCount = useRef(0); // Stores the number of re-renders
  const forwardref = useRef();

  renderCount.current += 1;

  // Function to call the childFunction from Counts component
  const callChildFunction = () => {
    if (forwardref.current) {
      console.log("here is forwardRef.current", forwardref.current);
      forwardref.current.childFunction("Hello from Parent Component!");
    }
  };
  // Increment the render count on every render
  useEffect(() => {
    alert(
      "render after component ... useEffect: component mount  " +
        renderCount.current
    );

    return () => {
      alert("here is component unmount");
    };
  }, []);

  return (
    <div>
      <h2>
        Here is user value: {JSON.stringify(user)}: here is also count:{count}
      </h2>
      <p>Component re-rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)} className="button">
        Increment
      </button>
      <button onClick={callChildFunction} className="button">
        CallChildFunction
      </button>
      {/* <button
        onClick={() =>
          setUser((prevState) => ({
            ...prevState,
            city: "sargodha".split("").reverse().join(""),
          }))
        }
        className="button"
      >
        update User
      </button> */}
      {/* <Users users={user} /> */}
      <Counts ref={forwardref} />
    </div>
  );
}

export default App;
