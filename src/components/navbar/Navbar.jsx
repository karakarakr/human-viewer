import React from 'react';
import SearchBar from './items/SearchBar';
import './Navbar.css';

function Navbar({ searchTerm, setSearchTerm }) {
    return (
        <nav className='navbar'>
            <button className='menu-btn'>
                <svg className="menu-icon" viewBox="0 0 40 30">
                    <line x1="5" y1="5" x2="35" y2="5" />
                    <line x1="5" y1="15" x2="35" y2="15" />
                    <line x1="5" y1="25" x2="35" y2="25" />
                </svg>
            </button>
            <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </nav>
    );
}

export default Navbar;