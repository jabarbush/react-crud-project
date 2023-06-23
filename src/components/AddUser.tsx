import React, { useState } from 'react';
import userData from '../db.json';
import User from '../interfaces/User';
import AddUserProps from '../interfaces/AddUserProps';

const AddUser: React.FC<AddUserProps> = ({ onClose, onAddUser }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleClosePopup = () => {
    setIsPopupVisible(false);
    onClose();
  };

  if (!isPopupVisible) {
    return null;
  }

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !dob || !phone || !email) {
      alert('Please fill in all required fields.');
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phone.match(phoneRegex)) {
      alert('Please enter a valid phone number.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      alert('Please enter a valid email address.');
      return;
    }

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!dob.match(dateRegex)) {
      alert('Please enter a valid date in the format MM/DD/YYYY.');
      return;
    }

    const newUser: User = {
      id: Math.max(...userData.users.map((user) => user.id)) + 1,
      name,
      dob,
      phone,
      email,
      signature: null
    };

    onAddUser(newUser);
  };

  return (
    <div className="add-user-popup">
      <form onSubmit={handleAddUser}>
        <h2 className="new-user-title">Add New User</h2>
        <label>Name</label>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Date of Birth</label>
        <input type="text" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} required />
        <label>Phone</label>
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <label>Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button className="cancel" onClick={handleClosePopup}>
          Cancel
        </button>
        <button className="add-user-submit" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
