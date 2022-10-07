import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from "./pages/index";
import About from './pages/aboutApp';
import Author from './pages/aboutAuthor';
import NotFound from './pages/notFound/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/author' element={<Author/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;