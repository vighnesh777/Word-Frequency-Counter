import React from 'react';
import './SearchBox.css';


const SearchBox = ({onInputChange}) =>
{
    return (
        <div className="search-container">
            <input onChange={(event) => onInputChange(event.target.value)} 
            placeholder="Type something here" 
            className="search-input"
            type="number"
            />
        </div>
    );
};

export default SearchBox;