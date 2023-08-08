import React,{useState,useEffect} from 'react'
import Country from "./Country"

function Countries() {

    const[countries,setCountries]=useState([])
    useEffect(()=>{
        getCountries()
    },[])
  
    async function getCountries(){
      const res= await fetch("https://restcountries.com/v3.1/all")
      const json=await res.json()
      setCountries(json)
      console.log(json)
    }

  return (
    <div id="countries">
    <div className="container">
        {countries.map((el)=>{
            return (<Country name={el.name['common']}
            capital={el.capital}
            region={el.region}
            population={el.population}
            img={el.flags['png']}
            />)
        }) }
       
      
    </div>
  </div>
  )
}

export default Countries