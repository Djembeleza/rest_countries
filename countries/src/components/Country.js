import React from 'react';
import { Link } from 'react-router-dom'

const Country = ({ title, population, region, capital, flag, id }) => {

  return (

    <div className='country-card'>
      <Link to={`/${id.toLowerCase()}`}>
        <img alt='Country Name' src={flag} className="responsive-image" />
      </Link>
      <div className='country-details'>
        <h3>{title}</h3>
        <ul>
          <li>Population: {population.toLocaleString()}</li>
          <li>Region: {region}</li>
          <li>Capital: {capital}</li>
        </ul>
      </div>
    </div>
  );
};
export default Country;
