import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import "./App.css";
import Counts from "./Components/Counts";
import Users from "./Components/Users";
import SearchComponent from "./Components/SearchComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const [user, setUser] = useState({ name: "Sami", city: "Lahore" });
  // const renderCount = useRef(0); // Stores the number of re-renders
  // const forwardref = useRef();

  // renderCount.current += 1;

  // // here is useMemo hook to memoize value re-creation.....
  // const calculateCount = () => {
  //   console.log("Function executed!");
  //   for (let i = 0; i < 10000000000; i++) {
  //     console.log("here is sami");
  //   }
  //   setCount(count + 1);
  //   return 5; // ✅ Must return a value
  // };

  // calculateCount();

  // // Function to call the childFunction from Counts component
  // const callChildFunction = () => {
  //   if (forwardref.current) {
  //     console.log("here is forwardRef.current", forwardref.current);
  //     forwardref.current.childFunction("Hello from Parent Component!");
  //   }
  // };
  // // Increment the render count on every render
  // useEffect(() => {
  //   alert(
  //     "render after component ... useEffect: component mount  " +
  //       renderCount.current
  //   );

  //   return () => {
  //     alert("here is component unmount");
  //   };
  // }, []);

  // return (
  //   <div>
  //     <h2>
  //       main: Here is user value: {JSON.stringify(user)}: here is also count:
  //       {count}
  //     </h2>
  //     <h2>Here is calculate count value: </h2>
  //     <p>Component re-rendered {renderCount.current} times</p>
  //     {/* <button onClick={() => setCount(count + 1)} className="button">
  //       Increment
  //     </button> */}
  //     {/* <button onClick={callChildFunction} className="button">
  //       CallChildFunction
  //     </button> */}
  //     <button
  //       onClick={() =>
  //         setUser((prevState) => ({
  //           ...prevState,
  //           city: "sargodha".split("").reverse().join(""),
  //         }))
  //       }
  //       className="button"
  //     >
  //       update User
  //     </button>
  //     <button
  //       onClick={() =>
  //         setUser((prevState) => ({
  //           ...prevState,
  //           phone: "03070052179",
  //         }))
  //       }
  //       className="button"
  //     >
  //       update User with new property
  //     </button>
  //     <button className="button">calculate Count</button>
  //     <Users users={user} />
  //     {/* <SearchComponent /> */}
  //     {/* <Counts ref={forwardref} /> */}
  //   </div>
  // );

  return (
    <div>
      <button>Fetchtodos</button>
    </div>
  );
}

export default App;
