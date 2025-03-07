import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const Counts = forwardRef((props, ref) => {
  const myref = useRef(0);

  const childFunction = (message) => {
    alert(message);
  };

  useImperativeHandle(ref, () => ({
    childFunction,
  }));

  myref.current += 1;
  useEffect(() => {
    alert("child count component re-rendered: " + myref.current);
  }, []);

  return (
    <div>
      <h3>
        count prop from child counts: and rendereding phase {myref.current}{" "}
        times
      </h3>
    </div>
  );
});

Counts.displayName = "Counts";
export default Counts;
