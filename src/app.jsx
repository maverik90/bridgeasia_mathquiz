import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import MathWorkSheet from './pages/MathWorkSheet/MathWorkSheet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="container-fluid header-container">
        <div className="container">
          <Header></Header>
        </div>
      </div>
      <div className="container-fluid body-container">
        <div className="container">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mathworksheet" element={<MathWorkSheet />} />
            </Routes>
          </Router>
        </div>
      </div>

    </div>
   
  );
}

export default App;