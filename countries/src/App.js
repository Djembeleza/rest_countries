import React from 'react';
import Navigation from './components/Navigation';
import Home from './views/Home'
import CountryDetail from './views/CountryDetail'
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

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
