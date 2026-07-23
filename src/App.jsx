import { useState } from 'react'
import {Route, Routes} from "react-router-dom";
import './App.css'
import Main from './pages/Main'
import Currencies from './pages/Currencies'
import Price from './pages/Price'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>
      </Routes>
    </div>
  )
}

export default App
