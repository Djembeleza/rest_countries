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
          <li><b>Population:</b> {population.toLocaleString()}</li>
          <li><b>Region:</b> {region}</li>
          <li><b>Capital:</b> {capital}</li>
        </ul>
      </div>
    </div>
  );
};
export default Country;
