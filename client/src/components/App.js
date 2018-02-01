import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Main from './Main';

const App = () => (
  <div >
    <NavBar />
    <div className="container">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>

  </div >);

export default App;
