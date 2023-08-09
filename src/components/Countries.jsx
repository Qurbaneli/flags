import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
//Components
import Country from "./Country"
import Search from './Search'
import Filter from './Filter'


function Countries() {

    const[countries,setCountries]=useState([])
    useEffect(()=>{
        getCountries()
    },[])
  
    async function getCountries(){
      const res= await fetch("https://restcountries.com/v3.1/all")
      const json=await res.json()
      setCountries(json)
    }

    const [search, setSearch] = useState("");

  return (
    <div id="countries">

              <div className="row">
          <div className="container">
            <Search setSearch={setSearch}/>
            <Filter/>
          </div>
        </div>

    <div className="container">
        {countries.filter((item)=>{
          return search.toLowerCase()=== ''
          ? item
          : item.name.common.toLowerCase().includes(search.toLowerCase())
        })
        .map((el,index)=>{
            return (<NavLink to={`/detail/${index}`}><Country key={index} name={el.name['common']}
            capital={el.capital}
            region={el.region}
            population={el.population}
            img={el.flags['png']}
            /></NavLink>)
        }) }
       
      
    </div>
  </div>
  )
}

export default Countries