import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Main from './Main';

const App = () => (
    < MuiThemeProvider >
      <Header />
      <Main />
    </MuiThemeProvider >);


export default App;
