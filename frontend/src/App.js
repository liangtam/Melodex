import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import ArtistsPage from './pages/ArtistsPage';


// This is where we will be storing our links to the webpages :)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>

            <Route exact path="/" element={
              <HomePage/>
            }/>
            <Route exact path="/artists" element={
              <ArtistsPage/>
            }/>
            <Route exact path="/discography" />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
