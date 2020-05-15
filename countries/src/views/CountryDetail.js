import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './CountryDetail.css';
import { Loading } from '../components/Loading';
import { ThemeContext } from '../context/ThemeContext';
import { colors } from '../theme';

const CountryDetail = ({ match }) => {

    const [item, setItem] = useState({});
    const [searchURL, setURL] = useState(`https://restcountries.eu/rest/v2/alpha/${match.params.id}`);
    const [isLoading, setLoading] = useState(true);
    const [darkMode, setDarkMode] = useContext(ThemeContext);
    
    useEffect(() => {
        fetchItem();
    }, [searchURL]);

    const handleClick = (val) => {
        setURL(`https://restcountries.eu/rest/v2/alpha/${val}`);
    }

    const fetchItem = async () => {
        const response = await fetch(searchURL);
        const data = await response.json();
        setItem(data);
        setLoading(false);
    }

    return (
        <div className='detail-div' style={darkMode ? { backgroundColor: colors.dark, color: colors.light } : { backgroundColor: colors.light, color: colors.dark }}>
            <div className='btn-div'>
                <Link to='/'>
                    <button className='btn-back'>Back</button>
                </Link>
            </div>

            {isLoading ? <Loading /> : <div className="country-detail">
                <div className='country-img'>
                    <figure>
                        <img src={item.flag} alt={item.name} class='responsive-image' />
                    </figure>
                </div>

                <div className="text-div">

                    <h3>{item.name}</h3>
                    <div className='info-container'>
                        <ul className='basic-info'>
                            <li><b>Native Name:</b> {item.nativeName}</li>
                            <li><b>Population:</b> {item.population}</li>
                            <li><b>Region:</b> {item.region}</li>
                            <li><b>Sub Region:</b> {item.subregion}</li>
                            <li><b>Capital:</b> {item.capital}</li>
                        </ul>

                        <ul className='other-info'>
                            <li><b>Top Level Domain:</b><ul>{item.topLevelDomain ? item.topLevelDomain.map(i => {
                                return <li>{i}</li>
                            }) : <li>No Domain</li>}</ul></li>
                            <li><b>Currencies: </b> <ul>
                                {item.currencies ? item.currencies.map(i => {
                                    return <li>{i.name}</li>
                                }) : <li>No Currencies</li>}
                            </ul></li>
                            <li className='lang-block'><b>Languages:</b> <ul className='lang-list'>
                                {item.languages ? item.languages.map(lang => {
                                    return <li className='btn-lang'>{lang.name}</li>
                                }) : <li>No Languages</li>}
                            </ul></li>
                        </ul>

                        <p className='country-borders'><b>Border Countries:</b> <ul className='border-list'>{item.borders ? item.borders.map(b => {
                            return <Link to={`/${b.toLowerCase()}`}> <button className='btn-border' onClick={() => handleClick(b)}> {b}</button ></Link>
                        }) : <i>No Borders</i>}</ul></p>

                    </div>
                </div>

            </div>}

        </div >
    )
}

export default CountryDetail