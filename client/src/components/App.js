import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Reboot from 'material-ui/Reboot';
import Header from './Header';
import Main from './Main';

const App = () => (
  <div >
    <Reboot />
    <Header />
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </div >);


export default App;
