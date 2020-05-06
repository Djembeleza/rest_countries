import React from 'react';
import './Form.css';

const Form = ({ query, handleChange, handleSelected, selected, handleInput }) => {
    return (
        <div className="form-container">
            <div className='search-container'>
                <input type='text' placeholder="Search for country..." value={query} onChange={handleChange} onKeyUp={handleInput} />
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
    )
}

export default Form;