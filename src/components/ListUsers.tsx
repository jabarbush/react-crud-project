import React from 'react';
import userData from '../db.json'

const List = () => {
    const userList = userData.users;

    return (
        <div className="list-container">
            {userList.map(user => (
            <div key={user.id}  className="card">
                <div className='user-name'>{user.name}</div>
                <div className='dob'>DOB: {user.dob}</div>
            </div>
        ))}
        </div>
    )
};

export default List;