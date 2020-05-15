import React, { useContext } from 'react';
import Country from './Country'
import { colors } from '../theme';
import { ThemeContext } from '../context/ThemeContext';

const CountryList = ({ countries }) => {
    const [darkMode, setDarkMode] = useContext(ThemeContext);
    return (
        <div className='countries-container' style={darkMode ? { backgroundColor: colors.dark, color: colors.light } : { backgroundColor: colors.light, color: colors.dark }}>
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