import React from 'react';
import './App.css';
import Home from './pages/home';

function App() {

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

//old way (react router dom)
  // eslint-disable-next-line no-lone-blocks
  {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes> */}