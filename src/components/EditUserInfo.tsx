import React, { useEffect, useState } from 'react';
import EditUserInfoProps from '../interfaces/EditUserInfoProps';
import { ReactComponent as FormClose } from '../assets/form-close.svg';
import User from '../interfaces/User';
import { validateDateOfBirth, validateEmail, validatePhone, validateRequiredFields } from '../utils/FormValidation';

const EditUserInfo: React.FC<EditUserInfoProps> = ({ selectedUser, onCloseEditUserInfo, setUserList }) => {
  const [name, setName] = useState(selectedUser?.name);
  const [dob, setDob] = useState(selectedUser?.dob);
  const [phone, setPhone] = useState(selectedUser?.phone);
  const [email, setEmail] = useState(selectedUser?.email);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      onCloseEditUserInfo();
    }
  }, [selectedUser]);

  const handleSaveUserInfo = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!selectedUser) {
      return;
    }
  
    const validatedName = name ?? '';
    const validatedDob = dob ?? '';
    const validatedPhone = phone ?? '';
    const validatedEmail = email ?? '';
  
    if (
      !validateRequiredFields(validatedName, validatedDob, validatedPhone, validatedEmail) ||
      !validateDateOfBirth(validatedDob) ||
      !validatePhone(validatedPhone) ||
      !validateEmail(validatedEmail)
    ) {
      return;
    }
  
    const updatedUser: User = {
      ...selectedUser,
      name: validatedName,
      dob: validatedDob,
      phone: validatedPhone,
      email: validatedEmail,
    };

    fetch(`http://localhost:3001/users/${selectedUser.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({...updatedUser,
        signature: selectedUser.signature}),
    })
      .then((response) => {
        if (response.ok) {
          setUserList((prevUserList: User[]) => {
            const updatedUserList = prevUserList.map((user: User) => {
              if (user.id === updatedUser.id) {
                return {...updatedUser,
                  signature: user.signature};
              }
              return user;
            });
            return updatedUserList as User[];
          });
          console.log('User updated successfully');
        } else {
          console.error('Error updating user:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };
  
  return (
    <div className="edit-user-info">
        <h3 className='edit-user-info-title'>Edit User Information</h3>
        <FormClose className='icons icon-big-x' onClick={onCloseEditUserInfo} />
        <br/>
        <div>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} required/>
            <label>Date of Birth</label>
            <input type='text' value={dob} onChange={(e) => setDob(e.target.value)} required/>
            <label>Phone</label>
            <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} required/>
            <label>Email</label>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <div className='signature-btns'>
                  <button className="add-signature-submit" onClick={handleSaveUserInfo} type="submit">Save</button>
                  <button className="cancel-signature" onClick={onCloseEditUserInfo}>Cancel</button>
            </div>
        </div>
    </div>
  );
};

export default EditUserInfo;
