import React from 'react';
import Navigation from './components/Navigation';
import Home from './views/Home'
import CountryDetail from './views/CountryDetail'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider } from './context/ThemeContext'

library.add(fab, faSun, faMoon, faSearch)

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:id' component={CountryDetail} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
