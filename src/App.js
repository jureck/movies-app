import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/index';
import GlobalStyle from './components/GlobalStyle';
import WatchList from './components/WatchList/index';
import SignUp from './components/SignUp/index';
import SignIn from './components/SignIn/index';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound/index';
import ThemeContextProvider from './context/ThemeContext';

export const basename = process.env.PUBLIC_URL;

function App() {

  return (
    <HashRouter basename={basename}>
      <ScrollToTop>
        <ThemeContextProvider>
          <GlobalStyle />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Watch list' component={WatchList} />
            <Route path='/Sign up' component={SignUp} />
            <Route path='/Sign in' component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </ThemeContextProvider>
      </ScrollToTop>
    </HashRouter> 
  )
}

export default App;
