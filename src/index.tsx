import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './theme/globalStyles'
import Theme from './theme/theme'

import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

