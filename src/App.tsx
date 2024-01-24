import React from 'react';
import { Routes, Route } from "react-router-dom"
import Dashboard from './components/Dashboard';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard/> } />
       
      </Routes>
    </div>
  );
}

export default App;
