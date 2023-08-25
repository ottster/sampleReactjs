// need to set up the routing for your application using the react-router-dom library.  Using the BrowserRouter component from react-router-dom to set up client-side routing.

import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:username" element={<UserDetail />} />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;