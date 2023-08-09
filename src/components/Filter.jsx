import React from "react";

function Filter({ setFilter }) {
  return (
    <div className="filter-box">
      <select
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        name=""
        id=""
      >
        <option value="">Select</option>
        <option value="Africa">Africa</option>
        <option value="America">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
