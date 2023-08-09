import { FiSearch } from "react-icons/fi";

function Search({ setSearch }) {
  const style = {
    fontSize: "20px",
    color: "#666",
    position: "absolute",
    left: "10px",
    top: "15px",
  };

  return (
    <div className="search-box">
      {/* <form onSubmit={searchCountries}> */}
      <FiSearch style={style} />
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Search for a country..."
      />
      {/* </form> */}
    </div>
  );
}

export default Search;
