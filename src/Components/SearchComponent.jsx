import { useState, useEffect, useRef } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const myref = useRef(0);

  myref.current += 1;

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("Fetching results for:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced Search: {debouncedSearchTerm} </p>
      <p> Search: {searchTerm} </p>
      <p>component rendering : {myref.current} </p>
    </div>
  );
};

export default SearchComponent;
