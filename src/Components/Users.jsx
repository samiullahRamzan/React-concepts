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
        here is a user child component component re-rendereding phase:
        {ref.current} times
      </h3>
      <h3>child: here is users : {JSON.stringify(users)}</h3>
    </div>
  );
};

export default memo(Users, (oldProps, newProps) => {
  const oldKeys = Object.keys(oldProps.users);
  const newKeys = Object.keys(newProps.users);

  // Debug log for keys
  console.log("Old keys:", oldKeys, "New keys:", newKeys);

  // First check if keys length is the same, if not, return false
  if (oldKeys.length !== newKeys.length) {
    return false;
  }

  // Then, compare the key-value pairs
  return oldKeys.every((key) => {
    return oldProps.users[key] === newProps.users[key];
  });
});
