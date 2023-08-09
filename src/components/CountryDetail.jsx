import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { MdArrowBack } from "react-icons/md";

function CountryDetail() {
  const params=useParams();
  const countryId=params?.countryId;
  const navigate=useNavigate()

  const[countryDetail,setCountryDetail]=useState([])

  useEffect(()=>{
    getCountyDetail();
  },[])

  async function getCountyDetail(){
    const res= await fetch("https://restcountries.com/v3.1/all")
    const json=await res.json()
    const countryData=json[countryId]
      console.log(countryData)
    setCountryDetail(countryData)
  }

  function backButton(){
    
    navigate("/")
  }
  
  return (
    <div id="country-detail">
      <div className="container">

      <div className="back-box">
              <div onClick={backButton}className="back"> <MdArrowBack/> Back</div>
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
                      Azərbaycan Respublikası
                      </div>

                      <div className="country-detail-desc-item">
                      <span>Currencies:</span>
                      {countryDetail?.currencies?.XAF?.name}
                      </div>

                      <div className="country-detail-desc-item">
                      <span>Languages:</span>
                      {countryDetail?.languages?.ara}
                      </div>

                    </div>

                </div>

                <div className="country-border-box">
                <span>Border Countries:</span> 
                {countryDetail?.borders?.map((item)=>{
                  return (<div className="border-country-item">
                  {item}
                </div>)
                })}
                </div>
          </div>
      </div>
      </div>
 
    </div>
  )
}

export default CountryDetail