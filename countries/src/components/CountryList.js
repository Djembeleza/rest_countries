import React from 'react';
import Country from './Country'

const CountryList = ({ countries }) => {
    return (
        <div className='countries-container'>
            {countries.map(c =>
                <Country title={c.name} population={c.population}
                    region={c.region} capital={c.capital}
                    flag={c.flag}
                    key={c.alpha3Code}
                    id={c.alpha3Code}
                />
            )}
        </div>
    )
}

export default CountryList