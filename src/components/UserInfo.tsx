import React, { useState } from 'react';
import UserInfoProps from '../interfaces/UserInfoProps';
import { ReactComponent as Trash } from '../assets/trash.svg';
import { ReactComponent as Edit } from '../assets/edit.svg';
import { ReactComponent as FormClose } from '../assets/form-close.svg';
import DeleteUser from './DeleteUser';

const UserInfo: React.FC<UserInfoProps> = ({ userList, selectedUser, onCloseUserInfo }) => {
    const [showDeleteUser, setShowDeleteUser] = useState(false);

    const handleOpenDeleteUser = () => {
        setShowDeleteUser(true);
      };
    
      const handleCloseDeleteUser = () => {
        setShowDeleteUser(false);
      };

  return (
    <div className={`info-tab ${selectedUser ? 'active' : ''}`}>
        <div className='data'>
            <div className='user-name'>{selectedUser?.name}</div>
            <p className='user-info'>
                DOB:&nbsp;
                <div className='user-info-value'>
                    {selectedUser?.dob}
                </div>
            </p>
            <p className='user-info'>
                Phone:&nbsp;
                <div className='user-info-value'>
                    {selectedUser?.phone}
                </div>
            </p>
            <p className='user-info'>
                Email:&nbsp;
                <div className='user-info-value'>
                    {selectedUser?.email}
                </div>
            </p>
            <div className='icons'>
                <Trash className='icon' onClick={handleOpenDeleteUser} />
                <Edit className='icon'/>
                <FormClose onClick={onCloseUserInfo} className='icon' />
            </div>
        </div>
        <hr/>
        <div className='signature-form'>
            Add a custom signature
            <label>Signature PIN (6 Digits)</label>
            <br/>
            <input type="text" placeholder='Signature PIN'/>
            <br/>
            <label>Signature Font Style</label>
            <br/>
            <input type="text" placeholder='Select font...'/>
            <br/>
            <label>Signature Preview</label>
            <br/>
            <div className='signature-preview'>
            </div>
        </div>
        {showDeleteUser && 
        <DeleteUser userList={userList} selectedUser={selectedUser} onClose={handleCloseDeleteUser} onDeleteUser={onCloseUserInfo}/>}
    </div>
  );
};

export default UserInfo;
