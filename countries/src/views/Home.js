import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import CountryList from '../components/CountryList';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState('');
    const [searchURL, setURL] = useState('https://restcountries.eu/rest/v2/all');


    useEffect(() => {
        getCountries();
    }, [searchURL]);

    const handleChange = (e) => {
        setQuery(e.target.value);
        setURL(`https://restcountries.eu/rest/v2/name/${query}`);
    }

    const handleInput = (e) => {
        e.preventDefault();
        if (e.keyCode === 13) {
            if (query === '') {
                console.log(query);
                return;
            }
            getCountries();

        }
    }

    const handleSelected = (e) => {
        setSelected(e.target.value);
        console.log(selected);
    }

    const getCountries = async () => {
        const resp = await fetch(searchURL);
        const data = await resp.json();
        setCountries(data);
    };
    return (
        <div className="container">
            <Form query={query} handleChange={handleChange} handleSelected={handleSelected} selected={selected}
                handleInput={handleInput}
            />
            <CountryList countries={countries} />
        </div>
    )
}


export default Home
