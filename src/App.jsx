import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Advanced from './Components/Cards/Avanced'
import Home from './Components/Cards/Home'
import VidComponent from './Components/Cards/VidComponent'
import Ask from './Components/Cards/Ask'
import SaidYes from './Components/Cards/SaidYes'
import useSound from 'use-sound'
import titanic from './assets/titanicmusic.mp3'

function App () {
  const [play] = useSound(titanic);

  useEffect(() => {
    play();
  },[]);

  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="love" element={<Advanced />} /> 
        <Route path="nopage" element={<VidComponent />} /> 
        <Route path="ask" element={<Ask />} />
        <Route path="yespage" element={<SaidYes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
