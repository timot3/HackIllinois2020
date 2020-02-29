import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import jwtDecode from 'jwt-decode';

import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';
import Navbar from './components/Navbar';
import AuthRoute from './util/AuthRoute';
import locations from './pages/locations';

import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  }
});

const token = localStorage.FBIdToken;
let authenticated;

if(token) {
  const decodedToken = jwtDecode(token);

  if(decodedToken.exp * 1000 < Date.now()) {
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
        <Navbar/>
          <div className='container'>
            <Switch>
              <Route exact path="/" component={home}/>
              <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
              <AuthRoute exact path="/signup" component={signup} authenticated={authenticated}/>
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
