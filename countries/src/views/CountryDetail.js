import React, { useState, useEffect } from 'react'

const CountryDetail = ({ match }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
    }, []);

    const fetchItem = async () => {
        const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`);
        const data = await response.json();
        console.log(data.languages);
        setItem(data);
    }

    return (
        <div className="country-card">
            <div className='country-img'>
                <figure>
                    <img src={item.flag} alt={item.name} class='responsive-image' />
                </figure>
            </div>

            <h3>{item.name}</h3>

            <ul className='basic-info'>
                <li>Native Name: {item.nativeName}</li>
                <li>Population: {item.population}</li>
                <li>Region: {item.region}</li>
                <li>Sub Region: {item.subregion}</li>
                <li>Capital: {item.capital}</li>
            </ul>

            <ul className='other-info'>
                <li>Top Level Domain:</li>
                <li>Currencies:</li>
                <li>Languages:</li>
            </ul>
        </div>
    )
}

export default CountryDetail