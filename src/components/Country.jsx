import React from "react";

function Country({ name, population, img, region, capital }) {
  return (
    <div className="country-item">
      <div className="country-img">
        <img src={img} alt="" />
      </div>
      <div className="country-detail">
        <h3 className="country-name">{name}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
      </div>
    </div>
  );
}

export default Country;
