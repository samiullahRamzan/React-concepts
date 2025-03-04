import { memo, useRef } from "react";

const Counts = ({ user }) => {
  const myref = useRef(0);

  return (
    <div>
      <h1>
        here is a count component:{myref.current++} and count prop from parent{" "}
      </h1>
      <h2>{user}</h2>
    </div>
  );
};

export default memo(Counts);
