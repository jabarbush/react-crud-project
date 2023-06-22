import React from 'react';
import User from '../interfaces/User';
import ListProps from '../interfaces/ListProps';

const List: React.FC<ListProps> = ({ userList }) => {
  return (
    <div className="list-container">
      {userList.map((user) => (
        <div className="card" key={user.id}>
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="dob">DOB: {user.dob}</div>
          </div>
          <div className={`signature-status ${user.signature ? 'green' : 'red'}`}>
            {user.signature ? 'Has Custom Signature' : 'Missing Custom Signature'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
