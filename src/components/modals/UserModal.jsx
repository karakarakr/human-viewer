import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import './UserModal.css';

function UserModal({ open, user, onClose }) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!user) return null;

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
<h2>{user.name.first} {user.name.last}</h2>
<img src={user.picture.large} alt="User" />
<ul>
    <li><strong>Gender:</strong> {user.gender}</li>
    <li><strong>Age:</strong> {user.dob.age}</li>
    <li><strong>Email:</strong> {user.email}</li>
    <li><strong>Phone:</strong> {user.phone}</li>
    <li><strong>Location:</strong> {user.location.city}, {user.location.country}</li>
    <li><strong>Username:</strong> {user.login.username}</li>
    <li><strong>Date of Birth:</strong> {new Date(user.dob.date).toLocaleDateString()}</li>
</ul>
<button className="modal-close-button" onClick={handleClose}>Close</button>
    </Modal>
  );
}

export default UserModal;
