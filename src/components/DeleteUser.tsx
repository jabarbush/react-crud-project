import React from 'react';
import DeleteUserProps from '../interfaces/DeleteUserProps';
import { ReactComponent as FormClose } from '../assets/form-close.svg';

const DeleteUser: React.FC<DeleteUserProps> = ({ userList, selectedUser, onClose, onDeleteUser }) => {

  const handleDeleteUser = () => {
    const indexToRemove = userList.findIndex(obj => obj.id === selectedUser?.id);
    if (indexToRemove !== -1) {
        userList.splice(indexToRemove, 1);
      }
    onClose();
    onDeleteUser();
  };

  return (
    <div className='delete-user-popup'>
        <h2 className="delete-user-title">Confirm Delete</h2>
        <FormClose onClick={onClose} className='icons icon' />
        <div className='delete-message'>Are you sure you want to delete?</div>
        <button className="cancel" onClick={onClose}>
          Cancel
        </button>
        <button className="add-user-submit" onClick={handleDeleteUser} >
          OK
        </button>
    </div>
  );
};

export default DeleteUser;
