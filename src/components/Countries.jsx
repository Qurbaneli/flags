import React, { useState, useEffect } from "react";
import { MainContext, useContext } from "../context/context";
import { NavLink } from "react-router-dom";
import axios from "axios";
//Components
import Country from "./Country";
import Search from "./Search";
import Filter from "./Filter";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const { darkMode } = useContext(MainContext);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    try {
      const res = await axios.get(`https://restcountries.com/v3.1/all`);
      setCountries(res.data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div id="countries" className={`${darkMode ? "active" : ""}`}>
      <div className="row">
        <div className="container">
          <Search setSearch={setSearch} />
          <Filter setFilter={setFilter} />
        </div>
      </div>

      <div className="container">
        {error && <h1>{error}</h1>}
        {countries
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.common.toLowerCase().includes(search.toLowerCase());
          })
          .filter((item) => {
            return filter.toLowerCase() === ""
              ? item
              : item.region.toLowerCase().includes(filter.toLowerCase());
          })
          .map((el, index) => {
            return (
              <NavLink key={index} to={`/detail/${el.name["common"]}`}>
                <Country
                  key={index}
                  name={el.name["common"]}
                  capital={el.capital}
                  region={el.region}
                  population={el.population}
                  img={el.flags["png"]}
                />
              </NavLink>
            );
          })}
      </div>
    </div>
  );
}

export default Countries;
