import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Loading } from '../components/Loading';



const Home = () => {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState('');
    const [searchURL, setURL] = useState('https://restcountries.eu/rest/v2/all');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getCountries();
    }, [searchURL]);

    const handleChange = (e) => {
        setQuery(e.target.value);
        console.log(query);
        setURL(`https://restcountries.eu/rest/v2/name/${query}`);
    }

    const handleInput = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            if (query === '') {
                return;
            }
            getCountries();

        }
    }

    const handleSelected = (e) => {
        setSelected(e.target.value);
    }

    const getCountries = async () => {
        const resp = await fetch(searchURL);
        const data = await resp.json();
        setCountries(data);
        setLoading(false);
    };
    return (
        <div className="container">
            <div className="form-container">
                <div className='search-container'>
                    <FontAwesomeIcon icon='search' /><input type='text' placeholder="Search for country..." value={query} onChange={handleChange} onKeyUp={handleInput} />
                </div>


                <div className='select-container'>
                    <label for='continents'>Filter by Region</label>
                    <select multiple={false} onChange={handleSelected}
                        value={selected} id='continents' placeholder='Filter by Region'>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value='europe'>Europe</option>
                        <option value='oceania'>Oceania</option>
                    </select>
                </div>
            </div>

            {isLoading ? <Loading /> : <CountryList countries={countries} />}
        </div>
    )
}


export default Home
