import { memo, useEffect, useRef } from "react";

const Users = ({ users }) => {
  const ref = useRef(0);

  ref.current += 1;
  useEffect(() => {
    alert("users child component re-rendered:" + ref.current);
  }, []);
  return (
    <div>
      <h3>
        here is a user child component component re-rendereding phase
        {ref.current} times: here is users : {JSON.stringify(users)}
      </h3>
    </div>
  );
};

export default memo(Users);
