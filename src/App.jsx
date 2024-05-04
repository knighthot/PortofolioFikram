import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Maingate from './pages/Maingate';
import Loading from './pages/Loading';
import Portofolio from './pages/Portofolio';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Maingate />} />
        <Route path='/v1' element={<Loading />} />
        <Route path='/v1/portofolio' element={<Portofolio />} />
      </Routes>
    </Router>
  );
};

export default App;