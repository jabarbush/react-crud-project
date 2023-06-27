import React from 'react';
import DeleteUserProps from '../interfaces/DeleteUserProps';
import { ReactComponent as FormClose } from '../assets/form-close.svg';

const DeleteUser: React.FC<DeleteUserProps> = ({ userList, selectedUser, onClose, onDeleteUser, setUserList }) => {

  const handleDeleteUser = () => {
    const userId = selectedUser?.id;
    if (userId) {
      fetch(`http://localhost:3001/users/${userId}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            const updatedUserList = userList.filter(user => user.id !== userId);
            setUserList(updatedUserList);
            onClose();
            onDeleteUser();
          } else {
            console.error('Failed to delete user.');
          }
        })
        .catch(error => {
          console.error('Error occurred while deleting user:', error);
        });
    }
  };

  return (
    <div className='delete-user-popup'>
        <h2 className="delete-user-title">Confirm Delete</h2>
        <FormClose onClick={onClose} className='icons icon-big-x' />
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
