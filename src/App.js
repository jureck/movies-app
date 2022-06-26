import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import WatchList from './components/WatchList/index';
import SignUp from './components/SignUp/index';
import SignIn from './components/SignIn/index';
import ResetPassword from './components/ResetPassword/index';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './components/NotFound/index';
import ThemeContextProvider from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import MainPage from './components/MainPage';

function App() {

  return (
    <AuthProvider>
    <HashRouter>
      <ScrollToTop>
        <ThemeContextProvider>
          
            <GlobalStyle />
            <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/watch-list' component={WatchList} />
              <Route path='/sign-up' component={SignUp} />
              <Route path='/sign-in' component={SignIn} />
              <Route path='/reset-password' component={ResetPassword} />
              <Route component={NotFound} />
            </Switch>
          
        </ThemeContextProvider>
      </ScrollToTop>
    </HashRouter> 
    </AuthProvider>
  )
}

export default App;
