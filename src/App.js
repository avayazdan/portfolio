import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './components/Nav';
import Home from './components/Home.js'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
         {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/dogs/:dogId" element={<Doggo />} />
            <Route path="/messages" element={<Messages />} />    */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
