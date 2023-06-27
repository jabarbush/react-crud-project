import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/ListUsers";
import AddUser from "./components/AddUser";
import User from "./interfaces/User";

//I'm only *slighly* self-conscious that this file has too much logic in it
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => setUserList(data))
      .catch(error => console.error(error));
  }, []);


  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleAddUser = (user: User) => {
    fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then(response => response.json())
    .then(data => {
      setUserList(prevList => [...prevList, data]);
      setIsPopupOpen(false);
    })
    .catch(error => console.error(error));
    setIsPopupOpen(false);
  };

  return (
    <div className="app">
      <h1 className="page-title">User Roster</h1>
      <div className="toolbar">
        <button onClick={handleOpenPopup} className="add-user-btn">Add New User</button>
      </div>
      <List userList={userList} setUserList={setUserList} />
      {isPopupOpen &&
        <div className="popup-overlay">
          <AddUser userList={userList} onClose={handleClosePopup} onAddUser={handleAddUser} />
        </div>
      }
    </div>
  );
}

export default App;
