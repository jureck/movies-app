import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { theme } from './themes/GlobalTheme';
import Home from './components/Home/index';
import WatchList from './components/WatchList/index';
import ScrollToTop from './components/ScrollToTop';
import { createGlobalStyle } from 'styled-components';
import NotFound from './components/NotFound/index';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${theme.colors.primary};
  }

  button, input {
    font-family: 'Roboto', sans-serif;
  }
`
export const basename = process.env.PUBLIC_URL;

function App() {
  return (
    
    <HashRouter basename={basename}>
      <ScrollToTop>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/watchlist' component={WatchList} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </HashRouter> 
  )
}

export default App;
