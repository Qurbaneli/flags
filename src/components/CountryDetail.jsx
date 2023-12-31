import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainContext, useContext } from "../context/context";
import { useParams, useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { API_URL } from "../api";

function CountryDetail() {
  const { darkMode } = useContext(MainContext);

  const params = useParams();
  const countryName = params?.countryName;
  const navigate = useNavigate();

  const [countryDetail, setCountryDetail] = useState([]);

  useEffect(() => {
    getCountyDetail();
  }, []);

  async function getCountyDetail() {
    try {
      const res = await axios.get(`${API_URL}/name/${countryName}`
      );
      const countryData = res.data[0];
      console.log(countryData);
      setCountryDetail(countryData);
    } catch (error) {
      // setError(error.message);
    }
  }

  function backButton() {
    navigate("/");
  }

  return (
    <div id="country-detail" className={`${darkMode ? "active" : ""}`}>
      <div className="container">
        <div className="back-box">
          <div onClick={backButton} className="back">
            {" "}
            <MdArrowBack /> Back
          </div>
        </div>

        <div className="country-detail-box">
          <div className="flag-img">
            <img src={countryDetail?.flags?.png} alt="" />
          </div>
          <div className="country-detail-desc-box">
            <h2>{countryDetail?.name?.common}</h2>
            <div className="country-detail-desc">
              <div className="left-desc">
                <div className="country-detail-desc-item">
                  <span>Native Name:</span>
                  {countryDetail?.name?.common}
                </div>
                <div className="country-detail-desc-item">
                  <span>Population:</span>
                  {countryDetail?.population}
                </div>
                <div className="country-detail-desc-item">
                  <span>Region:</span>
                  {countryDetail?.region}
                </div>
                <div className="country-detail-desc-item">
                  <span>Sub Region:</span>
                  {countryDetail?.subregion}
                </div>
                <div className="country-detail-desc-item">
                  <span>Capital:</span>
                  {countryDetail?.capital}
                </div>
              </div>

              <div className="right-desc">
                <div className="country-detail-desc-item">
                  <span>Top Level Domain:</span>
                  {countryDetail?.tld?.join(", ")}
                </div>

                <div className="country-detail-desc-item">
                  <span>Currencies:</span>
                  {Object.values(countryDetail?.currencies || {}).map(
                    (currency, index) => (
                      <span key={index}>{currency.name}</span>
                    )
                  )}
                </div>

                <div className="country-detail-desc-item">
                  <span>Languages:</span>
                  {Object.values(countryDetail?.languages || {}).map(
                    (language, index, languagesArray) => (
                      <span key={index}>
                        {language}{" "}
                        {index < languagesArray.length - 1 ? "," : ""}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="country-border-box">
              <span>Border Countries:</span>
              {countryDetail?.borders?.map((item, index) => {
                return (
                  <div key={index} className="border-country-item">
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
