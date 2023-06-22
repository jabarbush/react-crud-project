import React, { useState } from 'react';
import userData from '../db.json'
import User from '../interfaces/User';
import AddUserProps from '../interfaces/AddUserProps';

//btw, this adds a user to the userList array. it disappears on refresh.
//TODO: add db functionality. perhaps a postgres db?
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

      const handleAddUser = () => {
        const newUser: User = {
          id: Math.max(...userData.users.map((user) => user.id)) + 1, //get highest id in list and increment it by 1
          name,
          dob,
          phone,
          email,
          signature: null
        };
        onAddUser(newUser);
    }
    return (
        <div className="add-user-popup">
            <h1>Add New User</h1>
            <label>Name</label>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Date of Birth</label>
            <input type="text" placeholder="Date of Birth" value={dob} onChange={(e) => setDob(e.target.value)} />
            <label>Phone</label>
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label>Email</label>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleClosePopup}>Cancel</button>
            <button onClick={handleAddUser}>Add User</button>
        </div>
    )
};

export default AddUser;