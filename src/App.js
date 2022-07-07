import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { palette } from 'lib/styles/palette';
import GlobalStyles from 'lib/styles/globalStyles';
import Routing from 'router/route';

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
