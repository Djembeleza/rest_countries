import React from 'react';

const Country = ({ title, population, region, capital, flag }) => {
  return (
    <div className='country-card'>
      <img alt='Country Name' src={flag} />
      <div className='country-details'>
        <h3>{title}</h3>
        <ul>
          <li>Population: {population}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  );
};
export default Country;
