import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import StickyFooter from './footer'; // Import the StickyFooter component
import AppBarNavigaton from './appbar'; // Import the appbar component


import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <Router>
      <div>
        <AppBarNavigaton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetail />} />
        </Routes>
        <StickyFooter />
      </div>
    </Router>
  );
}

export default App;
