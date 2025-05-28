import React from 'react';
import { useState, useEffect } from 'react';
import './PeopleList.css';
import PeopleCard from './PeopleCard';
import { filterAndSortUsers } from '../../utils/filterAndSort';

function PeopleList({ users, filters, sortType }) {
    const filteredUsers = filterAndSortUsers(users, filters, sortType);

    return (
        <div className='people-list'>
            {filteredUsers.map((user, index) => (
                <PeopleCard key={index} user={user} />
            ))}
        </div>
    );
}

export default PeopleList;