import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

  function App() {
    const[mode,setMode]=useState('dark');

    const toogleMode=()=>{
      if(mode==='dark')
        setMode('light');
      else
        setMode('dark');
    }
    return (
      <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} about="About us"/>
      <div className="container my-3">
      
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
          </Routes>

      </div>
      </Router>

      </>
    );
  }

  export default App;
