import React, { useState } from 'react';
import User from '../interfaces/User';
import ListProps from '../interfaces/ListProps';
import UserInfo from './UserInfo';
import { ReactComponent as PanelLeftClose } from '../assets/panel-left-close.svg';


const List: React.FC<ListProps> = ({ userList }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseUserInfo = () => {
    setSelectedUser(null);
  };

  const UserInfoActive = selectedUser !== null;

  return (
    <div>
      {UserInfoActive && (
        <UserInfo selectedUser={selectedUser} onCloseUserInfo={handleCloseUserInfo} />
      )}
      <div className={`list-container ${UserInfoActive ? 'active' : ''}`}>
        {userList.map((user) => (
          <div className="card" key={user.id}>
            <div>
              <div className="user-name">{user.name}</div>
              <div className="dob-card">DOB: {user.dob}</div>
            </div>
            <div className={`signature-status ${user.signature ? 'green' : 'red'}`}>
              {user.signature ? 'Has Custom Signature' : 'Missing Custom Signature'}
            </div>
            <PanelLeftClose onClick={() => handleUserClick(user)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
