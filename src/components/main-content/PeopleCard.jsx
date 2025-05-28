import React from 'react'
import { useState, useEffect } from 'react';
import './PeopleCard.css'

function PeopleCard({ user }) {
    const [isFriend, setIsFriend] = useState(false);

    useEffect(() => {
        const savedFriends = JSON.parse(
            localStorage.getItem('friends')
        ) || [];
        const exists = savedFriends.some(
            friend => friend.login.uuid === user.login.uuid
        );
        setIsFriend(exists);
    }, [user.login.uuid]);

    const handleAddFriend = () => {
        const savedFriends = JSON.parse(
            localStorage.getItem('friends')
        ) || [];

        if (!savedFriends.some(
                friend => friend.login.uuid === user.login.uuid
            )
        ) {
            savedFriends.push(user);
            localStorage.setItem(
                'friends', 
                JSON.stringify(savedFriends)
            );
            setIsFriend(true);
        }
    };

    return (
        <div className='people-card'>
            <div className='top-block'>
                <img 
                    src={user.picture.large} 
                    alt='Picture of a man'
                />
            </div>
            <div className='bottom-block'>
                <h5 className='human-name'>
                    {user.name.first} {user.name.last}
                </h5>
                <p className='human-info'>
                    Gender: {user.gender}<br/>
                    Age: {user.dob.age}
                </p>
                <button 
                    className='add-friend'
                    onClick={handleAddFriend}
                    disabled={isFriend}
                >
                    {isFriend ? 'Added' : 'Add friend'}
                </button>
            </div>
        </div>
    );
}

export default PeopleCard