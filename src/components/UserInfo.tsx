import React from 'react';
import UserInfoProps from '../interfaces/UserInfoProps';

const UserInfo: React.FC<UserInfoProps> = ({ selectedUser, onCloseUserInfo }) => {
  return (
    <div className="info-tab">
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
            <button onClick={onCloseUserInfo}>Close</button>
        </div>
        <hr/>
        <div>
            Add a custom signature
        </div>
    </div>
  );
};

export default UserInfo;
