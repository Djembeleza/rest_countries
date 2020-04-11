import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  /* const [query, setQuery] = useState('');*/

  useEffect(() => {
    getCountries();
  });

  const getCountries = async () => {
    const resp = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await resp.json();
    setCountries(data);
  };

  return (
    <div className='page-wrapper'>
      <Navigation />
      <div className='country-container'>
        {countries.map((c) => (
          <Country
            title={c.name}
            population={c.population}
            region={c.region}
            capital={c.capital}
            flag={c.flag}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
