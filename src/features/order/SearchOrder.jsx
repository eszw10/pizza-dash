import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 rounded-full text-sm w-28 sm:w-64 focus:outline-none focus:ring 
        focus:ring-yellow-500 bg-yellow-100 sm:focus:w-72 transition-all duration-300 focus:ring-opacity-50"
      />
    </form>
  );
}

export default SearchOrder;
