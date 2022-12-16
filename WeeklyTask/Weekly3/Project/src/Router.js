import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Donatur from "./pages/Donatur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/donatur' exact element={<Donatur/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;