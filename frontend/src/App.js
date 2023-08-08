import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './pages/Registration';
import LogIn from './pages/LogIn';


// This is where we will be storing our links to the webpages :)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
    
            <Route exact path="/loginPage" element={
              <LogIn/>
            }/>

            <Route exact path="/SignupPage" element={
              <Registration/>
            }/>
            <Route exact path="/artists"/>
            <Route exact path="/discography" />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
