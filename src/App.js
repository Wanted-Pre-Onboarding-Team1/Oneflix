import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './lib/styles/globalStyles';
import Routing from './router/route';
import { palette } from './lib/styles/palette';

function App() {
  return (
    <ThemeProvider theme={{ palette }}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
