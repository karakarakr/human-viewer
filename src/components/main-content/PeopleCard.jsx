import React from 'react'
import { useState, useEffect } from 'react';
import './PeopleCard.css'
import UserModal from '../modals/UserModal';

function PeopleCard({ user }) {
    const [isFriend, setIsFriend] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
  
    useEffect(() => {
      const savedFriends = JSON.parse(localStorage.getItem('friends')) || [];
      const exists = savedFriends.some(friend => friend.login.uuid === user.login.uuid);
      setIsFriend(exists);
    }, [user.login.uuid]);
  
    const handleAddFriend = (e) => {
      e.stopPropagation();
      const savedFriends = JSON.parse(localStorage.getItem('friends')) || [];
  
      if (!savedFriends.some(friend => friend.login.uuid === user.login.uuid)) {
        savedFriends.push(user);
        localStorage.setItem('friends', JSON.stringify(savedFriends));
        setIsFriend(true);
      }
    };
  
    return (
      <>
        <div className='people-card' onClick={() => setModalOpen(true)}>
          <div className='top-block'>
            <img src={user.picture.large} alt='Picture of a person' />
          </div>
          <div className='bottom-block'>
            <h5 className='human-name'>
              {user.name.first} {user.name.last}
            </h5>
            <p className='human-info'>
              Gender: {user.gender}<br />
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
  
        <UserModal
          open={modalOpen}
          user={user}
          onClose={() => setModalOpen(false)}
        />
      </>
    );
  }

export default PeopleCard