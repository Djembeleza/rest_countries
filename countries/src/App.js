import React from 'react';
import Navigation from './components/Navigation';
import Home from './views/Home'
import CountryDetail from './views/CountryDetail'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSun, faMoon, faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSun, faMoon, faSearch)

const App = () => {
  return (
    <Router>
      <div className='page-wrapper'>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/:id' component={CountryDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
