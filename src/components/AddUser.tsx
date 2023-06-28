import React, { useState } from 'react';
import User from '../interfaces/User';
import AddUserProps from '../interfaces/AddUserProps';
import { validateDateOfBirth, validateEmail, validatePhone, validateRequiredFields } from '../utils/FormValidation';

const AddUser: React.FC<AddUserProps> = ({ userList, onClose, onAddUser }) => {
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

    if (
      !validateRequiredFields(name, dob, phone, email) ||
      !validateDateOfBirth(dob) ||
      !validatePhone(phone) ||
      !validateEmail(email)
    ) {
      return;
    }

    let newId = Math.max(...userList.map((user) => user.id)) + 1;
    
    const newUser: User = {
      id: newId || 1,
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
        <button className="cancel" onClick={handleClosePopup}>Cancel</button>
        <button className="add-user-submit" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
