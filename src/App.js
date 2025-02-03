import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="*" element={<h1>404 Error. This page doesnt exist!</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
