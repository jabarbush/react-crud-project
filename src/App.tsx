import React, { useState } from "react";
import "./App.css";
import List from "./components/ListUsers";
import AddUser from "./components/AddUser";
import User from "./interfaces/User";
import userData from './db.json';

//I'm only *slighly* self-conscious that this file has too much logic in it
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userList, setUserList] = useState<User[]>(userData.users);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddUser = (user: User) => {
    setUserList(prevList => [...prevList, user]);
    setIsPopupOpen(false);
  };

  return (
    <div className="app">
      <h1 className="page-title">User Roster</h1>
      <div className="toolbar">
        <button onClick={handleOpenPopup} className="add-user-btn">Add New User</button>
      </div>
      <List userList={userList} />
      {isPopupOpen &&
        <div className="popup-overlay">
          <AddUser onClose={handleClosePopup} onAddUser={handleAddUser} />
        </div>
      }
    </div>
  );
}

export default App;
