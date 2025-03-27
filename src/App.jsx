import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './comp/Navbar';
import Lang from './comp/Lang';  
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import Profile from './comp/Profile'; 
import Language from './comp/Language';
import EnglishLesson from './comp/EnglishLesson';
import English from './comp/English';
import Chinese from './comp/Chinese';
import Japanese from './comp/Japanese';
import French from './comp/French';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Lang/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Language" element={<Language/>}/>
          <Route path="/Eng" element={<EnglishLesson/>}/>
          <Route path="/English" element={<English/>}/>
          <Route path="/Chinese" element={<Chinese/>}/>
          <Route path="/Japanese" element={<Japanese/>}/>
          <Route path="/French" element={<French/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App