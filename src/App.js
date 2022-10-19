import React  from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
