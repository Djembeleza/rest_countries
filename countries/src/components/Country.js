import React from 'react';
import { Link } from 'react-router-dom'

const Country = ({ title, population, region, capital, flag, id, match }) => {

  return (
    <Link to={`/${id.toLowerCase()}`}>
      <div className='country-card'>

        <img alt='Country Name' src={flag} className="responsive-image" />

        <div className='country-details'>
          <h3>{title}</h3>
          <ul>
            <li>Population: {population.toLocaleString()}</li>
            <li>Region: {region}</li>
            <li>Capital: {capital}</li>
          </ul>
        </div>
      </div>
    </Link>
  );
};
export default Country;
