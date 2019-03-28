import React, { Component } from 'react';
import './App.css';
import InitialPage from "./components/pages/InitialPage";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    color: 'white'
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <InitialPage/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
