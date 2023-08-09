import React from 'react'
import {Route,Routes} from "react-router-dom"
import './assets/style/App.css'
//Pages
import Home from './pages/Home'
import Detail from './pages/Detail'
import Error from './pages/Error'

function App() {

  return (
    <div className="app">
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="detail/:countryName" element={<Detail/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
    </div>
  )
}

export default App