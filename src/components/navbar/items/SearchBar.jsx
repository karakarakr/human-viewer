import React from 'react';
import './SearchBar.css'

function SearchBar({ value, onChange }) {
    return (
        <div className='search-bar'>
            <input
                className='search'
                type='text'
                placeholder='Search by name...'
                value={value}
                onChange={onChange}
            />
            <svg className="search-icon" viewBox="0 0 40 40">
                <circle cx="17" cy="17" r="10" />
                <line x1="24" y1="24" x2="35" y2="35" />
            </svg>
        </div>
    );
}

export default SearchBar;